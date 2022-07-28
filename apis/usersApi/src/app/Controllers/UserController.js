const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
class UserController {
    async getUsers(req, res) {
        try {
            await prisma.$connect()
            const allUsers = await prisma.user.findMany()
            return res.status(200).json({ allUsers })
        } catch (e) {
            return res.status(404).json(e)
        } finally {
            ;async () => {
                await prisma.$disconnect()
            }
        }
    }
    async postUser(req, res) {
        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/
            return re.test(email)
        }
        try {
            await prisma.$connect()
            const { name, email, password } = req.body
            if (
                name == '' ||
                email == '' ||
                password == '' ||
                validateEmail(email) === false
            ) {
                return res.status(406).json({ message: 'Invalid data' })
            } else {
                const emailAlreadyUsed = await prisma.user.findUnique({
                    where: { email: email },
                })
                if (emailAlreadyUsed) {
                    return res
                        .status(409)
                        .json({ message: 'Email is already used' })
                } else {
                    const createdUser = {
                        name: name,
                        email: email,
                        password: password,
                    }
                    await prisma.user.create({
                        data: {
                            name: name,
                            email: email,
                            password: password,
                        },
                    })
                    return res
                        .status(201)
                        .json({ message: 'User created', createdUser })
                }
            }
        } catch (e) {
            console.log(e)
            return res.status(500).json({ error: e })
        } finally {
            ;async () => {
                await prisma.$disconnect()
            }
        }
    }
    async editUser(req, res) {
        try {
            await prisma.$connect()
            const { name, password, email } = req.body
            if (name != '' && email != '' && password != '') {
                const userExists = await prisma.user.findUnique({
                    where: { email: email },
                })
                if (!userExists) {
                    return res.status(404).json({ message: 'User not exists' })
                } else {
                    const updatedUser = await prisma.user.update({
                        where: {
                            email: email,
                        },
                        data: {
                            name: name,
                            password: password,
                        },
                    })
                    return res
                        .status(200)
                        .json({ message: 'User updated', updatedUser })
                }
            }
            return res.status(406).json({ message: 'Invalid data' })
        } catch (e) {
            console.log(e)
            return res.status(500).json({ error: e })
        } finally {
            ;async () => {
                await prisma.$disconnect()
            }
        }
    }
    async deleteUser(req, res) {
        try {
            await prisma.$connect()
            const { email } = req.body
            if (email != '') {
                const userExists = await prisma.user.findUnique({
                    where: { email: email },
                })
                if (!userExists) {
                    return res.status(404).json({ message: 'User not exists' })
                } else {
                    const deletedUser = await prisma.user.delete({
                        where: {
                            email: email,
                        },
                    })

                    return res
                        .status(200)
                        .json({ message: 'User deleted', deletedUser })
                }
            }
            return res.status(406).json({ message: 'Invalid data' })
        } catch (e) {
            console.log(e)
            return res.status(500).json({ error: e })
        } finally {
            ;async () => {
                await prisma.$disconnect()
            }
        }
    }
    async loginUser(req, res) {
        try {
            await prisma.$connect()
            const { email, password } = req.body
            if (email != '' && password != '') {
                const user = await prisma.user.findUnique({
                    where: { email: email },
                })
                if (user.password === password) {
                    return res.status(202).json({ message: "Logado" })
                } else {
                    return res.status(401).json({ message: "Invalid password or email" })
                }
            }
            return res.status(406).json({ message: 'Invalid data' })
        } catch (e) {
            console.log(e)
            return res.status(500).json({ error: e })
        } finally {
            ;async () => {
                await prisma.$disconnect()
            }
        }
    }
}
module.exports = new UserController()

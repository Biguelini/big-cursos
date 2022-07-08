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
        try {
            const { name, email, password } = req.body
            if (name != '' && email != '' && password != '') {
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
            return res.status(404)
        } catch (e) {
            console.log(e)
            return res.status(500)
        }
    }
}
module.exports = new UserController()

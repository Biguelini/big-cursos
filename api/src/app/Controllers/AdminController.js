const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class AdminController {
    async getCourses(req, res) {
        try {
            await prisma.$connect()
            const allCourses = await prisma.courses.findMany()
            return res.status(200).json({ allCourses })
        } catch (e) {
            return res.status(404).json(e)
        } finally {
            ;async () => {
                await prisma.$disconnect()
            }
        }
    }
    async postCourse(req, res) {
        const { name, subtitle, instructor, content, description } = req.body
        console.log(name, subtitle, instructor, content, description)
        try {
            await prisma.$connect()
            const duplicatedCourse = await prisma.courses.findUnique({
                where: { name: name },
            })
            if (duplicatedCourse) {
                return res.status(409).json({ msg: 'Course already exists' })
            } else {
                const image = 'http://localhost:3030/files/' + req.file.filename
                console.log(image)
                const createdCourse = await prisma.courses.create({
                    data: {
                        name,
                        subtitle,
                        instructor,
                        content,
                        description,
                        videos: [],
                        image,
                    },
                })
                return res.status(200).json(createdCourse)
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
    async putCourse(req, res) {
        const { name, subtitle, instructor, content, description } = req.body
        console.log(name, subtitle, instructor, content, description)
        try {
            await prisma.$connect()
            const existCourse = await prisma.courses.findUnique({
                where: { name: name },
            })
            if (!existCourse) {
                return res.status(409).json({ msg: 'Course not exists' })
            } else {
                const updatedCourse = await prisma.courses.update({
                    where: { name: name },
                    data: {
                        name,
                        subtitle,
                        instructor,
                        content,
                        description,
                    },
                })
                return res.status(200).json(updatedCourse)
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
    async deleteCourse(req, res) {
        const name = req.params.name
        try {
            await prisma.$connect()
            const existCourse = await prisma.courses.findUnique({
                where: { name: name },
            })
            if (!existCourse) {
                return res.status(409).json({ msg: 'Course not exists' })
            } else {
                const deletedCourse = await prisma.courses.delete({
                    where: { name: name },
                })
                return res.status(200).json(deletedCourse)
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
}
module.exports = new AdminController()

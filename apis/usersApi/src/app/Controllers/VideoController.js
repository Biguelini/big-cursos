const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class VideoController {
    async postUpload(req, res) {
        const { id, name, video } = req.body
        try {
            await prisma.$connect()
            const existCourse = await prisma.courses.findUnique({
                where: { id: id },
            })
            if (!existCourse) {
                console.log('não deu')
                return res.status(404).json({ msg: 'Course not foud' })
            } else {
                return res.status(200).json(existCourse)
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
module.exports = new VideoController()

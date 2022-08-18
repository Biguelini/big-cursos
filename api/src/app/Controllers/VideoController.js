const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class VideoController {
    async postUpload(req, res) {
        const { id } = req.body
        try {
            await prisma.$connect()
            const existCourse = await prisma.courses.findUnique({
                where: { id: id },
            })
            if (!existCourse) {
                console.log('não deu')
                return res.status(404).json({ msg: 'Course not foud' })
            } else {
                const urlVideo = req.file.filename.split('.')[0]
                let videos = existCourse.videos
                console.log(videos)
                videos.push(urlVideo)
                const updatedCourse = await prisma.courses.update({
                    where: { id: id },
                    data: {
                        videos: videos,
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
    async getUniqueCourse(req,res) {
        const { id } = req.body
        try {
            await prisma.$connect()
            const course = await prisma.courses.findUnique({
                where: { id: id },
            })
            if (!course) {
                return res.status(404).json({ msg: 'Course not foud' })
            } else {
                return res.status(200).json(course)
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

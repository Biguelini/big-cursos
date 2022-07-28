const supertest = require('supertest')
const app = require('./app')

describe('Test the basic crud', () => {
    test('GET /users', async () => {
        await supertest(app)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200)
    })
    test('POST /users', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'john', email: 'teste@teste.com', password: 'john' })
            .expect('Content-Type', /json/)
            .expect(201)
    })
    test('PATCH /users', async () => {
        await supertest(app)
            .patch('/users')
            .send({
                name: 'João',
                email: 'teste@teste.com',
                password: 'teste123456',
            })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    test('PATCH /users with an inexistant email', async () => {
        await supertest(app)
            .patch('/users')
            .send({
                name: 'João',
                email: 'teste@testenaovaiexistir.com',
                password: 'teste123456',
            })
            .expect('Content-Type', /json/)
            .expect(404)
    })
    test('DELETE /users', async () => {
        await supertest(app)
            .delete('/users')
            .send({ email: 'teste@teste.com' })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    test('DELETE /users with an inexistant email', async () => {
        await supertest(app)
            .delete('/users')
            .send({ email: 'teste@testenaovaiexistir.com' })
            .expect('Content-Type', /json/)
            .expect(404)
    })
})

describe('Test all the cases of email', () => {
    test('POST /users with wrong email', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'john', email: 'teste@', password: 'john' })
            .expect(406)
    })
    test('POST /users with wrong email', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'john', email: 'teste', password: 'john' })
            .expect('Content-Type', /json/)
            .expect(406)
    })
    test('POST /users with wrong email', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'john', email: 'teste@teste', password: 'john' })
            .expect('Content-Type', /json/)
            .expect(406)
    })
    test('POST /users with wrong email', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'john', email: 'teste@teste.', password: 'john' })
            .expect('Content-Type', /json/)
            .expect(406)
    })
    test('POST /users with correct email', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'john', email: 'teste@teste.com', password: 'john' })
            .expect('Content-Type', /json/)
            .expect(201)
    })
    test('POST /users with duplicated email', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'arnaldo', email: 'teste@teste.com', password: '123sdfsdf' })
            .expect('Content-Type', /json/)
            .expect(409)
    })
})

describe('Try delete and create email', () => {
    test('DELETE /users', async () => {
        await supertest(app)
            .delete('/users')
            .send({ email: 'teste@teste.com' })
            .expect('Content-Type', /json/)
            .expect(200)
    })
    test('POST /users after delete a duplicated email', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'arnaldo', email: 'teste@teste.com', password: '123sdfsdf' })
            .expect('Content-Type', /json/)
            .expect(201)
    })
    test('DELETE /users for clean the db', async () => {
        await supertest(app)
            .delete('/users')
            .send({ email: 'teste@teste.com' })
            .expect('Content-Type', /json/)
            .expect(200)
    })
})

describe('Trying login', () => {
    test('POST /users creating an user to login', async () => {
        await supertest(app)
            .post('/users')
            .send({ name: 'john', email: 'teste@teste.com', password: 'john' })
            .expect('Content-Type', /json/)
            .expect(201)
    })
    test('LOGIN /users/login', async () => {
        await supertest(app)
            .post('/users/login')
            .send({ email: 'teste@teste.com', password: 'john' })
            .expect('Content-Type', /json/)
            .expect(202)
    })
    test('LOGIN /users/login with incorrect password', async () => {
        await supertest(app)
            .post('/users/login')
            .send({ email: 'teste@teste.com', password: 'john123' })
            .expect('Content-Type', /json/)
            .expect(401)
    })
})
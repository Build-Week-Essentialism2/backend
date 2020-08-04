const db = require('../../dbConfig')
const server = require('../../../../index')
const supertest = require('supertest')

describe('users router', () => {
  describe('register endpoint', () => {
    it('returns a bad req status when missing fields in req', async() => {
      await supertest(server).post('/api/auth/register').send({username: "ckak", password: "ckak"})
      .then(res => {
        expect(res.status).toBe(400)
      })
    })
    it('returns a 409 conflict when using an existing username', async() => {
      await supertest(server).post('/api/auth/register').send({firstName: "christie", lastName: "bussinger", username: "cake", password: "cake"})
      .then(res => {
        expect(res.status).toBe(409)
      })
    })
    it('returns a 201 code when registering and data is validated', async() => {
      beforeAll(async () => {
        await db.seed.run()
      })
      
      await supertest(server).post('/api/auth/register')
      .send({firstName: "christie", lastName: "bussinger", username: "cakery", password: "cakery"})
      .then(res => {
        expect(res.status).toBe(201)
      })
    })
  })
  describe('login auth endpoint', () => {
    it('logs a user in when using correct creds', async() => {
      await supertest(server).post('/api/auth/login')
      .send({username: "cake", password: "cake"})
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })
})
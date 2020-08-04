const db = require('../../dbConfig')
const server = require('../../../../index')
const supertest = require('supertest')

describe('GET - projects router', () => {
  describe('get a user\'s projects', () => {
    it('gives error when not logged in and attempting a get', async () => {
      await supertest(server).get('/api/projects/1')
      .then(res => {
        expect(res.statusCode).toBe(401)
      })
    })
  })
  describe('POST - add a project', () => {
    it('creating proj returns invalid creds code when not logged in', async() => {
      await supertest(server).post('/api/projects/1')
      .send({"description": "newest test project"})
      .then(res => {
        expect(res.statusCode).toBe(401)
      })
    })
  })
})
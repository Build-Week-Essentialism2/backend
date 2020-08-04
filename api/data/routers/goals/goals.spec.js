const db = require('../../dbConfig')
const server = require('../../../../index')
const supertest = require('supertest')

describe('goals router', () => {
  describe('get a user\'s goals endpoint', () => {
    it('GET - Wreturns a 200 status code', () => {
      supertest(server).get('/api/goals/1')
      .then(res => {
        expect(res.statusCode.toBe(200))
      })
    })
  })
})
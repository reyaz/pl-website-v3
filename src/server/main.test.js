/* global describe, it */

import request from 'supertest'

import app from './main'

describe('GET /', () => {
  it('should return a 404 status', () => {
    return request(app)
      .get('/')
      .expect(404)
  })
})

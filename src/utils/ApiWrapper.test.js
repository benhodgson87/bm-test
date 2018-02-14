import axios from 'axios'
import { get, post } from './apiWrapper'

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
}))

const fakeJobs = {
  data: {
    data: [
      {
        id: 123,
        customer: {
          title: 'Mr',
          first_name: 'Foo',
          last_name: 'Bar',
        },
        job: {
          dimensions: 1234,
        },
      },
    ],
  },
}

describe('Campaign Service', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('should return a successful get request', () => {
    axios.get.mockReturnValue(Promise.resolve(fakeJobs))

    return get('/get').then(resp => {
      expect(axios.get).toHaveBeenCalled()
      expect(resp).toEqual(fakeJobs.data)
    })
  })

  test('should return an error and do nothing if get rejects', () => {
    axios.get.mockReturnValue(Promise.reject(new Error('failed')))
    return get('/get').then(err => {
      expect(err).toHaveProperty('message', 'failed')
    })
  })

  test('should return a successful post request', () => {
    axios.post.mockReturnValue(Promise.resolve({ success: true }))

    return post('/delete/123').then(resp => {
      expect(axios.post).toHaveBeenCalled()
      expect(resp.success).toEqual(true)
    })
  })

  test('should return an error and do nothing if post rejects', () => {
    axios.post.mockReturnValue(Promise.reject(new Error('failed')))
    return post('/delete/123').then(err => {
      expect(err).toHaveProperty('message', 'failed')
    })
  })
})

import handler from '@api/hello'

describe('hello api', () => {
  it('should return hello world', async () => {
    const req = {}

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ name: 'John Doe' })
  })
})

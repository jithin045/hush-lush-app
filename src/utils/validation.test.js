import { loginSchema } from './validation'

describe('Login Validation Schema', () => {
  it('should pass with valid email and password', () => {
    const validData = { email: 'test@example.com', password: 'Password123!' }
    const result = loginSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should fail with invalid email', () => {
    const invalidData = { email: 'test@.com', password: 'Password123!' }
    const result = loginSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe(
      'Please enter a valid email address'
    )
  })

  it('should fail with short password', () => {
    const invalidData = { email: 'test@example.com', password: '123' }
    const result = loginSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe(
      'Password must be at least 6 characters'
    )
  })
})

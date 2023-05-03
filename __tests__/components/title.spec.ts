import { render } from '@testing-library/react'
// @ts-ignore
import Test from '@components/Test'

describe('Test', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Test />)
    const heading = getByRole('heading', { name: 'Test' })
    expect(heading).toBeInTheDocument()
  })
})

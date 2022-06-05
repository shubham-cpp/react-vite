// import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from '../App'

it('renders hello message', () => {
  const { getByText } = render(<App />)
  expect(getByText(/hello world/i)).toBeInTheDocument()
})

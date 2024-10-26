import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld'
import { describe, it, expect } from 'vitest'

describe('HelloWorld component', () => {
  it('renders "Hello, World!!!" text', () => {
    render(<HelloWorld />)
    const helloWorldText = screen.getByText(/Hello, World!/i)
    expect(helloWorldText).toBeInTheDocument()
  })
})

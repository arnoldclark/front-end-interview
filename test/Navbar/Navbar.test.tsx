import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'


const PROPS = {
  title: 'hello there'
}

describe('Navbar', () => {

  test('matches snapshot', () => {
    const { container } = render(<Navbar {...PROPS} />)
    expect(container).toMatchSnapshot()
  })

  test('displays title', async () => {
    render(<Navbar {...PROPS} />)

    expect(screen.getByRole('link')).toHaveTextContent(PROPS.title)
  })

  test('displays default title if no title provided', async () => {
    render(<Navbar />)

    expect(screen.getByRole('link')).toHaveTextContent("Arnold Clark Garage")
  })

})
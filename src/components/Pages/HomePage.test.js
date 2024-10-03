import { render } from '@testing-library/react'
import HomePage from './HomePage'

test('renders HomePage component', () => {
    render(<HomePage />)

})

test('displays the correct page title', () => {
    render(<HomePage />)
    // Add your assertions here
})

test('displays the upcoming event', () => {
    render(<HomePage />)
    expect(screen.getByText('Upcoming Event')).toBeInTheDocument()

})

test('displays the expert coding help section', () => {
    render(<HomePage />)
  expect(screen.getByText('Expert Coding Help')).toBeInTheDocument()
})

test('displays the main cards section', () => {
    render(<HomePage />)
    // Add your assertions here
})
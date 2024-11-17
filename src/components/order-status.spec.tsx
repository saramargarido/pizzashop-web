import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

// eslint-disable-next-line no-undef
describe('Order Status', () => {
  it('should display the right text based on order status', () => {
    const wrapper = render(<OrderStatus status="pending" />)
    const statusText = wrapper.getByText('Pendente')
    expect(statusText).toBeInTheDocument()
  })
})

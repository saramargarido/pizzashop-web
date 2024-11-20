import { http, HttpResponse } from 'msw'
import { GetOrderDetailsParams, GetOrderDetailsResponse } from '../get-order-details'


export const getOrderDetailMock = http.get<
GetOrderDetailsParams,
never,
GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Jane Doe',
      email: 'janedoe@mail.com',
      phone: '112232132',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 2366,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1233,
        product: {
          name: "Pizza Pepperoni"
        },
        quantity: 2
      },
      {
        id: 'order-item-2',
        priceInCents: 1133,
        product: {
          name: "Pizza Mussarela"
        },
        quantity: 1
      }
    ]
  })
})
import { http, HttpResponse } from 'msw'
import { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'


export const getMounthCanceledOrdersAmountMock = http.get<
never,
never,
GetMonthCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 12,
    diffFromLastMonth: -12
  })
})
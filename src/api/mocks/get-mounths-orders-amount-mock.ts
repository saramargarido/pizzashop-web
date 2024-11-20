import { http, HttpResponse } from 'msw'
import { GetMonthOrdersAmountResponse } from '../get-month-orders-amount'


export const getMounthsOrdersAmountMock = http.get<
never,
never,
GetMonthOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 120,
    diffFromLastMonth: -23
  })
})
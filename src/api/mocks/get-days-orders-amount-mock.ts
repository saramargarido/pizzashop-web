import { http, HttpResponse } from 'msw'
import { GetDayOrdersAmountResponse } from '../get-day-orders-amouts'


export const getDayOrdersAmountMock = http.get<
never,
never,
GetDayOrdersAmountResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5
  })
})
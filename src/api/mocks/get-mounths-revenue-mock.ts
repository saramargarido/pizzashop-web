import { http, HttpResponse } from 'msw'
import { GetMonthRevenueResponse } from '../get-month-revenue'


export const getMounthRevenueMock = http.get<
never,
never,
GetMonthRevenueResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 127339,
    diffFromLastMonth: 123
  })
})
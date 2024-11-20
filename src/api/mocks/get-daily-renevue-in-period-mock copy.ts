import { http, HttpResponse } from 'msw'
import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'


export const getDailyRevenueInPeriodMock = http.get<
never,
never,
GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {date: '01/01/2024', receipt: 23248},
    {date: '02/01/2024', receipt: 1434},
    {date: '03/01/2024', receipt: 53267},
    {date: '04/01/2024', receipt: 234},
    {date: '05/01/2024', receipt: 145},
    {date: '06/01/2024', receipt: 5154},
    {date: '07/01/2024', receipt: 321},
  ])
})
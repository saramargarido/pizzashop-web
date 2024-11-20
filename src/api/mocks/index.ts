import { setupWorker } from 'msw/browser'
import { env } from '../../env'
import { getDailyRevenueInPeriodMock } from './get-daily-renevue-in-period-mock copy'
import { getDayOrdersAmountMock } from './get-days-orders-amount-mock'
import { getMounthCanceledOrdersAmountMock } from './get-mounth-canceled-orders-amount-mock'
import { getMounthsOrdersAmountMock } from './get-mounths-orders-amount-mock'
import { getMounthRevenueMock } from './get-mounths-revenue-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in.mock'

export const worker = setupWorker(
  signInMock, 
  registerRestaurantMock, 
  getDayOrdersAmountMock,
  getMounthsOrdersAmountMock,
  getMounthCanceledOrdersAmountMock,
  getMounthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
)

export async function enableMSW() {
  if(env.MODE !== 'test') {
    return
  }

  await worker.start()
}
import { http, HttpResponse } from 'msw'
import { GetPopularProductsResponse } from '../get-popular-products'


export const getPopularProductsMock = http.get<
never,
never,
GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: "Pizza 01", amount: 123 },
    { product: "Pizza 02", amount: 233 },
    { product: "Pizza 03", amount: 143 },
    { product: "Pizza 04", amount: 645 },
    { product: "Pizza 05", amount: 234 },
])
})
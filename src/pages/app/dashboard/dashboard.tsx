import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MounthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card copy'
import { MounthOrdersAmountCard } from './month-orders-amount-card'
import { MounthRevenueCard } from './month-revenue-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MounthRevenueCard />
          <MounthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MounthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  )
}

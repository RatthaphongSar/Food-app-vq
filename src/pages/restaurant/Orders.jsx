import Card from '../../components/Card.jsx'
import OrderCard from '../../components/OrderCard.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import { incomingOrders } from '../../data/mockData.js'

export default function Orders() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Incoming orders" subtitle="Accept or reject new tickets fast." />
      <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {incomingOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
        <Card className="h-fit p-6">
          <div className="text-sm font-semibold text-slate-900">Queue health</div>
          <div className="mt-4 space-y-3 text-sm text-slate-500">
            <div className="flex items-center justify-between">
              <span>New orders</span>
              <span>12</span>
            </div>
            <div className="flex items-center justify-between">
              <span>In preparation</span>
              <span>8</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Ready for pickup</span>
              <span>4</span>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
              Average prep time is 18 minutes.
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

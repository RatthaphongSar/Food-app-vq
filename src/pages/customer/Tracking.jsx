import Card from '../../components/Card.jsx'
import MapPlaceholder from '../../components/MapPlaceholder.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import StepTimeline from '../../components/StepTimeline.jsx'
import { customerOrder, trackingSteps } from '../../data/mockData.js'

export default function Tracking() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Order tracking" subtitle={`Order ${customerOrder.id}`} />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <MapPlaceholder label="Live courier map" />
        <Card className="p-6">
          <div className="text-sm font-semibold text-slate-900">{customerOrder.restaurant}</div>
          <div className="mt-2 text-xs text-slate-500">
            {customerOrder.items} items • ${customerOrder.total.toFixed(2)}
          </div>
          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            <div className="font-semibold text-slate-900">{customerOrder.status}</div>
            <div className="mt-1">ETA {customerOrder.eta}</div>
            <div className="mt-1">Courier: {customerOrder.courier}</div>
            <div className="mt-1">Dropoff: {customerOrder.address}</div>
          </div>
          <div className="mt-6">
            <StepTimeline steps={trackingSteps} />
          </div>
        </Card>
      </div>
    </div>
  )
}

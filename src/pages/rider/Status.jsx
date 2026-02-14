import Button from '../../components/Button.jsx'
import Card from '../../components/Card.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import StepTimeline from '../../components/StepTimeline.jsx'
import { riderStatus } from '../../data/mockData.js'

export default function Status() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Delivery status" subtitle="Order #ORD-2489" />
      <Card className="p-6">
        <div className="text-sm font-semibold text-slate-900">Current route</div>
        <div className="mt-2 text-sm text-slate-500">Saffron Bistro → 99 Riverwalk Ave</div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { label: 'Pickup window', value: '12:30 - 12:40' },
            { label: 'ETA', value: '12:55' },
            { label: 'Earnings', value: '$4.80' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs text-slate-400">{item.label}</div>
              <div className="mt-2 text-sm font-semibold text-slate-900">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <StepTimeline steps={riderStatus} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="sm" variant="secondary" className="flex-1">
            Call customer
          </Button>
          <Button size="sm" variant="success" className="flex-1">
            Confirm pickup
          </Button>
        </div>
      </Card>
    </div>
  )
}

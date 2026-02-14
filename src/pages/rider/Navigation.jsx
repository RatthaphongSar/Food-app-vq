import Button from '../../components/Button.jsx'
import Card from '../../components/Card.jsx'
import MapPlaceholder from '../../components/MapPlaceholder.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'

export default function Navigation() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Navigation mock" subtitle="Turn-by-turn guidance preview." />
      <MapPlaceholder label="Route map" />
      <Card className="p-6">
        <div className="text-sm font-semibold text-slate-900">Next steps</div>
        <div className="mt-3 space-y-3 text-sm text-slate-500">
          <div className="flex items-center justify-between">
            <span>Head north on Rama IX</span>
            <span>1.2 km</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Turn right at Sathorn</span>
            <span>650 m</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Arrive at customer</span>
            <span>8 min</span>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="md" variant="success" className="flex-1">
            Start navigation
          </Button>
          <Button size="md" variant="secondary" className="flex-1">
            Share ETA
          </Button>
        </div>
      </Card>
    </div>
  )
}

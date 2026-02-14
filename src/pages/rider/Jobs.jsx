import Button from '../../components/Button.jsx'
import Card from '../../components/Card.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import { riderJobs } from '../../data/mockData.js'

export default function Jobs() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Available jobs" subtitle="Pick the next delivery." />
      <div className="space-y-4">
        {riderJobs.map((job) => (
          <Card key={job.id} className="border border-slate-200/80 p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-slate-900">{job.pickup}</div>
                <div className="text-xs text-slate-500">{job.dropoff}</div>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                ${job.earning.toFixed(2)}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>{job.distance}</span>
              <span>{job.status}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button size="sm" variant="secondary" className="flex-1">
                View details
              </Button>
              <Button size="sm" variant="success" className="flex-1">
                Accept job
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

import ChartPlaceholder from '../../components/ChartPlaceholder.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import StatCard from '../../components/StatCard.jsx'
import { restaurantStats } from '../../data/mockData.js'

export default function Analytics() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Restaurant analytics" subtitle="Track revenue and operational trends." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {restaurantStats.map((stat) => (
          <StatCard key={stat.id} title={stat.title} value={stat.value} change={stat.change} tone={stat.tone} />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartPlaceholder title="Daily orders" />
        <ChartPlaceholder title="Top selling categories" />
      </div>
    </div>
  )
}

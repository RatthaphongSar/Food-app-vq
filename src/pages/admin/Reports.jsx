import ChartPlaceholder from '../../components/ChartPlaceholder.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import Table from '../../components/Table.jsx'
import { adminReports } from '../../data/mockData.js'

export default function Reports() {
  const columns = [
    { key: 'date', label: 'Date' },
    { key: 'metric', label: 'Metric' },
    { key: 'value', label: 'Value' },
    { key: 'trend', label: 'Trend' },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader title="Reports" subtitle="Operational insights across the platform." />
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartPlaceholder title="Revenue by region" />
        <ChartPlaceholder title="Order volume trends" />
      </div>
      <Table columns={columns} data={adminReports} />
    </div>
  )
}

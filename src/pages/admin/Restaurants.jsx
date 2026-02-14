import Button from '../../components/Button.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import Table from '../../components/Table.jsx'
import { adminRestaurants } from '../../data/mockData.js'

export default function Restaurants() {
  const columns = [
    { key: 'name', label: 'Restaurant' },
    { key: 'city', label: 'City' },
    { key: 'rating', label: 'Rating' },
    { key: 'status', label: 'Status' },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex gap-2">
          <Button size="sm" variant="secondary">
            Review
          </Button>
          <Button size="sm" variant="ghost">
            Pause
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader title="Manage restaurants" subtitle="Approve onboarding and monitor quality." />
      <Table columns={columns} data={adminRestaurants} />
    </div>
  )
}

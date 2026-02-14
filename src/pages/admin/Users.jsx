import Button from '../../components/Button.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import Table from '../../components/Table.jsx'
import { adminUsers } from '../../data/mockData.js'

export default function Users() {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'joined', label: 'Joined' },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex gap-2">
          <Button size="sm" variant="secondary">
            View
          </Button>
          <Button size="sm" variant="ghost">
            Suspend
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <SectionHeader title="Manage users" subtitle="View customers, riders, and merchants." />
      <Table columns={columns} data={adminUsers} />
    </div>
  )
}

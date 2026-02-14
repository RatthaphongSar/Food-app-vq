import Button from '../../components/Button.jsx'
import Card from '../../components/Card.jsx'
import MenuItemCard from '../../components/MenuItemCard.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import Table from '../../components/Table.jsx'
import { menuItems } from '../../data/mockData.js'

export default function MenuManagement() {
  const columns = [
    { key: 'name', label: 'Item' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price', render: (row) => `$${row.price.toFixed(2)}` },
    { key: 'status', label: 'Status' },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex gap-2">
          <Button size="sm" variant="secondary">
            Edit
          </Button>
          <Button size="sm" variant="ghost">
            Remove
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Menu management"
        subtitle="Update live items and availability."
        action={<Button>Add new item</Button>}
      />
      <Table columns={columns} data={menuItems} />
      <Card className="p-6">
        <SectionHeader title="Popular items preview" subtitle="Customer-facing highlights." />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {menuItems.slice(0, 2).map((item) => (
            <MenuItemCard key={item.id} item={item} actionLabel="Edit listing" />
          ))}
        </div>
      </Card>
    </div>
  )
}

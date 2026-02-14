import MenuItemCard from '../../components/MenuItemCard.jsx'
import Card from '../../components/Card.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import Select from '../../components/Select.jsx'
import { menuItems } from '../../data/mockData.js'

export default function Menu() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Menu highlights" subtitle="Saffron Bistro • Live updates" />
      <Card className="overflow-hidden bg-gradient-to-br from-sky-50 via-emerald-50 to-amber-50 p-6">
        <div className="grid gap-4 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
              Chef picks
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">
              Seasonal bowls with fresh herbs.
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Bright, healthy, and packed with flavor for your lunch rush.
            </p>
          </div>
          <div className="h-36 overflow-hidden rounded-2xl">
            <img
              src={menuItems[0].image}
              alt={menuItems[0].name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        <Select
          label="Category"
          options={[
            { value: 'all', label: 'All categories' },
            { value: 'main', label: 'Main' },
            { value: 'sushi', label: 'Sushi' },
            { value: 'dessert', label: 'Dessert' },
          ]}
        />
        <Select
          label="Dietary"
          options={[
            { value: 'any', label: 'Any' },
            { value: 'vegan', label: 'Vegan' },
            { value: 'gluten', label: 'Gluten free' },
          ]}
        />
        <Select
          label="Sort by"
          options={[
            { value: 'popular', label: 'Most popular' },
            { value: 'price', label: 'Price low to high' },
            { value: 'rating', label: 'Top rated' },
          ]}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {menuItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

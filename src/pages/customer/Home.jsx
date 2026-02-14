import RestaurantCard from '../../components/RestaurantCard.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import Input from '../../components/Input.jsx'
import Card from '../../components/Card.jsx'
import Button from '../../components/Button.jsx'
import { restaurants } from '../../data/mockData.js'

export default function Home() {
  return (
    <div className="space-y-10">
      <SectionHeader title="Good afternoon, Maya" subtitle="Discover top restaurants near you." />
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-sky-50 p-6">
          <div className="relative z-10">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
              Exclusive drops
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
              Free delivery on your next 3 orders.
            </h3>
            <p className="mt-3 text-sm text-slate-500">
              Apply the promo and explore curated menus from nearby chefs.
            </p>
          </div>
          <div className="relative z-10 mt-6 flex flex-wrap gap-3">
            <Button>Apply promo</Button>
            <Button variant="secondary">View details</Button>
          </div>
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-200/40 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-rose-200/40 blur-2xl" />
        </Card>
        <Card className="p-6">
          <SectionHeader title="Quick filters" subtitle="Search by cuisine or restaurant." />
          <div className="mt-4 space-y-3">
            <Input label="Search restaurants" placeholder="Sushi, Thai, Vegan" />
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Thai', className: 'bg-amber-100 text-amber-700 border-amber-200' },
                { label: 'Japanese', className: 'bg-sky-100 text-sky-700 border-sky-200' },
                { label: 'Healthy', className: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                { label: 'Dessert', className: 'bg-rose-100 text-rose-700 border-rose-200' },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${tag.className}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

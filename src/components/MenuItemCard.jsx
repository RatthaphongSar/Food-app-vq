import PropTypes from 'prop-types'
import Badge from './Badge.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'

function MenuItemCard({ item, actionLabel = 'Add to cart' }) {
  const statusTone = item.status === 'Available' ? 'emerald' : 'rose'
  const categoryStyles = {
    Main: 'bg-amber-100 text-amber-700',
    Dessert: 'bg-rose-100 text-rose-700',
    Sushi: 'bg-sky-100 text-sky-700',
  }

  return (
    <Card className="overflow-hidden">
      <div className="grid gap-4 p-5 sm:grid-cols-[120px_1fr]">
        <div className="h-28 w-full overflow-hidden rounded-2xl">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-base font-semibold text-slate-900">{item.name}</h4>
              <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            </div>
            <Badge tone={statusTone}>{item.status}</Badge>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className={[
                  'rounded-full px-3 py-1 text-xs font-semibold',
                  categoryStyles[item.category] || 'bg-slate-100 text-slate-600',
                ].join(' ')}
              >
                {item.category}
              </span>
              <span className="text-sm font-semibold text-slate-900">${item.price.toFixed(2)}</span>
            </div>
            <Button size="sm" variant="secondary">
              {actionLabel}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

MenuItemCard.propTypes = {
  item: PropTypes.shape({
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  actionLabel: PropTypes.string,
}

export default MenuItemCard

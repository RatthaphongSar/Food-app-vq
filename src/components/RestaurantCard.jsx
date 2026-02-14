import PropTypes from 'prop-types'
import Badge from './Badge.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'

function RestaurantCard({ restaurant }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${restaurant.accent}`} />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{restaurant.name}</h3>
            <p className="text-sm text-slate-500">{restaurant.cuisine}</p>
          </div>
          <Badge tone="amber">{restaurant.rating}</Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
          <span>{restaurant.eta}</span>
          <span>•</span>
          <span>{restaurant.distance}</span>
          <span>•</span>
          <span>{restaurant.priceRange}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {restaurant.tags.map((tag) => (
            <Badge key={tag} tone="slate">
              {tag}
            </Badge>
          ))}
        </div>
        <Button className="mt-5 w-full" size="sm">
          View Menu
        </Button>
      </div>
    </Card>
  )
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    accent: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    eta: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default RestaurantCard

import PropTypes from 'prop-types'
import Badge from './Badge.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'

function OrderCard({ order, showActions = true }) {
  const statusTone = order.status === 'Pending' ? 'amber' : 'emerald'

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-slate-900">{order.id}</div>
          <div className="mt-1 text-sm text-slate-500">
            {order.customer} • {order.items} items • ${order.total.toFixed(2)}
          </div>
        </div>
        <Badge tone={statusTone}>{order.status}</Badge>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>{order.time}</span>
        {showActions ? (
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">
              Reject
            </Button>
            <Button size="sm" variant="success">
              Accept
            </Button>
          </div>
        ) : null}
      </div>
    </Card>
  )
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    items: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  showActions: PropTypes.bool,
}

export default OrderCard

import PropTypes from 'prop-types'
import Card from './Card.jsx'

function StatCard({ title, value, change, tone = 'emerald' }) {
  const toneStyles = {
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
    rose: 'text-rose-600',
    blue: 'text-blue-600',
  }

  return (
    <Card className="p-5">
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
      {change ? <div className={`mt-2 text-sm font-semibold ${toneStyles[tone]}`}>{change}</div> : null}
    </Card>
  )
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string,
  tone: PropTypes.oneOf(['emerald', 'amber', 'rose', 'blue']),
}

export default StatCard

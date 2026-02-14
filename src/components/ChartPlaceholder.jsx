import PropTypes from 'prop-types'
import Card from './Card.jsx'

function ChartPlaceholder({ title = 'Performance Overview' }) {
  return (
    <Card className="h-64 p-6">
      <div className="flex h-full flex-col justify-between">
        <div className="text-sm font-semibold text-slate-600">{title}</div>
        <div className="mt-6 flex h-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-slate-400">
          Chart Placeholder
        </div>
      </div>
    </Card>
  )
}

ChartPlaceholder.propTypes = {
  title: PropTypes.string,
}

export default ChartPlaceholder

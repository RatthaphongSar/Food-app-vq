import PropTypes from 'prop-types'
import Card from './Card.jsx'

function MapPlaceholder({ label = 'Live Map' }) {
  return (
    <Card className="flex h-64 items-center justify-center bg-slate-50 text-slate-500">
      <div className="text-center">
        <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</div>
        <div className="mt-2 text-lg font-semibold">Map Placeholder</div>
      </div>
    </Card>
  )
}

MapPlaceholder.propTypes = {
  label: PropTypes.string,
}

export default MapPlaceholder

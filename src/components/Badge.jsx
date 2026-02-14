import PropTypes from 'prop-types'

const toneStyles = {
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  amber: 'bg-amber-50 text-amber-700 border-amber-100',
  blue: 'bg-blue-50 text-blue-700 border-blue-100',
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
  rose: 'bg-rose-50 text-rose-700 border-rose-100',
}

function Badge({ tone = 'slate', children, className = '' }) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold',
        toneStyles[tone],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}

Badge.propTypes = {
  tone: PropTypes.oneOf(['emerald', 'amber', 'blue', 'slate', 'rose']),
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Badge

import PropTypes from 'prop-types'

function Card({ children, className = '' }) {
  return (
    <div className={['rounded-2xl border border-slate-200 bg-white shadow-sm', className].join(' ')}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Card

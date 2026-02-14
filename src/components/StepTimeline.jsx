import PropTypes from 'prop-types'

function StepTimeline({ steps = [] }) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            {index < steps.length - 1 ? <div className="h-8 w-px bg-slate-200" /> : null}
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">{step.label}</div>
            <div className="text-xs text-slate-500">{step.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

StepTimeline.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }),
  ),
}

export default StepTimeline

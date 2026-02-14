import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Jobs', to: '/rider/jobs' },
  { label: 'Status', to: '/rider/status' },
  { label: 'Navigation', to: '/rider/navigation' },
]

export default function RiderLayout() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-white">
          <div className="text-lg font-semibold">Rider Console</div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Online
          </div>
        </div>
      </header>
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-6 lg:flex-row">
        <nav className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-2xl px-4 py-3 text-sm font-semibold transition shadow-sm',
                  isActive
                    ? 'bg-white text-slate-900 shadow-lg ring-1 ring-white/60'
                    : 'border border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-600 hover:bg-slate-900',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <main className="flex-1 rounded-3xl bg-white p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

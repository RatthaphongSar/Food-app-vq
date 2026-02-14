import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Users', to: '/admin/users' },
  { label: 'Restaurants', to: '/admin/restaurants' },
  { label: 'Reports', to: '/admin/reports' },
]

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-slate-200 bg-white p-6 lg:border-b-0 lg:border-r">
          <div className="text-lg font-semibold text-slate-900">Admin Control</div>
          <p className="mt-2 text-sm text-slate-500">Global operations hub</p>
          <div className="mt-8 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition',
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100',
                  ].join(' ')
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </aside>
        <main className="px-6 py-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

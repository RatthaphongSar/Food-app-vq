import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/customer/home' },
  { label: 'Menu', to: '/customer/menu' },
  { label: 'Cart', to: '/customer/cart' },
  { label: 'Payment', to: '/customer/payment' },
  { label: 'Tracking', to: '/customer/tracking' },
]

export default function CustomerLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="text-lg font-semibold text-slate-900">FoodFlow Customer</div>
          <nav className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-full px-4 py-2 text-sm font-medium transition',
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}

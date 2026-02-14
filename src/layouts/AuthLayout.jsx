import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
        <div className="grid w-full gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              FoodFlow
            </div>
            <h1 className="text-3xl font-semibold text-slate-900">Delivering delight across every role.</h1>
            <p className="text-sm text-slate-500">
              Manage customers, restaurants, riders, and operations from a single unified platform.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Smart dispatch', 'Live tracking', 'Real-time analytics', 'Secure payments'].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

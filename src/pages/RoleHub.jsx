import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

const roles = [
  {
    title: 'Customer App',
    description: 'Browse restaurants, order, and track deliveries.',
    to: '/customer/home',
  },
  {
    title: 'Restaurant Dashboard',
    description: 'Manage menu, orders, and performance.',
    to: '/restaurant/menu',
  },
  {
    title: 'Rider App',
    description: 'Accept jobs, navigate, and update status.',
    to: '/rider/jobs',
  },
  {
    title: 'Admin Dashboard',
    description: 'Monitor operations, users, and reports.',
    to: '/admin/users',
  },
]

export default function RoleHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="mb-10">
          <div className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            FoodFlow Platform
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">Food Delivery Platform Prototype</h1>
          <p className="mt-3 text-sm text-slate-500">
            Navigate through the four role-based experiences.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((role) => (
            <Card key={role.title} className="p-6">
              <h2 className="text-lg font-semibold text-slate-900">{role.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{role.description}</p>
              <Link to={role.to}>
                <Button className="mt-5">Open experience</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

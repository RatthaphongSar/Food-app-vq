import Button from '../../components/Button.jsx'
import Input from '../../components/Input.jsx'

export default function Login() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Welcome back</h2>
        <p className="text-sm text-slate-500">Sign in to continue your food journey.</p>
      </div>
      <form className="space-y-4">
        <Input label="Email address" placeholder="you@example.com" type="email" />
        <Input label="Password" placeholder="••••••••" type="password" />
        <Button className="w-full" type="button">
          Sign in
        </Button>
      </form>
      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-500">
        Demo login uses mock data only.
      </div>
    </div>
  )
}

import Button from '../../components/Button.jsx'
import Input from '../../components/Input.jsx'

export default function Register() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Create your account</h2>
        <p className="text-sm text-slate-500">Join and explore curated restaurants.</p>
      </div>
      <form className="space-y-4">
        <Input label="Full name" placeholder="Alex Morgan" />
        <Input label="Email address" placeholder="alex@example.com" type="email" />
        <Input label="Phone number" placeholder="+66 80 123 4567" />
        <Input label="Password" placeholder="••••••••" type="password" />
        <Button className="w-full" type="button">
          Create account
        </Button>
      </form>
      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-500">
        By registering, you accept the mock platform guidelines.
      </div>
    </div>
  )
}

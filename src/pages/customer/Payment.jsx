import Button from '../../components/Button.jsx'
import Card from '../../components/Card.jsx'
import Input from '../../components/Input.jsx'
import Select from '../../components/Select.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'

export default function Payment() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Payment" subtitle="Securely complete your order." />
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Cardholder name" placeholder="Maya Lewis" />
            <Input label="Card number" placeholder="1234 5678 9012 3456" />
            <Input label="Expiry date" placeholder="08 / 27" />
            <Input label="CVV" placeholder="***" />
            <Select
              label="Payment method"
              options={[
                { value: 'card', label: 'Credit card' },
                { value: 'wallet', label: 'Wallet balance' },
                { value: 'bank', label: 'Bank transfer' },
              ]}
            />
            <Select
              label="Tip for rider"
              options={[
                { value: '0', label: 'No tip' },
                { value: '2', label: '$2' },
                { value: '4', label: '$4' },
                { value: '6', label: '$6' },
              ]}
            />
          </div>
          <Button className="mt-6 w-full">Pay $29.50</Button>
        </Card>
        <Card className="p-6">
          <div className="text-sm font-semibold text-slate-900">Billing summary</div>
          <div className="mt-4 space-y-2 text-sm text-slate-500">
            <div className="flex items-center justify-between">
              <span>Food total</span>
              <span>$27.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery</span>
              <span>$2.50</span>
            </div>
            <div className="flex items-center justify-between text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>$29.50</span>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
            Payment is simulated for the prototype.
          </div>
        </Card>
      </div>
    </div>
  )
}

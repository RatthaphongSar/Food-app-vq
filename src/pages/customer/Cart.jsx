import Button from '../../components/Button.jsx'
import Card from '../../components/Card.jsx'
import Input from '../../components/Input.jsx'
import SectionHeader from '../../components/SectionHeader.jsx'
import { cartItems } from '../../data/mockData.js'

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
const deliveryFee = 2.5
const total = subtotal + deliveryFee

export default function Cart() {
  return (
    <div className="space-y-8">
      <SectionHeader title="Cart & Checkout" subtitle="Review items before payment." />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.restaurant}</div>
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>Qty {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </Card>
          ))}
          <Card className="p-5">
            <Input label="Delivery instructions" placeholder="Leave at the lobby, call upon arrival." />
          </Card>
        </div>
        <Card className="h-fit p-6">
          <div className="text-sm font-semibold text-slate-900">Order summary</div>
          <div className="mt-4 space-y-2 text-sm text-slate-500">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="mt-5 w-full">Proceed to payment</Button>
        </Card>
      </div>
    </div>
  )
}

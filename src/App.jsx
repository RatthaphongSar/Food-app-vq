import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import RoleHub from './pages/RoleHub.jsx'
import Login from './pages/customer/Login.jsx'
import Register from './pages/customer/Register.jsx'
import Home from './pages/customer/Home.jsx'
import Menu from './pages/customer/Menu.jsx'
import Cart from './pages/customer/Cart.jsx'
import Payment from './pages/customer/Payment.jsx'
import Tracking from './pages/customer/Tracking.jsx'
import MenuManagement from './pages/restaurant/MenuManagement.jsx'
import Orders from './pages/restaurant/Orders.jsx'
import Analytics from './pages/restaurant/Analytics.jsx'
import Jobs from './pages/rider/Jobs.jsx'
import Status from './pages/rider/Status.jsx'
import Navigation from './pages/rider/Navigation.jsx'
import Users from './pages/admin/Users.jsx'
import Restaurants from './pages/admin/Restaurants.jsx'
import Reports from './pages/admin/Reports.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import CustomerLayout from './layouts/CustomerLayout.jsx'
import RestaurantLayout from './layouts/RestaurantLayout.jsx'
import RiderLayout from './layouts/RiderLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleHub />} />
        <Route path="/customer/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/customer/register" element={<AuthLayout />}>
          <Route index element={<Register />} />
        </Route>
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="tracking" element={<Tracking />} />
        </Route>
        <Route path="/restaurant" element={<RestaurantLayout />}>
          <Route index element={<Navigate to="menu" replace />} />
          <Route path="menu" element={<MenuManagement />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
        <Route path="/rider" element={<RiderLayout />}>
          <Route index element={<Navigate to="jobs" replace />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="status" element={<Status />} />
          <Route path="navigation" element={<Navigation />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="users" replace />} />
          <Route path="users" element={<Users />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

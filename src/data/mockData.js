export const restaurants = [
  {
    id: 'resto-1',
    name: 'Saffron Bistro',
    cuisine: 'Modern Thai',
    rating: 4.8,
    eta: '25-35 min',
    distance: '1.8 km',
    priceRange: '$$',
    tags: ['Top rated', 'Free delivery'],
    accent: 'from-amber-400/20 to-orange-200/20',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'resto-2',
    name: 'Luna Sushi',
    cuisine: 'Japanese',
    rating: 4.6,
    eta: '20-30 min',
    distance: '2.4 km',
    priceRange: '$$$',
    tags: ['Premium'],
    accent: 'from-sky-200/30 to-indigo-100/30',
    image:
      'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'resto-3',
    name: 'Harvest Bowl',
    cuisine: 'Healthy Bowls',
    rating: 4.7,
    eta: '15-25 min',
    distance: '1.1 km',
    priceRange: '$$',
    tags: ['Vegan'],
    accent: 'from-emerald-200/30 to-lime-100/30',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'resto-4',
    name: 'Cedar Grill',
    cuisine: 'Mediterranean',
    rating: 4.5,
    eta: '30-40 min',
    distance: '3.2 km',
    priceRange: '$$',
    tags: ['Family size'],
    accent: 'from-rose-200/30 to-amber-100/30',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
  },
]

export const menuItems = [
  {
    id: 'menu-1',
    name: 'Green Curry Bowl',
    description: 'Basil chicken, jasmine rice, eggplant, coconut curry.',
    price: 12.5,
    category: 'Main',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'menu-2',
    name: 'Mango Sticky Rice',
    description: 'Sweet mango, coconut sticky rice, toasted sesame.',
    price: 7.25,
    category: 'Dessert',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'menu-3',
    name: 'Spicy Tuna Roll',
    description: 'Tuna, avocado, chili mayo, sesame.',
    price: 10.0,
    category: 'Sushi',
    status: 'Paused',
    image:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'menu-4',
    name: 'Harvest Protein Bowl',
    description: 'Quinoa, roasted veggies, tahini dressing.',
    price: 11.75,
    category: 'Main',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80',
  },
]

export const cartItems = [
  {
    id: 'cart-1',
    name: 'Green Curry Bowl',
    price: 12.5,
    quantity: 1,
    restaurant: 'Saffron Bistro',
  },
  {
    id: 'cart-2',
    name: 'Mango Sticky Rice',
    price: 7.25,
    quantity: 2,
    restaurant: 'Saffron Bistro',
  },
]

export const customerOrder = {
  id: 'ORD-2489',
  restaurant: 'Saffron Bistro',
  items: 3,
  total: 27.0,
  status: 'Out for delivery',
  eta: '18 min',
  courier: 'Rider Bee',
  address: '99 Riverwalk Ave, Bangkok',
}

export const trackingSteps = [
  { id: 'step-1', label: 'Order confirmed', time: '12:04' },
  { id: 'step-2', label: 'Preparing food', time: '12:12' },
  { id: 'step-3', label: 'Rider picked up', time: '12:25' },
  { id: 'step-4', label: 'On the way', time: '12:32' },
]

export const incomingOrders = [
  {
    id: 'INV-101',
    customer: 'Maya L.',
    items: 4,
    total: 38.5,
    status: 'Pending',
    time: '2 min ago',
  },
  {
    id: 'INV-102',
    customer: 'Anton P.',
    items: 2,
    total: 21.0,
    status: 'Accepted',
    time: '6 min ago',
  },
  {
    id: 'INV-103',
    customer: 'Sara R.',
    items: 3,
    total: 29.0,
    status: 'Pending',
    time: '10 min ago',
  },
]

export const restaurantStats = [
  { id: 'stat-1', title: 'Today Orders', value: '148', change: '+8.4%', tone: 'emerald' },
  { id: 'stat-2', title: 'Avg. Prep Time', value: '18 min', change: '-2.1%', tone: 'blue' },
  { id: 'stat-3', title: 'Customer Rating', value: '4.7', change: '+0.2', tone: 'emerald' },
  { id: 'stat-4', title: 'Cancellation Rate', value: '1.4%', change: '-0.3%', tone: 'emerald' },
]

export const riderJobs = [
  {
    id: 'JOB-401',
    pickup: 'Luna Sushi',
    dropoff: 'Central Park Tower',
    distance: '3.2 km',
    earning: 4.5,
    status: 'Available',
  },
  {
    id: 'JOB-402',
    pickup: 'Harvest Bowl',
    dropoff: 'Silom Road',
    distance: '2.1 km',
    earning: 3.2,
    status: 'Scheduled',
  },
]

export const riderStatus = [
  { id: 'rs-1', label: 'Pickup confirmed', time: '12:35' },
  { id: 'rs-2', label: 'In transit', time: '12:38' },
  { id: 'rs-3', label: 'Arriving in 10 min', time: '12:45' },
]

export const adminUsers = [
  { id: 'USR-1', name: 'Maya Lewis', role: 'Customer', status: 'Active', joined: 'Jan 14' },
  { id: 'USR-2', name: 'Carter Ray', role: 'Rider', status: 'Active', joined: 'Feb 01' },
  { id: 'USR-3', name: 'Lena Watts', role: 'Restaurant', status: 'Pending', joined: 'Feb 08' },
  { id: 'USR-4', name: 'Alina Singh', role: 'Customer', status: 'Suspended', joined: 'Feb 10' },
]

export const adminRestaurants = [
  { id: 'RST-1', name: 'Saffron Bistro', status: 'Live', city: 'Bangkok', rating: 4.8 },
  { id: 'RST-2', name: 'Luna Sushi', status: 'Live', city: 'Bangkok', rating: 4.6 },
  { id: 'RST-3', name: 'Cedar Grill', status: 'Review', city: 'Bangkok', rating: 4.5 },
]

export const adminReports = [
  { id: 'RPT-1', date: 'Feb 10', metric: 'Total Orders', value: '12,408', trend: '+6.2%' },
  { id: 'RPT-2', date: 'Feb 10', metric: 'Revenue', value: '$184,220', trend: '+4.1%' },
  { id: 'RPT-3', date: 'Feb 10', metric: 'Avg Delivery Time', value: '28 min', trend: '-1.8%' },
]

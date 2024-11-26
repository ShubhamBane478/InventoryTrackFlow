import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  ShoppingCart, 
  BarChart2, 
  Settings, 
  Search, 
  Bell, 
  User,
  Menu
} from 'lucide-react';
import { Card } from '../components/Card';
import api from '../config/api';

const sidebarLinks = [
  { icon: Package, label: 'Inventory', path: '/dashboard' },
  { icon: ShoppingCart, label: 'Orders', path: '/dashboard/orders' },
  { icon: BarChart2, label: 'Reports', path: '/dashboard/reports' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  { icon: Package, label: 'Products', path: '/dashboard/products' },
];

const mockStats = [
  { label: 'Total Items', value: '2,847' },
  { label: 'Low Stock Items', value: '12' },
  { label: 'Pending Orders', value: '24' },
  { label: 'Revenue (MTD)', value: '$45,234' }
];

const mockRecentActivity = [
  { type: 'Stock Update', item: 'Wireless Keyboard', quantity: '+50', date: '2h ago' },
  { type: 'Order Fulfilled', item: 'Gaming Monitor', quantity: '-2', date: '4h ago' },
  { type: 'Low Stock Alert', item: 'USB-C Cable', quantity: '5 left', date: '6h ago' }
];

const fetchInventory = async () => {
  try {
    const response = await api.get('/inventory');
    setInventoryItems(response.data);
  } catch (error) {
    console.error('Error fetching inventory:', error);
  }
};

// Example POST request
const addItem = async (itemData) => {
  try {
    const response = await api.post('/inventory', itemData);
    // Handle success
  } catch (error) {
    console.error('Error adding item:', error);
  }
};

console.log(fetchInventory);
export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 bg-white w-64 border-r border-gray-200 z-30 hidden lg:block">
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <span className="text-xl font-bold text-blue-600">IMS</span>
        </div>
        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <link.icon className="h-5 w-5 mr-3" />
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-20">
        <div className="flex items-center justify-between h-16 px-4">
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
          <span className="text-xl font-bold text-blue-600">IMS</span>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Desktop Header */}
        <header className="hidden lg:flex items-center justify-between h-16 bg-white px-8 border-b border-gray-200">
          <div className="flex-1 flex items-center">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mockStats.map((stat, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
                <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {mockRecentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{activity.type}</p>
                      <p className="text-sm text-gray-500">{activity.item}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{activity.quantity}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50">
                  <Package className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="font-medium">Add Item</p>
                  <p className="text-sm text-gray-500">Add new inventory item</p>
                </button>
                <button className="p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50">
                  <ShoppingCart className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="font-medium">New Order</p>
                  <p className="text-sm text-gray-500">Create purchase order</p>
                </button>
                <button className="p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50">
                  <BarChart2 className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="font-medium">Reports</p>
                  <p className="text-sm text-gray-500">View analytics</p>
                </button>
                <button className="p-4 text-left rounded-lg border border-gray-200 hover:bg-gray-50">
                  <Settings className="h-6 w-6 text-blue-600 mb-2" />
                  <p className="font-medium">Settings</p>
                  <p className="text-sm text-gray-500">Configure system</p>
                </button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
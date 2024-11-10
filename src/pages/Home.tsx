import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Shield, Bell, Clock, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const features = [
  {
    icon: Clock,
    title: 'Real-Time Tracking',
    description: 'Monitor your inventory changes as they happen with live updates and notifications.'
  },
  {
    icon: Shield,
    title: 'Secure Data',
    description: 'Enterprise-grade security ensures your inventory data is protected 24/7.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Reports',
    description: 'Generate detailed insights with customizable reports and analytics.'
  },
  {
    icon: Bell,
    title: 'Stock Alerts',
    description: 'Never run out of stock with automated low inventory notifications.'
  }
];

const testimonials = [
  {
    quote: "This system has transformed how we manage our inventory. It's intuitive and powerful.",
    author: "Sarah Chen",
    role: "Operations Manager",
    company: "TechCorp Inc."
  },
  {
    quote: "The real-time tracking feature has saved us countless hours and prevented stockouts.",
    author: "Michael Rodriguez",
    role: "Supply Chain Director",
    company: "Global Logistics"
  }
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Streamline Your Inventory with Ease
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take control of your inventory management with our powerful, intuitive platform.
            </p>
            <div className="space-x-4">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Get Started Free
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-50"></div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to manage inventory
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features to help you take control of your stock
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Our Platform
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've built a powerful inventory management system that helps businesses of all sizes
                track, manage, and optimize their stock levels. Our platform combines ease of use
                with enterprise-grade features to deliver a solution that grows with your business.
              </p>
              <ul className="space-y-4">
                {[
                  'Easy to use interface',
                  'Enterprise-grade security',
                  'Scalable solution',
                  '24/7 support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Warehouse management"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Trusted by Industry Leaders
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <p className="text-xl text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">API</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Guides</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Privacy</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Terms</Link></li>
                <li><Link to="/" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © {new Date().getFullYear()} Inventory Management System. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
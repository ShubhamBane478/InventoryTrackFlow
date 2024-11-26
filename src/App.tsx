import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Products } from './pages/Products';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/signup" element={<Auth mode="signup" />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<Products />} />

      </Routes>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
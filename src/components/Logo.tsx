import React from 'react';
import { Package } from 'lucide-react';
import { Sparkles } from './ui/aceternity/sparkles';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Sparkles>
        <Package className="h-8 w-8 text-blue-600" />
      </Sparkles>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        InventoryPro
      </span>
    </div>
  );
}
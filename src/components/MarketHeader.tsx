"use client";

import { ArrowDown } from "lucide-react";

export default function MarketHeader({ symbol = "BTC" }: { symbol?: string }) {
  return (
    <div className="w-full bg-[#131722] border-b border-gray-800 p-4">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src="/btc-logo.svg" alt="BTC" className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">{symbol.toUpperCase()}/USDC</h1>
            <p className="text-sm text-gray-400">Bitcoin</p>
          </div>
        </div>

        <div className="grid grid-cols-4 lg:grid-cols-6 gap-8">
          <div>
            <p className="text-sm text-gray-400">Price</p>
            <p className="text-lg font-semibold">101,195.2</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">24h Change</p>
            <p className="text-lg font-semibold text-red-500 flex items-center">
              <ArrowDown className="w-4 h-4 mr-1" />
              -3.80%
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">24h High</p>
            <p className="text-lg font-semibold">105,070.3</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">24h Low</p>
            <p className="text-lg font-semibold">97,717.3</p>
          </div>

          <div className="hidden lg:block">
            <p className="text-sm text-gray-400">24h Volume (USDC)</p>
            <p className="text-lg font-semibold">1,062,568.25</p>
          </div>
        </div>
      </div>
    </div>
  );
}

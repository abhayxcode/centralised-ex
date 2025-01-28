"use client";

interface OrderBookEntry {
  price: number;
  size: number;
  total: number;
}

export default function OrderBook() {
  const asks: OrderBookEntry[] = [
    { price: 101218.7, size: 0.00273, total: 0.23143 },
    { price: 101217.4, size: 0.00028, total: 1.4043 },
    { price: 101216.9, size: 0.00062, total: 0.63074 },
    { price: 101215.5, size: 0.00054, total: 0.00067 },
    { price: 101174.7, size: 0.00059, total: 0.00041 },
  ];

  const bids: OrderBookEntry[] = [
    { price: 101173.5, size: 0.00028, total: 0.17032 },
    { price: 101172.7, size: 0.00059, total: 0.2008 },
    { price: 101171.9, size: 0.00105, total: 0.32575 },
    { price: 101170.3, size: 0.00157, total: 0.47865 },
    { price: 101169.5, size: 0.00006, total: 0.00067 },
  ];

  return (
    <div className="bg-[#131722] rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Order Book</h2>

      <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mb-2">
        <div>Price (USDC)</div>
        <div className="text-right">Size (BTC)</div>
        <div className="text-right">Total (BTC)</div>
      </div>

      <div className="space-y-1">
        {asks.map((ask) => (
          <div key={ask.price} className="grid grid-cols-3 gap-2 text-sm">
            <div className="text-red-500">{ask.price.toFixed(1)}</div>
            <div className="text-right">{ask.size.toFixed(5)}</div>
            <div className="text-right">{ask.total.toFixed(5)}</div>
          </div>
        ))}
      </div>

      <div className="my-2 text-center text-xl font-bold text-white">
        101,195.2
      </div>

      <div className="space-y-1">
        {bids.map((bid) => (
          <div key={bid.price} className="grid grid-cols-3 gap-2 text-sm">
            <div className="text-green-500">{bid.price.toFixed(1)}</div>
            <div className="text-right">{bid.size.toFixed(5)}</div>
            <div className="text-right">{bid.total.toFixed(5)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

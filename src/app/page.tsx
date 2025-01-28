import MarketHeader from "@/components/MarketHeader";
import TradeForm from "@/components/Trade.form";
import TradingView from "@/components/TradingView";

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-[#1E222D] text-gray-100">
      <MarketHeader />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        <div className="lg:col-span-3 space-y-4">
          <TradingView />
        </div>
        <div className="space-y-4">
          <TradeForm />
        </div>
      </div>
    </div>
  );
}

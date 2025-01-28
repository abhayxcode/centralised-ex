"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function TradeForm() {
  const [orderType, setOrderType] = useState("limit");
  const [side, setSide] = useState("buy");

  return (
    <div className="bg-[#131722] rounded-lg p-4">
      <Tabs defaultValue="limit" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-800">
          <TabsTrigger value="limit">Limit</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
        </TabsList>

        <div className="mb-4">
          <RadioGroup
            defaultValue="buy"
            onValueChange={setSide}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="buy" id="buy" className="peer sr-only" />
              <Label
                htmlFor="buy"
                className={`flex justify-center p-2 rounded cursor-pointer ${
                  side === "buy"
                    ? "bg-green-500/20 text-green-500"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                Buy
              </Label>
            </div>
            <div>
              <RadioGroupItem value="sell" id="sell" className="peer sr-only" />
              <Label
                htmlFor="sell"
                className={`flex justify-center p-2 rounded cursor-pointer ${
                  side === "sell"
                    ? "bg-red-500/20 text-red-500"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                Sell
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div>
            <Label>Price (USDC)</Label>
            <Input
              type="number"
              placeholder="0.00"
              className="bg-gray-800 border-gray-700"
            />
          </div>

          <div>
            <Label>Amount (BTC)</Label>
            <Input
              type="number"
              placeholder="0.00"
              className="bg-gray-800 border-gray-700"
            />
          </div>

          <Button
            className={`w-full ${
              side === "buy"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {side === "buy" ? "Buy BTC" : "Sell BTC"}
          </Button>
        </div>
      </Tabs>
    </div>
  );
}

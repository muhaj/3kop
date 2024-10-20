"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart2, Home, Settings } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', fee: 0.1, volatility: 20 },
  { name: 'Feb', fee: 0.15, volatility: 25 },
  { name: 'Mar', fee: 0.2, volatility: 30 },
  { name: 'Apr', fee: 0.18, volatility: 28 },
  { name: 'May', fee: 0.22, volatility: 35 },
  { name: 'Jun', fee: 0.25, volatility: 40 },
];

export default function Dashboard() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = () => {
    // Implement wallet connection logic here
    setIsWalletConnected(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b max-w-7xl mx-auto w-full">
        <Link className="flex items-center justify-center" href="/">
          <BarChart2 className="h-6 w-6 mr-2" />
          <span className="font-bold">3kop</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Link>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {!isWalletConnected ? (
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Connect Your Wallet</CardTitle>
                <CardDescription>Connect your Ethereum wallet to access the dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={connectWallet} className="w-full">Connect Wallet</Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Current Fee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0.25%</div>
                    <p className="text-xs text-muted-foreground">+20% from last hour</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Market Volatility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">High</div>
                    <p className="text-xs text-muted-foreground">Increased by 15%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Volume (24h)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$1,234,567</div>
                    <p className="text-xs text-muted-foreground">+5% from yesterday</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Fees Collected (24h)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$3,087</div>
                    <p className="text-xs text-muted-foreground">+12% from yesterday</p>
                  </CardContent>
                </Card>
              </div>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Fee and Volatility Trends</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line yAxisId="left" type="monotone" dataKey="fee" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line yAxisId="right" type="monotone" dataKey="volatility" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Swap Simulator</CardTitle>
                  <CardDescription>Simulate a swap to see the impact of dynamic fees</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="amount">Amount</Label>
                        <Input id="amount" placeholder="Enter amount" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="token">Token</Label>
                        <Input id="token" placeholder="Select token" />
                      </div>
                      <div>
                        <Button className="w-full">Simulate Swap</Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex justify-center w-full">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 3kop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
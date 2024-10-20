import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link className="flex items-center justify-center" href="#">
          <BarChart2 className="h-6 w-6" />
          <span className="sr-only">3kop</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Optimize Your Trades with Dynamic Fees
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  3kop integrates with Balancer v3 to provide dynamic fee adjustment for AMMs, benefiting both liquidity providers and traders.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/dashboard">
                    Launch App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Dynamic Fee Adjustment</h3>
                <p className="text-gray-500 dark:text-gray-400">Automatically adjust swap fees based on market volatility</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <BarChart2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Real-Time Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400">Monitor market trends and fee adjustments in real-time</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Secure Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">Seamlessly integrated with Balancer v3 for enhanced security</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 3kop. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
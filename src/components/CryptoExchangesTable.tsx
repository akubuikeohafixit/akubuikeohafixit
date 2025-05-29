
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const initialExchanges = [
  { name: 'Bitcoin', symbol: 'BTC', price: 45230.50, change: 2.5, volume: '$28.2B' },
  { name: 'Ethereum', symbol: 'ETH', price: 3180.25, change: -1.2, volume: '$15.7B' },
  { name: 'Binance Coin', symbol: 'BNB', price: 320.80, change: 0.8, volume: '$2.1B' },
  { name: 'Cardano', symbol: 'ADA', price: 1.25, change: -3.1, volume: '$1.8B' },
  { name: 'Solana', symbol: 'SOL', price: 98.75, change: 4.2, volume: '$3.2B' },
  { name: 'Polygon', symbol: 'MATIC', price: 0.85, change: 0.0, volume: '$890M' },
];

const CryptoExchangesTable = () => {
  const [exchanges, setExchanges] = useState(initialExchanges);

  useEffect(() => {
    const interval = setInterval(() => {
      setExchanges(prevExchanges => 
        prevExchanges.map(exchange => {
          const randomChange = (Math.random() - 0.5) * 10;
          const newPrice = exchange.price * (1 + randomChange / 100);
          return {
            ...exchange,
            price: parseFloat(newPrice.toFixed(2)),
            change: parseFloat(randomChange.toFixed(2))
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPriceColor = (change: number) => {
    if (change > 0) return 'text-green-600 dark:text-green-400';
    if (change < 0) return 'text-red-600 dark:text-red-400';
    return 'text-yellow-600 dark:text-yellow-400';
  };

  const getPriceIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-3 h-3" />;
    if (change < 0) return <TrendingDown className="w-3 h-3" />;
    return <Minus className="w-3 h-3" />;
  };

  const getBgColor = (change: number) => {
    if (change > 0) return 'bg-green-50/50 dark:bg-green-900/10';
    if (change < 0) return 'bg-red-50/50 dark:bg-red-900/10';
    return 'bg-yellow-50/50 dark:bg-yellow-900/10';
  };

  // Create seamless scrolling by duplicating the data multiple times
  const seamlessData = [...exchanges, ...exchanges, ...exchanges];

  return (
    <div className="w-full overflow-hidden relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm">
      <div className="animate-seamless-scroll flex">
        <Table className="min-w-max flex-shrink-0">
          <TableHeader>
            <TableRow className="border-slate-300/30 dark:border-slate-600/30">
              <TableHead className="text-slate-700 dark:text-slate-300 font-medium text-xs py-1 px-3 whitespace-nowrap">Coin</TableHead>
              <TableHead className="text-slate-700 dark:text-slate-300 font-medium text-xs py-1 px-3 whitespace-nowrap">Price</TableHead>
              <TableHead className="text-slate-700 dark:text-slate-300 font-medium text-xs py-1 px-3 whitespace-nowrap">24h Change</TableHead>
              <TableHead className="text-slate-700 dark:text-slate-300 font-medium text-xs py-1 px-3 whitespace-nowrap">Volume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {seamlessData.map((exchange, index) => (
              <TableRow 
                key={`${exchange.symbol}-${index}`} 
                className={`border-none transition-all duration-500 ${getBgColor(exchange.change)}`}
              >
                <TableCell className="font-medium text-slate-800 dark:text-slate-200 py-1 px-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs">{exchange.symbol}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">{exchange.name}</span>
                  </div>
                </TableCell>
                <TableCell className={`font-bold py-1 px-3 text-xs ${getPriceColor(exchange.change)}`}>
                  ${exchange.price.toLocaleString()}
                </TableCell>
                <TableCell className={`py-1 px-3 text-xs ${getPriceColor(exchange.change)}`}>
                  <div className="flex items-center gap-1">
                    {getPriceIcon(exchange.change)}
                    <span className="font-medium">
                      {exchange.change > 0 ? '+' : ''}{exchange.change.toFixed(2)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-700 dark:text-slate-300 py-1 px-3 text-xs">
                  {exchange.volume}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CryptoExchangesTable;

'use client';

import { useState } from 'react';

const WalletPage = () => {
  const [balance] = useState(2450.75);
  const [cryptoAssets] = useState([
    { id: 1, name: 'Bitcoin', symbol: 'BTC', amount: 0.5, value: 1250.50, change: 5.2, color: 'from-orange-400 to-yellow-500' },
    { id: 2, name: 'Ethereum', symbol: 'ETH', amount: 2.3, value: 850.25, change: -2.1, color: 'from-purple-400 to-blue-500' },
    { id: 3, name: 'Cardano', symbol: 'ADA', amount: 1500, value: 350.00, change: 8.5, color: 'from-blue-400 to-cyan-500' },
  ]);

  const transactions = [
    { id: 1, type: 'Beli', asset: 'BTC', amount: '+0.1', value: 250.10, date: '2025-11-10', status: 'Selesai' },
    { id: 2, type: 'Jual', asset: 'ETH', amount: '-0.5', value: 185.25, date: '2025-11-09', status: 'Selesai' },
    { id: 3, type: 'Transfer', asset: 'ADA', amount: '+500', value: 116.50, date: '2025-11-08', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header dengan Greeting */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Dompet Kripto Anda
          </h1>
          <p className="text-gray-600 text-lg">Kelola aset digital Anda dengan mudah dan aman</p>
        </div>

        {/* Balance Card - Main Highlight */}
        <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl shadow-2xl p-8 text-white transform hover:scale-[1.02] transition duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-purple-100 text-sm font-medium mb-2">Total Saldo</p>
              <h2 className="text-5xl font-bold">${balance.toLocaleString('id-ID', { minimumFractionDigits: 2 })}</h2>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 bg-white text-purple-600 font-semibold py-3 rounded-xl hover:bg-purple-50 transition duration-300 shadow-lg">
              💰 Deposit
            </button>
            <button className="flex-1 bg-white/20 backdrop-blur-sm text-white font-semibold py-3 rounded-xl hover:bg-white/30 transition duration-300">
              📤 Withdraw
            </button>
          </div>
        </div>

        {/* Crypto Assets Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Aset Kripto Anda</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cryptoAssets.map((asset) => (
              <div
                key={asset.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${asset.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {asset.symbol[0]}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    asset.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {asset.change > 0 ? '↑' : '↓'} {Math.abs(asset.change)}%
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-gray-800">{asset.name}</h4>
                  <p className="text-gray-500 text-sm">{asset.amount} {asset.symbol}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    ${asset.value.toLocaleString('id-ID', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Transaksi Terbaru</h3>
            <button className="text-purple-600 font-semibold hover:text-purple-700 transition">
              Lihat Semua →
            </button>
          </div>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-md ${
                    tx.type === 'Beli' ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
                    tx.type === 'Jual' ? 'bg-gradient-to-br from-red-400 to-pink-500' :
                    'bg-gradient-to-br from-blue-400 to-cyan-500'
                  }`}>
                    {tx.type === 'Beli' ? '↓' : tx.type === 'Jual' ? '↑' : '⇄'}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{tx.type} {tx.asset}</p>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-gray-800'}`}>
                    {tx.amount}
                  </p>
                  <p className="text-sm text-gray-500">${tx.value.toFixed(2)}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  tx.status === 'Selesai' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {tx.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '📊', label: 'Analisis', color: 'from-blue-400 to-blue-600' },
            { icon: '💱', label: 'Exchange', color: 'from-purple-400 to-purple-600' },
            { icon: '📈', label: 'Portfolio', color: 'from-pink-400 to-pink-600' },
            { icon: '⚙️', label: 'Pengaturan', color: 'from-orange-400 to-orange-600' },
          ].map((action, idx) => (
            <button
              key={idx}
              className={`bg-gradient-to-br ${action.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300`}
            >
              <div className="text-4xl mb-2">{action.icon}</div>
              <p className="font-semibold">{action.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
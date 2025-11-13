'use client';

import { useState } from 'react';

const ModulData = [
  { 
    id: 1, 
    title: "Modul 1: Dasar-Dasar Blockchain", 
    duration: "4 Jam", 
    level: "Pemula", 
    description: "Memahami apa itu teknologi blockchain, desentralisasi, dan konsep Hash.",
    icon: "🔗",
    color: "from-green-400 to-emerald-500",
    lessons: 12,
    students: 2453
  },
  { 
    id: 2, 
    title: "Modul 2: Investasi & Trading Bitcoin", 
    duration: "6 Jam", 
    level: "Menengah", 
    description: "Analisis fundamental & teknikal, manajemen risiko, dan strategi swing trading.",
    icon: "₿",
    color: "from-orange-400 to-yellow-500",
    lessons: 18,
    students: 1876
  },
  { 
    id: 3, 
    title: "Modul 3: Dunia DeFi (Decentralized Finance)", 
    duration: "5 Jam", 
    level: "Menengah", 
    description: "Eksplorasi Yield Farming, Staking, Lending, dan protokol DeFi populer.",
    icon: "💎",
    color: "from-blue-400 to-purple-500",
    lessons: 15,
    students: 1234
  },
  { 
    id: 4, 
    title: "Modul 4: NFT & Metaverse", 
    duration: "3 Jam", 
    level: "Semua Level", 
    description: "Cara membuat, membeli, dan menjual aset digital non-fungible (NFT) dan ekosistem Metaverse.",
    icon: "🎨",
    color: "from-pink-400 to-rose-500",
    lessons: 10,
    students: 3142
  },
];

const ModulPage = () => {
  const [selectedLevel, setSelectedLevel] = useState("Semua");

  const filteredModuls = selectedLevel === "Semua" 
    ? ModulData 
    : ModulData.filter(m => m.level === selectedLevel);

  const levelColors = {
    "Pemula": "bg-green-100 text-green-700 border-green-200",
    "Menengah": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "Semua Level": "bg-blue-100 text-blue-700 border-blue-200"
  };

  return (
    <div className="space-y-12">
      {/* Header Section dengan Gradient */}
      <div className="text-center space-y-4">
        <div className="inline-block">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-3">
            Kurikulum Akademi Kripdick
          </h1>
          <div className="h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full"></div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Jalur pembelajaran terstruktur untuk menguasai dunia aset kripto dari dasar hingga mahir 🚀
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Modul", value: "4", icon: "📚", color: "from-blue-400 to-blue-600" },
          { label: "Total Durasi", value: "18 Jam", icon: "⏱️", color: "from-purple-400 to-purple-600" },
          { label: "Siswa Aktif", value: "8.7K+", icon: "👥", color: "from-pink-400 to-pink-600" },
          { label: "Rating", value: "4.9/5", icon: "⭐", color: "from-orange-400 to-orange-600" },
        ].map((stat, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl mb-3 shadow-md`}>
              {stat.icon}
            </div>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-3">
        {["Semua", "Pemula", "Menengah", "Semua Level"].map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
              selectedLevel === level
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Modul Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredModuls.map((modul) => (
          <div
            key={modul.id}
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 group"
          >
            {/* Card Header dengan Gradient */}
            <div className={`bg-gradient-to-br ${modul.color} p-8 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-6xl">{modul.icon}</div>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${levelColors[modul.level]} backdrop-blur-sm`}>
                    {modul.level}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white drop-shadow-md">{modul.title}</h2>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-6">{modul.description}</p>
              
              {/* Info Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{modul.lessons}</p>
                  <p className="text-xs text-gray-500 mt-1">Pelajaran</p>
                </div>
                <div className="text-center border-x border-gray-200">
                  <p className="text-2xl font-bold text-gray-800">{modul.duration}</p>
                  <p className="text-xs text-gray-500 mt-1">Durasi</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">{modul.students.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">Siswa</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className={`flex-1 bg-gradient-to-r ${modul.color} text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition duration-300`}>
                  Mulai Belajar →
                </button>
                <button className="px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition duration-300">
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative">
          <h2 className="text-4xl font-bold mb-4">Siap Memulai Perjalanan Kripto Anda?</h2>
          <p className="text-xl mb-8 text-purple-100">Bergabunglah dengan ribuan siswa yang sudah sukses belajar bersama kami!</p>
          <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            🚀 Daftar Sekarang Gratis!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModulPage;
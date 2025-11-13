import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section - Ultra Modern dengan Gradient */}
      <section className="relative text-center py-24 px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-3xl shadow-2xl overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold text-sm">
            ✨ Platform Edukasi Kripto #1 di Indonesia
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-lg">
            Kuasai Dunia<br />
            <span className="text-yellow-300">Cryptocurrency</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Belajar blockchain, trading, DeFi, dan NFT dari para ahli. Bergabunglah dengan 10,000+ member aktif!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-bold py-4 px-10 rounded-full shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              🚀 Mulai Belajar Gratis
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full backdrop-blur-sm transform transition duration-300 hover:bg-white hover:text-purple-600">
              📊 Lihat Harga Crypto
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: "👥", number: "10,000+", label: "Member Aktif" },
          { icon: "📚", number: "50+", label: "Modul Lengkap" },
          { icon: "🏆", number: "95%", label: "Success Rate" },
          { icon: "⭐", number: "4.9/5", label: "Rating Pengguna" }
        ].map((stat, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl text-center transform transition duration-300 hover:scale-105 shadow-xl">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
            <div className="text-sm text-white/80 font-medium">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
            Fitur Unggulan Kami
          </h2>
          <p className="text-xl text-gray-400">Semua yang Anda butuhkan dalam satu platform</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "📖",
              title: "Modul Interaktif",
              desc: "Belajar dengan video, quiz, dan studi kasus real-time",
              color: "from-pink-500 to-rose-500"
            },
            {
              icon: "💰",
              title: "Wallet Tracking",
              desc: "Monitor portfolio crypto Anda secara real-time",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: "👨‍🏫",
              title: "Mentor Expert",
              desc: "Bimbingan langsung dari praktisi profesional",
              color: "from-purple-500 to-indigo-500"
            },
            {
              icon: "📈",
              title: "Market Analysis",
              desc: "Analisis pasar terkini dan sinyal trading",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: "🎓",
              title: "Sertifikat Resmi",
              desc: "Dapatkan sertifikat setelah menyelesaikan modul",
              color: "from-orange-500 to-yellow-500"
            },
            {
              icon: "💬",
              title: "Komunitas Solid",
              desc: "Diskusi dan networking dengan sesama trader",
              color: "from-violet-500 to-purple-500"
            }
          ].map((feature, idx) => (
            <div key={idx} className="group bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-transparent hover:shadow-2xl transform transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>



    {/* Our Story Section */}
      <section className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
            Cerita Kami
          </h2>
          <p className="text-xl text-gray-400">Dari Kampus ke Komunitas Crypto Terbesar</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/3">
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-full h-full flex items-center justify-center shadow-2xl">
                  <span className="text-7xl">🎓</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-3xl font-black text-white mb-4">Berawal dari Persahabatan Kampus</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-cyan-400 font-bold">Akademi Kripdik</span> lahir dari passion dan persahabatan di bangku kuliah <span className="text-purple-400 font-bold">Universitas Gunadarma</span>. Kami adalah sekelompok mahasiswa yang terpesona dengan potensi teknologi blockchain dan cryptocurrency untuk mengubah dunia finansial.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dimulai dari diskusi-diskusi kecil di kantin kampus, kami menyadari bahwa pengetahuan tentang crypto masih sangat terbatas di Indonesia. Dari sinilah misi kami dimulai: <span className="text-yellow-400 font-semibold">mendemokratisasi edukasi cryptocurrency untuk semua orang</span>.
              </p>
            </div>
          </div>

          {/* Founders Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg">
                  SN
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">Seva Nonda</h4>
                  <p className="text-purple-300 font-semibold">Founder & Community Builder</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Visioner di balik Akademi Kripdik. Seva membangun komunitas dari nol dengan dedikasi tinggi untuk menciptakan ekosistem pembelajaran crypto yang inklusif dan supportif. Pengalaman tradingnya yang luas menjadi pondasi kurikulum kami.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">Community Leader</span>
                <span className="px-3 py-1 bg-pink-500/30 text-pink-200 rounded-full text-sm">Trading Expert</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-800/30 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg">
                  HR
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">Haical Ravinda</h4>
                  <p className="text-cyan-300 font-semibold">Co-Founder & Lead Developer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Arsitek teknologi di balik platform Akademi Kripdik. Haical mentransformasi visi menjadi kenyataan digital dengan keahlian development-nya, menciptakan pengalaman belajar yang interaktif dan user-friendly untuk ribuan member.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/30 text-cyan-200 rounded-full text-sm">Full-Stack Developer</span>
                <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">Tech Innovator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Komunitas Section dengan Foto */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 md:p-16 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold">
              🌟 Komunitas Terbesar di Indonesia
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Bergabung dengan Ribuan Trader Sukses
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Akademi Kripdik bukan hanya platform belajar, tapi keluarga besar yang saling support dalam perjalanan menuju kesuksesan finansial di dunia crypto.
            </p>
            <ul className="space-y-4">
              {[
                "Webinar eksklusif setiap minggu",
                "Grup diskusi Telegram & Discord 24/7",
                "Trading signals dari expert trader",
                "Akses tools analisis premium gratis"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-white text-lg">
                  <span className="mr-3 text-2xl">✅</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full shadow-xl transform transition duration-300 hover:scale-105 mt-6">
              Gabung Komunitas Sekarang
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-white text-2xl font-bold">Komunitas Kami</p>
                  <p className="text-white/80">10,000+ Member Aktif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
            Kata Mereka
          </h2>
          <p className="text-xl text-gray-400">Success stories dari member kami</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Yoga Rizky", role: "Trader Pemula", text: "Dalam 3 bulan, saya sudah profit 1000%! Materinya sangat mudah dipahami." },
            { name: "Haical Ravinda", role: "Mahasiswa", text: "Komunitas yang sangat supportif. Mentor selalu siap membantu!" },
            { name: "Seva Nonda", role: "Mahasiswa", text: "Passive income dari crypto berkat ilmu di Akademi Kripdik. Worth it!" }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="text-yellow-400 text-2xl mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl py-16 px-6 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Siap Memulai Perjalanan Crypto Anda?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Jangan lewatkan kesempatan emas untuk menguasai dunia cryptocurrency. Mulai sekarang, gratis!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/modul" 
            className="inline-block bg-white text-purple-600 font-bold py-4 px-10 rounded-full transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            📚 Lihat Semua Modul
          </Link>
          <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full backdrop-blur-sm transform transition duration-300 hover:bg-white hover:text-purple-600">
            💬 Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header/Navbar Modern dengan Glass Effect */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo dengan Gradient */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition duration-300 shadow-lg">
                <span className="text-white text-xl font-bold">⚛️</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Akademi Kripdik
              </span>
            </Link>

            {/* Navigation Links dengan Style Modern */}
            <div className="flex items-center space-x-2">
              <Link 
                href="/" 
                className="px-6 py-2.5 rounded-xl text-gray-700 font-semibold hover:bg-white hover:shadow-md transition duration-300"
              >
                🏠 Beranda
              </Link>
              <Link 
                href="/modul" 
                className="px-6 py-2.5 rounded-xl text-gray-700 font-semibold hover:bg-white hover:shadow-md transition duration-300"
              >
                📚 Modul
              </Link>
              <Link 
                href="/wallet" 
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition duration-300"
              >
                💰 Wallet
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Konten Halaman dengan relative positioning */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer Modern dengan Glass Effect */}
      <footer className="relative mt-20 backdrop-blur-md bg-white/70 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Tentang Kami
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Platform edukasi kripto terbaik untuk memulai perjalanan investasi digital Anda dengan aman dan terpercaya.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Tautan Cepat
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/modul" className="text-gray-600 hover:text-purple-600 transition">
                    📖 Materi Pembelajaran
                  </Link>
                </li>
                <li>
                  <Link href="/wallet" className="text-gray-600 hover:text-purple-600 transition">
                    💳 Dompet Digital
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                    📞 Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                Ikuti Kami
              </h3>
              <div className="flex space-x-3">
                {['📘', '🐦', '📷', '💼'].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white hover:from-purple-500 hover:to-pink-500 shadow-md hover:shadow-lg transform hover:scale-110 transition duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Akademi Kripdick</span>. Belajar Kripto, Tanpa Ribet. ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
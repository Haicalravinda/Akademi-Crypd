

import './globals.css';
import Layout from '@/components/Layout'; // Import komponen Layout dari components/

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {/* Bungkus children dengan Layout yang sudah kita buat di Step 3 */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
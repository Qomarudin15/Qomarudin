import "./App.css";
export function About() {
    return(
      <div className="about-us">
      <h2>Layanan Kami</h2>
      <p>Beberapa layanan yang akan mempermudah Website anda</p>
            <div className="tiles">
            <div className="tile">
              <h3>Desain dan Pembangunan Website Custom</h3>
              <p>Layanan ini mencakup pembuatan website dari awal dengan desain yang disesuaikan sepenuhnya dengan kebutuhan dan preferensi pelanggan. kami akan bekerja sama dengan klien untuk mengembangkan konsep, merancang tata letak, memilih warna, dan mengintegrasikan fitur-fitur yang mereka inginkan.</p>
              <i className="fas fa-wrench"></i>
            </div>
            <div className="tile">
              <h3>Pembuatan Website Responsif</h3>
              <p>Membuat website yang responsif adalah penting karena memastikan bahwa website akan terlihat dan berfungsi dengan baik pada berbagai perangkat, termasuk desktop, tablet, dan ponsel. Layanan ini mencakup perancangan dan pengembangan website agar dapat menyesuaikan dengan ukuran dan tampilan layar yang berbeda.</p>
              <i className="fas fa-cogs"></i>
            </div>           
          </div>
          <div className="tiles">
           
            <div className="tile">
              <h3>Pembuatan Toko Online E-commerce</h3>
              <p>Membantu pelanggan yang ingin menjual produk atau layanan secara online dengan pembuatan toko online. Ini melibatkan pengembangan website dengan fitur-fitur seperti daftar produk, keranjang belanja, pembayaran online, manajemen inventaris, dan sistem pengiriman. Layanan ini sangat cocok untuk bisnis yang ingin memasarkan produk mereka secara online</p>
              <i className="fas fa-server"></i>
            </div>
            <div className="tile">
              <h3>Layanan Pemeliharaan dan Dukungan Website</h3>
              <p>Setelah website selesai, penting untuk terus memeliharanya agar tetap berjalan dengan baik dan aman. Anda dapat menawarkan layanan pemeliharaan berkala, pembaruan perangkat lunak, serta dukungan teknis kepada klien Anda. Ini akan membantu menjaga website tetap up-to-date dan berfungsi dengan baik seiring berjalannya waktu.</p>
              <i className="fas fa-recycle"></i>
            </div>
           
          </div>
          </div>

    );
};
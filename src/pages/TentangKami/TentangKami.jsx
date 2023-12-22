import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import "./TentangKami.css";
import Foto from "../../assets/image/Tentang-Kami.svg";
import { useEffect } from "react";

const TentangKami = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="navbar-parent">
      <Navbar />
      <div>
        <div className="header-tentang-kami">
          <h1 className="title-header-tentang-kami">Tentang Kami</h1>
        </div>
        <div className="container-tentang-kami">
          <h1 className="title-content-tentang-kami">Jejak Budaya Nusantara</h1>
          <div className="content-tentang-kami">
            <div className="content-top-tentang-kami">
              <p className="desc-top-tentang-kami">
                Selamat datang di Jejak Budaya Nusantara, ruang di mana
                keindahan dan kekayaan budaya Nusantara diungkap dengan penuh
                semangat. Kami adalah komunitas yang berdedikasi untuk
                melestarikan, mempromosikan, dan membagikan kekayaan warisan
                budaya Indonesia. Jejak Budaya Nusantara lahir dari keinginan
                kami untuk menjelajahi dan menghormati berbagai aspek kehidupan
                dan kebudayaan di seluruh kepulauan Indonesia. Kami memahami
                bahwa keberagaman budaya adalah kekayaan yang perlu dijaga, dan
                melalui platform ini, kami berusaha menyajikan suatu ruang di
                mana cerita-cerita beraneka ragam dari Nusantara dapat
                ditemukan.
              </p>
              <img className="image-tentang-kami" src={Foto} alt="foto kami" />
            </div>
            <h1 className="title-content-tentang-kami">Visi & Misi</h1>
            <p className="desc-bot-tentang-kami">
              Visi kami adalah menjadi jembatan yang menghubungkan masyarakat
              dengan warisan budaya Nusantara, menciptakan pemahaman yang lebih
              dalam tentang kekayaan sejarah, tradisi, dan seni yang dimiliki
              oleh bangsa Indonesia.
            </p>
            <ul className="desc-bot-tentang-kami"> Misi kami adalah:
              <li className="desc-bot-tentang-kami">
                Melestarikan Kekayaan Budaya: Kami berkomitmen untuk
                melestarikan dan merawat warisan budaya Nusantara agar dapat
                dinikmati oleh generasi sekarang dan yang akan datang.
              </li>
              <li className="desc-bot-tentang-kami">
                Memperkenalkan Keindahan Nusantara: Melalui artikel, foto, dan
                konten multimedia lainnya, kami berusaha memperkenalkan
                keindahan alam dan keunikan budaya dari setiap sudut Indonesia.
              </li>
              <li className="desc-bot-tentang-kami">
                Menjadi Sumber Pengetahuan: Jejak Budaya Nusantara ingin menjadi
                sumber pengetahuan yang dapat diandalkan tentang budaya
                Indonesia, menyediakan informasi yang akurat dan mendalam.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TentangKami;

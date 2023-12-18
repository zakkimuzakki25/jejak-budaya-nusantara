import React, { useEffect, useRef } from "react";
import BatikAwan from "../../assets/support/BatikAwan.svg";
import './HomeAwan.css';

const HomeAwan = () => {
  const batikAwanRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const batikAwan = batikAwanRef.current;

      if (batikAwan) {
        const rect = batikAwan.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isVisible) {
          batikAwan.classList.add("visible");
        }
      }
    };

    // Tambahkan event listener untuk menanggapi event scroll
    window.addEventListener('scroll', handleScroll);

    // Panggil handleScroll saat halaman dimuat
    handleScroll();

    // Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="batik-awan" ref={batikAwanRef}>
      <img src={BatikAwan} alt="batik-atas" className="batik-awan-kiriatas" />
      <img src={BatikAwan} alt="batik-atas" className="batik-awan-kananatas" />
      <img src={BatikAwan} alt="batik-bawah" className="batik-awan-kiribawah-atas" />
      <img src={BatikAwan} alt="batik-bawah" className="batik-awan-kiribawah-bawah" />
      <img src={BatikAwan} alt="batik-bawah" className="batik-awan-kananbawah-atas" />
      <img src={BatikAwan} alt="batik-bawah" className="batik-awan-kananbawah-bawah" />
    </div>
  );
};

export default HomeAwan;

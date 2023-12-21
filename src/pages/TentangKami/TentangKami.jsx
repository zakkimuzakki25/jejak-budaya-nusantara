import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const TentangKami = () => {
  return (
    <>
      <Navbar />
      <div>
        <div
          style={{
            display: "flex",
            padding: "24px 48px",
            backgroundColor: "#879d80",
          }}
        >
          <h1
            style={{
              margin: "0px",
              color: "white",
              fontFamily: "Handlee",
              fontSize: "48px",
            }}
          >
            Tentang Kami
          </h1>
        </div>
        <div
          style={{
            padding: "24px 48px",
          }}
        >
          <h1
            style={{
              margin: "0px",
              fontFamily: "Montserrat",
              fontSize: "36px",
              fontWeight: "semibold",
            }}
          >
            Jejak Budaya Nusantara
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                width: "65%",
                textAlign: "left",
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: "regular",
                lineHeight: "1.5",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut mi augue. Etiam dapibus maximus dui sit amet egestas.
              Vestibulum condimentum orci sed sem egestas molestie. Sed
              tristique dui eros, in lacinia tellus pulvinar in. Maecenas
              suscipit ut ligula at pretium.
            </p>
            <p>gambar disini</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TentangKami;

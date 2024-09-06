import "bootstrap/dist/css/bootstrap.min.css";
import hakkimizdaImage from "../../assets/images/bunner.jpg";
const About = () => {
  return (
    <div>
      {/* Üst kısım: Resim */}
      <div className="container-fluid p-0">
        <img
          src={hakkimizdaImage}
          alt="Hakkımızda"
          className="img-fluid w-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Başlık ve Paragraf */}
      <div className="container mt-3 text-center">
        <h1 className="mb-3">Hakkımızda</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet.
        </p>
      </div>
    </div>
  );
};

export default About;

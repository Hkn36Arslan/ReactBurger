import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-image d-flex justify-content-start align-items-end">
      <Link to={"/menu"}>
        <button className="btn btn-danger m-5 px-4">
          SİPARİŞ VER
        </button>
      </Link>
    </div>
  );
};

export default Home;

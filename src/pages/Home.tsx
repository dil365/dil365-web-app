import { useLoaderData } from "react-router";
import CardComponent from "../components/Card";

function HomePage() {
  const clapsit = useLoaderData();

  return (
    <div id="home-page">
      <CardComponent value={clapsit.data} />
      <br />
      <div style={{ width: "100%", textAlign: "center" }}>
        <button
          style={{ width: "90%", textAlign: "center" }}
          onClick={() => window.location.reload()} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  )
};

export default HomePage;

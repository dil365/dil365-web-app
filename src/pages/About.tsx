import { NavLink } from "react-router";

function AboutPage() {
  return (
    <div id="about-page">
      <h1>This is a About page</h1>
      <NavLink to="/login">login</NavLink>
    </div>
  );
}

export default AboutPage;

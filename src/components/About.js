import { Outlet } from "react-router-dom";
import Profile from "./Profile";
const About = () => {
  return (
    <>
      <h1>About us page</h1>
      <Profile name="Genius" />
    </>
  );
};

export default About;

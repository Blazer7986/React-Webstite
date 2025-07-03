import Contact from "../pages/Contact";
import { Outlet } from "react-router-dom";
import StopWatch from "../components/StopWatch";
import ComponentA from "../components/ComponentA";
const ContactLayout = () => {
  return (
    <div>
      <Contact />
      <Outlet />
      <StopWatch />
      <ComponentA />
    </div>
  );
};

export default ContactLayout;

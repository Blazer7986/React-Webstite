import Contact from "../pages/Contact";
import { Outlet } from "react-router-dom";
import StopWatch from "../components/StopWatch";
import ComponentA from "../components/ComponentA";
const ContactLayout = () => {
  return (
    <div className="pb-10">
      <Contact />
      <Outlet />
      <StopWatch />
      <ComponentA />
    </div>
  );
};

export default ContactLayout;

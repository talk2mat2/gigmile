import React from "react";
import SideNav from "./Sidenav";

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const toggleNav = () => setOpen(!open);
  return (
    <div className="flex flex-row">
      {open && <SideNav toggleNav={toggleNav} />}
      <div className="main-body  px-[10px] md:px-[15px] lg:px-[50px]">
        {React.cloneElement(children, { toggleNav })}
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.png";

const Header = () => {
  return (
    <div>
      <Image src={Logo} alt="Portfolio Logo" />
      <nav>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </nav>
      <button>Say Hello!</button>
    </div>
  );
};

export default Header;

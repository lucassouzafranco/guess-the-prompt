import React from "react";
import './Menu.css';
import { RiOpenaiFill } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { HiMiniMoon } from "react-icons/hi2";

const Menu: React.FC = () => {
  return (
    <div className="MenuContainer">
      <div className="MenuContent">
        <div className="IconsAtLeft">
          <RxQuestionMarkCircled className="DoubtsIcon"/>
          <RiOpenaiFill className="OpenAIcon" />
        </div>
        guess the prompt_
        <div className="IconsAtRight">
          <FaGithub className="GitHubIcon"/>
          <HiMiniMoon className="DarkModeIcon"/>
        </div>
      </div>
    </div>
  );
};

export default Menu;

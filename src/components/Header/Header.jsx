
import React from 'react';
import "./header.css";
import { AiFillHome, AiOutlineContacts } from "react-icons/ai";

// https://www.npmjs.com/package/react-typing-effect
// React-typing-effect
import ReactTypingEffect from 'react-typing-effect';


function Header() {
  return (
    <div className="header">
        <div className="header-left">
        <a href='#intro'>
          <AiFillHome className="header-home"/>
          </a>
        </div>
      <div className="header-right">
          <a href='#contact'>
          <AiOutlineContacts className="header-button"/>
          </a>
      </div>
    </div>
  );
}

export default Header;

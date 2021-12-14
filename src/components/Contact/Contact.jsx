import React from 'react';
// import Typical from 'react-typical'
import "./contact.css";
import Me from "../../img/icac.png";
import {FaGithubSquare, FaLinkedin, FaMailBulk} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@mui/material/Alert';


function Contact() {
  const [copied, setCopied] = React.useState(null);
  function copyText(txt) {
    setCopied(txt);
    navigator.clipboard.writeText(txt);
  }

  return (
    <div className="contact">
        <h1>Contact</h1>
        <div className="link">
        <FaGithubSquare className="contact-social-button"
          onClick={() => copyText("github")}/>
          <p>https://github.com/</p>
          <MdContentCopy className="contact-copy-button"
            onClick={() => copyText("github")}/>
        
        </div>
        <div className="link">
        <FaLinkedin className="contact-social-button"/>
        <p>https://www.linkedin.com/feed/</p>
        </div>
        <div className="link">
        <FiMail className="contact-social-button"/>
        <p>haha.gmail</p>
        </div>
        <Snackbar open={open} autoHideDuration={6000}>
          <Alert severity="success">
            This isfsfsfs a succsfsfess message!
          </Alert>
        </Snackbar>
    </div>
  );
};

export default Contact;
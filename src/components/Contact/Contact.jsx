import React from 'react';
// import Typical from 'react-typical'
import "./contact.css";
import Me from "../../img/icac.png";
import {FaGithubSquare, FaLinkedin, FaMailBulk} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


function Contact() {
  const [copied, setCopied] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  function copyText(txt) {
    setCopied(txt);
    setOpen(true);
    navigator.clipboard.writeText(txt);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="contact">
        <h1>Contact</h1>
        <div className="contact-link">
        <FaGithubSquare className="contact-social-button"
          onClick={() => copyText("github")}/>
          <p>https://github.com/</p>
          <MdContentCopy className="contact-copy-button"
            onClick={() => copyText("github")}/>
        </div>
        <div className="contact-link">
          <FaLinkedin className="contact-social-button"/>
          <p>https://www.linkedin.com/feed/</p>
          <MdContentCopy className="contact-copy-button"
            onClick={() => copyText("https://www.linkedin.com/feed/")}/>
        </div>
        <div className="contact-link">
        <FiMail className="contact-social-button"/>
          <p>haha.gmail</p>
          <MdContentCopy className="contact-copy-button"
              onClick={() => copyText("haha.gmail")}/>
        </div>
        <Snackbar
          open={open}
          key={copied ? copied : undefined}
          autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success">
            {copied} copied!
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={()=>setOpen(false)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Alert>          
        </Snackbar>
        <p className="contact-hidden">save space for the snack bar</p>
    </div>
  );
};

export default Contact;
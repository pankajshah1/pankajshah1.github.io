import React, { useState, useEffect } from "react";
import classes from "./contact.module.css";
import axios from "../axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    femail: "",
    fmessage: "",
  });
  const [sending, setSending] = useState("Get In Touch");
  useEffect(() => {});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function sumbitForm(e) {
    e.preventDefault();
    setSending("Sending....");
    console.log(data);
    const userData = {
      name: data.fname,
      email: data.femail,
      message: data.fmessage,
    };
    axios
      .post("/mail.json", userData)
      .then((res) => {
        console.log(res);
        setSending("Sent");
        setData({
          femail: "",
          fmessage: "",
          fname:""
        })
      })
      .catch((err) => {
        console.log(err);
        setData("Pls Send Again");
      });
  }

  return (
    <div className={classes.conContainer}>
      <div className={classes.viewPage}>
        <div className={classes.getInTouch}>
          <div className={classes.workTogether}>
            <p className={classes.firstP}>Let's Work Together</p>
            <p className={classes.secondP}>
              Have a project you'd like to discuss?
            </p>
          </div>
          <div className={classes.formWrapper}>
            <form
              // method="POST"
              // action="https://kwes.io/api/foreign/forms/7vQScwE5tX666we9okTP"
              onSubmit={sumbitForm}
            >
              <p>Name</p>
              <input
                type="text"
                name="fname"
                rules="required"
                value={data.fname}
                onChange={handleChange}
              />
              <p>E-mail</p>
              <input
                type="email"
                name="femail"
                value={data.femail}
                onChange={handleChange}
                rules="required|email|max:255"
              />
              <p>Message</p>
              <textarea
                name="fmessage"
                rules="required"
                value={data.fmessage}
                onChange={handleChange}
              ></textarea>
              <button className={classes.btn} type="submit">
                {sending}
              </button>
            </form>
          </div>
        </div>
        <div className={classes.getSocial}>
          <div className={classes.faCode}>
            <a
              className={classes.mail}
              href="mailTo:pshah9411@gmail.com"
              style={{ color: "black" }}
            >
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />{" "}
            </a>
            <a href="mailTo:pshah9411@gmail.com" className={classes.text}>
              pshah9411@gmail.com
            </a>
          </div>

          <div className={classes.faCode1}>
            <a
              href="https://twitter.com/pankajshah_1"
              style={{ color: "black" }}
            >
              {" "}
              <FontAwesomeIcon icon={faTwitter} />{" "}
            </a>
            <a
              href="https://twitter.com/pankajshah_1"
              target="blank"
              className={classes.text}
            >
              On Twitter
            </a>
          </div>
          <div className={classes.faCode1}>
            <a
              href="https://linkedin.com/pankajshah3"
              style={{ color: "black" }}
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} />{" "}
            </a>
            <a
              href="https://linkedin.com/pankajshah3"
              target="blank"
              className={classes.text}
            >
              On LinkedIn
            </a>
          </div>
          <div className={classes.faCode1}>
            <a
              href="https://github.com/paankajshah/"
              style={{ color: "black" }}
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} />{" "}
            </a>
            <a
              href="https://github.com/paankajshah/"
              target="blank"
              className={classes.text}
            >
              On Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

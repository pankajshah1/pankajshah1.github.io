import React from 'react';
import "./project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
const Project =()=>{
  console.log("project triggered");
function animationT(e){
console.log(e);
}
  return(
    <div className="App">
    <div className="mainContent">
      <div onClick={(e) => animationT(e)} className="elements  image-bottom">
        <div className="image-hidden">
          <img
          className="corona-gif"
            src="https://user-images.githubusercontent.com/47686377/85778727-998b7700-b742-11ea-9e31-c174b52f8a74.gif"
            alt="no image"
          />{" "}
        </div>
        <div className="text">
          <h1>Corona Tracker Nepal</h1>
          <p>
            Shows realtime covid-19 status of Nepal. Total infected , total recovered and total deaths data is shown district and province wise both. CharJs is used to visualize the data in graphs.  
          </p>
          <img
            className="svg"
            src="https://img.shields.io/badge/Platform-Web-brightgreen.svg"
            alt="Platform-Web"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/package-json/v/paankajshah/coronatrackernepal"
            alt="Version-0.1.0"
            height="20px"
            width="50px"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/repo-size/paankajshah/coronatrackernepal"
            alt="Repo_Size-427-KB"
          />
          <img
            className="svg svg-long"
            src="https://img.shields.io/badge/Languages-HTML,_CSS,_JS-red.svg"
            alt="Language-HTML,_CSS,_JS"
          />
          <img
            className="svg"
            src="https://img.shields.io/badge/Library-React-0769ad.svg"
            alt="Library-React"
          />
          <img
            className="svg"
            src="https://img.shields.io/badge/Editor-VS%20code-blue"
            alt="editor-vs-code"
          />
          <img
            className="svg svg-long"
            src="https://img.shields.io/badge/Framework-Material--UI-brightgreen"
            alt="Library-Material-UI"
          />
        <div className="github">view <FontAwesomeIcon icon={faCode} spin color="blue"/> at Github  <a href="https://github.com/Paankajshah/CoronaTrackerNepal" target="_blank" ><img className="github-icon" src="/images/github-brands.svg" /></a></div>

        </div>
        <div className="image image-to-hide">
          <img
            src="https://user-images.githubusercontent.com/47686377/85778727-998b7700-b742-11ea-9e31-c174b52f8a74.gif"
            alt="no image"
          />{" "}
        </div>
      </div>
      <div className="elements">
        <div className="image">
          <img
            src="https://user-images.githubusercontent.com/47686377/91383103-0dcdbe00-e84b-11ea-871f-cc065f5e57c2.gif"
            alt="no image"
          />{" "}
        </div>
        <div className="text">
          <h1>MERN Login/Signup </h1>

          <p>
           A simple login and signup form implementaion developed using MERN stack (mongodb, express, React and NodeJs). A mail server is used to send otp code at the time of registration and only lets the verified user to login. Bootstrap is used for styling the page. 
          </p>
          <img
            className="svg"
            src="https://img.shields.io/badge/Platform-Web-brightgreen.svg"
            alt="Platform-Web"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/package-json/v/paankajshah/mern_otpbased_login-signup_using_react_and_redux"
            alt="Version-0.1.0"
            height="20px"
            width="50px"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/repo-size/paankajshah/mern_otpbased_login-signup_using_react_and_redux"
            alt="Repo_Size-972_KB"
          />
          <img
            className="svg svg-extraLong"
            src="https://img.shields.io/badge/Runtime%20Environment-node.js-yellowgreen"
            alt="node.js"
          />
          <img
            className="svg svg-long"
            src="https://img.shields.io/badge/Languages-HTML,_CSS,_JS-red.svg"
            alt="Language-HTML,_CSS,_JS"
          />
          <img
            className="svg"
            src="https://img.shields.io/badge/Library-React-0769ad.svg"
            alt="Library-React"
          />
          <img
            className="svg"
            src="https://img.shields.io/badge/Editor-VS%20code-blue"
            alt="editor-vs-code"
          />
          <img
            className="svg svg-long"
            src="https://img.shields.io/badge/Framework-Bootstrap-563d7c.svg"
            alt="Library-Bootstrap"
          />
        <div className="github">view <FontAwesomeIcon icon={faCode} spin color="blue"/> at Github  <a href="https://github.com/Paankajshah/mern_otpbased_login-signup_using_react_and_redux" target="_blank" ><img className="github-icon" src="/images/github-brands.svg" /></a></div>
  
        </div>
      </div>
      <div className="elements image-bottom">
        <div className="image-hidden">
          <img
            src="https://user-images.githubusercontent.com/47686377/91868428-6f02f080-ec94-11ea-91bf-162f613a33c5.gif"
            alt="no image"
          />{" "}
        </div>
        <div className="text">
          <h1>Simple Lottery System using Blockchain</h1>

          <p>
            A lottery system developed using React and truffle suite. any user can buy a lottery paying 1ETH and as many times they want and wait for the result, admin decides when to end the lottery and smart contract automatically picks the winner using Keccack algorithm. 
          </p>
          <img
            className="svg"
            src="https://img.shields.io/badge/Platform-Web-brightgreen.svg"
            alt="Platform-Web"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/package-json/v/paankajshah/coronatrackernepal"
            alt="Version-0.1.0"
            height="20px"
            width="50px"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/repo-size/paankajshah/simple-lottery-system-using-blockchain"
            alt="Repo_Size-203_KB"
          />
          <img
            className="svg svg-long svg-extraLong"
            src="https://img.shields.io/badge/Languages-HTML,_CSS,_JS,_Solidity-red.svg"
            alt="Language-HTML,_CSS,_JS"
          />
          <img
            className="svg svg-long"
            src="https://img.shields.io/badge/Library-React%2C%20Truffle-orange"
            alt="Library-React-truffle"
          />
          <img
            className="svg"
            src="https://img.shields.io/badge/Editor-VS%20code-blue"
            alt="editor-vs-code"
          />
        <div className="github">view <FontAwesomeIcon icon={faCode} spin color="blue"/> at Github  <a href="https://github.com/Paankajshah/Simple-Lottery-System-using-Blockchain" target="_blank" ><img className="github-icon" src="/images/github-brands.svg" /></a></div>
        
        </div>
        <div className="image image-to-hide">
          <img
            src="https://user-images.githubusercontent.com/47686377/91868428-6f02f080-ec94-11ea-91bf-162f613a33c5.gif"
            alt="no image"
          />{" "}
        </div>
      </div>
      <div className="elements">
        <div className="image">
          <img
            src="https://miro.medium.com/max/3204/1*O3HkUp_-w749q9CWB8ycSA.png"
            alt="no image"
          />{" "}
        </div>
        <div className="text">
          <h1>E-voting using Blockchain</h1>

          <p>
            A full stack blockchain project where testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM) is implemented from truffle box, nodeJs is used to store the information about voter and candidate and React is used for the frontend. 2FA is enabled in this project.
          </p>
          <img
            className="svg"
            src="https://img.shields.io/badge/Platform-Web-brightgreen.svg"
            alt="Platform-Web"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/package-json/v/paankajshah/coronatrackernepal"
            alt="Version-0.1.0"
            height="20px"
            width="50px"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/repo-size/paankajshah/voting"
            alt="Repo_Size-1.63_MB"
          />
          <img
            className="svg svg-long svg-extraLong"
            src="https://img.shields.io/badge/Languages-HTML,_CSS,_JS,_Solidity-red.svg"
            alt="Language-HTML,_CSS,_JS"
          />
          <img
            className="svg svg-long"
            src="https://img.shields.io/badge/Library-React%2C%20Truffle-orange"
            alt="Library-React-truffle"
          />
          <img
            className="svg"
            src="https://img.shields.io/badge/Editor-VS%20code-blue"
            alt="editor-vs-code"
          />
        <div className="github">view <FontAwesomeIcon icon={faCode} spin color="blue"/> at Github  <a href="https://github.com/Paankajshah/Voting" target="_blank" ><img className="github-icon" src="/images/github-brands.svg" /></a></div>
        {/* <i style={{fontSize:"100px"}} className="devicon-nodejs-plain colored"></i> */}
        </div>
      </div>

      <div className="elements image-bottom">
        <div className="image-hidden">
          <img
            src="https://user-images.githubusercontent.com/47686377/91868428-6f02f080-ec94-11ea-91bf-162f613a33c5.gif"
            alt="no image"
          />{" "}
        </div>
        <div className="text">
          <h1>My Portfolio</h1>

          <p>
            A technical portfolio developed using React and pure CSS. For  animation gsap library is used. All the components in the project are functional component i.e React hooks is used all over in this project A single page application where all the information about me and my projects is mentioned.
          </p>
          <img
            className="svg"
            src="https://img.shields.io/badge/Platform-Web-brightgreen.svg"
            alt="Platform-Web"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/package-json/v/paankajshah/coronatrackernepal"
            alt="Version-0.1.0"
            height="20px"
            width="50px"
          />
          <img
            className="svg"
            src="https://img.shields.io/github/repo-size/paankajshah/simple-lottery-system-using-blockchain"
            alt="Repo_Size-203_KB"
          />
          <img
            className="svg svg-long svg-extraLong"
            src="https://img.shields.io/badge/Languages-HTML,_CSS,_JS-red.svg"
            alt="Language-HTML,_CSS,_JS"
          />
          <img
            className="svg"
            src="https://img.shields.io/badge/Library-React-orange"
            alt="Library-React-truffle"
          />
          <img
            className="svg"
            src="https://img.shields.io/badge/Editor-VS%20code-blue"
            alt="editor-vs-code"
          />
        <div className="github">view <FontAwesomeIcon icon={faCode} spin color="blue"/> at Github  <a href="https://github.com/Paankajshah/Simple-Lottery-System-using-Blockchain" target="_blank" ><img className="github-icon" src="/images/github-brands.svg" /></a></div>
        
        </div>
        <div className="image image-to-hide">
          <img
            src="https://user-images.githubusercontent.com/47686377/91868428-6f02f080-ec94-11ea-91bf-162f613a33c5.gif"
            alt="no image"
          />{" "}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Project
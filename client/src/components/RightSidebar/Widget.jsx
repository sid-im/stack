import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Helpstack Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
           7th sem results declared(check now at eresults.Kletech.ac.in) 
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>AI/ML workshop being conducted by SoECE</p>
        </div>
      </div>
      <h4>SoECE Events </h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>Chodechef team Requires a Frontend Developer</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
           Mini Project and Minor project Exhibition being conducted 
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18" />
          <p>
           Prakalp Entrance exams being conducted on 18/12/2024
          </p>
        </div>
      </div>
      <h4>Competetive Exams Blogs</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>
        Gate 2024 applications are now open.check at official page 
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
        What are some best youtube channels to prepare for Gate 2024
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Digital circuits and Analog electronics workshop being conducted by Seniors in upcoming weeks</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;

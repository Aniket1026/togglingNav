import React, { useState } from "react";

import up from "./../../images/icon-arrow-up.svg";
import down from "./../../images/icon-arrow-down.svg";
import close from "./../../images/icon-close-menu.svg";
import todo from "./../../images/icon-todo.svg";
import calendar from "./../../images/icon-calendar.svg";
import reminders from "./../../images/icon-reminders.svg";
import planning from "./../../images/icon-planning.svg";
import menu from "./../../images/icon-menu.svg";
import "./Navbar.css";

const Navbar = () => {
  const [featuresToggle, setFeaturesToggle] = useState(true);
  const [companyToggle, setCompanyToggle] = useState(true);
  const [menuToggle, setMenuToggle] = useState(true);

  const menutoggle = () => {
    setMenuToggle(!menuToggle)
  }

  const toggleCompany = () => {
    setCompanyToggle(!companyToggle);
  };

  const toggleFeature = () => {
    setFeaturesToggle(!featuresToggle);
  };

  return (
    <div className="wrapper">
      <nav>
        <div className="snap">
          <span> Snap</span>
        </div>
        <div className="nav-right">
          <div className="nav-right1">
            <div className="features">
              <div>
                <span className="feature">
                  Features
                  <img
                    src={featuresToggle ? down : up}
                    alt="down"
                    onClick={toggleFeature}
                  />
                </span>
              </div>
              {!featuresToggle ? (
                <div className="options">
                  <span>
                    <img src={todo} alt="todo" /> Todolist
                  </span>
                  <span>
                    <img src={calendar} alt="calendar" />
                    Calendars
                  </span>
                  <span>
                    <img src={reminders} alt="reminders" />
                    Reminders
                  </span>
                  <span>
                    <img src={planning} alt="planning" />
                    Planning
                  </span>
                </div>
              ) : null}
            </div>
            <div className="company-container">
              <div>
                <span className="company">
                  Company
                  <img
                    src={companyToggle ? down : up}
                    alt="down"
                    onClick={toggleCompany}
                  />
                </span>
              </div>
              {!companyToggle ? (
                <div className="options">
                  <span>History</span>
                  <span>Our Team</span>
                  <span>Blog</span>
                </div>
              ) : null}
            </div>
            <div>
              <span className="careers">Careers</span>
            </div>
            <div>
              <span className="about">About</span>
            </div>
          </div>
          <div className="nav-right2">
            <span>Login</span>
            <button>Register</button>
          </div>

          {!menuToggle ? (
            <div className="collapse slide-right">
              <img
                src={close}
                alt="close"
                className="close"
                onClick={menutoggle}
              />
              <div className="lorem">
                <ul>
                  <li>
                    Features
                    <img src={down} alt="down" onClick={toggleFeature} />
                  </li>
                  {!featuresToggle ? (
                    <div className="options">
                      <span>
                        <img src={todo} alt="todo" /> Todolist
                      </span>
                      <span>
                        <img src={calendar} alt="calendar" />
                        Calendars
                      </span>
                      <span>
                        <img src={reminders} alt="reminders" />
                        Reminders
                      </span>
                      <span>
                        <img src={planning} alt="planning" />
                        Planning
                      </span>
                    </div>
                  ) : null}

                  <li>
                    Company
                    <img src={down} alt="down" onClick={toggleCompany} />
                  </li>
                  {!companyToggle ? (
                    <div className="options">
                      <span>History</span>
                      <span>Our Team</span>
                      <span>Blog</span>
                    </div>
                  ) : null}
                  <li>Careers</li>
                  <li>About</li>
                </ul>
              </div>
              <div className="nav-right2">
                <span>Login</span>
                <button>Register</button>
              </div>
            </div>
          ) : (
            <div className="menuItem" onClick={menutoggle}>
              <img src={menu} alt="menu" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

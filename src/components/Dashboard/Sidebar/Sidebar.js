import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faPlus,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user.email);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://desolate-castle-51363.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <div
            className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
            style={{ height: "100vh" }}
          >
            <ul className="list-unstyled">
              <li>
                <li>
                  <Link to="/addReviews" className="text-white">
                    <FontAwesomeIcon icon={faComment} />{" "}
                    <span>Add Reviews</span>
                  </Link>
                </li>
                <Link to="/" className="text-white">
                  <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
              </li>
              {isAdmin && (
                <div>
                  <li>
                    <Link to="/adminDashboard" className="text-white">
                      <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                      <span>Manage Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addServices" className="text-white">
                      <FontAwesomeIcon icon={faPlus} />{" "}
                      <span>Add Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addAdmin" className="text-white">
                      <FontAwesomeIcon icon={faUserPlus} />{" "}
                      <span>Add Admin</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/manage" className="text-white">
                      <FontAwesomeIcon icon={faCog} />{" "}
                      <span>Manage Service</span>
                    </Link>
                  </li>
                </div>
              )}
            </ul>
            <div>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

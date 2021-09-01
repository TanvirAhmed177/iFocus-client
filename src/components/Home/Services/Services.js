import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://desolate-castle-51363.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ">
            <span className="subheading">
              <b className="text-brand">We offer Services</b>
            </span>
            <h2>Our photography services</h2>
          </div>
        </div>

        <div id="cards_landscape_wrap-2">
          <div className="container">
            <div className="row">
              {" "}
              {services.map((service) => (
                <ServiceDetail service={service}></ServiceDetail>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

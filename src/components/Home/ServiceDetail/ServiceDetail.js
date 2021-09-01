import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./ServiceDetail.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceDetail = ({ service }) => {
  const { name, detail, imageUrl } = service;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    // <div className="col-md-4 services d-flex align-items-stretch shadow-sm">
    //   <div className="d-flex" style={{ border: "1px solid gray" }}>
    //     <div className="icon d-flex justify-content-center align-items-center">
    //       <animated.div
    //         className="card"
    //         onMouseMove={({ clientX: x, clientY: y }) =>
    //           set({ xys: calc(x, y) })
    //         }
    //         onMouseLeave={() => set({ xys: [0, 0, 1] })}
    //         style={{ transform: props.xys.interpolate(trans) }}
    //       >
    //         <img src={imageUrl} alt="" />
    //       </animated.div>
    //     </div>
    //     <div className="media-body pl-3">
    //       <h3 className="heading">{name}</h3>
    //       <p>{detail}</p>
    //       <Link
    //         to={`/checkout/${name}`}
    //         className=" text-info text-decoration-none"
    //       >
    //         <button type="button" className="btn btn-brand btn-sm mb-4">
    //           BUY NOW
    //         </button>
    //       </Link>
    //       <Link
    //         to={`/viewMore/${name}`}
    //         className=" text-info text-decoration-none pl-2"
    //       >
    //         <button type="button" className="btn btn-brand btn-sm mb-4">
    //           VIEW DETAIL
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div className="card-flyer ">
        <div className="text-box">
          <div className="image-box">
            <img src={imageUrl} alt="" />
          </div>
          <div className="text-container">
            <h6 className="text-brand">{name}</h6>
            <p>{detail}</p>

            <div className="pt-3">
              <Link
                to={`/checkout/${name}`}
                className=" text-info text-decoration-none"
              >
                <button
                  type="button"
                  className="btn btn-outline-success shadow-sm  btn-sm mb-4"
                >
                  BUY NOW
                </button>
              </Link>
              <Link
                to={`/viewMore/${name}`}
                className=" text-info text-decoration-none pl-2"
              >
                <button
                  type="button"
                  className="btn btn-outline-success shadow-sm  btn-sm mb-4"
                >
                  VIEW DETAIL
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

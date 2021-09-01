import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../../Shared/Navbar/Navbar";
import fire from "../../Login/Login/firebase.config";

function ViewMore() {
  const { name } = useParams();
  const [services, setServices] = useState({});
  const { price, detail, imageUrl } = services;

  useEffect(() => {
    fetch("https://desolate-castle-51363.herokuapp.com/services/" + name)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [name]);

  const handleLogOut = () => {
    fire.auth().signOut();
  };
  return (
    <div>
      <Navbar handleLogOut={handleLogOut}></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center pt-5">
            <h3 className="text-brand">{name}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <p>
              {detail} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque expedita nemo provident vel qui deleniti velit, illo ipsam
              obcaecati exercitationem voluptatibus repellendus sed earum id
              alias dolore repellat voluptates cum blanditiis incidunt ut sunt
              unde molestias! Optio quis molestiae natus modi impedit! Illo
              cupiditate quae corporis odit repudiandae provident voluptas.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              nulla velit quam. Exercitationem culpa quidem, saepe, deserunt
              ipsam corporis commodi quisquam molestias in vitae odit non, dolor
              labore quis deleniti quaerat aspernatur soluta repudiandae. Odit
              autem, itaque reprehenderit repudiandae non quae accusamus,
              laborum provident, deleniti vero assumenda quasi rerum voluptate
              harum iure velit ipsa ipsum necessitatibus. Dolores harum
              voluptatem, pariatur fugit labore reiciendis deleniti dolor!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              tenetur quasi, vero ea dolorum laborum et placeat voluptatibus
              error? Et exercitationem sequi est nemo ab consectetur reiciendis
              voluptatum corrupti blanditiis minus! Culpa, recusandae
              architecto! Nisi delectus sapiente voluptatum, unde fugiat alias
              nostrum harum eveniet deleniti. Eum iure laudantium, aspernatur
              tenetur veniam a obcaecati sed quasi optio placeat molestias
              excepturi accusamus odio aliquam doloremque fugiat vel ipsam
              aperiam rem officiis beatae earum assumenda cupiditate. Odio?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewMore;

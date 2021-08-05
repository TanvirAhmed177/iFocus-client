import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-date-picker";
import Navbar from "../Shared/Navbar/Navbar";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
import { UserContext } from "../../App";

const stripePromise = loadStripe(
  "pk_test_51Ie0haATq4O2aVtQZwn7gckt3c1N8zriudWtW3MlVflIQR7CIwVNHDaSKRLiM8FTf1fcz12YQmtkpcyOVDYPv11600NI5L3xO7"
);

const Checkout = () => {
  const { name } = useParams();
  const [user, setUser] = useContext(UserContext);

  const [services, setServices] = useState({});
  const [date, onChange] = useState(new Date());
  const { price } = services;
  const nameEl = React.useRef(null);
  const phnEl = React.useRef(null);
  const emailEl = React.useRef(null);

  const email = user.email;
  console.log(email);

  useEffect(() => {
    fetch("http://localhost:5000/services/" + name)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [name]);

  const handleOrder = (paymentId) => {
    const newOrder = {
      ...services,
      email,
      date,
      paymentId,
      status: "pending",
      name: nameEl.current.value,
      phone: phnEl.current.value,
      recEmail: emailEl.current.value,
    };
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(
          "Your services is being added to orders. Please, check order for more details."
        );
      });
  };

  return (
    <Container fluid className="m-0 p-0">
      <Container>
        <Row className="p-5">
          <Col>
            <div className="table-responsive bg-light">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{name}</td>
                    <td>${price}</td>
                  </tr>
                </tbody>
              </table>
              <div className="col align-items-center">
                <div className="d-flex justify-content-center">
                  <label htmlFor="date" className="pr-2 pt-1">
                    Date:{" "}
                  </label>
                  <DatePicker
                    className="mb-5"
                    onChange={onChange}
                    value={date}
                    name="date"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <label htmlFor="date" className="pr-2 pt-1">
                    Name:{" "}
                  </label>
                  <input type="text" ref={nameEl} />
                </div>
                <div className="d-flex justify-content-center pt-2">
                  <label htmlFor="date" className="pr-2 pt-1">
                    Phone:{" "}
                  </label>
                  <input type="tel" ref={phnEl} />
                </div>
                <div className="d-flex justify-content-center pt-2">
                  <label htmlFor="date" className="pr-2 pt-1">
                    Email:{" "}
                  </label>
                  <input type="email" ref={emailEl} />
                </div>
                <p>
                  {" "}
                  <b>Payment Details:</b>
                </p>
                <Elements stripe={stripePromise}>
                  <SimpleCardForm handleOrder={handleOrder}></SimpleCardForm>
                </Elements>
              </div>

              <br />
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Checkout;

import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-5 col-sm-6 mt-5">
            <h1 className="contactHeader mt-5 mb-4">
              YOU'VE MADE IT TO STEP ONE TO BOOK WITH ME, YASSSSSS!
            </h1>
            <p>
              I would love to hear from your beautiful face and get to know YOU.
              Here is where you can connect your ideas with me on what you could
              like to create, the memories I can capture, and the fun that is
              ahead.
            </p>
          </div>

          <div className="col-md-6 col-sm-6 mt-5 offset-md-1">
            <form>
              <div class="form-group mt-5">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email Address"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Your Name/ Company's Name"
                />
              </div>
              <div class="form-group">
                <textarea
                  placeholder="Your Message"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-secondary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

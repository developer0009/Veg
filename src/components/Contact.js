import React, { Component } from "react";
// import axios from "axios";
import Container from "@material-ui/core/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "../styles/contacts.css";
import { useState } from "react";
function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    required: "",
  });
  // this.handleChange = this.handleChange.bind(this);

  const handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, number, email, message, required } = this.state;

  //   axios
  //     .post("http://localhost:3001/api/form", {
  //       name,
  //       email,
  //       number,
  //       message,
  //       required,
  //     })
  //     .then(() => {
  //       this.setState({
  //         name: "",
  //         email: "",
  //         number: "",
  //         message: "",
  //         required: "",
  //       });
  //     });
  //   if (!required === true) {
  //     toast.success("Successfull");
  //     this.setState({
  //       name: "",
  //       email: "",
  //       number: "",
  //       message: "",
  //       required: "",
  //     });
  //   }
  // };

  return (
    <div className="contacts">
      {/* <img className="root" src="logo/Logo_Revision.png" alt="" /> */}
      <Container>
        <Grid container spacing={4}>
          <Grid className="contactForm" item xs={12} sm={6} md={4}>
            <form id="msform">
              <fieldset>
                <h2 className="fs-title">Personal Details</h2>
                <h3 className="fs-subtitle">We will contact you asap</h3>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
                <input type="text" name="phone" placeholder="Phone" />
                <input type="email" name="email" placeholder="Email" />
                <textarea name="address" placeholder="Address"></textarea>
                <input
                  type="submit"
                  name="submit"
                  className="submit action-button"
                  value="Submit"
                />
              </fieldset>
            </form>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className="contactForm">
            <div style={{ textAlign: "center" }}>
              <img src="https://img.icons8.com/ios-glyphs/60/000000/phone--v1.png"></img>
              <p style={{ fontSize: "25px" }}>
                9063322283, 8019764115, 8008678047
              </p>
              <br />
              <img src="https://img.icons8.com/metro/52/000000/marker.png"></img>
              <p style={{ fontSize: "25px" }}>
                <b>7 Cows PVT. LTD. </b>
              </p>
              <p>
                Nagarjuna Nagar Colony, Road No. 4, Kushaiguda, ECIL, Hyderabad,
                <br />
                Telangana-500062.
              </p>
              <div>
                <h3>
                  <img src="https://img.icons8.com/metro/26/000000/filled-message.png" />
                  : contact@turtleled.com
                </h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contacts;

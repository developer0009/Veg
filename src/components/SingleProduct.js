import React from "react";
import { productData } from "../DB/data";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { data } from "../DB/data";
// import { productData } from "../DB/data";
import "../styles/contacts.css";
export default function SingleProduct() {
  const options = {
    filterType: "checkbox",
  };
  const params = useParams();
  const arr = data.find((obj) => obj.Catogery == params);

  return (
    <div>
      <div className="container ">
        <Grid container spacing={4} className="">
          <Grid item xs={12} sm={6} md={4}>
            <img src={productData[Math.floor(Math.random() * 7)]} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
        </Grid>
      </div>
    </div>
  );
}

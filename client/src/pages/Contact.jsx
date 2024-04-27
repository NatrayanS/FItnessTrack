import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div class="container">
        <div class="card">
          <h3
            class="card-header"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            06AYAN Fitness Club
          </h3>
          <h5
            class="card-header"
            style={{
              display: "flex",
              justifyContent: "center",
              color: "blue",
            }}
          >
            Contact US
          </h5>
          <div class="card-body">
            <blockquote
              class="blockquote mb-0"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p>
                <strong>Mobile Number :</strong>+91 98765 43210
              </p>
              <p>
                <strong>Mail-ID :</strong>06ayanfitnessclub@gmail.com
              </p>
              <p>
                <strong>Address :</strong> No. 0, this main road, this
                street,this city 000 000.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

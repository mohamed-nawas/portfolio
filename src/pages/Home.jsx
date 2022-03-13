import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home" style={{ backgroundColor: "#2b2f32" }}>
      <section className="row">
        <section className="col-md-6">
          <Button active variant="outline-primary">
            Developer
          </Button>
          <div>
            <h2 style={{ color: "#d7d7d7", marginTop: 20, marginBottom: 20 }}>
              Nawaz Mohamed
            </h2>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                padding: 0,
                textAlign: "left",
                color: "#ffffff",
                lineHeight: 1.5,
              }}
            >
              I have worked on technologies like{" "}
              <span style={{ color: "#00c4ff", fontWeight: "bold" }}>
                React
              </span>
              ,{" "}
              <span style={{ color: "#1667b5", fontWeight: "bold" }}>
                React Native
              </span>
              ,{" "}
              <span style={{ color: "#1c98f1", fontWeight: "bold" }}>
                Flutter
              </span>
              ,{" "}
              <span style={{ color: "#ff7900", fontWeight: "bold" }}>
                Google Cloud Firebase
              </span>
              ,
              <span style={{ color: "#ec0d2f", fontWeight: "bold" }}>
                Swift
              </span>
              ,{" "}
              <span style={{ color: "#4e7b9b", fontWeight: "bold" }}>Java</span>
              ,{" "}
              <span style={{ color: "#e36300", fontWeight: "bold" }}>Java</span>
              <span style={{ color: "#4e7b9b", fontWeight: "bold" }}>
                FX
              </span>,{" "}
              <span style={{ color: "#7f6db5", fontWeight: "bold" }}>Php</span>{" "}
              <span style={{ color: "#00ffab", fontWeight: "bold" }}>
                Javascript
              </span>
              ,
              <span style={{ color: "#5d77f6", fontWeight: "bold" }}>
                JQuery
              </span>{" "}
              and more.
            </p>

            <p
              style={{
                // padding: 0,
                marginTop: 10,
                marginBottom: 0,
                textAlign: "left",
                color: "#ffffff",
                lineHeight: 1.5,
              }}
            >
              Worked on concepts like React JSX, class and function components,
              props, states, react lifecycle methods, routing, hooks, state
              management with context, redux, javascript data structures,
              mutuability of data structures, handling syncronus and asyncronus
              data, many different front and backend API, data formats like
              JSON, push notifications and real time updates for mobile, session
              and cookie handlings with php, storage API for both web and mobile
              and many more.
            </p>
            <span>
              <Button
                variant="secondary"
                style={{ marginTop: 5, marginBottom: 15, marginLeft: -3 }}
                onClick={() => navigate("/about")}
              >
                Read More...
              </Button>
            </span>
            <p
              style={{
                padding: 0,
                marginTop: 10,
                textAlign: "left",
                color: "#ffffff",
                lineHeight: 1.5,
              }}
            >
              For all the technologies and features worked on, please take a
              look at the projects here
            </p>
            <Button
              variant="outline-success"
              onClick={() => navigate("/projects")}
            >
              Projects
            </Button>
          </div>
        </section>

        <div className="col-md-6 home-img">
          <img className="img-fluid" alt="" src="images/home-image.png" />
        </div>
      </section>
    </section>
  );
}

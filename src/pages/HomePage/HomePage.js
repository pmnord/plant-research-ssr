import React from "react";

import "./HomePage.css";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import LoginForm from "../../components/LoginForm/LoginForm";

// Homepage consisting of the pitch, the Registration component and Login component
export default function HomeRoute(props) {
  return (
    <div className="HomeRoute">
      <div className="HomeRoute__pitch">
        <h2>
          Plant Researcher exposes data from the Trefle.io database, one of the
          world's largest botanical databases.
        </h2>
        <h3>
          Explore plant species, curate a personal collection, and annotate your
          collection. Plant Researcher empowers you to quickly gather a
          collection of data on the species that interest you.
        </h3>
        <button className="btn">Click Here to access the demo account</button>
      </div>
      <div className="HomeRoute__authentication">
        <RegistrationForm
          updateLoggedIn={props.updateLoggedIn}
          router={props.router}
        />
        <LoginForm
          updateLoggedIn={props.updateLoggedIn}
          router={props.router}
        />
      </div>
    </div>
  );
}

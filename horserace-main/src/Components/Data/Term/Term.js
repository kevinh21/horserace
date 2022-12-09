import React from "react";
import Iframe from "react-iframe";
import "./Term.css";

const Term = (props) => {
  return (
    <div className="termsWrapper">
      <div className="termsFrame">
        <Iframe
          className="termsIframe"
          width="900"
          height="700"
          src={process.env.PUBLIC_URL + "/media/TermsGlossary.pdf"}
          id="terms"
        />
      </div>
    </div>
  );
};
export default Term;

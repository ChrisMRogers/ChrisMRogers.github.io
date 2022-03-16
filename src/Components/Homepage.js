import React from "react";
import "../Styles/Homepage.css";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

const Homepage = () => {
  return (
    <Div>
      <h1 style={{ fontSize: "500%", marginBottom: "1em", marginTop: "0em" }}>
        Chris Rogers
      </h1>
      <img
        src="under-construction90s-90s.gif"
        alt="Work in Progress"
        width="25%"
        height="25%"
      />
    </Div>
  );
};

export default Homepage;

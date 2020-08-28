import React, { useState } from "react";
import Cards from "react-credit-cards";
import "./card.scss";

import { CardsContainer, CardDetailWrapper } from "./styled";

import { SubHeading } from "../../../elements/Heading";

const CardDetails = () => {
  const [cardState, setCardState] = useState({
    cvc: "",
    expiry: "0922",
    focus: "",
    name: "John Doe",
    number: "4929717326760518",
    issuer: "visa",
  });

  return (
    <CardDetailWrapper>
      <SubHeading>Card Detail</SubHeading>
      <CardsContainer>
        <Cards
          cvc={cardState.cvc}
          expiry={cardState.expiry}
          focused={cardState.focus}
          name={cardState.name}
          number={cardState.number}
        />
      </CardsContainer>
    </CardDetailWrapper>
  );
};

export default CardDetails;

import React, { useState } from "react";
import Cards from "react-credit-cards";
import "./card.scss";

// Custom styles
import { CardsContainer, CardDetailWrapper, ButtonContainer } from "./styled";

// Reusable elems
import { SubHeading } from "../../../elements/Heading";
import { PrimaryButton, SecondaryButton } from "./../../../elements/Button";

const CardDetails = () => {
  const [cardState, setCardState] = useState({
    cvc: "00",
    expiry: "0922",
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

      <ButtonContainer>
        <PrimaryButton>Transfer</PrimaryButton>
        <SecondaryButton>Add new card</SecondaryButton>
      </ButtonContainer>
    </CardDetailWrapper>
  );
};

export default CardDetails;

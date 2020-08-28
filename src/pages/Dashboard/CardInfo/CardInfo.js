import React from "react";
import { SubHeading } from "../../../elements/Heading";
import { CardInfoWrapper } from "./styled";

const CardInfo = () => {
  return (
    <CardInfoWrapper>
      <SubHeading>Card Information</SubHeading>
      <ul>
        <li>NAME: JOHN DOE</li>
      </ul>
    </CardInfoWrapper>
  );
};

export default CardInfo;

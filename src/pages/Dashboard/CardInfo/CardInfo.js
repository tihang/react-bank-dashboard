import React from "react";
import { SubHeading } from "../../../elements/Heading";
import { CardInfoWrapper, CardTable } from "./styled";

const CardInfo = () => {
  return (
    <CardInfoWrapper>
      <SubHeading>Card Information</SubHeading>
      <CardTable>
        <tr>
          <td>
            <span>Name: </span>
          </td>
          <td>John Doe</td>
        </tr>

        <tr>
          <td>
            <span>Card Type: </span>
          </td>
          <td>Credit Card</td>
        </tr>

        <tr>
          <td>
            <span>Account Number: </span>
          </td>
          <td>4892 7717 3748</td>
        </tr>

        <tr>
          <td>
            <span>Account type: </span>
          </td>
          <td>
            <span active>Active</span>
          </td>
        </tr>

        <tr>
          <td>
            <span>Expiry Date: </span>
          </td>
          <td>12 January 2022</td>
        </tr>

        <tr>
          <td>
            <span>Current Balance: </span>
          </td>
          <td>$ 9000.00</td>
        </tr>
      </CardTable>
    </CardInfoWrapper>
  );
};

export default CardInfo;

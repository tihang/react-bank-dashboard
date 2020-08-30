import React from "react";
import { TransactionWrapper, TransactionTable } from "./styled";

const Transaction = () => {
  return (
    <TransactionWrapper>
      <TransactionTable>
        <tr>
          <th>Date</th>
          <th>Reason</th>
          <th>Description</th>
          <th>Debited</th>
          <th>Balance</th>
        </tr>
        <tr>
          <td>8.29.2020</td>
          <td>Personal</td>
          <td>For Friends</td>
          <td>$200</td>
          <td>$9000</td>
        </tr>
        <tr>
          <td>8.28.2020</td>
          <td>Entertainment</td>
          <td>Netlix sub</td>
          <td>$100</td>
          <td>$9200</td>
        </tr>
        <tr>
          <td>8.22.2020</td>
          <td>Travel</td>
          <td>Metro card</td>
          <td>$100</td>
          <td>$9300</td>
        </tr>
        <tr>
          <td>8.21.2020</td>
          <td>Business</td>
          <td>Online domain</td>
          <td>$20</td>
          <td>$9400</td>
        </tr>
      </TransactionTable>
    </TransactionWrapper>
  );
};

export default Transaction;

import React from "react";
import { Heading, SubHeading } from "../.././elements/Heading";
import { DashboardWrapper } from "./styled";
import CardDetails from "./CardDetail/CardDetail";
import CardInfo from "./CardInfo/CardInfo";
import Spending from "./Spending/Spending";
import Transaction from "./Transaction/Transaction";

const Dashboard = () => {
  return (
    <div>
      <Heading>Dashboard Overview</Heading>
      <DashboardWrapper>
        <CardDetails></CardDetails>
        <CardInfo></CardInfo>
        <div>
          <SubHeading>Spending Overview</SubHeading>
          <Spending></Spending>
        </div>
        <div>
          <SubHeading>Recent Transaction</SubHeading>
          <Transaction></Transaction>
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;

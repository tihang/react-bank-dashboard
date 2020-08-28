import React from "react";
import { Heading, SubHeading } from "../.././elements/Heading";
import { DashboardWrapper } from "./styled";
import CardDetails from "./CardDetail/CardDetail";
import CardInfo from "./CardInfo/CardInfo";

const Dashboard = () => {
  return (
    <div>
      <Heading>Dashboard Overview</Heading>
      <DashboardWrapper>
        <CardDetails></CardDetails>
        <CardInfo></CardInfo>
        <div>
          <SubHeading>My Spendings</SubHeading>
        </div>
        <div>
          <SubHeading>Recent Transaction</SubHeading>
        </div>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LeftPanelContainer } from "./styled";
import LinkContainer from "./LinkContainer";

// Import Link SVG's
import safebox from "../../icons/safebox.svg";
import investments from "../../icons/investments.svg";
import card from "../../icons/card.svg";
import loan from "../../icons/loan.svg";
import wallet from "../../icons/wallet.svg";
import report from "../../icons/report.svg";
import settings from "../../icons/settings.svg";

// Import Pages
import Dashboard from "../../pages/Dashboard";
import Investments from "../../pages/Investments";

const Navigation = () => {
  return (
    <React.Fragment>
      <Router>
        <LeftPanelContainer>
          <LinkContainer logo={safebox} to="/">
            Dashboard
          </LinkContainer>
          <LinkContainer logo={investments} to="/investments">
            Investments
          </LinkContainer>
          <LinkContainer logo={card} to="/investments">
            Cards
          </LinkContainer>
          <LinkContainer logo={loan} to="/investments">
            Loans
          </LinkContainer>
          <LinkContainer logo={wallet} to="/investments">
            Wallet
          </LinkContainer>
          <LinkContainer logo={report} to="/investments">
            Reports
          </LinkContainer>
          <LinkContainer logo={settings} to="/investments">
            Settings
          </LinkContainer>
        </LeftPanelContainer>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/investments" component={Investments} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Navigation;

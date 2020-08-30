import React, { useRef, useEffect } from "react";
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
import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Investments from "../../pages/Investments";

const Navigation = ({ open, setOpen }) => {
  //Ref node for left panel container
  const node = useRef();

  // To handle
  const handleClickOutside = (e) => {
    if (!node.current.contains(e.target)) {
      // Outside click
      setOpen(false);
    }
    // Inside click
  };

  // Close mobile nav when scrolled
  useEffect(() => {
    if (open) {
      document.addEventListener("scroll", handleClickOutside);
    } else {
      document.removeEventListener("scroll", handleClickOutside);
    }
    return () => {
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, [open]);

  return (
    <React.Fragment>
      <Router>
        <LeftPanelContainer
          ref={node}
          open={open}
          onClick={() => setOpen(false)}
        >
          <LinkContainer logo={safebox} exact to="/">
            Dashboard
          </LinkContainer>
          <LinkContainer logo={investments} exact to="/investments">
            Investments
          </LinkContainer>
          <LinkContainer logo={card} exact to="/cards">
            Cards
          </LinkContainer>
          <LinkContainer logo={loan} exact to="/loan">
            Loans
          </LinkContainer>
          <LinkContainer logo={wallet} exact to="/wallet">
            Wallet
          </LinkContainer>
          <LinkContainer logo={report} exact to="/report">
            Reports
          </LinkContainer>
          <LinkContainer logo={settings} exact to="/settings">
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
          <Route exact path="/investments" component={Investments} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Navigation;

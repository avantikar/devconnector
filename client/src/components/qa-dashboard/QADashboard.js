import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import {
  StyledQADashboard,
  StyledQADashboardCards,
  StyledButton,
  StyledLink,
  StyledQADashboardCard,
} from "../styled/qa-dashboard/stylesDashboardCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dashboard from "../dashboard/Dashboard";

class QADashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedView: "",
    };
    this.clickCard = this.clickCard.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  clickCard(e) {
    var cardClicked = e.target.textContent;
    console.log(
      "Card was clicked !! " + e.target.textContent + " was clicked!"
    );
    debugger;
    let selectedView = "";
    switch (cardClicked) {
      case "Nightly Run Bulletins":
        this.setState = {
          selectedView: <Dashboard />,
        };
        break;
      case "Data Checks":
        this.setState = {
          selectedView: <Dashboard />,
        };
        break;
    }
  }

  render() {
    let dashboardContent;

    return (
      <>
        <h1 className="display-4">Dashboard </h1>
        <FontAwesomeIcon icon="caret-right"></FontAwesomeIcon>
        {/* {dashboardContent} */}
        <StyledQADashboard>
          <StyledQADashboardCards>
            <Card>
              <Card.Header>Nightly Run Bulletins</Card.Header>
              <div>
                <FontAwesomeIcon icon="caret-right"></FontAwesomeIcon>
              </div>
              <Card.Body className="card-body">
                <Card.Title>Regression Bulletins</Card.Title>
                <Card.Text>
                  Regression Bulletins for: IC / RC/ CMM / LC
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-foooter">
                <StyledLink
                  to="/regression-bulletins"
                  className="btn btn-light"
                >
                  View Bulletins
                </StyledLink>
              </Card.Footer>
            </Card>
          </StyledQADashboardCards>
          <StyledQADashboardCards>
            <Card>
              <Card.Header>Data Checks</Card.Header>
              <Card.Body className="card-body">
                <Card.Title>Monthly/Quarterly/Yearly Data Checks </Card.Title>
                <Card.Text>Monthly/Quarterly/Yearly Data Checks</Card.Text>
              </Card.Body>
              <Card.Footer>
                <StyledLink to="/dashboard" className="btn btn-light">
                  View Results/Status
                </StyledLink>
              </Card.Footer>
            </Card>
          </StyledQADashboardCards>
          <StyledQADashboardCards>
            <Card>
              <Card.Header>Jenkins/CircleCI View</Card.Header>
              <Card.Body className="card-body">
                <Card.Title>Jenkins/CircleCI View</Card.Title>
                <Card.Text>Jenkins/CircleCI View</Card.Text>
              </Card.Body>
              <Card.Footer>
                <StyledLink to="/dashboard" className="btn btn-light">
                  View Jobs Status
                </StyledLink>
              </Card.Footer>
            </Card>
          </StyledQADashboardCards>
        </StyledQADashboard>
      </>
    );
  }
}

QADashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  QADashboard
);

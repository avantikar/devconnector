import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export const StyledQADashboard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px;
`;

export const StyledQADashboardCards = styled.div`
  margin-right: 40px;
  border-radius: 4px;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 255, 0.2);

  .card {
    border-color: blue;
    width: 18rem;
    //padding-bottom: 15px;
  }
  .card-body {
    height: 150px;
    background-color: light-blue;
    //padding-bottom: 15px;
  }

  .card-header {
    background-color: grey;
    font-weight: 500;
  }

  .card-footer {
    background-color: none;
  }
`;

export const StyledQADashboardCard = styled(Card)`
  margin-right: 40px;
  border-radius: 4px;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 255, 0.2);

  .card {
    border-color: blue;
    width: 18rem;
    padding-bottom: 15px;
  }
  .card-body {
    height: 150px;
    background-color: light-blue;
    padding-bottom: 15px;
  }

  .card-header {
    background-color: grey;
    font-weight: 500;
  }

  .card-footer {
    background-color: none;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  margin: auto;
  background-color: #ffac41;

  :hover {
    background-color: #6f42c1;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  //margin: auto;
  background-color: #ffac41;
  margin-bottom: 0px;
  :hover {
    background-color: palevioletred;
  }

  .btn btn-light {
    margin-bottom: 0px;
  }
`;

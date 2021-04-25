import styled from "styled-components";
import { Dropdown, Form } from "react-bootstrap";

export const StyledPageHeader = styled.h1`
  font-size: 30px;
  padding: 20px;
`;

export const StyledBulletinsMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const StyledDropdown = styled(Dropdown)`
  margin-left: 15px;
`;

export const StyledFileUpload = styled(Form)`
  padding: 20px;
`;

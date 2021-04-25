import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { Dropdown, DropdownButton, Form, Button } from "react-bootstrap";
import {
  StyledBulletinsMainDiv,
  StyledPageHeader,
  StyledDropdown,
  StyledFileUpload,
} from "../styled/qa-dashboard/stylesRegressionBulletins";
import "react-datepicker/dist/react-datepicker.css";
import { uploadImage } from "../../actions/uploads";

class RegressionBulletins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      file: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  onSubmit(e) {
    debugger;
    this.setState({
      file: e.target.value,
    });
  }

  onFileUpload(e) {
    debugger;
    this.setState(
      {
        file: e.target.files[0],
      },
      () => {
        debugger;
        var data = new FormData();
        data.append("file", this.state.file);
        data.append("encType", "multipart/form-data");

        for (var pair of data.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
        this.props.uploadImage(data);
      }
    );
  }

  render() {
    return (
      <>
        <StyledPageHeader>Regression Bulletins</StyledPageHeader>
        <StyledBulletinsMainDiv>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          <StyledDropdown>
            {/* <Dropdown> */}
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item value="rc">RC</Dropdown.Item>
              <Dropdown.Item value="lc">LC</Dropdown.Item>
              <Dropdown.Item value="cmm">CMM</Dropdown.Item>
              <Dropdown.Item value="ic">IC</Dropdown.Item>
            </Dropdown.Menu>
            {/* </Dropdown> */}
          </StyledDropdown>
        </StyledBulletinsMainDiv>

        <StyledFileUpload>
          <Form.Group>
            <Form.File
              id="file"
              name="file"
              label="Upload Bulletin"
              onChange={this.onFileUpload}
            />
          </Form.Group>
        </StyledFileUpload>
        <form action="/upload" method="POST" encType="multipart/form-data">
          <div className="custom-file mb-3">
            <input
              type="file"
              name="file"
              id="file"
              className="custom-file-input"
            />
            <label for="file" className="custom-file-label">
              Choose file
            </label>
          </div>
          <input
            type="submit"
            value="submit"
            className="btn btn-primary btn-block"
            onClick={this.onSubmit}
          />
        </form>
        <img src={this.state.file} />
      </>
    );
  }
}

RegressionBulletins.propTypes = {
  errors: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { uploadImage })(RegressionBulletins);

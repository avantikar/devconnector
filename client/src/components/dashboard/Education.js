import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";
import { Button } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const newEducation = this.props.education;
    const education = this.props.education.map((edu) => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="YYYY-MM-DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY-MM-DD">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    const columns = [
      {
        name: "School",
        selector: "school",
        sortable: true,
      },
      {
        name: "Degree",
        selector: "degree",
        sortable: true,
      },
      {
        name: "From",
        selector: "from",
        sortable: true,
      },
      {
        name: "To",
        selector: (row) =>
          row.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY-MM-DD">{row.to}</Moment>
          ),
        sortable: true,
      },
      {
        cell: (row) => (
          <Button
            variant="warning"
            /* onClick={(e) =>
                this.editUserDetails(
                  row.id,
                  row.email,
                  row.is_active,
                  row.is_admin
                )
              } */
          >
            Edit
          </Button>
        ),
        ignoreRowClick: true,
      },
      {
        cell: (row) => (
          <Button
            variant="warning"
            /*  onClick={(e) =>
                this.deleteMember(row.id, row.email, row.is_active, row.is_admin)
              } */
          >
            Delete
          </Button>
        ),
        ignoreRowClick: true,
      },
    ];
    return (
      /*  <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table"></table>
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
          {education}
        </thead>
      </div> */
      <div>
        {/* <h4 className="mb-4">Experience Credentials</h4> */}
        <DataTable
          title="Education Credentials"
          columns={columns}
          data={newEducation}
          theme="dark"
          actions={this.actions}
          contextActions={this.contextActions}
          highlightOnHover
        />
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);

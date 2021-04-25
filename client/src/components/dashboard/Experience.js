import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";
import { Button } from "react-bootstrap";
import DataTable, { createTheme } from "react-data-table-component";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experienceTable = this.props.experience;
    const experience = this.props.experience.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY-MM-DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY-MM-DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    const columns = [
      {
        name: "Company",
        selector: "company",
        sortable: true,
      },
      {
        name: "Title",
        selector: "title",
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
      <>
        <div>
          {/* <h4 className="mb-4">Experience Credentials</h4> */}
          <DataTable
            title="Experience Credentials"
            columns={columns}
            data={experienceTable}
            theme="dark"
            actions={this.actions}
            contextActions={this.contextActions}
            highlightOnHover
          />
        </div>
      </>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CONSTANTS from "../data/config";

const DeleteStudentForm = ({ studentInfo }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteStudent = () => {
    const result = fetch(`${CONSTANTS.BASE_API_URL}students/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    });

    result
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));

    navigate("/list", { state: { refresh: true } });
  };

  return (
    <React.Fragment>
      <div className="panel panel-default">
        <form>
          <h3>DELTE STUDENTS FROM</h3>

          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              deleteStudent();
            }}
            className="btn btn-danger"
            value="Delete"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default DeleteStudentForm;

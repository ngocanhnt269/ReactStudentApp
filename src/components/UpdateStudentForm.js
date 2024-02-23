import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import CONSTANTS from "../data/config";

const UpdateStudentForm = ({ studentInfo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Set initial form values based on the provided studentInfo
  useEffect(() => {
    setFirstName(studentInfo.firstName);
    setLastName(studentInfo.lastName);
    setSchool(studentInfo.school);
  }, [studentInfo]);

  const updateStudent = () => {
    const result = fetch(`${CONSTANTS.BASE_API_URL}students/${id}`, {
      method: "put",
      body: JSON.stringify({
        studentId: id,
        firstName,
        lastName,
        school,
      }),
      headers: { "Content-Type": "application/json" },
    });

    result
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

    navigate("/list", { state: { refresh: true } });
  };

  return (
    <React.Fragment>
      <div className="panel panel-default">
        <form>
          <h3>UPDATE STUDENT'S INFORMATION:</h3>
          <div className="form-group">
            <label>First Name:</label>
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>School:</label>
            <input
              className="form-control"
              type="text"
              placeholder="School"
              value={school}
              onChange={(event) => setSchool(event.target.value)}
            />
          </div>
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              updateStudent();
            }}
            className="btn btn-success"
            value="Update"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default UpdateStudentForm;

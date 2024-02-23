import React,{useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import CONSTANTS from '../data/config';

const AddStudentForm =()=>{
    const [firstName,setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [school, setSchool] = useState('');

    const navigate = useNavigate();

    const addStudent =()=>{
        const result = fetch(`${CONSTANTS.BASE_API_URL}students/`,{
            method:'post',
            body:JSON.stringify({
                firstName,
                lastName,
                school,
            }),
            headers:{'Content-Type':'application/json'}
        });
        result
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

        navigate('/list',{state:{refresh:true}});
    }

    return(
    <React.Fragment>
    <div className="panel panel-default">
      <form>
        <h3>Add Student</h3>
        <div className="form-group">
          <label>First Name:</label>
          <input className="form-control" type="text" placeholder="First Name"
            value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input className="form-control" type="text" placeholder="Last Name"
            value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </div>
        <div className="form-group">
          <label>School:</label>
          <input className="form-control" type="text" placeholder="Occupation"
            value={school} onChange={(event) => setSchool(event.target.value)} />
        </div>

        <input type="submit" onClick={() => addStudent()} className="btn btn-success" value="Add" />
      </form>
    </div>
  </React.Fragment>
);
}

export default AddStudentForm;

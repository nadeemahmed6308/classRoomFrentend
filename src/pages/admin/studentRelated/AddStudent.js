import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/userRelated/userHandle';
import Popup from '../../../components/Popup';
import { underControl } from '../../../redux/userRelated/userSlice';
import { getAllClasses } from '../../../redux/classRelated/classHandle';
import { CircularProgress } from '@mui/material';

const AddStudent = ({ situation }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error } = userState;
    const { classesList } = useSelector((state) => state.class);

    const [name, setName] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [password, setPassword] = useState('')
    const [className, setClassName] = useState('')

    const adminID = currentUser._id
    const role = "Student"
    const attendance = []

    useEffect(() => {
        if (situation === "Class") {
            setClassName(params.id);
        }
    }, [params.id, situation]);

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        dispatch(getAllClasses(adminID, "Class"));
    }, [adminID, dispatch]);

    const changeHandler = (event) => {
        if (event.target.value === 'Select Class') {
            setClassName('Select Class');
            setClassName('');
        } else {
            const selectedClass = classesList.find(
                (classItem) => classItem.className === event.target.value
            );
            setClassName(selectedClass.className);
            setClassName(selectedClass._id);
        }
    }

    const fields = { name, rollNum, password, className, adminID, role, attendance }

    const submitHandler = (event) => {
        event.preventDefault()
        if (className === "") {
            setMessage("Please select a classname")
            setShowPopup(true)
        }
        else {
            setLoader(true)
            dispatch(registerUser(fields, role))
        }
    }

    useEffect(() => {
        if (status === 'added') {
            dispatch(underControl())
            navigate(-1)
        }
        else if (status === 'failed') {
            setMessage(response)
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            setMessage("Network Error")
            setShowPopup(true)
            setLoader(false)
        }
    }, [status, navigate, error, response, dispatch]);

    return (
        <>
            <div className="register">
                <form className="registerForm" onSubmit={submitHandler}>
                    <span className="registerTitle">Add Student</span>
                    <label>Name</label>
                    <input className="registerInput" type="text" placeholder="Enter student's name..."
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        autoComplete="name" required />

                    {
                        situation === "Student" &&
                        <>
                            <label>Class</label>
                            <select
                                className="registerInput"
                                value={className}
                                onChange={changeHandler} required>
                                <option value='Select Class'>Select Class</option>
                                {classesList.map((classItem, index) => (
                                    <option key={index} value={classItem.className}>
                                        {classItem.className}
                                    </option>
                                ))}
                            </select>
                        </>
                    }

                    <label>Roll Number</label>
                    <input className="registerInput" type="number" placeholder="Enter student's Roll Number..."
                        value={rollNum}
                        onChange={(event) => setRollNum(event.target.value)}
                        required />

                    <label>Password</label>
                    <input className="registerInput" type="password" placeholder="Enter student's password..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="new-password" required />

                    <button className="registerButton" type="submit" disabled={loader}>
                        {loader ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Add'
                        )}
                    </button>
                </form>
            </div>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </>
    )
}

export default AddStudent
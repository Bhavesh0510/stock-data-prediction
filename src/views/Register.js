import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from 'Firebase';
import React, { useEffect, useState } from 'react'
import { Alert, Toast } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import "./Views.css"

const Register = () => {

    const [error, seterror] = useState("")
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
        seterror("")
    };

    useEffect(() => {
        return () => {
            seterror("")
        }
    },[])

    const formSubmit = async (e) => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        e.preventDefault()
        if (data.fname === '') {
            seterror("Please enter valid name")
        }
        else if (data.lname === '') {
            seterror("Please enter last name")
        }
        else if (data.email === "") {
            seterror("Please enter Email")
            
        }
        else if (!data.email.match(mailformat)) {
            seterror("Please Enter valid Email")
            
        }
        else if (data.password === "") {
            seterror("Please Enter password")
        }
        else if (data.password.length < 8) {
            seterror("Password Should be atlist 8 characters")
        }
        else if (data.password !== data.cpassword) {
            seterror("Both Password Should be same")
        }
        else {
                createUserWithEmailAndPassword(auth, data.email, data.password).then((response) => {
                    console.log(response);
                }).catch(e => console.log("error :", e ))
        }
    }

    return (
        <>
        <div className="container">
            <form className="form">
                <h3 style={{textAlign:"center"}}>Register</h3>

                    {error?.length > 0 && <div className="alert"><Alert  variant="danger" onClose={() => seterror("")} dismissible>
                        <p>{error}</p>
                    </Alert></div>}
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="fname" onChange={InputEvent} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lname" onChange={InputEvent} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={InputEvent}   />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={InputEvent} />
                    </div>
                    
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Re-enter password" name="cpassword" onChange={InputEvent} />
                </div>

                <button type="submit" onClick={formSubmit} style={{justifyContent:"center"}} className="btn btn-dark">Register</button>
                <p className="forgot-password text-right mt-2">
                    Already registered ?<Link to="/login">log in?</Link>
                </p>
                
            </form>
            </div>
            </>
    )
}

export default Register
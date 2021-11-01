import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import fire from './Firebase';
//import fire from './fire';
import {Redirect} from 'react-router-dom';

const Register = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
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
    };


    const formSubmit = (e) => {
        if (data.fullname == '') {
            alert("Fill Full name");
        }
        else if (data.phone == "") {
            alert("Enter Phone Number and it must be 10 digits");
        }
        else if (data.phone.length != 10) {
            alert("Phone number must be 10 digits");
        }
        else if (data.email == "") {
            alert("Enter Email");
        }
        else if (data.password == "") {
            alert("Enter Password and it must be at least 7 characters");
        }
        else if (data.password.length < 7) {
            alert("Password must be at least 8 characters");
        }
        else if (data.password != data.cpassword) {
            alert("Password and Confirm Passowrd doesnot match");
        }
        else {
            e.preventDefault();
            toast.success(`Dear ${data.fullname} Your Message send Successfully`, {
                position: "top-center",
                color: "green",
            });
        }
    }


     /*const postdata = async (e) => {
        e.preventDefault();

        const {fullname, phone, email, password, cpassword} = data;

       const res = await fetch("https://stockprediction-324a8-default-rtdb.firebaseio.com/mydatabase.json", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                fullname,
                phone,
                email,
                password,
                cpassword,
            ),
        })
    }*/


    return (
        <>
            <div className="my5">
                <h1 className="text-center">Registration</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent} placeholder="Enter Your Full name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                                <input type="Number" className="form-control" id="exampleFormControlInput1" name="phone"
                                    value={data.phone}
                                    onChange={InputEvent} placeholder="Enter Phone Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email"
                                    value={data.email}
                                    onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" name="password"
                                    value={data.password}
                                    onChange={InputEvent} placeholder="Enter Your Password" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" name="cpassword"
                                    value={data.cpassword}
                                    onChange={InputEvent} placeholder="Enter Confirm Password" />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            </div>
                            <br />
                            <h5>Already have a Account?<a href="/Login" > Sign In</a></h5>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
            
        </>
    )
}

export default Register

import { signInWithEmailAndPassword } from '@firebase/auth';
import { db } from 'Firebase';
import { auth } from 'Firebase';
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setuser } from 'Reducer/Action';
import "./Views.css"

const Login = () => {

    const [error, seterror] = useState("")
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch()
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

    const formSubmit = (e) => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        e.preventDefault()
        if (data.email === "") {
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
        else {
            
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setuser(user.uid))
                
  })
  .catch((error) => {
      const errorCode = error.code;
    //   if(error.message?.split("(")[1]?.split(")")[0]?.split("/")[1] === "user-not-found")
      seterror("User not found please register.");
      console.log(error);
  });
        }
    }
    return (
        <>
        <div className="container">
            <form className="form">
                <h3 style={{textAlign:"center"}}>Login</h3>

                    {error?.length > 0 && <div className="alert"><Alert  variant="danger" onClose={() => seterror("")} dismissible>
                        <p>{error}</p>
                    </Alert></div>}
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="email" onChange={InputEvent} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={InputEvent} />
                    </div>

                <button type="submit" onClick={formSubmit} style={{justifyContent:"center"}} className="btn btn-dark">Login</button>
                <p className="forgot-password text-right mt-2">
                    New to Mine Stocks ? <Link to="/Register">Register </Link>
                </p>
                
            </form>
            </div>
            </>
    )
}

export default Login
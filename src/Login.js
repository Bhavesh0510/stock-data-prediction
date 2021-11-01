import React,{useState}from 'react'

const Login = () => {

    const [data,setData] = useState({
        email:'',
        password:'',
    });

    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit = (e)=>{
        if(data.email=="")
        {
            alert("Enter Email");
        }
        else if(data.password=="")
        {
            alert("Enter Password");
        }
        else
        {
            e.preventDefault();
        alert(`Logged in Successfully`);
        }
    }


    return (
        <>
            <div className="my5">
                <h1 className="text-center">Sign In</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email"
                        value={data.email}
                        onChange={InputEvent} placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput1" name="password"
                        value={data.password}
                        onChange={InputEvent} placeholder="Enter Your Password"/>
                        </div>
                        <p><a href="#">Forgot Password?</a></p>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">
                                Login
                            </button>
                        </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

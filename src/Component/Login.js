import React from 'react';
import { useForm} from "react-hook-form";
import './Style.css';
import Logo from '../logo2.png'; 
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="container mt-5 mb-5 m-auto">
        <div className="row">
            <div className="col-md-6">
                <div className="login-area">
                    <img src={Logo} alt=""/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="name"  placeholder="Username" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                    <input className="form-control" type="password" name="address"  placeholder="Password" ref={register({ required: true })} />
                    {errors.address && <span>This field is required</span>}
                    
                    
                    <input type="submit" className="form-control submit" value="Sign In" />
                </form>
                <Link to="/signup"><h5 className="ml-5 p-2">Don't Have and Account? Register</h5></Link>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
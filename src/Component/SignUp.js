import React from 'react';
import { useForm} from "react-hook-form";
import './Style.css';
import Logo from '../logo2.png'; 
import { Link } from 'react-router-dom';


const SignUp = () => {
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="login-area">
                        <img src={Logo} alt=""/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="name"  placeholder="Name" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}
                        <input className="form-control" name="address"  placeholder="Email" ref={register({ required: true })} />
                        {errors.address && <span>This field is required</span>}
                        <input className="form-control" type="password" name="address-one"  placeholder="Password" />
                        {errors.name && <span>This field is required</span>}
                        <input className="form-control" type="password" name="business"  placeholder="Confirm Password" ref={register({ required: true })} />
                        {errors.business && <span>This field is required</span>}
                        
                        <input type="submit" className="form-control submit" value="Sign Up" />
                    </form>
                    <Link to="/login"><h5 className="ml-5 p-2">Already have an account?</h5></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
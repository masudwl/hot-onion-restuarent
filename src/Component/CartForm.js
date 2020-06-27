import React from 'react';
import { useForm} from "react-hook-form";
import './Style.css';

const CartForm = () => {

    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  
    return (

            <div className="col-md-7">
                    <h4 className="display-6">Edit Delivery Details</h4>
                    <hr></hr>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="name"  placeholder="deliver to door" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                    <input className="form-control" name="address"  placeholder="address" ref={register({ required: true })} />
                    {errors.address && <span>This field is required</span>}
                    <input className="form-control" name="address-one"  placeholder="address 2" />
                    {errors.name && <span>This field is required</span>}
                    <input className="form-control" name="business"  placeholder="Business Name" ref={register({ required: true })} />
                    {errors.business && <span>This field is required</span>}
                    <input className="form-control" name="delivery"  placeholder="Add Delivery Instruction" ref={register({ required: true })} />
                    {errors.delivery && <span>This field is required</span>}
                    
                    <input type="submit" className="form-control submit" value="Save and Continue" />
                </form>
                </div>

    );
};

export default CartForm;
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const VolunteersForm = () => {
  const param = useParams();
 const displayName = sessionStorage.getItem('displayName');
 const email = sessionStorage.getItem('email');

 const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder='User Name' />
      <input {...register("email", { pattern: /^[A-Za-z]+$/i })} placeholder='Email' />
      <input {...register("description", { required: true,  })} placeholder='description'/>
      <input {...register("org", { required: true,  })} placeholder='org' />

      <button type="submit">submit</button> 
    </form>
    </div>
  );
};

export default VolunteersForm;

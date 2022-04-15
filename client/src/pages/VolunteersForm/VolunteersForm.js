import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const VolunteersForm = (props) => {
  const navigate = useNavigate()
  const param = useParams();
  const displayName = sessionStorage.getItem("displayName");
  const email = sessionStorage.getItem("email");
  const [startDate, setStartDate] = useState(new Date());
  const img = props.volWorkName[1];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = {
      ...data,
      startDate,
      img,
    };
    console.log(data);
    fetch("http://localhost:5000/api/user/info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
      alert(`successfully done! go to dashboard`);

  };
  return (
    <div className="grid place-items-center bg-slate-500 ">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 ">
        <input
          {...register("Name", { required: true, maxLength: 20 })}
          placeholder="User Name"
          value={displayName}
        />
        <input {...register("email")} placeholder="Email" value={email} />
        <input
          {...register("description", { required: true })}
          placeholder="description"
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <input
          {...register("org", { required: true })}
          placeholder="org"
          value={param.id}
        />

        <button type="submit" >submit</button>
      </form>
    </div>
  );
};

export default VolunteersForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core"

export default function ValidatorHook() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="password" error={errors.password} variant="outlined" label="password" inputRef={register({ required: true, minLength: 8 })} />
        <p>{errors.password && "!!حداقل طول رمز عبور 8 کاراکتر است"}</p>
        <TextField name="email" error={errors.email} variant="outlined" label="email" inputRef={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
        <p>{errors.email && "!!لطفا فرمت درست ایمیل را وارد کنید"}</p>
        <TextField name="phoneNumber" error={errors.phoneNumber} variant="outlined" label="phonenumber" inputRef={register({ required: true, pattern: /^0(9)\d{9}$/ })} />
        <p>{errors.phoneNumber && "!!لطفا شماره موبایل خود را وارد کنید"}</p>
        <Button type="submit" variant="contained" color="primary" disabled={errors.password || errors.email || errors.phoneNumber}>
          Submit
        </Button>
      </form>
    </div>
  );
}

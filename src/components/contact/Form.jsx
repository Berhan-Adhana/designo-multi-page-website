import React, { useState } from "react";
import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup.string().min(6).required(),
  email: Yup.string().email().required(),
  phone: Yup.number().positive().required(),
  message: Yup.string().min(10).required(),
 
  
});
const Form = ({ handleSubmit, onSubmit, register, errors }) => {
  const ErrorElement = ({ name, message }) =>
    errors[name] && <p className="text-red-500">{message}</p>;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 flex flex-col gap-y-4 mt-[20px] "
    >
      <input
        {...register("name")}
        type="text"
        placeholder="Name"
        className="text-lightGrey p-4 outline-none active:outline-none focus:outline-none border-b-2 border-b-lightGrey bg-primary  focus:bg-primary active:bg-primary placeholder:text-lightGrey "
      />
      <ErrorElement name="name" message={errors.name?.message} />
      <input
        type="email"
        {...register("email")}
        placeholder="Email Address"
        className="text-lightGrey p-4 outline-none active:outline-none focus:outline-none border-b-2 border-b-lightGrey bg-primary placeholder:text-lightGrey "
      />
      <ErrorElement name="email" message={errors.email?.message} />
      <input
        type="text"
        {...register("phone")}
        placeholder="Phone"
        className="text-lightGrey p-4 outline-none active:outline-none focus:outline-none border-b-2 border-b-lightGrey bg-transparent placeholder:text-lightGrey "
      />
      <ErrorElement name="phone" message={errors.phone?.message} />
      <textarea
        name="message"
        {...register("message")}
        placeholder="Your Message"
        className="text-lightGrey p-4 outline-none active:outline-none focus:outline-none border-b-2 border-b-lightGrey  bg-transparent placeholder:text-lightGrey resize-none"
      />
      <ErrorElement name="message" message={errors.message?.message} />

      <button type="submit" className="btn btn-white md:self-end">
        Submit
      </button>
    </form>
  );
};

export default Form;

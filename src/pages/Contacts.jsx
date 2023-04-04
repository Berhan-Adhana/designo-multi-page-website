import React from "react";
import Cities from "../components/Cities";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().min(6).required(),
  email: Yup.string().email().required(),
  phone: Yup.number().positive().required(),
  message: Yup.string().min(10).required(),
});
const Contacts = () => {
  const ErrorElement = ({ name, message }) =>
    errors[name] && <p className="text-red-500">{message}</p>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => alert(`Thank you ${data.name} for Contacting us!`);
  return (
    <div className=" w-full sm:app-container pt-[57px] ">
      <div className="bg-primary text-white px-6  py-[80px] rounded-md flex flex-col lg:flex-row lg:justify-between gap-x-6 lg:items-center">
        <div className="lg:basis-[445px] flex flex-col gap-y-6 items-center md:items-start md:text-left text-center">
          <h1 className="capitalize">Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

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
      </div>
      <Cities />
    </div>
  );
};

export default Contacts;

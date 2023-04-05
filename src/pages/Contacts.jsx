import React from "react";
import Cities from "../components/Cities";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form, { schema } from "../components/contact/Form";
import ContactHeader from "../components/contact/ContactHeader";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => alert(`Thank you ${data.name} for Contacting us!`);
  return (
    <div className=" w-full sm:app-container pt-[57px] ">
      <div className="bg-primary text-white px-6  py-[80px] rounded-md flex flex-col lg:flex-row lg:justify-between gap-x-6 lg:items-center">
       <ContactHeader/>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          register={register}
        />
      </div>
      <Cities />
    </div>
  );
};

export default Contacts;

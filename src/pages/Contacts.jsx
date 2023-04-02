import React from "react";
import Cities from "../components/Cities";

const Contacts = () => {
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

        <form className="flex-1 flex flex-col gap-y-4 mt-[20px] ">
          <input
            type="text"
            placeholder="Name"
            className="text-lightGrey p-4 outline-none focus:outline-none border-b-2 border-b-lightGrey bg-transparent placeholder:text-lightGrey "
          />
          <input
            type="email"
            placeholder="Email Address"
            className="text-lightGrey p-4 outline-none focus:outline-none border-b-2 border-b-lightGrey bg-transparent placeholder:text-lightGrey "
          />
          <input
            type="text"
            placeholder="Phone"
            className="text-lightGrey p-4 outline-none focus:outline-none border-b-2 border-b-lightGrey bg-transparent placeholder:text-lightGrey "
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="text-lightGrey p-4 outline-none focus:outline-none border-b-2 border-b-lightGrey  bg-transparent placeholder:text-lightGrey resize-none"
          />
          
          <button className="btn btn-white md:self-end">Submit</button>
        </form>
      </div>
      <Cities />
    </div>
  );
};

export default Contacts;

import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-start gap-3 p-6 font-mono md:w-9/12 md:mx-auto">
      <h1 className=" font-bold text-4xl py-2">Contact Me</h1>
      <p className="">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <span className="w-full md:flex gap-2">
        <span className="w-full">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            className=" w-full border-gray-100 border-4 rounded-lg p-2"
          />
        </span>
        <span className="w-full">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Enter your last name"
            className=" w-full border-gray-100 border-4 rounded-lg p-2"
          />
        </span>
      </span>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name=""
        id="email"
        placeholder="yourname@email.com"
        className=" w-full border-gray-100 border-4 rounded-lg p-2"
      />
      <label htmlFor="">Message</label>
      <textarea
        name=""
        id="message"
        // cols="30"
        rows="5"
        className="w-full p-2 h-5/6 border-gray-100 border-4 rounded-lg"
        placeholder="Send me a message and I'll reply you as soon as possible..."
      ></textarea>
      <div className="flex gap-3 md:flex-row md:px-8">
        <input type="checkbox" name="" id="" className="" />
        <p>You agree to providing your data to Azeez who may contact you.</p>
      </div>
      <button
        type="submit"
        className=" rounded-lg mx-auto px-8 p-3 w-11/12 bg-blue-500 text-2xl md:w-full text-white"
        id="btn__submit"
      >
        Send message
      </button>
    </div>
  );
};

export default Contact;

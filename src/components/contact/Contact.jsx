import React, { useState, useRef } from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const value = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ghxx7l",
        "template_70kouj2",
        form.current,
        "A142HPPNVEECn4Ola"
      )

      .then(
        (result) => {
          console.log(result);

          setMessage("Thank you! Message received.");
          document.getElementById("form").reset();

          setTimeout(() => {
            setMessage();
          }, 4600);
        },
        (error) => {
          console.log(error.text);
          setMessage(`An error occured!`);
          document.getElementById("form").reset();

          setTimeout(() => {
            setMessage();
          }, 5800);
        }
      );
  };

  return (
    <div className="register max-w[20rem] flex justify-center items-center">
      <div className="bg-slate-300 border shadow-md shadow-black opacity-[0.8] border-white py-6 rounded-[12px]">
        <h2 className="py-2 text-black text-2xl text-center font-[400]">
          Let's Talk
        </h2>
        <form id="form" ref={form} onSubmit={sendEmail}>
          <div className="input-group px-10 my-3">
            <input
              ref={value}
              type="text"
              className="py-2 w-full px-2 outline-none rounded-md"
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div className="input-group px-10 my-3">
            <input
              ref={value}
              type="email"
              className="py-2 w-full px-2 outline-none rounded-md"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="input-group px-10 my-3">
            <textarea
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
              id="message"
              name="message"
              required
            ></textarea>
          </div>

          <div className="btn px-10">
            <button className="py-3 w-full bg-slate-600 rounded-md">
              Submit
            </button>
          </div>
        </form>
        {message ? (
          <p
            className={
              message
                ? "bg-green-700 py-3 mx-10 transition text-gray-300 text-center  mt-5"
                : "bg-red-700 py-3 transition-all delay-75 text-gray-300 text-center mt-5"
            }
          >
            {message}
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="circle-1"></div>
    </div>
  );
};

export default Contact;

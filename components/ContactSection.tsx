"use client";
import React from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";

const ContactSection: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      emailjs
        .send(
          "service_9y1b38h",
          "template_pim6g0h",
          values, // This should be your form data.
          "Abpghx-upQH1Om_gT"
        )
        .then((response) => {
          console.log("Email sent successfully!", response);
        })
        .catch((error) => {
          console.error("Email could not be sent:", error);
        });
    },
  });

  return (
    <section id="contact" className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
        Contact
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2.5">
        <label htmlFor="name" className="text-2xl font-bold">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="bg-white border border-gray-200 p-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        />
        <label htmlFor="email" className="text-2xl font-bold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="bg-white border border-gray-200 p-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        />
        <label htmlFor="message" className="text-2xl font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          rows={5}
          cols={33}
          className="bg-white border border-gray-200 p-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          // className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        />
        <button
          type="submit"
          className="active:opacity-80 focus:ring-4 inline-flex justify-center px-3 py-2 text-2xl text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactSection;

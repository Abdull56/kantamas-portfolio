import React from "react";
import { Icon } from "@/components/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import contactSchema from "../validation";
import { Button } from "@/components/ui/button";

const initialValue = {
  fullname: "",
  email: "",
};

const Contact = () => {
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true), console.log("values", values);
      try {
        console.log(values, "value");
      } catch (error) {
        console.log(error);
      }
      setSubmitting(false);
    },
  });

  const { isSubmitting } = formik;

  return (
    <div className="bg-neutral-950 mt-12 pb-10">
      <section>
        <div className="p-6 text-center pt-14">
          <span className="text-white text-xs  mt-10">GET IN TOUCH</span>
          <div>
            <span className=" text-white text-2xl">
              Contact <span className=" text-sky-500">Me.</span>{" "}
            </span>
          </div>

          <div className="mt-3">
            <span className=" text-white">
              I am currently open to full-time,contract part-time opportunities
              in
              <br />
              Front End Development.
            </span>
          </div>
        </div>
      </section>

      <section className=" grid grid-cols-2 mt-6 p-6 bg-neutral-900 mx-16 mb-8">
        <div className=" text-white">
          <div className="mb-3">
            {" "}
            <span className=" text-2xl">Have an awesome project idea?</span>
          </div>

          <span className=" text-sky-500 text-xl">Let's Discuss.</span>

          <div className="mt-5 text-sky-500 flex mb-6">
            <div className="rounded-full p-4  bg-gray-500 mr-4 w-16">
              <Icon icon="phoneIcon" size={30} />
            </div>
            <span className="mt-4">08107545591</span>
          </div>

          <div className="  text-sky-500 mt-2 flex mb-6">
            <div className="rounded-full p-4  bg-gray-500 mr-4 w-16">
              <Icon icon="messageIcon" size={30} />
            </div>
            <span className="mt-4">abdullshubby@gmail.com</span>
          </div>

          <div className="mt-2 mb-3 flex">
            <div className="rounded-full p-4  bg-gray-500 mr-4 w-16 ">
              <Icon icon="locationIcon" size={30} />
            </div>
            <span className="mt-4"> Abuja,Nigeria</span>
          </div>
        </div>

        <section className=" text-neutral-400">
          <form onSubmit={formik.handleSubmit}>
            <div className="">
              <span>Full Name</span>
              <Input
                className=" rounded-xl mt-1 mb-3 h-14 border-neutral-700 placeholder:text-neutral-700"
                placeholder="Enter Name"
                {...formik.getFieldMeta("fullname")}
                {...formik.getFieldProps("fullname")}
              />
            </div>

            <div className="">
              <span>Email Address</span>
              <Input
                className=" rounded-xl mt-1 mb-3 h-14 border-neutral-700 placeholder:text-neutral-700"
                placeholder="Enter Email"
                {...formik.getFieldMeta("email")}
                {...formik.getFieldProps("email")}
              />
            </div>

            <div className="">
              <span>Message</span>
              <Textarea
                placeholder="Enter Message"
                className=" mt-1 rounded-xl h-36 border-neutral-700 placeholder:text-neutral-700"
              />

              <div className=" bg-sky-500 flex p-2 mt-6  justify-center w-44 rounded-xl">
                <Button
                  className="text-white"
                  text="Send Message"
                  loading={isSubmitting}
                  onClick={formik.handleSubmit as any}
                ></Button>
                <div className="mt-3 pr-2">
                  <Icon icon={"messageIcon"} size={20} className="mt-4" />
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Contact;

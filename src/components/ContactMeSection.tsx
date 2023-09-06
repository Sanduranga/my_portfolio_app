import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  user_name: Yup.string().required("Required"),
  user_email: Yup.string().email().required("Required"),
  message: Yup.string()
    .required("Required")
    .min(25, "Comment must be at least 25 characters"),
});
const ContactMeSection = () => {
  const form = useRef();

  const initialValues = {
    user_name: "",
    user_email: "",
    message: "",
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_kol9wgy",
        "template_jzhkzcr",
        form.current,
        "cTsWsXK1whGiDhKYU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="absolute top-[10vh] left-0 w-full h-[90vh]">
      <h3 className="pt-4 text-2xl font-bold text-center mb-10 text-white">
        Drop me a message..
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-1 md:mx-20 mb-10 mx-5 gap-2">
        <motion.img
          animate={{
            x: [-500, 100, 0],
            opacity: [1, 0.8, 0.5, 0.2, 0, 1],
            transition: {
              delay: 1,
              duration: 2,
            },
          }}
          className="md:w-[25vw] md:h-[50vh] hidden md:block bg-gray-400 object-cover rounded-3xl"
          src="/programmer-gif.gif"
        />

        <div className=" bg-gray-100/20 rounded-md md:p-10 p-3">
          <div className="flex text-amber-500 items-center mb-5">
            <h1 className="text-lg mt-1">
              <AiOutlineMail />
            </h1>
            <h1 className="text-lg ml-2">sandurangatd@gmail.com</h1>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            <Form
              className="flex flex-col text-black font-mono text-sm bg-gray-200/10 rounded-md p-3 "
              ref={form}
            >
              <label className="text-white">Name</label>

              <Field type="text" id="user_name" name="user_name" />
              <ErrorMessage
                name="user_name"
                component="div"
                className="text-red-600"
              />
              <label className="text-white mt-5">Email</label>

              <Field type="email" id="user_email" name="user_email" />
              <ErrorMessage
                name="user_email"
                component="div"
                className="text-red-600"
              />
              <label className="text-white mt-5">Message</label>

              <Field as="textarea" id="message" name="message" />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-600"
              />
              <button
                className="bg-amber-600 px-5 mb-8 mt-5 rounded-sm tracking-wider font-bold py-3"
                type="submit"
                value="Send"
              >
                submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMeSection;

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  sender_name: Yup.string().required("Required"),
  sender_email: Yup.string().email().required("Required"),
  message: Yup.string()
    .required("Required")
    .min(25, "Comment must be at least 25 characters"),
});
const ContactMeSection = () => {
  const form = useRef<string>();
  const formik = useFormikContext<FormValues>();

  interface FormValues {
    sender_name: string;
    sender_email: string;
    message: string;
  }

  const initialValues: FormValues = {
    sender_name: "",
    sender_email: "",
    message: "",
  };

  const sendEmail = (e: FormValues) => {
    console.log(e);

    emailjs
      .sendForm(
        "service_8qb7aiu",
        "template_8bof99d",
        form.current,
        "VkV6Ag43Otk2IrZ2E"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(`Thank you ${e.sender_name}. I'll contact you soon..`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="absolute bg-gradient-to-b from-gray-950/80 to-gray-500 left-0 w-full h-full">
      <h3 className="pt-4 text-2xl font-bold text-center md:mb-10 mb-20 md:mt-12 mt-28 text-white">
        Drop me a message..
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-1 md:mx-20 mb-10 mx-5 gap-2">
        <motion.img
          animate={{
            x: [-500, 100, 0],
            opacity: [1, 0.8, 0.5, 0.2, 0, 1],
            transition: {
              delay: 0.3,
              duration: 2,
            },
          }}
          className="md:w-[25vw] md:h-[50vh] hidden md:block bg-gray-400 object-cover rounded-3xl"
          src="./images/programmer-gif.gif"
          alt="gif"
        />

        <div className=" bg-gray-800/70 rounded-md md:p-10 p-3">
          <div className="flex text-amber-500 items-center mb-5">
            <h1 className="text-lg mt-1">
              <AiOutlineMail />
            </h1>
            <h1 className="text-lg ml-2">sandurangatd@gmail.com</h1>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // {async (values) => {
            //   // You can access Formik values directly within the onSubmit function.
            //   console.log("User Name:", values.sender_name);
            //   console.log("User Email:", values.sender_email);
            //   console.log("Message:", values.message);
            onSubmit={(e) => sendEmail(e)}
          >
            <Form
              className="flex flex-col text-black font-mono text-sm bg-gray-200/10 rounded-md p-3 "
              ref={form}
            >
              <label className="text-white">Name</label>

              <Field type="text" id="sender_name" name="sender_name" />
              <ErrorMessage
                name="sender_name"
                component="div"
                className="text-red-600 tracking-wider font-bold"
              />
              <label className="text-white mt-5">Email</label>

              <Field type="email" id="sender_email" name="sender_email" />
              <ErrorMessage
                name="sender_email"
                component="div"
                className="text-red-600 tracking-wider font-bold"
              />
              <label className="text-white mt-5">Message</label>

              <Field as="textarea" id="message" name="message" />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-600 tracking-wider font-bold"
              />
              <button
                className="bg-amber-600 px-5 mb-8 mt-5 text-xl hover:bg-gradient-to-br from-yellow-500 to-amber-700 rounded-sm tracking-wider font-bold py-3"
                type="submit"
                value="Send"
              >
                submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[10vh]">
        <Footer />
      </div>
    </div>
  );
};

export default ContactMeSection;

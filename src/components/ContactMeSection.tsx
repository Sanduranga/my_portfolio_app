import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Amaze from "./Amaze";

const validationSchema = Yup.object().shape({
  sender_name: Yup.string().required("Required"),
  sender_email: Yup.string().email().required("Required"),
  message: Yup.string()
    .required("Required")
    .min(25, "Comment must be at least 25 characters"),
});
const ContactMeSection = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

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
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_8qb7aiu",
          "template_8bof99d",
          formRef.current, // Pass the form element here
          "VkV6Ag43Otk2IrZ2E"
        )
        .then(
          () => {
            alert(`Thank you ${e.sender_name}. I'll contact you soon..`);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <div className=" bg-hash1 w-full min-h-screen">
      <Amaze>
        <h1
          id="contact_me_section"
          className="py-4 w-fit h-fit text-2xl mx-auto font-bold text-center md:mb-10 md:mt-12 mt-20 text-black"
        >
          Drop me a message..
        </h1>
      </Amaze>

      <div className="grid grid-cols-autofit md:mx-20 mb-10 mx-5 gap-2">
        <img
          className="md:w-[25vw] md:h-[50vh] w-[50vw] h-[35vh] mx-auto object-cover rounded-3xl"
          src="./typinggirl.gif"
          alt="gif"
        />

        <div className="bg-gray-800/70 rounded-md md:p-10 p-3">
          <div className="flex text-amber-500 items-center mb-5">
            <h1 className="text-lg mt-1">
              <AiOutlineMail />
            </h1>
            <h1 className="text-lg ml-2">sandurangatd@gmail.com</h1>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(e) => sendEmail(e)}
          >
            <Form
              className="flex flex-col font-mono text-sm bg-white rounded-md p-3 "
              ref={formRef}
            >
              <label className="text-black font-bold">Name</label>

              <Field
                style={{ borderBottom: "2px solid black" }}
                type="text"
                id="sender_name"
                name="sender_name"
              />
              <ErrorMessage
                name="sender_name"
                component="div"
                className="text-red-600 tracking-wider font-bold"
              />
              <label className="text-black font-bold mt-5">Email</label>

              <Field
                style={{ borderBottom: "2px solid black" }}
                type="email"
                id="sender_email"
                name="sender_email"
              />
              <ErrorMessage
                name="sender_email"
                component="div"
                className="text-red-600 tracking-wider font-bold"
              />
              <label className="text-black font-bold mt-5">Message</label>

              <Field
                style={{ borderBottom: "2px solid black" }}
                as="textarea"
                id="message"
                name="message"
              />
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
    </div>
  );
};

export default ContactMeSection;

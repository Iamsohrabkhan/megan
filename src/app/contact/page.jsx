"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useFormik } from "formik";

import * as Yup from "yup";

const Contact = () => {
    const {toast}=useToast()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.").min(3,"Name must be more 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: async (values) => {
      try {
        // Replace 'your-formspree-endpoint' with your actual Formspree endpoint
        const response = await fetch('https://formspree.io/f/xbjnlzav', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
    
        if (response.ok) {
          // You can handle the success response here if needed
          console.log("Form submitted successfully", response);
          toast({
            title: "SUCCESS!",
            description: "Message had successfuly send!"
          })
  
        } else {
          // Handle any errors that occur during form submission
          console.error("Form submission failed", response.status, response.statusText);
        }
      } catch (error) {
        // Handle any other errors that may occur
        console.error("Form submission error", error);
      }
    },
  });
  return (
    <main className="py-7">
      <div className="max-w-screen-xl mx-auto px-4 -600 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <p className=" text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              Were here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none ">{item.icon}</div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={formik.handleSubmit} className="space-y-5">
              <div>
                <label
                htmlFor="name"
                  className={`block text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-500"
                      : ""
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <Input
                id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-3 py-2 rounded"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
              <label
              htmlFor="email"
                  className={`block text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-500"
                      : ""
                  } `}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <Input 
                id="email"
                  type="email"
                  name="email"
                  required={false}
                  placeholder="Enter your name"
                  className="w-full mt-2 px-3 py-2  rounded"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              

              <div className="grid w-full gap-1.5">
      <Label htmlFor="message"
       className={`block text-sm pb-2 ${
        formik.touched.message && formik.errors.message
          ? "text-red-500"
          : ""
      } `}
      >Your message</Label>
      <Textarea 
      placeholder="Type your message here." 
      id="message" 
      onChange={formik.handleChange}
      value={formik.values.message}
      onBlur={formik.handleBlur}
      className="w-full mt-2 h-36 px-3 py-2 rounded"
      />
    </div>

              <Button variants="primary" className="w-full text-lg" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

const contactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "Support@example.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "+1 (555) 000-000",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Mountain View, California, United State.",
  },
];
export default Contact;

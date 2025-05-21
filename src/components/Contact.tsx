import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useModal } from "../shared/modal/ModalContext";
import api from "../shared/axiosInstance";

const Contact = () => {
  const { openModal, closeModal } = useModal();

  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    description: "",
  });

  // Handle input change and validate on the fly
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Dynamic validation for each field
    if (name === "name") {
      setErrors((prev) => ({
        ...prev,
        name: value.trim() ? "" : "Name is required.",
      }));
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? ""
          : value
          ? "Please enter a valid email address."
          : "Email is required.",
      }));
    }

    if (name === "description") {
      setErrors((prev) => ({
        ...prev,
        description: value.trim() ? "" : "Description is required.",
      }));
    }
  };

  // Validate the whole form on submit
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { name: "", email: "", description: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      formIsValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = formData.email
        ? "Please enter a valid email address."
        : "Email is required.";
      formIsValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Form submit handler
  const onSubmitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        openModal("Hey bear with me yaar! m doing for you 😜", "loading");
        const response = await api.post("/contact/post", formData);
        console.log(response, "res");
        closeModal();

        openModal(response.data.message);
        setFormData({ name: "", email: "", description: "" });
        setErrors({ name: "", email: "", description: "" });
      } catch (error) {
        console.log(error);
        openModal("Somthing went wrong");
      }
    }
  };

  return (
    <>
      <section className="grid grid-cols-2 gap-20 px-20 py-20 ultra-sm:grid-cols-1 max-sm:grid-cols-1">
        <div className="contact_info flex justify-center items-center">
          <div>
            <strong className="mb-2">
              <p className="text-2xl font-medium">Let's connect!</p>
            </strong>
            <h1 className="leading-tight mb-3 break-words text-5xl font-bold ultra-sm:text-3xl max-sm:text-3xl">
              Reach out and let discuss how my front-end skills can bring your
              projects to life."
            </h1>

            <small className="text-xl ">
              Let's build the web for future. 🚀
            </small>
            <div className="space-y-2 mt-10">
              <small className="font-semibold text-2xl ultra-sm:text-xl">
                Connect with me on{" "}
              </small>
              <div className="flex space-x-4 mt-2 text-3xl">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                  href="https://github.com/venub-17"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/venu-beenaveni/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_info text-xl xl:text-2xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-lg bg-[#293343] text-black p-20">
          <form onSubmit={onSubmitContact} noValidate>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border bg-[#E1E4EA] border-gray-800 text-xl outline-none rounded-lg py-4 px-4"
                type="text"
              />
              {errors.name && (
                <p className="text-red-500 text-2xl">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border bg-[#E1E4EA] border-gray-800 text-xl outline-none rounded-lg py-4 px-4"
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-2xl">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows={12}
                value={formData.description}
                onChange={handleChange}
                className="border bg-[#E1E4EA] border-gray-800 outline-none rounded-lg text-xl py-4 px-4"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-2xl">{errors.description}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button className="bg-[#3a5a83] hover:bg-[#345176] text-[#ffffff] px-8 py-4 rounded">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

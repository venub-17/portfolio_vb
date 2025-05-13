import React, { useState } from "react";
import "../modal/modal.css";
import { useModal } from "../modal/ModalContext";
import api from "../axiosInstance";

interface formProps {
  onClose: () => void;
}

const FormModal: React.FC<formProps> = ({ onClose }) => {
  // State to hold form data and errors
  const { openModal, closeModal } = useModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role: "",
  });

  // Handle form field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors dynamically when the input is valid
    if (name === "name") {
      if (value.trim()) {
        setErrors((prev) => ({ ...prev, name: "" }));
      } else {
        setErrors((prev) => ({ ...prev, name: "Name is required." }));
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "" }));
      } else {
        setErrors((prev) => ({
          ...prev,
          email: value
            ? "Please enter a valid email address."
            : "Email is required.",
        }));
      }
    }

    if (name === "role") {
      if (value) {
        setErrors((prev) => ({ ...prev, role: "" }));
      } else {
        setErrors((prev) => ({ ...prev, role: "Please select a role." }));
      }
    }
  };

  // Validate the form before submitting
  const validateForm = () => {
    let formIsValid = true;
    const errors = { name: "", email: "", role: "" };

    // Name Validation: Not empty
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
      formIsValid = false;
    }

    // Email Validation: Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      formIsValid = false;
    }

    // Role Validation: Ensure a role is selected
    if (!formData.role) {
      errors.role = "Please select a role.";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const onDownLoad = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Validate form before downloading
    if (validateForm()) {
      const response = await api.post("/email-sent/post", formData);
      console.log(response);
      await onResumeDownLoad();
      setFormData({
        name: "",
        email: "",
        role: "",
      });
    }
  };
  const onResumeDownLoad = async () => {
    try {
      openModal("Hey bear with me yaar! m doing for you 😜", "loading");
      const response = await api.get("/resume/download", {
        responseType: "blob",
      });
      const contentType = response.headers["content-type"];
      let fileName = "";
      if (contentType === "application/pdf") {
        fileName = "pdf";
      } else {
        fileName = "docx";
      }
      const url = window.URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `VenuBeenaveni.${fileName}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      closeModal();
    } catch (error) {
      console.error("Error downloading file:", error);
      openModal("Failed to download file");
    }
  };

  return (
    <>
      <div className="modal-backdrop">
        <div className="modal-content form_modalContent text-black">
          <form onSubmit={onDownLoad}>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-3xl pb-4" htmlFor="role">
                Let’s Get to Know You!
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="border bg-[#E1E4EA] border-gray-800 text-xl focus:ring-0 focus:outline-none hover:bg-[#ccc] outline-none rounded-lg py-6 px-4"
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="recruiter">Recruiter</option>
                <option value="user">User</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-2xl">{errors.role}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-xl xl:text-2xl" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border bg-[#E1E4EA] border-gray-800 text-xl outline-none rounded-lg py-6 px-4"
                type="text"
              />
              {errors.name && (
                <p className="text-red-500 text-2xl">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-xl xl:text-2xl" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border bg-[#E1E4EA] border-gray-800 text-xl outline-none rounded-lg py-6 px-4"
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-2xl">{errors.email}</p>
              )}
            </div>
            <div className="modal_footers">
              <button
                className="rounded text-2xl px-6 py-3 bg-slate-400 hover:bg-slate-500 text-gray-900"
                onClick={onClose}
                type="button"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-6 text-2xl py-3 bg-[#3a5a83] text-[#ffffff] hover:bg-[#345176] tracking-wider rounded-md"
              >
                Download
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormModal;

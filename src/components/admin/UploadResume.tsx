import { ChangeEvent, useState } from "react";
import { useModal } from "../../shared/modal/ModalContext";
import api from "../../shared/axiosInstance";

const UploadResume = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { openModal } = useModal();

  const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setSelectedFile(file);
    } else {
      openModal("Please Select PDF");
    }
  };
  const onUpload = async () => {
    if (!selectedFile) return null;
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/resume/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      openModal(response.data.message);
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="text-white flex justify-center mt-8 items-center flex-col">
        <p className="text-3xl pb-4">Upload Updated Resume here</p>
        <button className="px-8 py-4 text-xl bg-[#3a5a83] hover:bg-[#345176] text-[#ffffff] rounded-md">
          <input
            className="opacity-0 absolute"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={onSelectFile}
          />
          Select Resume
        </button>

        {selectedFile && (
          <p className="text-2xl pt-4">File Name: {selectedFile?.name}</p>
        )}

        {selectedFile && (
          <button
            onClick={onUpload}
            className=" bg-slate-400 hover:bg-slate-500 text-gray-900 mt-4 rounded py-4 px-8 text-2xl"
          >
            Upload
          </button>
        )}
      </section>
    </>
  );
};
export default UploadResume;

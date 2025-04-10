import { ChangeEvent, useState } from "react";
import { useModal } from "../../shared/modal/ModalContext";

const UploadResume = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { openModal } = useModal();

  const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      openModal("Please Select PDF");
    }
  };
  const onUpload = () => {
    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);

      console.log(formData, "formData");
    }
  };
  return (
    <>
      <section className="text-white flex justify-center mt-8 items-center flex-col">
        <p className="text-3xl pb-4">Upload Updated Resume here</p>
        <button className=" bg-[#6c757d]  max-w-xs p-4 rounded text-xl">
          <input
            className="opacity-0 absolute"
            type="file"
            accept=".pdf"
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
            className="bg-[#228be6] mt-4 rounded py-4 px-8 text-2xl"
          >
            Upload
          </button>
        )}
      </section>
    </>
  );
};
export default UploadResume;

import { useState } from "react";
import ResumeDownloader from "./ResumeDownloader";
import Usercontact from "./Usercontact";

const Userpage = () => {
  const [isContact, setIsContact] = useState(false);
  const onChangeUser = () => {
    setIsContact((prev) => !prev);
  };
  return (
    <>
      <div className="text-[#bdc8e7] justify-center flex gap-8 mb-4 text-xl">
        <button
          className={`hover:text-white hover:border-b ${
            !isContact ? "text-white border-b" : "text-[#bdc8e7] "
          }`}
          onClick={onChangeUser}
        >
          Resume Downloader
        </button>
        <button
          className={`hover:text-white hover:border-b ${
            isContact ? "text-white border-b" : "text-[#bdc8e7] "
          }`}
          onClick={onChangeUser}
        >
          {" "}
          Contact
        </button>
      </div>
      <div>
        {isContact && <Usercontact />}
        {!isContact && <ResumeDownloader />}
      </div>
    </>
  );
};

export default Userpage;

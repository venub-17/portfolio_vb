import { useModal } from "../shared/modal/ModalContext";

const Contact = () => {
  const { openModal } = useModal();
  const onSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const formValue = Object.fromEntries(formData);
    if (e.currentTarget.checkValidity()) {
      openModal("Thank you for reaching out!");
    } else {
      openModal("Please fill the form");
    }
    e.currentTarget.reset();
  };
  return (
    <>
      <section className="grid grid-cols-2 gap-20 px-20 py-20 max-sm:grid-cols-1 ">
        <div className="contact_info flex justify-center items-center">
          <div>
            <strong className="mb-2">
              <p className="text-2xl font-medium">Lets connect!</p>
            </strong>
            <h1 className="leading-tight mb-3 break-words text-5xl font-bold max-sm:text-3xl">
              Reach out and let discuss how my front-end skills can bring your
              projects to life."
            </h1>

            <small className="text-xl ">
              Let's build the web for future. 🚀
            </small>
          </div>
        </div>
        <div className="contact_info shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded bg-[#4f596a] text-black p-20">
          <form onSubmit={onSubmitContact}>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="">Name</label>
              <input
                name="name"
                required
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="">Email</label>
              <input
                name="email"
                required
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="">Description</label>
              <textarea
                name="description"
                rows={12}
                required
                className="border-2 border-gray-400 outline-none rounded py-4 px-4"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className=" bg-slate-400 text-gray-900 px-8 py-4 rounded ">
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

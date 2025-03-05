import { NavLink, useNavigate } from "react-router-dom";
import api from "../../shared/axiosInstance";
import { useModal } from "../../shared/modal/ModalContext";
import { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData);

    try {
      const response = await api.post("/auth/login", formValue);
      if (response.status === 200) {
        const token = response.data.token;
        const isAdmin = response.data.isAdmin;
        const isLogin = "true";
        localStorage.setItem("authToken", token);
        localStorage.setItem("isAdmin", isAdmin);
        localStorage.setItem("isLogin", isLogin);
        navigate("/home");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        openModal(error.response?.data?.message || error.message);
      } else if (error instanceof Error) {
        openModal(error.message);
      } else {
        openModal("An unexpected error occurred.");
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="bg-[#4f596a] rounded text-black px-20 py-10 ">
          <h1 className="text-center text-4xl mb-5">Login</h1>
          <form onSubmit={onLogin}>
            <div className="flex gap-8 flex-col">
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="text"
                  className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="text"
                  className="border-2 border-gray-400 outline-none rounded py-4 px-4"
                />
              </div>
              <div className="flex justify-center ">
                <button className="rounded px-8 py-4 text-[#000000] bg-[#75BBF5]">
                  Login
                </button>
              </div>
            </div>

            <div className="text-center mt-4">
              <p>
                Don't have account? <NavLink to={"/signup"}>Signup</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

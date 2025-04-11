import { NavLink, useNavigate } from "react-router-dom";
import api from "../../shared/axiosInstance";
import { useModal } from "../../shared/modal/ModalContext";
import { AxiosError } from "axios";

interface LoginProps {
  onLoginSuccess: (isAdmin: boolean) => void;
}
const Login = ({ onLoginSuccess }: LoginProps) => {
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
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("isAdmin", isAdmin);
        sessionStorage.setItem("isLogin", isLogin);
        onLoginSuccess(isAdmin);
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
        <div className="bg-[#293343] rounded text-black px-20 py-10 ">
          <h1 className="text-center text-4xl mb-5">Login</h1>
          <form onSubmit={onLogin}>
            <div className="flex gap-8 flex-col">
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Email</label>
                <input
                  name="email"
                  type="text"
                  className="border bg-[#E1E4EA] text-xl border-gray-800   outline-none rounded-lg py-4 px-4"
                />
              </div>
              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="">Password</label>
                <input
                  name="password"
                  type="text"
                  className="border bg-[#E1E4EA] text-xl border-gray-800 text-gray-200  outline-none rounded-lg py-4 px-4"
                />
              </div>
              <div className="flex justify-center ">
                <button className="rounded px-8 text-xl py-4 tracking-wider hover:bg-[#345176]  text-[#ffffff] bg-[#3a5a83]">
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

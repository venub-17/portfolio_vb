import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootLayout = () => {
  return (
    <>
<<<<<<< Updated upstream
      <Header />
      <Outlet />
=======
      <div className="flex flex-col min-h-screen  ">
        <Header />

        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
>>>>>>> Stashed changes
    </>
  );
};
export default RootLayout;

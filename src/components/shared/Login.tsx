import logo from "../../assets/logo.png";
import LoginSelect from "./LoginSelect";

const Login = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-300">
        <div className="bg-gray-300 flex items-center justify-center flex-col">
          <img src={logo} alt="logo" className="pb-10 " />
          <div className="bg-white sm:w-md w-sm h-full">
            <h1 className="text-2xl font-bold text-sky-500 flex items-center justify-center pt-4 pb-4">
              Sign In
            </h1>
            <div className="px-8 pb-2">
              <input
                type="email"
                placeholder="User Email"
                className="w-full px-3 py-2 border bg-gray-300 focus:outline-none mb-4"
              />
              <input
                type="password"
                placeholder="User Password"
                className="w-full px-3 py-2 border bg-gray-300 focus:outline-none mb-4"
              />
            </div>
            <div className="flex items-center justify-end pb-4 px-8">
              <LoginSelect />
            </div>
            <div className="flex items-center pt-16 pb-8 px-8">
              <button className="px-4 py-2 bg-sky-500 text-white cursor-pointer">
                Log in
              </button>
            </div>
            <div className="px-8 text-sky-600 cursor-pointer">
              <p className="flex items-center justify-end pb-4 hover:underline">
                forget password?
              </p>
            </div>
            <div className="bg-gray-400 w-full text-sm hover:underline cursor-pointer text-slate-600 uppercase px-4 py-4 text-center">
              bdtask.com Admin Dashboard.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;

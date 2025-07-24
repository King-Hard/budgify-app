import Link from "next/link";

export default function Login() {
  return (
    <form 
      action=""
      className="flex justify-center items-center min-h-dvh bg-slate-100"
    >
      <div className="w-90 sm:w-100 border p-5 bg-white rounded-sm shadow-[-6px_6px_0px_#000000]">
        <div className="text-center">
          <h1 className="text-xl font-medium">Welcome to Budjify</h1>
          <p>Log in using the form below.</p>
        </div>
        <div className="mt-4"> 
          <label 
            htmlFor="email"
            className="font-medium"
          >
            Email
          </label>
          <input 
            name="email"
            id="email"
            type="text"
            className="w-full border py-3 px-"
          />
        </div>
        <div className="mt-2">
          <label 
            htmlFor="password"
            className="font-medium"
          >
            Password
          </label>
          <input 
            name="password"
            id="password"
            type="password"
            className="w-full border py-3 px-4"
          />
        </div>
        
        <div className="mt-4">
          <button 
            type="submit"
            className="w-full text-center border py-3 px-4 text-white font-medium bg-black"
          >
            Log In
          </button>
          <div className="flex justify-center space-x-1.5 mt-1">
            <span>Don't have an account?</span>
            <Link 
              href="/signup"
              className="text-indigo-600 hover:underline underline-offset-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
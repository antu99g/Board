"use client";
import Image from "next/image";
import Link from "next/link";
// import { signIn } from "next-auth/react";

function Signin() {
  // Function for Google sign-in
  const handleGoogleSignin = () => {
    // signIn("google", { callback: "http://localhost:3000/dashboard" });
  };

  // Function for manual sign-in
  const handleManualSignin = (e) => {
    e.preventDefault();
    location.href = "/dashboard";
  };

  return (
    <div className="h-full flex">
      <div className="w-0 md:w-2/5 grid place-content-center bg-black text-white">
        <h1>Board.</h1>
      </div>

      <div className="grid place-content-center flex-1">
        <div>
          <h2>Sign In</h2>
          <p className="text-sm">Sign in to your account</p>

          <div className="my-5 flex justify-between text-xs text-gray-400">
            <button
              onClick={handleGoogleSignin}
              className="px-3 py-1 mr-5 flex items-center bg-white rounded-md font-thin"
            >
              <Image
                src="/google-icon.svg"
                height={11}
                width={11}
                alt="Google icon"
                className="mr-2"
              />
              Sign in with Google
            </button>
            <button className="px-3 py-1 flex items-center bg-white rounded-md font-thin">
              <Image
                src="/apple-icon.svg"
                height={11}
                width={11}
                alt="Apple icon"
                className="mr-2"
              />
              Sign in with Apple
            </button>
          </div>

          <form
            onSubmit={handleManualSignin}
            className="p-5 flex flex-col bg-white rounded-xl"
          >
            <label className="mb-1 font-lato text-[.85rem]">
              Email address
            </label>
            <input
              type="email"
              required
              placeholder="Your email"
              className="px-3 py-1.5 bg-main rounded-md text-sm focus:outline-none"
            />
            <label className="mt-3 mb-1 font-lato text-[.85rem]">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Password"
              className="px-3 py-1.5 bg-main rounded-md focus:outline-none"
            />

            <Link href="" className="my-3 text-blue-600">
              Forgot password?
            </Link>

            <button
              type="submit"
              className="py-1 font-bold bg-black text-white rounded-md"
            >
              Sign In
            </button>
          </form>

          <div className="mt-3 text-center font-lato text-gray-400">
            <span className="text-grey-400">Don't have an account? </span>
            <Link href="" className="text-blue-600">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;

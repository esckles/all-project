/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../../api/API";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  document.title = "Register";
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (el: any) => {
    el.preventDefault();

    try {
      const response = await createAccount({
        name,
        email,
        password,
        schoolName,
        phoneNumber,
      });

      // Check if response exists and has status property
      if (response && response.status === 201) {
        // Add a small delay before navigation
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 100);
      } else {
        setError("Registration failed" as any);
      }
    } catch (error) {
      setError("Registration failed" as any);
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[500px] border rounded-md min-h-[200px] p-4">
        <h1 className="text-[20px] font-semibold">Register Screen</h1>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <label className="text-[12px] font-semibold">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md h-[45px] outline-none pl-1 text-[16px]"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-[12px] font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border h-[45px] my-2 pl-1 rounded-md outline-none text-[16px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-4 relative">
            <label className="text-[12px] font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="border rounded-md h-[45px] outline-none pl-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute bottom-4 cursor-pointer right-4 text-gray-600 hover:text-black transition-all ease-in duration-100"
              onClick={togglePassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">School Name</label>
            <input
              type="text"
              placeholder="Enter School Name"
              className="border h-[45px] outline-none pl-1 rounded-md"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="border h-[45px] pl-1 rounded-md outline-none"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="text-white bg-red-500 rounded-md h-[45px] w-full font-semibold hover:bg-red-600 transition-colors"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-4 text-[12px] text-center font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:text-red-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;

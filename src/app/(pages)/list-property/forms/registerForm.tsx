"use client";
import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";

interface RegisterFormProps {
  setCurrentForm: (form: string) => void;
}

interface RegisterFormData {
  email: string;
}

const RegisterForm = ({ setCurrentForm }: RegisterFormProps) => {
  const { register, watch, handleSubmit } = useForm<RegisterFormData>();

  const emailValue = watch("email");

  const emailHandler = (data: RegisterFormData) => {
    // Handle registration logic here
    setCurrentForm("login");
  };

  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Create Your Partner Account</h2>
        <p className="text-sm text-gray-500">
          Create an account to list and manage your property.
        </p>
      </div>

      <form onSubmit={handleSubmit(emailHandler)}>
        <div className="relative">
          <div className="relative border border-gray-300 rounded-md bg-white focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="email"
              {...register("email", { required: "email is neccessary" })}
              className="w-full p-3 bg-transparent outline-none"
              placeholder="Enter your username or email address"
            />
            {emailValue && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            )}
            <label className="absolute -top-3 left-3 bg-white px-1 text-sm font-medium text-[#0091EA]">
              Email Address
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-5 bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Continue
        </button>

        <div className="mb-6 mt-6 text-center text-sm">
          <p>Having trouble signing in?</p>
        </div>

        <div className="relative mt-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-500"></div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setCurrentForm("login")}
          className="w-full mt-5 bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

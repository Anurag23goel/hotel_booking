"use client"
import { useForm } from 'react-hook-form'
import { ChevronRight } from 'lucide-react'

interface LoginFormProps {
  onRegisterClick: () => void;
}

export default function LoginForm({ onRegisterClick }: LoginFormProps) {
  const {
    register,
    watch,
  } = useForm();

  const emailValue = watch("email");

  return (
    <div className="">
      <h2 className="text-2xl font-PlayfairDisplay-Bold mb-2">Sign in to manage your property</h2>
      
      <form>
        <div className="mt-8">
          <label className="block text-md font-medium text-black mb-1">UserName</label>
          <div className="relative">
            <input
              type="email"
              {...register("email",{required : "email is neccessary"})}
              className="border border-gray-300 w-full p-2 rounded-[5px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-[#f8faf7]"
              placeholder="Enter your email address"
            />
            {emailValue && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full p-1">
                <ChevronRight className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-5 bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Next
        </button>

        <div className='mb-6 mt-6 text-center text-sm'>
          <p>Having trouble signing in?</p>
        </div>

        <div className='relative mt-5'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-500'></div>
          </div>
        </div>
        

        <button
          type="button"
          onClick={onRegisterClick}
          className="w-full mt-5 bg-black text-white rounded-[5px] py-3 hover:bg-[#003580] hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          Create Your Partner Account
        </button>
      </form>
    </div>
  );
}
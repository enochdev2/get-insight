'use client'

import React, { FormEvent, useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from "next-auth/react";

import { signIn } from 'next-auth/react'
import Image from 'next/image'


const LogIn = () => {
  const { data: session, status } = useSession();

  
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()


    // if(session){
    //   router.push('/')
    // }
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (password === '' || email === '') {
          toast.error("Fill all fields!")
          return
      }

      if (password.length < 6) {
          toast.error("Password must be at least 6 characters long")
          return
      }

      try {
          const res:any = await signIn('credentials', { email, password, redirect: false })

          if (res.ok) {
              router.push("/")
          } else {
              toast.error("Error occured while logging")
          }
      } catch (error) {
          console.log(error)
      }
  }


  return (
    <div className='m-auto my-10 max-w-[350px] shadow-lg rounded-md border-blue-900 border-2 px-4 py-8 '>
      <form onSubmit={handleSubmit}  className='w-full mb-3'>
      <h3 className='font-bold text-2xl'>Login</h3>
      <div className='my-2 flex flex-col text-2'>
      <label htmlFor="email" className="my-2 text-lg">Email</label>
        <input type="text" name='email' id="email" className='border p-3 rounded-lg' onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className='my-2 flex flex-col' >
        <label htmlFor="password" className="my-2 text-lg">Password</label>
        <input type={`password`} name='password' id="password" className='border p-3 rounded-lg' onChange={(e) => setPassword(e.target.value)}  />
      </div>
      <button type="submit" disabled={status === "loading"} className=" text-white bg-blue-900 w-full m-auto mt-2 rounded-md py-2 px-2 text-lg font-bold " >Login</button>

     
      <div className="my-2 text-center text-gray-500">
          or login with provider
        </div>

        <button type="button" onClick={() => signIn('google')}
                className="flex gap-4 justify-center w-full m-auto rounded-md py-2 px-2 text-lg font-semibold bg-slate-500 ">
          <Image src={'/google.png'} alt={'googleLogin'} width={24} height={24} />
          Login with google
        </button>


      {/* <button type="button" className=" my-2 text-white bg-blue-900 w-full m-auto rounded-md py-1 px-2 " >Google</button> */}
      </form>
      <h3>Don&apos;t have an account? <Link href="/register">Register Here</Link></h3>
      <ToastContainer />
    </div>
  )
}

export default LogIn
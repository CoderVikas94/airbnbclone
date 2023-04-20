'use client';
import {signIn} from "next-auth/react";
import {useState } from "react"
import axios from "axios"
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"
import { FieldValues,SubmitHandler,useForm } from "react-hook-form";
import useLoginModal from "../Hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from 'react-hot-toast'
import Button from "../Button";
import { useRouter } from "next/navigation";
import { message } from "antd";


const LoginModal = () => {
 const LoginModal = useLoginModal();
 const [isLoading, setIsLoading] = useState(false) 
const {
    register,
    handleSubmit,
    formState:{
        errors
    }
} = useForm<FieldValues>({defaultValues:{
    email:"",
    pasword:""
}})
const router = useRouter();

const onSubmit:SubmitHandler<FieldValues> =(data)=> {

    setIsLoading(true)
   signIn("credentials", {...data,
redirect:false,
}).then((callback)=> {
    setIsLoading(false)
    if(callback?.ok){
        message.success("Logged in")
        router.refresh();
        LoginModal.onClose();
        }
if(callback?.error) {
    message.error(callback?.error)

}   
})
}

const bodyContent = (
    <div className="flex flex-col gap-4">
     <Heading title="Welcome back" subTitle="Login to your account!"/>
     <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
      <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required />
    </div>
)

const footerContent = (
    <div className="flex flex-col gap-4 mt-3 ">
        <hr />
        <Button outline label="Continue with Google" icon={FcGoogle} onClick={()=> signIn('google')} />
        <Button outline label="Continue with Github" icon={AiFillGithub} onClick={()=>signIn("github")} />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center">
            First time using Airbnb?
        </div>
        <div onClick={LoginModal.onClose} className="text-neutral-400 cursor-pointer hover:underline">
        Create an account
    </div>
      
      </div>
 </div>
)

  return (
    <Modal
    disabled={isLoading}
    isOpen={LoginModal.isOpen}
    title={"Login"}
    actionLabel="Continue"
    onClose={LoginModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    footer={footerContent}

    />
  )
}

export default LoginModal
'use client';

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
    name:"",
    email:"",
    pasword:""
}})

const onSubmit:SubmitHandler<FieldValues> =(data)=> {
    console.log(":asfafseaf")
    setIsLoading(true);
    axios.post("/api/register",data).then(()=> {
        LoginModal.onClose();
    }).catch((error)=> {
  toast.error("Something went wrong");
    }).finally(()=> {
        setIsLoading(false);

    })
}

const bodyContent = (
    <div className="flex flex-col gap-4">
     <Heading title="Welcome to Airbnb" subTitle="Create an account!"/>
     <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
     <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
     <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required />
    </div>
)

const footerContent = (
    <div className="flex flex-col gap-4 mt-3 ">
        <hr />
        <Button outline label="Continue with Google" icon={FcGoogle} onClick={()=> {}} />
        <Button outline label="Continue with Github" icon={AiFillGithub} onClick={()=> {}} />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center">
            Already have an account?
        </div>
        <div onClick={LoginModal.onClose} className="text-neutral-400 cursor-pointer hover:underline">
        Log in
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
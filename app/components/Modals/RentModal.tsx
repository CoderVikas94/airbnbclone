'use client';

import { useMemo, useState } from "react";
import useRentModal from "../Hooks/useRentModal";


import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../Navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO =2,
  IMAGES =3,
  DESCRIPTION= 4,
  PRICE= 5
}


const RentModal = () => {

  const [step, setStep]:any = useState(STEPS.CATEGORY);

  const rentModal = useRentModal();

  const onBack = ()=> {
    setStep((value:number)=> value -1)
  }
    
  const onNext = ()=> {
    setStep((value:number)=> value +1)
  }

const  actionLabel = useMemo(()=> {
if( step === STEPS.PRICE) {
  return 'Create';
}

return "Next";
},[step])

let bodyContent = (
  <div className="flex flex-col gap-8">
    <Heading title="Which of these best describes your place?" subTitle="Pick a category"/> 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
 {categories.map((item)=>(
  <div key={item.label} className="col-span-1">
    <CategoryInput onClick={()=> {}} selected={false} label={item.label} icon ={item.icon} />
  </div>
 ))}
    </div>

  </div>
)

const secondaryActionLabel = useMemo(()=> {
if( step === STEPS.CATEGORY) {
  return undefined;
}
return 'Back';

},[step])

  return (
   <Modal
    isOpen={rentModal.isOpen}
    onSubmit={rentModal.onClose}
    title={"Airbnb your home"}
    actionLabel={actionLabel}
    secondaryActionLabel={secondaryActionLabel}
    onClose={rentModal.onClose}
    body={bodyContent}
  

    />
  )
}

export default RentModal
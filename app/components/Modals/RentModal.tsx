'use client';

import { useMemo, useState } from "react";
import useRentModal from "../Hooks/useRentModal";


import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../Navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO =2,
  IMAGES =3,
  DESCRIPTION= 4,
  PRICE= 5
}

// const { 
//   register, 
//   handleSubmit,
//   setValue,
//   watch,
//   formState: {
//     errors,
//   },
//   reset,
// } = useForm<FieldValues>({
//   defaultValues: {
//     category: '',
//     location: null,
//     guestCount: 1,
//     roomCount: 1,
//     bathroomCount: 1,
//     imageSrc: '',
//     price: 1,
//     title: '',
//     description: '',
//   }
// });

// const { 
//   register, 
//   handleSubmit,
//   setValue,
//   watch,
//   formState: {
//     errors},
//   reset,
// }:any = useForm<FieldValues>({
//   defaultValues: {
//     category: '',
//     location: null,
//     guestCount: 1,
//     roomCount: 1,
//     bathroomCount: 1,
//     imageSrc: '',
//     price: 1,
//     title: '',
//     description: '',
//   }
// });


const RentModal = () => {

  const [step, setStep]:any = useState(STEPS.CATEGORY);
  const rentModal = useRentModal();

  // const setCustomValue = (id: string, value: any) => {
  //   setValue(id, value, {
  //     shouldDirty: true,
  //     shouldTouch: true,
  //     shouldValidate: true
  //   })
  // }

  const onBack = ()=> {
    setStep((value:number)=> value -1)
  }
    
  const onNext = ()=> {
    setStep((value:number)=> value +1)
  }

const setCustomValue = (id: string, value: any) => {
    // setValue(id, value, {
    //   shouldDirty: true,
    //   shouldTouch: true,
    //   shouldValidate: true
    // })
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
    <CategoryInput onClick={(category)=> setCustomValue('category',category)} selected={false} label={item.label} icon ={item.icon} />
  </div>
 ))}
    </div>

  </div>
)

  // if (step === STEPS.LOCATION) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Where is your place located?"
  //         subtitle="Help guests find you!"
  //       />
  //       <CountrySelect 
  //         value={location} 
  //         onChange={(value) => setCustomValue('location', value)} 
  //       />
  //       <Map center={location?.latlng} />
  //     </div>
  //   );
  // }


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
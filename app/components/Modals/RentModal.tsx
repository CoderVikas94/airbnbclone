'use client';

import useRentModal from "../Hooks/useRentModal";


import Modal from "./Modal";


const RentModal = () => {
    
 const rentModal = useRentModal();



  return (
   <Modal
    isOpen={rentModal.isOpen}
    onSubmit={rentModal.onClose}
    title={"Login"}
    actionLabel="Submit"
    onClose={rentModal.onClose}
  

    />
  )
}

export default RentModal
// 'use Client';

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster position="top-center"
    reverseOrder={false}  gutter={8} />  )
}

export default ToasterProvider
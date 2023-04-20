'use client';

import { useSearchParams, useRouter } from 'next/navigation'
import queryString from 'query-string'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'

interface CategoryBoxProps {
    icon: IconType,
    label: string,
    selected?: boolean,
}

const CategoryBox : React.FC<CategoryBoxProps> = ({icon:Icon,label,selected}) => {


const router :any = useRouter();
const params :any = useSearchParams();

const handleClick = useCallback(()=> {
let currentQuery = {};
if(params) {
    currentQuery = queryString.parse(params.toString());
}
const updatedQuery :any = {
    ...currentQuery,
    category:label
}

if(params?.get("category") === label) {
    
    delete updatedQuery.category;

}
const url = queryString.stringifyUrl({
    url:'/',
    query:updatedQuery
},{skipNull: true});

router.push(url);
},[label,router,params])

  return (
    <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer 
    ${selected ?"border-b-neutral-800" : 'border-transparent'}
    ${selected ?"text-neutral-800" : 'text-neutral-500'}
    
    `}>
<Icon size={26}  />
<div className='font-medium text-sm'>
    {label}
</div>
    </div>
  )
}

export default CategoryBox
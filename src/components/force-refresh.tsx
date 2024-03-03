'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export function ForceRefresh(){
   const router = useRouter();

   useEffect(()=>{
    router.refresh()
    
   // eslint-disable-next-line 
   }, [])

   return <></>
}
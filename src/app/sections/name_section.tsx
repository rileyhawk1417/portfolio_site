'use client'

import React from 'react'
import { Avatar } from '@nextui-org/react';

const NameSection = (props: {}) => {
  return (
    <div className='flex flex-row-reverse sm:flex-col-reverse items-center justify-evenly'>
     <div className='ml-8 text-4xl font-bold'>Software Engineer, Curious kitten</div> 
      <Avatar src="https://avatars.githubusercontent.com/u/42723553?v=4" size='lg' alt='Github profile picture' className='rounded-full' />
    </div>
  )
}

export default NameSection;

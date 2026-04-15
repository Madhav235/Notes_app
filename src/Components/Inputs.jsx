import React from 'react'

const Inputs = () => {
  return (
    <form className='flex flex-col w-1/2 h-full p-10 gap-10'>
        <input type='text' placeholder='Enter the title' className='text-white border-2 border-white w-4/5 h-15 '/>
        <input type='text' placeholder='Enter the description' className='text-white w-4/5 h-1/3 border-2 border-white '/>
    </form>
  )
}

export default Inputs
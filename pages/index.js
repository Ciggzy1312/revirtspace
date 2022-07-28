import Head from 'next/head'
import Image from 'next/image'
import Tile from '../components/tile'

export default function Home() {
  return (
    <div className="bg-[#171717] pb-20">
      
      <div className='text-center font-semibold text-white text-2xl py-8'>To-Do List</div>

      <div className='mx-20'>
        <div className='my-12'>
          <div className='text-white font-medium mb-6 text-xl'>Add a new task in the list</div>

          <div className='text-white font-medium my-10'>
            <input className='bg-[#5c5c5c] placeholder:text-white placeholder:font-medium mr-12 w-2/5 px-4 py-1 rounded focus:outline-none' placeholder='Enter the task here'/>

            <button className='bg-[#c620a7] px-12 py-1 rounded'>Submit</button>
          </div>
        </div>

        <div className='my-10'>
          <div className='text-white font-medium mb-6'>Added task in to-do list</div>
        </div>

        <div className='grid grid-cols-3 gap-x-16'>
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>

    </div>
  )
}

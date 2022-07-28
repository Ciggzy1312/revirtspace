import { useState } from 'react';
import Tile from '../components/tile'
import Task from '../models/task';
import connectDB from '../utils/connectDB';

export default function Home({ data }) {

  const [tasks, setTasks] = useState(data)

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

        <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
          {tasks.map((task, i)=>(
            <div className='flex' key={task._id}>
              <span className='mr-4 text-lg text-white font-medium mt-6'>{i+1}.</span>
              <Tile task={task}/>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}


export async function getServerSideProps() {

  try {
    await connectDB();

    const tasks = await Task.find();
    
    return {
      props: {
        data: JSON.parse(JSON.stringify(tasks)),
      }
    }
  } catch (error) {
      return {
        props: {
          data: error,
        }
      }
  }

}
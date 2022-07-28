import axios from "axios"
import { useState } from "react"

export default function Tile({ task, router }) {

    const [isCompleted, setIsCompleted] = useState(task.status)

    const deleteTask = async ()=>{
        await axios.delete(`/api/tasks/${task._id}`)
        router.reload(window.location.pathname)
    }

    const updateTask = async (status)=>{
        await axios.patch(`/api/tasks/${task._id}`, {
            status
        })

        setIsCompleted(!isCompleted)
        router.reload(window.location.pathname)
    }

    return (
        <div className="">

            <div className={isCompleted ? "bg-[#202020] border border-[#7ab530] rounded-md" : "bg-[#2f2f2f] rounded-md shadow-2xl"}>

                <div className="px-5 py-6">
                    <span className="text-white text-xl">{task.title}</span>
                </div>

                <div className="bg-[#5c5c5c] w-full h-0.5"></div>

                <div className="text-white font-medium px-5 py-5">
                    {isCompleted ? <button className="text-[#afafaf] hover:text-[#c620a7] mr-32" onClick={()=>updateTask(false)}>Mark as Incomplete</button> : <button className="bg-[#c620a7] px-12 py-1 rounded mr-10" onClick={()=>updateTask(true)}>Mark as completed</button>}
                    <button className="text-[#afafaf] hover:text-[#c620a7] px-6" onClick={deleteTask}>Delete</button>
                </div>
            </div>
        </div>
    )
}
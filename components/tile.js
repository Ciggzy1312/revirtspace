
export default function Tile({ task }) {

    return (
        <div className="">

            <div className="bg-[#2f2f2f] rounded-md">

                <div className="px-5 py-6">
                    <span className="text-white text-xl">{task.title}</span>
                </div>

                <div className="bg-[#5c5c5c] w-full h-0.5"></div>

                <div className="text-white font-medium px-5 py-5">
                    <button className="bg-[#c620a7] px-12 py-1 rounded mr-10">Mark as completed</button>
                    <button className="text-[#afafaf] hover:text-[#c620a7] px-6">Delete</button>
                </div>
            </div>
        </div>
    )
}
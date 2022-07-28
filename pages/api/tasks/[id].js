import Task from "../../../models/task";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        return await deleteTask(req, res);
    }
    else if(req.method === 'PATCH'){
        return await updateTask(req, res);
    }
    else {
        return res.status(405).json({ message: 'Method not allowed', success: false });
    }
}

async function updateTask(req, res) {

    const { id } = req.query;

    try {
        await connectDB;

        const task = await Task.findByIdAndUpdate(id, {
            status: true
        });

        res.status(200).json({ data: task })

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

async function deleteTask(req, res) {

    const { id } = req.query;
    
    try {
        await connectDB();

        const task = await Task.findByIdAndDelete(id)

        res.status(200).json({ task })

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}
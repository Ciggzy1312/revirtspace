import Task from "../../../models/task";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return await createTask(req, res);
    }
    else if (req.method === 'GET') {
        return await getTask(req, res);
    }
    else {
        return res.status(405).json({ message: 'Method not allowed', success: false });
    }
}

async function createTask(req, res) {

    const { title } = req.body

    try {
        await connectDB();

        const task = await Task.create({ title });

        res.status(200).json({ task });

    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

async function getTask(req, res) {

    try {
        await connectDB();

        const tasks = await Task.find();

        res.status(200).json({ tasks });

    } catch (error) {
        console.log(error);
        res.json(error);
    }
}
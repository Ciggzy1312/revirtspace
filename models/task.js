import { Schema, model, models } from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    }
});

const Task = models.Task || model('Task', taskSchema);

export default Task;
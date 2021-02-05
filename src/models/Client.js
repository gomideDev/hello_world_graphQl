import mongoose, { mongo } from 'mongoose';

const clientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    active:{
        type: Boolean,
        required: true
    }
});

export default mongoose.model('Client', clientSchema);
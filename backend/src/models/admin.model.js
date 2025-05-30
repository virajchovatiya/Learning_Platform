import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    }
}, {
    timestamps: true
});

export const admin = mongoose.model("admin", adminSchema);

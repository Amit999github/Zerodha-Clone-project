const {Schema} = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    email:{
        type: String,
        required : [true, "your email id is required"],
        unique: true,
    },
    username:{
        type: String,
        required : [true, "username is required"],
        unique: true,
    },
    password:{
        type: String,
        required : [true, "password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// userSchema.pre("save", async ()=>{
//     this.password = await bcrypt.hash(this.password, 12);
// } )

module.exports = {userSchema};
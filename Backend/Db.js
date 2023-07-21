const mongoose = require('mongoose');


const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn}`);
        const newData = mongoose.connection.db.collection("food_items");
        const newData1 = mongoose.connection.db.collection("foodCategory");
        const data = await newData.find({}).toArray();
        const data1 = await newData1.find({}).toArray();
        global.users = data;
        global.foodCategory = data1;

    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB
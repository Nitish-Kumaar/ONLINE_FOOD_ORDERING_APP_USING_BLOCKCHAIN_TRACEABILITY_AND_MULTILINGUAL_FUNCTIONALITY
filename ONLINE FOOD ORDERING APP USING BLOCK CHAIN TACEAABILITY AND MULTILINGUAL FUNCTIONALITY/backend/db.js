const mongoose = require('mongoose');
const mongoURI='mongodb://gofood:A%2324c3ab@ac-f73q0ok-shard-00-00.bpgf8ur.mongodb.net:27017,ac-f73q0ok-shard-00-01.bpgf8ur.mongodb.net:27017,ac-f73q0ok-shard-00-02.bpgf8ur.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-eg9x0a-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB=async()=>{
     await mongoose.connect(mongoURI,{ useNewUrlParser: true },async(err,result)=>{
        if(err) console.log("---",err)
        else{
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err,data){
               const foodCategory = await mongoose.connection.db.collection("foodCategory");
               foodCategory.find({}).toArray(function (err,catData) {
                  if(err) console.log(err);
                  else {
                       global.food_items = data;
                       global.foodCategory = catData;
                  }
               })
              // 
             //  else {
                //   global.food_items = data;
                //   console.log(global.food_items)
               //}
            })
          
         }
         
         });
}
module.exports=mongoDB; 
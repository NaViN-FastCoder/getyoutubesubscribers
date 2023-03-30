const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost/subscribers";

mongoose.connect("mongodb+srv://navin:student123@cluster0.uzq32jx.mongodb.net/?retryWrites=true&w=majority/test",{ useNewUrlParser: true, useUnifiedTopology: true, bufferTimeoutMS: 30000  });

const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

//refreshing data and deleting it if any previous data
const refreshAll = async () => {
    try{
    await subscriberModel.deleteMany({},{wtimeout:3000000});
    await subscriberModel.find({}).maxTimeMS(3000000);

    console.log("Deleted all subscribers");
    //inserting data 
    const newdata= await subscriberModel.insertMany(data);
    console.log(`Added ${newdata.length} New Subscribers`);
    }catch(err)
    {("Unable to refresh data"),err}
    finally{
    await mongoose.disconnect();
    console.log("disconnected");
}}
refreshAll();
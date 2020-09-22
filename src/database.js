import mongose from 'mongoose'
mongose.connect("mongodb+srv://angel:Angel1234@cluster0.rqys7.mongodb.net/test?authSource=admin&replicaSet=atlas-x8v8a1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})
.then(db => console.log('db is connected'))
.catch(error => console.log(error))
const app=require('../backend/app');
const express=require('express');
const winston=require('winston')
const cors=require('cors');
const expresswinsoton=require('express-winston')
const connnection=require('./config/mongoose');
const ProductRouter=require('./routeer/ProductRouter');
const  errorhandling=require('./middleware/error');
// const { Server } = require('socket.io');
connnection;
// app.use(expresswinsoton.logger({
//     transports: [
//         new winston.transports.Console()
//       ],
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.json()
//       ),
    
//  }))
 
 app.use(cors());
// console.log(connnection)
app.use(express.json());
app.use('/Product',ProductRouter);

// ------ Error handling middleware --------
// app.use(errorhandling);


app.use(expresswinsoton.errorLogger({
    transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      )

 }));   
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is up at ${process.env.PORt}`)
})


//-- Unhandled Promise Rejection
process.on("unhandleRejection",err=>{
  console.log(`Error:${err.message}`);
  console.log("Shutting Down server");
   server.close(()=>{
    process.exit(1);  
   })
})
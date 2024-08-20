import express from 'express';
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookmodels.js';
import bookRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();


//middleware for parsing request body
app.use(express.json());

//middleware for handling cors policy
//Option 1:Allow All Origins with Default of cors()
app.use(cors());
//option 2: allow cutom origins
//app.use(
  //  cors({
    //    origin: 'http://localhost:3000',
      //  methods: ['GET','POST','PUT','DELETE'],
        //allowedHeaders: [],
    //})
//);

app.get('/',(request,response) => {
    console.log(request)
    return response.status(234).send('welcome To MERN Stack Tutorial');
});

app.use('/books',bookRoute);






mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () =>{
            console.log(`App is listening to port: ${PORT}`);
    });
    })
    .catch((error) => {
        console.log(error);
    });


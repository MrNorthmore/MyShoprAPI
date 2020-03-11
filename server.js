'use strict';

import bodyParser from "body-parser";

const uri = "mongodb+srv://dbAdmin:admin@cluster0-bwtlq.gcp.mongodb.net/MyShopr?retryWrites=true&w=majority";
import mongoose from 'mongoose';
import express from 'express';
// const userRouter = require('./routes/user.js');
// const recipesRouter = require('./routes/recipes.js');
const app = express();
const router = express.Router();

mongoose.Promise = global.Promise;

const PORT = (process.env.PORT || 8081);

import envStatusRoute from './routes/envStatusRoute.js';
import storesRoute from './routes/storesRoute.js';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Route Imports
app.use(envStatusRoute);
app.use(storesRoute);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("mongo connected");
}).catch(err => {
    console.log(err);
});

const db = mongoose.connection;

db.once('open', function () {
    console.log('Connected to mongo server.');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        if (err) {
            console.error('[List DB Collections Error]: ' + err);
        }
        let DB_Collection_Names = [];
        names.forEach(collection => {
            DB_Collection_Names.push(collection.name);
        });
        console.info('[Collections]: ' + DB_Collection_Names);
    });
});

app.listen(PORT, () => {
    console.log('API Listening on ' + PORT);
});
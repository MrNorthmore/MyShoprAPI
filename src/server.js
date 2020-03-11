// ==============================
// ---------- Js Rules ----------
'use strict';
// ==============================

//===============================
// ---------- Imports ----------
// Database Libraries
import mongoose from 'mongoose';
import connection from './utils/db'
// Express app and body parser libraries
import express from 'express';
import bodyParser from "body-parser";
// ApolloServer for GraphQL
import { ApolloServer } from "apollo-server-express";
import Schema from './schema/'
// ==============================

// ==============================
// ------- Database Config ------
mongoose.Promise = global.Promise;
connection.then((c) => {
    if(c){
        console.log("Mongo Successfully connected");
    }
    }).catch(error => {
        console.log(error)
    });
// ==============================

// ==============================
// ------- Express Config ------
// Create express application
const app = express();
// Configure body parser and express to use json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ==============================

// ==============================
// ---- Apollo/GQL Config ------
// Apollo server (express + graphql) allowed to retrieve from multiple sources
const server = new ApolloServer({schema: Schema, introspection: true});
// Apply any additional middleware to apollo
server.applyMiddleware({
    app,
    path: '/api',
    cors: true,
    introspection: true
});
// ==============================

// ==============================
// ---- Port Config & Listen ----
// Setting server port to environment port on cloud or 8081 locally
const PORT = (process.env.PORT || 8081);
// Listen on the process.env port or 8081 otherwise
app.listen(PORT, () => {
    console.log('API Listening on ' + PORT);
});
// ==============================






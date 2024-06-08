const express = require("express");
const axios = require("axios");
const api = express();
const nodemailer = require('nodemailer');
const { MongoClient } = require("mongodb");


api.get("/", (res, msg) => {
  try {
    msg.status(200).send({ sucesso: "http request sucess" });
  } catch (error) {
    msg.status(404).send({ sucesso: "http request error" });
  }
});

const httpRequest = async (callback) => {
  try {
    const data = await axios.get("http://localhost:8080/");
    const response = await data.data;
    callback(response);
  } catch (error) {
    console.error("Error http request get from axios.");
  }
};

const url = "mongodb+srv://admin:admin1234@dados.7d94myt.mongodb.net/"
const cliente =  new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


httpRequest((data) => {
  console.log(data);
});

const port = 8080;
api.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});

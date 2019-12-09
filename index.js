#!/usr/bin/env node

const AWS = require("aws-sdk")
const fs = require("fs");
const data = fs.readFileSync("/dev/stdin", "utf-8");
const result = JSON.parse(data);


const items = [];
result.Items.forEach(item => {
  items.push(AWS.DynamoDB.Converter.unmarshall(item))
})

console.log(JSON.stringify(items))

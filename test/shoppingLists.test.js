
const request = require("supertest");
const shoppingLists = require("../routes/shoppingLists.js");

const axios = require("axios")
 

test("shoppingLists ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingLists?id=656c2c457c450b82440081ca')
    console.log("list",)
})


test("shoppingLists update one",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingLists/changeArchive?id=656c2c457c450b82440081ca')
    console.log("update")
})

test("shoppingLists delete one",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingLists/del?id=656c2c457c450b82440081ca')
    console.log("del")
})
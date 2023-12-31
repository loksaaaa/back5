
const request = require("supertest");
const shoppingLists = require("../routes/shoppingLists.js");

const axios = require("axios")
 

test("user create ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/user/create?id=656c2c457c450b82440081ca')
    console.log("list",)
})



test("user create ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/user/create',{
        params:{
          name:'dgfhdfhjfhj',
          awid:"656c1a1aaf55bd3f6bfd810e"
        }
      })
    console.log("user create",)
})


 
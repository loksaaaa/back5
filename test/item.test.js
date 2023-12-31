
const axios = require("axios")
 



test("item create ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/item/create',{
        params:{
          itemName:'Apple',
          listId:"656c1a1aaf55bd3f6bfd810e"
        }
      })
    console.log("item create")
})

test("item delete ",async function(){
  const res = await axios.get('http://127.0.0.1:3000/item/delete',{
      params:{
        itemId:"656c1a1aaf55bd3f6bfd810e"
      }
    })
  console.log("item create",)
})


test("item resolved ",async function(){
  const res = await axios.get('http://127.0.0.1:3000/item/resolved',{
      params:{
        itemId:"656c1a1aaf55bd3f6bfd810e"
      }
    })
  console.log("item resolved",)
})


 
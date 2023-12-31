
const axios = require("axios")
 

test("shoppingList ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList?id=656c1a1aaf55bd3f6bfd810e')
    console.log("list")
})



 

test("shoppingList delete mumber",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList/deleteMumber',{
        params:{
          id:'656c1a1aaf55bd3f6bfd810e',
          mumberId:"fgfghfdghj"
        }
      })
        console.log("del")
    })


    test("shoppingList delete ",async function(){
        const res = await axios.get('http://127.0.0.1:3000/shoppingList/delete',{
            params:{
              id:'656c1a1aaf55bd3f6bfd810e',
            }
          })
            console.log("del")
        })


test("shoppingList delete item",async function(){
const res = await axios.get('http://127.0.0.1:3000/shoppingList/deleteItem',{
    params:{
      id:'656c1a1aaf55bd3f6bfd810e',
      itemId:"fgfghfdghj"
    }
  })
    console.log("del")
})


test("shoppingList invite",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList/invite',{
        params:{
          id:'656c1a1aaf55bd3f6bfd810e',
          userIds:["fgfghfdghj","dksdfsdf"]
        }
      })
        console.log("invite")
    })

test("shoppingList add Mumber",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList/addMumber',{
        params:{
          id:'656c1a1aaf55bd3f6bfd810e',
          memberId:"kkkkdsd"
        }
      })
    console.log("add mumber")
})


test("shoppingList rename ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList/rename',{
          params:{
            id:'656c1a1aaf55bd3f6bfd810e',
            listName:"hhhh asfe"
          }
        })
    console.log("rename")
})

test("shoppingList create ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList/create',{
          params:{
            listName:'sdgfasdfghdhf',
            owner:"hhhh asfe"
          }
        })
    console.log("create")
})


test("shoppingList list ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList/list',{
          params:{
           id:"kkksdadfa"
          }
        })
    console.log("list")
})

test("shoppingList create ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList/create',{
          params:{
            listName:'sdgfasdfghdhf',
            owner:"hhhh asfe"
          }
        })
    console.log("create")
})

test("shoppingList create ",async function(){
    const res = await axios.get('http://127.0.0.1:3000/shoppingList/create',{
          params:{
            listName:'sdgfasdfghdhf',
            owner:"hhhh asfe"
          }
        })
    console.log("create")
})
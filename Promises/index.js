
// Old way of generating promise
/* const res = fetch(`https://dummyjson.com/carts`).then((res) => {
    return res.json(res)
})
    .then((ans) => {
        console.log(ans)
    })   */

// New way of generating promise
/* async function main() {
    const response = await fetch(`https://dummyjson.com/cart`)
    const res = await response.json()
    console.log(res)
} */

// Exception Handling in old way
  /*   const res = fetch(`https://dummyjson.com/carts`).then((res) => {
    return res.json(res)
})
    .then((ans) => {
        console.log(ans)
    }) .catch((err) =>{
        console.log(err)
    })  */

// Exception Handling in new way
async function main() {
    try{
        const response = await fetch(`https://dummyjson.com/cart`)
    const res = await response.json()
    console.log(res)
    }catch(err){
        console.log(err);
    }
}
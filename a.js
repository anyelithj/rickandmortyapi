let discount = 300


const userLoged =  {
    username: 'kjwbk',
    balance: 9300
}
let allUsers = [
    {
        username: 'kjwbk',
        balance: 9300
    },
    {
        username: 'dhrdt',
        balance: 200
    },
    {
        username: 'eryeu',
        balance: 35
    }
]
const updateBalance = ( allUser, logued, discount) => {
    let singleLogued = allUser.filter(usr =>  logued.username ===  usr.username  )

    let res = allUser.filter(usr =>  logued.username !==  usr.username  )
    allUser = [...res]
    console.log('resss');
    console.log( allUser)

    console.log(singleLogued);

    const applyDiscount = parameter => parameter.map(usr => {
        return {
            ...usr,
            balance: usr.balance -= discount
        }
      }
    ) 
    let [userWithDiscount] = applyDiscount(singleLogued)

    console.log(userWithDiscount)

    allUser.push(userWithDiscount)


   return allUser

    
}


allUsers = updateBalance(allUsers,userLoged,discount)


console.log(allUsers)

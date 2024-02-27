// Java Script Object Notation (JSON)
const user = {id: 1, name:'Gorib na Amir', job:'actor'}
const userJson = JSON.stringify(user)
// console.log(user)
// console.log(userJson)


const shop = {
    owner: 'alia',
    address: {
        street: 'kocho khet',
        city : 'dhaka',
        country: 'bangladesh'
    },
    products:['laptop', 'mic', 'monitor', 'keybord'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
const shopJSON = JSON.stringify(shop)
console.log(shop)
console.log(shopJSON)
const shopObj = JSON.parse(shopJSON)
console.log(shopObj)
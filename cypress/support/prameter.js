export let myUrl="https://www.saucedemo.com/";
const itemNames=[];
let myDate= new Date();
export let pictuerName=myDate.toString()
Cypress.Commands.add("login",(userNmae,password)=>{
    cy.get('[data-test="username"]').type(userNmae);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
})
Cypress.Commands.add("AddToCart",(NumberOfItem)=>{
 for(let i=0;i< NumberOfItem;i++){
    cy.get('.btn').eq(i).click()
 }
})
Cypress.Commands.add("RemoveToCart",(NumberOfItem)=>{
    for(let i=0;i< NumberOfItem;i++){
       cy.get('.btn').eq(i).click()
    }
   })
Cypress.Commands.add("AddcertainItems",(item1,item2)=>{
cy.get('.inventory_item_name').each((itemName)=>{
    itemNames.push(itemName.text())
    console.log(itemNames)
}).then(()=>{
    for(let i=0;i< itemNames.length;i++){
        if(itemNames[i].includes(item1) ||itemNames[i].includes(item2)){
          cy.get(".btn").eq(i).click();
        }
    }
})
})
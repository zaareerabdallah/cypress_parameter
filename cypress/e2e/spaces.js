/// <reference types = "Cypress" />
import { myUrl ,pictuerName} from "../support/prameter";

beforeEach(()=>{
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload();
});


describe('Demo website', () => {
    it.skip('login', () => {
        cy.visit(myUrl);
        cy.login("standard_user","secret_sauce");
        cy.AddToCart(3);
        cy.RemoveToCart(1);
    });
    it('Add specific Item', () => {
        cy.visit(myUrl);
        cy.login("standard_user","secret_sauce");
       
        cy.AddcertainItems("Bike","Fleece");
        cy.screenshot(pictuerName);
    });
});
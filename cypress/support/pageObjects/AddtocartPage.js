class AddtocartPage
{

    getSearchbox()
    {
        return cy.get('#twotabsearchtextbox')
    }

    getSearchclick()
    {
        return cy.get('#nav-search-submit-button')
    }
    getremoveattr()
    {
        return cy.get('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal')   
    }
    getaddTocart()
    {
        return cy.get('#add-to-cart-button')
    }
    getaddTocartValidation()
    {
        return cy.get('.a-size-medium-plus')
    }
}
export default AddtocartPage
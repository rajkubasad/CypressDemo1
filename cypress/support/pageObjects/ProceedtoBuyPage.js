class ProccedtoBuyPage
{
    getcheckoutbtnclick()
    {
        return cy.get('#nav-cart')
    }
    getProccedTocheckout()
    {
        return  cy.get('input[name="proceedToRetailCheckout"]')
    }
    getcheckoutValidation()
    {
        return cy.get('.a-spacing-base')
    }
    getRadiobtn()
    {
        return  cy.get('input[type="radio"]')
    }

}
export default ProccedtoBuyPage
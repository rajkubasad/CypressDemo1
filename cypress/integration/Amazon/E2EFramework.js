///<reference types="cypress"/>
import SigninPage from '../../support/pageObjects/SigninPage'
import AddtocartPage from '../../support/pageObjects/AddtocartPage'
import ProccedtoBuyPage from '../../support/pageObjects/ProceedtoBuyPage'
var UserData =require('../../data/userData')


describe("Amazon Testing ",function(){
    beforeEach(function(){
        const signinPage=new SigninPage()
         cy.visit(Cypress.env('url'))
         signinPage.getsignin().eq(1).click()
         signinPage.getInput().type(UserData.username)
         signinPage.getContinue().click()
         signinPage.getPassword().type(UserData.password)
         signinPage.getSubmit().click({ force: true })
         signinPage.getValidation().contains(UserData.signinvalidation)
     })
     it("searching order and adding to cart",function()
     {
        const addtocartPage=new AddtocartPage()
        addtocartPage.getSearchbox().type(UserData.searchiteam)
        addtocartPage.getSearchclick().click()
        addtocartPage.getremoveattr().eq(0).invoke('removeAttr','target').click()
        addtocartPage.getaddTocart().click()
    })

    it('procede to checkout',function(){
        const procedetobuypage=new ProccedtoBuyPage()
        procedetobuypage.getcheckoutbtnclick().click()
        procedetobuypage.getProccedTocheckout().click()
        procedetobuypage.getcheckoutValidation().contains(UserData.deliveryaddress)
    }) 
})
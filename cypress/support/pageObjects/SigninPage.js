class SigninPage
{
   getsignin()
   {
    return cy.get('.nav-line-1.nav-progressive-content')
   }

   getInput()
   {
    return cy.get('input[type="email"]')
   }

   getContinue()
   {
    return cy.get('input[type="submit"]')
   }
   getPassword()
   {
    return  cy.get('input[type="password"]')
   }
   getSubmit()
   {
    return  cy.get('#signInSubmit')
   }

   getValidation()
   {
    return cy.get('#nav-link-accountList-nav-line-1')
   }

}
export default SigninPage;
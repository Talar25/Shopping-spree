# ShoppingSpree

## Fully functional shopping site built as a fullstack application with React, Typescript, Node.js and express.

This project consists of two parts, Frontend and Backend. Backend uses express static site that is made of Frontend Build:

> app.use(express.static('dist'));

Application is pretty straigh-forward. It does not differ much from other shopping sites funcionalities (Zara, H&M, Amazon etc.).
Project has few different Pages:

- Homepage
- ClothesSection (for each type and gender)
- AboutUs page that is just visual with 'fake' history of that company
- CartPage where you may see products that you've choosen and purchaseRecap
- FormPage which appears after you navigate from cartPage
- each Page excluding FormPage has access to Header with navigation and cartNav (smaller cartPage)

This site is built with React-router, thus it is defined as SPA. Some pages are not accessable from everywhere. For instance you cannot navigate to /shop if you are not in cartPage or navigate to /cart if you do not have any products marked.

Each ClothesGallery has buttons for filters and grid layout (2,3,4). It is possible to see products filted by just gender or by additional arguments like cloth Type. Filter button also helps with filtering by price, color and size. You can enter any ProductPage by clicking Product from ClothesGallery. ProductPage has section with images carousel, its title, short description, color and size variance and button if you fancy it. Below there is short description of this clothType, each clothType has its own. And finally after all of that there is a gallery of recommended items.

CartPage and CartNav help you modify your gathered data. It is possible to add more clothes of choosen type, substraction is also possible, of course you may remove it as a whole by using bin button.
Continue button first navigates to CartPage and then to shoppingForm.

ShoppingForm has validation, each input has its own criteria and form cannot be passed if something is wrong. There are validations based on input length (is it too short or too long), based on regex and based on countries API that helps to choose your country. After everything is ok there is a short statement about that project and link to this github page.

By doing that project i learnt:

- How to merge Backend with Frontend,
- How to make Node.js, Express backend using Typescript,
- How to use Typescript with React,
- How to use Redux toolkit with thunks,
- How to use API for form validation,
- How to properly validate forms,
- How to optimalize images using external libraries,
- How to properly make RWD.

What this project does not have and might in near future:

- CareerPage, StoresPage and ContactPage are still not done,
- Tests using Jest and e2e test with Cypress.

## Project uses images from Unsplash.com

**Huge thanks to the incredible artists at Unsplash.com for lending their creative magic to visuals!: Dom Hill & Aiony Haust & Pascal Bräuer & Cesar La Rosa & JC Gellidon & Elijah G & Adam Frazier & Simi Iluyomade & Burgess Milner & Cam Morin & Matheus Ferrero & 俊逸 余 & Vlady Nykulyak & Dushawn Jovic & kevin laminto & Henry & Co. & Anne Nygård & Parker Burchfield & Keagan Henman & Force Majeure & Tyler Nix & Taras Chuiko & Terayle Garnett & Taylor & Oliver Ragfelt**

# OnlineShopFE

This is the front end of a small app called Onlineshop.
It is built with angular version 16.1.0.

## The features implemented:
1. Listing page to list the products from the backend.
2. Add a product page to create a new product, also we have validation on all input fields.
3. Delete an existing product.

## The Arch:
It has four components:
1. Product List, it is used for the listing page.
2. Product Item, it is used to show the product details.
3. Product Details, it is used for creating new products.
4. Header, it renders the header of the site.

It has 3 data models:
1. ProductData, contains the product data returned from the backend.
2. CategoryData, contains the category data.
3. ProductPayload, for arranging the data to be sent to the  backend.

it has 1 service:
ProductService, to handle getting and manipulating the product with the backend.

## To run the project
1. Clone the rep.
2. Navigate to OnlineShopFE directory.
3. Run "npm install" to install the dependencies.
4. Run "ng serve to start the project".
5. Make sure the backend is working on port 7010,
6. start by adding new products and see them on the listing page.

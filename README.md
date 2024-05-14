# Product-Catalogue

a. backend

    - Maven -> Update Project
    - Using MySQL create database "exittest"
    - Run as Spring Boot Project (Running at PORT - 9090)

b. frontend

    - npm install
    - ng serve (Running at PORT - 4200)

c. Configure Admin

    - Both Frontend and Backend should be running.
    - Create Admin User (Use Signup Form to Register as a normal user), to set id of user as Admin use SQL Query
    - Run as Spring Boot Project (Running at PORT - 9090)


[click here](#my-anchor) $\color{red}{to\ see\ output\ of\ this\ project}$

## products-catalog implementation

### API's

- Login (Generate Token) - "http://localhost:9001/token" (post)
- Signup - "http://localhost:9001/users" (post)
- Fetch all products - "http://localhost:9001/products"
- Fetch one product - "http://localhost:9001/products/{id}"
- Search products - "http://localhost:9001/products/search/{string}"
- Add product - "http://localhost:9001/products" (post)
- Check product serviceablity -"http://localhost:9001/delivery/{productcode}/{pincode}"

##### a. Products-Catalog Server

    - Maven -> Update Project
    - Using MySQL, create database "products"
    - Run as Spring Boot Project (Running at PORT - 9001)

##### b. Products-Catalog Frontend

    - npm install
    - ng serve (Running at PORT - 4200)


<a id="my-anchor"></a>

##### c. Outputs

- Search Page


- Products View (without Login)


- Products View (with Login)


- Product Details Page (view only if user is login)


- Login Page


- Signup Page


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
    - UPDATE user_roles SET role_id=2 WHERE user_id="{USER ID of Registered User}"
    - Run as Spring Boot Project (Running at PORT - 9090)

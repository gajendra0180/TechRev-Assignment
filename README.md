<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">TechRev Task</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Customer management web application.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
Create a customer management web application. Using your knowledge of Angular / React and NodeJS complete the application. Your web application already includes the Database table structure, list of API’s and UI mockups. Your task is to complete the application with following neat and clear code standards. 

## Technologies Used
    Database:  MYSQL 

    Backend:  NODE JS 

    Frontend:  REACT

## Backend

Your task for this section is to complete the logic for each of the routes:

    Complete the get('/selectCustomers) router logic that renders the customers list.

    Complete the post('/ selectCustomerById) router logic that renders the customer detail.

    Complete the post('/ insertCustomer) router logic that inserts 
    the customer detail in both table.

	Complete the post('/ updateCustomer) router logic that update the values in both table.
 
 	Complete the post('/ deleteCustomer) router logic that deletes the customer value in both table.

## Frontend
Your will need to create a Web page to manage customer based on UI mockup provided.			

image.png




## 🏁 Getting Started <a name = "getting_started"></a>

Set up the node version v10.16.3 on your Local.
### Prerequisites

Node version - 16.17.1

npm version - 8.15.0

```
PS C:\Users\gajendra0180\Documents\GitHub\Hybr1d-Task> node -v
v16.17.1
PS C:\Users\gajendra0180\Documents\GitHub\Hybr1d-Task> npm -v
8.15.0
```

### Installing

A step by step series of examples that tell you how to get a development env running.

 For Backend And Frontend Seperately do,
```
npm install
```

And then

```
npm start for both seperately again.
```

Do not forget to create the .env file from .env.example file


# APIs

Following are a few examples of the API endpoints you should expose.

## APIs 

GET /selectCustomers

    ● Router logic that renders the customers list.

GET /selectCustomerById
    
    ● Router logic that renders the customer detail.
POST /insertCustomer
    
    ● Router logic that inserts the customer detail in both table.


PUT /updateCustomer
    
    ● router logic that update the values in both table.


DELETE /deleteCustomer
    
    ● router logic that deletes the customer value in both table.


## 🚀 Deployment <a name = "deployment"></a>

     cd Backend
     npm install
     npm start

     cd ..
     cd Frontend
     cd techrev_frontend
     npm install
     npm start


## ⛏️ Built Using <a name = "built_using"></a>

- [MySql](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@gajendra0180](https://github.com/gajendra0180) - Author



## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Stack Overflow :)
- Medium Articles
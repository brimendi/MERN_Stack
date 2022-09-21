const { faker } = require("@faker-js/faker");
const express = require('express')
const app = express()
const port = 8000;

const createUser = () => {
    const newUser = {
        
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany  = () => {
    const newCompany  = {
        
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
            },
        }
        return newCompany
};

const newFakeCompany  = createCompany();
console.log(newFakeCompany );

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany(),
        })
    })

    app.listen(port, () => 
        console.log(`Server is locked and loaded on port ${port}`) 
    );
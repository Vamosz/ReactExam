const faker = require('faker');
const fs = require('fs');

let generateUser = (id) => {
    return {
        id: id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        Age: Math.floor(Math.random() * (99 - 1)) + 1,
        Address: faker.address.streetName(),
        Phone: faker.phone.phoneNumberFormat()

    };
};
let generateClerk = (id) => {
    return {
        id: id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    }
};
let users = [];
for (let i = 0; i < 100; i++) {
    let user = generateUser(i);
    users.push(user);
}

let clerks = [];
for (let i = 0; i < 10; i++) {
    let clerk = generateClerk(i);
    clerks.push(clerk);
}
let issues = [];
issues.push(
    {
        id: 1,
        Name: 'Get Married Licence',
        Time: 10
    },
    {
        id: 2,
        Name: 'Birth Certificate',
        Time: 20
    },
    {
        id: 3,
        Name: 'Renew the Driving License',
        Time: 30
    }
)
// let generateIssue = (id) => {
//     titleLength = Math.round(Math.random() * 3) + 1;
//     authorCount = Math.round(Math.random() * 4) + 1;
//     bookAuthors = [];
//     for (let i = 0; i < authorCount; i++) {
//         bookAuthors[i] = faker.random.arrayElement(authors);
//     }
//     return {
//         id: id,
//         title: faker.lorem.words(titleLength),
//         teaser: faker.lorem.paragraph(),
//         authors: bookAuthors
//     }
// };
// var books = [];
// for (let i = 0; i < 10; i++) {
//     books[i] = generateBook(i);
// }

fs.writeFile(
    '../../../database.fake.json',
    JSON.stringify({Users: users, Clerks: clerks, Issues: issues}),
    (err) => {
        console.log(err)
    }
);

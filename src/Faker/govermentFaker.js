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
for (let i = 0; i < 3; i++) {
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
let generateDate = (day, jDate,c, id) => {
    let startHour = 9 + jDate;
    let endHour = 9 + jDate + 1;


    return {
        id: id,
        day: day,
        start: startHour,
        end: endHour,
        booked: Math.round(Math.random()+ 0.2) ,
        clerk: clerks[c]
    }
};
var dates = [];
id = 1;
for (let i = 1; i <= 7; i++) {
    for (let c = 0; c < clerks.length; c++) {
        for (let j = 0; j < 8; j++) {
            dates.push(generateDate(i, j,c, id));
            console.log(generateDate(i, j,c, id));
            id++;
        }
    }
}

fs.writeFile(
    '../../database.fake.json',
    JSON.stringify({Users: users, Clerks: clerks, Issues: issues, Dates: dates}),
    (err) => {
        console.log(err)
    }
);

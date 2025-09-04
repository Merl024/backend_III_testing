import {options} from './utils/commander.js'
import config from './utils/config.js';
import { faker } from '@faker-js/faker';

const users = []

for(let i=0; i<100; i++){
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const user = {
        firstName,
        lastName,
        jobTitle: faker.person.jobTitle(),
        age: faker.number.int({min: 18, max:100}),
        email: faker.internet.email({ firstName, lastName }),
        password: faker.internet.password({length:20})
    }
    users.push(user)
}

console.log(users);

console.log(options);

console.log(config);
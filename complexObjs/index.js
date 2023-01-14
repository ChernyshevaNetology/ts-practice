"use strict";
{
    const Peter = {
        name: 'Peter',
        age: 22,
        parents: {
            mother: {
                name: 'jane',
                age: 30,
                parents: { mother: { name: 'Lola', age: 22, parents: null }, father: { name: 'Sergey Mochalov', age: 33, parents: null } }
            },
            father: {
                name: 'eric',
                age: 30,
                parents: null
            }
        }
    };
    let event = {
        name: 'my new event',
        time: {
            start: '2025-11-01',
            finish: '2025-12-31'
        }
    };
    let employee = {
        name: 'andrew',
        position: {
            name: 'programmer',
            salary: 1000,
        },
        addr: {
            country: 'Belarus',
            city: 'minsk',
        }
    };
    let period = {
        date1: new Date(2030, 11, 31),
        date2: new Date(2020, 11, 31)
    };
    let city = { name: 'london' };
    let user = { name: 'john', age: 30, city: city };
}

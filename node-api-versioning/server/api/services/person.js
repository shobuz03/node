'use strict'
const Person = require('../models/person');

exports.getPersons = async (query, page, limit) => {
    try {
        let persons = await Person.find(query);
        return persons;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}
exports.savePersons = async (data) => {
    try {
        let person = new Person(data);
        return await person.save();
    } catch (error) {
        throw new Error('Something went wrong');
    }
}
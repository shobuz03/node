'use strict';

let personService = require('./person.services');
const Person = require('./personModel');
exports.get = async (req, res, next) => {
  //Validate request parameters, queries using express-validator
  let page = req.params.page ? req.params.page : 1;
  let limit = req.params.limit ? req.params.limit : 10;
  try {
    let persons = await personService.getPersons({}, page, limit);
    res.status(200).json(persons);
    next()
  } catch (error) {
    res.status(400).json({ message: e.message });
  }

};

exports.post = async (req, res, next) => {
  try {
    let person = new Person(req.body);
    await personService.savePersons(person);
    res.status(201).json(person);
    next()
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
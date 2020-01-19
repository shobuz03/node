const router = require('express').Router();
const Task = require('../models/task');
const db = require('../db/db')

router.post('/tasks', function (req, res, next) {
    if (!req.body.task_name) {
        res.status(400).send({
            error: 'Bad request'
        });
    }

    Task.create(req.body)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'internal server error'
            })
        })
});
router.get('/tasks', function (req, res, next) {
    Task.findAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.get('/task/:id', function (req, res, next) {
    Task.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(task => {
            if (task) {
                res.json(task)
            } else {
                res.send('Task does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
router.delete('/task/:id', function (req, res, next) {
    Task.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.json({
                status: 'Task Deleted!'
            })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.put('/task/:id', function (req, res, next) {
    if (!req.body.task_name) {
        res.status(400)
        res.json({
            error: 'Bad Data'
        })
    } else {
        Task.update({
                task_name: req.body.task_name
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.json({
                    status: 'Task Updated!'
                })
            })
            .error(err => handleError(err))
    }
})

module.exports = router;
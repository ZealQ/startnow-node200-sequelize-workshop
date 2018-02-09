const express = require('express');
const router = express.Router();
const db = require('../models/index');


router.get('/', (req, res) => {
    db.Author
        .findAll()
        .then(authors => {
            res.status(200).json(authors);
        })
        .catch(e => res.status(500).send('bad'));
});

router.get("/:id", (req, res) => {
    db.Author
        .findById(req.params.id)
        .then(authors => {
            if (!authors) res.status(404).send();
            res.status(200).json(authors);
        })
        .catch(e => res.status(500).send('bad'));
});


router.get('/:id/blogs', (req, res) => {
    db.Blog
        .findAll({
            where: {
                authorId: req.params.id
            }
        })
        .then(blogs => {
            res.status(200).json(blogs);
        })
        .catch(e => res.status(500).send('bad'));
});

router.post("/", (req, res) => {

    db.Author
        .create()
        .then(authors => {
            res.status(201).json(authors);
        })
        .catch(e => res.status(500).send("bad"));
});

router.put("/:id", (req, res) => {
    const idUpdate = req.params.id;

    db.Author
        .update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        }, {
            where: {
                id: idUpdate
            }
        })
        .then(authors => {
            res.status(204).json(authors)
        })
});

router.delete("/:id", (req, res) => {
    const idUpdate = req.params.id;
    db.Author
        .findById(idUpdate)
        .then(authors => {
            authors.destroy().then(a1 => {
                res.status(200).json(a1)
            }).catch(e => res.status(500).send("bad"));
        }).catch(e => res.status(500).send("bad"))
});




module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../models/index');


router.get('/', (req, res) => {
   db.Blog
        .findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(e => res.status(500).send('bad'));
});



router.get("/featured", (req, res) => {
    db.Blog
    .findAll({
        where:{
            featured:true
        }
    })
        .then(blogs => {
            res.status(200).json(blogs);
        })
        .catch(e => res.status(500).send('bad'));
});



router.get('/:id', (req, res) => {
    db.Blog
        .findById(req.params.id)
        .then(blogs => {
            if (!blogs) res.status(404).send(null);
            res.status(200).json(blogs);
        })
        .catch(e => res.status(500).send('bad'));
});




router.post("/", (req, res) => {
const ui =req.query.authorId;
    db.Blog
        .create({
            authorId:ui,
            title:req.body.title,
            article:req.body.article,
            publisher:req.body.publisher,
            featured:req.body.featured,
            _id:ui,
        })
        .then(blogs => {
            res.status(201).json(blogs);
        })
        .catch(e => res.status(500).send("bad"));
});


router.put("/:id", (req, res) => {
    const idUpdate = req.params.id;

    db.Blog
        .update({
            title:req.body.title,
            article:req.body.article,
            publisher:req.body.publisher,
            featured:req.body.featured,
        }, {
            where: {
                id: idUpdate
            }
        })
        .then(blogs => {
            res.status(204).json(blogs)
        })
});


router.delete("/:id", (req,res) =>{
    const id = req.params.id;
    db.Blog
    .findById(id)
    .then(blogs => {
        blogs.destroy().then(b1 => {
            if(!b1)res.status(404).send();
            res.status(200).json(b1)
        }).catch(e => res.status(500).send("bad"));
    }).catch(e => res.status(500).send("bad"))

});
module.exports = router;
// routes/api/Claims.js

const express = require('express');
const router = express.Router();

// Load Book model
const Claim = require('../../models/Claims');

// @route GET api/books/test
// @description tests claims route
// @access Public
router.get('/test', (req, res) => res.send('claim route testing!'));

// @route GET api/claims
// @description Get all claims
// @access Public
router.get('/', (req, res) => {
    Claim.find()
        .then(claims => res.json(claims))
        .catch(err => res.status(404).json({ nobooksfound: 'No Claim found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/Submit-Article', (req, res) => {
    Claim.findById(req.params.id)
        .then(claims => res.json(claims))
        .catch(err => res.status(404).json({ nobookfound: 'No Claim found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Claim.create(req.body)
        .then(book => res.json({ msg: 'Claim added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Claim' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Claim.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Claim.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;
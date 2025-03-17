var express = require('express');
var router = express.Router();
var { createCategory, readCategory, updateCategory, deleteCategory } = require('../schemas/category');

// Create a new category
router.post('/', async (req, res) => {
    try {
        let category = await createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Read a category by ID
router.get('/:id', async (req, res) => {
    try {
        let category = await readCategory(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
    try {
        let category = await updateCategory(req.params.id, req.body);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
    try {
        let result = await deleteCategory(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
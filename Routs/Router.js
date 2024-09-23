const express = require('express');
const router = express.Router();
const SchemaTask = require('../modelDb/schema.js');

router.get('/task', async (req , res) => {

    try {

        const tasks = await SchemaTask.find();
        res.status(200).send(tasks);

    }

    catch (err) {
        
        res.status(500).json({error : err.massage});

    }
});

router.post('/task', async (req , res) => {

    try {

        const task = new SchemaTask(req.body);
        await task.save()
        res.status(200).json({ massage: "add sucssefuel in DB",task});

    }
    catch (err) {

        res.status(400).json({ error : err.massage});

    }
})

router.put('/task/:id',async (req, res) => {
    try {
        const { id } = req.params;
        const dataToUbadate = req.body;

        const task = await SchemaTask.findByIdAndUpdate(id, dataToUbadate, { new: true });
        res.status(200).json({ message: "Updated Successfully " });
    }
    catch (err) {

        res.status(400).json({ error: err.massage });

    }
})

router.delete('/task/:id', async(req, res) => {
    try {
        const { id } = req.params;

     await SchemaTask.findByIdAndDelete(id);

    res.status(200).json({ message: "Deleted Successfully" });
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
})

module.exports = router;
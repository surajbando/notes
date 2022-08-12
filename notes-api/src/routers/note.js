const express = require("express");
const Note = require("../models/note");
const router = new express.Router();


// GET API : READ
router.get("/notes", async(req, res)=>{
    try{
        const notes = await Note.find({});
        res.status(200).send(notes);
    } catch(error){
        res.status(500).send(error);
    }
})

router.get("/notes/:id", async(req, res)=>{
    try{
        const note = await Note.findById(req.params.id);
        res.status(200).send(note);
    } catch(error){
        res.status(500).send(error);
    }
})

// POST API : CREATE
router.post("/notes", async(req, res)=>{
    try{
		let noteObj = new Note({
			title: req.body.title,
			description: req.body.description
		});
        const note = await noteObj.save();
        res.status(200).send(note);
    } catch(error){
        res.status(500).send(error);
    }
})

// PUT API : UPDATE
router.put("/notes/:id", async(req, res)=>{
    try{
		console.log("Hello")
			let noteObj = {
				title: req.body.title,
				description: req.body.description
			};
			console.log(noteObj.title)
			const note = await Note.findByIdAndUpdate(req.params.id,noteObj);
			res.status(200).send(note);
    } catch(error){
        res.status(500).send(error);
    }
})

//DELETE API : DELETE
router.delete("/notes/:id", async(req, res)=>{
    try{
        const note = await Note.findByIdAndRemove(req.params.id);
        res.status(200).send(note);
    } catch(error){
        res.status(500).send(error);
    }
})


module.exports = router;
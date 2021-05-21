const { json } = require('express');
const express = require('express');
const router = express.Router();
const Post= require('../models/Post');







//Get all the  blogs
router.get('/',async(req,res)=>{
   try {
       const posts=await Post.find();
       res.send(posts);
   } catch (error) {
    res.send({message:error})
   }
    });

//Add a new blog
router.post('/',async(req,res)=>{
    console.log(req.body);

    const posts=new Post({
    title: req.body.title,
    description: req.body.description
                        });
    try {
    const savedPost=await posts.save()
    res.json(savedPost);
    } catch (error) {
    res.json({message:error})
    }
});
//search a specific blog by id

router.get('/:postId',async(req,res)=>{
    try{
    const posts = await Post.findById(req.params.postId);
    res.send(posts);
    }
    catch (error) {
        res.send('Error:No blog found with given id')
        }
    });
//delete a specific blog by id

router.delete('/:postId',async(req,res)=>{
    try{
    const removedPost=await Post.remove({_id: req.params.postId});
    res.send(removedPost);
    }
    catch (error) {
        res.send('Error:No blog found with given id')
     }
});

//UPDATE a blog with given id
router.patch('/:postId',async(req,res)=>{
    try{
   const updatePost=await Post.updateOne(
       {_id: req.params.postId},
       {$set:{  title: req.body.title},
       description: req.body.description},
      
       )
       res.send(updatePost);
    }
    catch (error) {
        res.send('Error:No blog found with given id')
         }
});

module.exports  = router;
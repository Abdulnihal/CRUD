const { json } = require('express');
const express = require('express');
const router = express.Router();
const Post= require('../models/Post');

//gET alL ThE posT
router.get('/',async(req,res)=>{
   try {
       const posts=await Post.find();
       res.json(posts);
   } catch (error) {
    res.json({message:error})
   }
    });

//SuBmIT A post
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
//SPECFIC POST
router.get('/:postId',async(req,res)=>{
    try{
    const posts = await Post.findById(req.params.postId);
    res.json(posts);
    }
    catch (error) {
        res.json({message:error})
        }
    });
//delete a post
router.delete('/:postId',async(req,res)=>{
    try{
    const removedPost=await Post.remove({_id: req.params.postId});
    res.json(removedPost);
    }
    catch (error) {
    res.json({message:error})
     }
});
//UPDATE
router.patch('/:postId',async(req,res)=>{
    try{
   const updatePost=await Post.updateOne(
       {_id: req.params.postId},
       {$set:{  title: req.body.title}}
       )
       res.json(updatePost);
    }
    catch (error) {
        res.json({message:error})
         }
});

module.exports  = router;
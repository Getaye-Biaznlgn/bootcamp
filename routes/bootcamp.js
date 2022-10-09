const express = require('express');
const router=express.Router();
const {getBootcamps, getBootcamp, createBootcamp,deleteBootcamp, putBootcamp} = require("../controller/bootcamp")
router.route('/')
      .get(getBootcamps)
      .post(createBootcamp)
router.route('/:id')
      .get(getBootcamp)
      .put(putBootcamp)
      .delete(deleteBootcamp)

// router.get('/',(req, res)=>{
//     res.status(200).json({
//         name: 'Zemene kassie',
//         age: 24,
//         cgp: 'Here and their'
//     })
// });

// router.get('/:id',(req, res)=>{
//     res.status(200).json({
//         name: 'Zemene kassie',
//         age: 24,
//         cgp: 'Here and their'
//     })
// })

// router.post('/',(req, res)=>{
//     res.status(200).json(req.body)
// })
// router.put('/:id',(req, res)=>{
//     res.status(200).json({
//         id: req.params.id
//     })
// })
// router.delete('/:id',(req, res)=>{
//     res.status(200).json({
//         id: req.params.id
//     })
// })

module.exports = router;
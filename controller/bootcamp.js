const ErrorResponse = require('../utils/errorResponse')
const Bootcamp = require("../models/Bootcamp")
//@desc Get all Bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200)
            .json({
                success: true,
                data: bootcamps
            })
    } catch (err) {
        next(err)
    }

}
//@desc Get new Bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if (!bootcamp)
            return next(new ErrorResponse(404, `Bootcamp not found with the id of ${req.params.id}`))
        res.status(200)
            .json({
                success: true,
                data: bootcamp
            })
    } catch (err) {
        next(err)
    }
}

//@desc Create new Bootcamp
//@route POST /api/v1/bootcamps
//@access Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201)
            .json({
                success: true,
                data: bootcamp
            })
    } catch (err) {
        next(err)
    }

}
//@desc Update a Bootcamp
//@route Put /api/v1/bootcamps/:id
//@access Private
exports.putBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!bootcamp)
            return next( new ErrorResponse(404,`Bootcamp not found with id ${req.params.id}`))
        res.status(200)
            .json({
                success: true,
                data: bootcamp
            })
    } catch (err) {
        next(err)
    }

}
//@desc Delete a Bootcamp
//@route Delete /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = Bootcamp.findByIdAndDelete(res.params.id);
        if (!bootcamp)
            return next(new ErrorResponse(404,`Bootcamp not found with id ${req.params.id}`))
        res.status(200)
            .json({
                success: true,
                bootcamp: bootcamp
            })
    } catch (err) {
        next(err)
    }

}
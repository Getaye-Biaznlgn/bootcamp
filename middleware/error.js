const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next) => {
  let error = { ...err }
  // Mongo bad object id
  if (err.name === 'CastError')
    error = new ErrorResponse(404, `Bootcamp not found with id ${err.value}`)
  // Mongo duplicate key
  if (err.code === 11000)
    error = new ErrorResponse(400, `Duplicate field value entered`)
  // Mongooose validation error
  if(err.name==='ValidationError'){
    let message= Object.values(err.errors).map(val=>val.message)
    error = new ErrorResponse(400, message)
  }  
  res.status(error.statusCode || 500).json({
    error: error.message || 'Server Error'
  })
}

module.exports = errorHandler
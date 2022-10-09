const mongoose = require('mongoose')
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxLength: [50, 'Name can\'t be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add description'],
        maxLength: [500, 'Descripiton shouldn\'t more than 500 characters']
    },
    website: {
        type: String,
        match: [
            /https ?: \/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Pease add a valid URL with http or https'
        ]
    },
    phone: {
        type: String,
        maxLength: [
            20, 'Phone number cannot be greater than 20 characters'
        ]
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            , 'Please add a valid email']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        // GeoJSON
        type: {
            type: String,
            enum: ['point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String,
    },

    careers: {
        type: [String],
        required: true,
        enum: [
            'Web development',
            'Mobile development',
            'UI/UX',
            'Data Science',
            'Business',
            'Others'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must not be greater than 10']
    },
    averageCost: Number,
    hosting: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    photo:{
        type:String,
        default:'no-photo.jpg'
    }
})
module.exports = mongoose.model('Bootcamp',BootcampSchema);
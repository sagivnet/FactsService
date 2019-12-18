// Validation
const Joi = require('@hapi/joi')

// Register validation
const registerValidation = (data) => {
    const schema = {
        name: Joi.string()
            .min(1)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    }
    Joi.attempt(data, schema)
}

// Login validation
const loginValidation = (data) => {
    const schema = {
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    }
    Joi.attempt(data, schema)
}

// Fact validation
const factValidation = (data) => {
    const schema = {
        text: Joi.string()
            .min(4)
            .required()
    }
    Joi.attempt(data, schema)
}
module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.factValidation = factValidation

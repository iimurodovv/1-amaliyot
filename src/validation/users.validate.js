import Joi from "joi";

const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
        "string.min": "Foydalanuvchi ismi kamida 3 ta harf kiritsin",
        "string.max": "Foydalanuvchi ismi maksimal 40 ta harf kiritsin",
        "string.empty": "Foydalanuvchi ismi malumot bosh bolmasligi shart",
        "any.required": "Foydalanuvchi ismi malumot kirtishi shart",
    }),
    email: Joi.string().email().required().messages({
        "string.min": "Foydalanuvchi email kamida 3 ta harf kiritsin",
        "string.max": "Foydalanuvchi email maksimal 40 ta harf kiritsin",
        "string.empty": "Foydalanuvchi email  bosh bolmasligi shart",
        "any.required": "Fordalanuvchi email  kirtishi shart",
    }),
});

const updateUserSchema = Joi.object({
    name: Joi.string().min(3).max(40).required().messages({
        "string.min": "Foydalanuvchi ismi kamida 3 ta harf kiritsin",
        "string.max": "Foydalanuvchi ismi maksimal 40 ta harf kiritsin",
        "string.empty": "Foydalanuvchi ismi  bosh bolmasligi shart",
        "any.required": "Fordalanuvchi ismi kirtishi shart",
    }),
    email: Joi.string().email().trim().min(3).max(50).required().messages({
        "string.email": "Foydalanuvchi email kiritishi shart",
        "string.min": "Foydalanuvchi email kamida 3 ta harf kiritsin",
        "string.max": "Foydalanuvchi email maksimal 40 ta harf kiritsin",
        "string.empty": "Foydalanuvchi email  bosh bolmasligi shart",
        "any.required": "Fordalanuvchi email  kirtishi shart",
    }),
});

export { createUserSchema, updateUserSchema };

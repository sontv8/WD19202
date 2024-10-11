import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required().min(5).messages({
    "any.required": "Tên sản phẩm là trường bắt buộc",
    "string.empty": "Tên sản phẩm không được để trống",
    "string.min": "Tên sản phẩm phải có ít nhất 5 ký tự",
  }),
  image: Joi.string().required().messages({
    "any.required": "Ảnh sản phẩm là trường bắt buộc",
    "string.empty": "Ảnh sản phẩm không được để trống",
  }),
  description: Joi.string().required().min(5).messages({
    "any.required": "Mô tả sản phẩm là trường bắt buộc",
    "string.empty": "Mô tả sản phẩm không được để trống",
    "string.min": "Mô tả sản phẩm phải có ít nhất 5 ký tự",
  }),
});

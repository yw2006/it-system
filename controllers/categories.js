import {createCategory,getCategories,updateCategory,getOneCategory,deleteCategory} from "../models/Categories.js"

const postcategory=async (req,res)=>{
    const category= req?.body
    const result= await createCategory(category)
    return res.status(result?.statusCode).json({result:result?.result,message:result?.message})
}
const putCategory = async (req, res) => {
  const category = req?.body;
const { id } = req?.params;
  const result = await updateCategory(category,id);
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
const gettingCategories = async (req, res) => {
  const result = await getCategories();
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
const gettingOneCategory = async (req, res) => {
  const { id } = req?.params;
  const result = await getOneCategory(id);
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
const removeCategory = async (req, res) => {
  const { id } = req?.params;
  const result = await deleteCategory(id);
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
export {postcategory,putCategory,gettingCategories,gettingOneCategory,removeCategory}
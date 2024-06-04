import {createService,updateService,deleteService,getOneService,getServices,getOneServiceByCategory} from '../models/Services.js'
const postService = async (req, res) => {
  const service = req?.body;
  const result = await createService(service);
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
const putservice = async (req, res) => {
  const service = req?.body;
  const { id } = req?.params;
  const result = await updateService(service, id);
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
const gettingServices = async (req, res) => {
  const result = await getServices();
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
const gettingOneService = async (req, res) => {
  const { id } = req?.params;
  const result = await getOneService(id);
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
const gettingOneServiceByCategory = async (req, res) => {
  const { id } = req?.params;
  const result = await getOneServiceByCategory(id);
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
const removeService = async (req, res) => {
  const { id } = req?.params;
  const result = await deleteService(id);
  return res
    .status(result?.statusCode)
    .json({ result: result?.result, message: result?.message });
};
export {
  postService,
  putservice,
  gettingOneService,
  gettingServices,
  removeService,
  gettingOneServiceByCategory,
};
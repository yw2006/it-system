import db from "./config/index.js";
const createService = async (service) => {
  try {
    const { name, description, price,category_id } = service;
    const query =
      "INSERT INTO `services`( `name`, `description`, `price`, `category_id`) VALUES (?,?,?,?)";
    const [result] = await db.execute(query, [
      name,
      description,
      price,
      category_id,
    ]);

    if (result.affectedRows === 1) {
      return { message: "service created successfully.", statusCode: 201};
    } else {
      return { message: "Failed to create service.", statusCode: 400};
    }
  } catch (error) {
    return {
      message: `Error creating service: ${error.message}`,
      statusCode: 500,
    };  }
};
const updateService = async (service, id) => {
  try {
    const { name, description, price } = service;
    const query =
      "UPDATE `services` SET `name`=?,`description`=?,`price`=? WHERE `id`=?";
    const [result] = await db.execute(query, [
      name,
      description,
      price,
      id,
    ]);

    if (result.affectedRows === 1) {
      return { message: "service updated successfully.", statusCode: 201};
    } else {
      return {message:"Failed to update service.",statusCode:400};
    }
  } catch (error) {
    return {
      message: `Error creating service: ${error.message}`,
      statusCode: 500,
    };  
  }
};
const deleteService = async (id) => {
  try {
    const query = "DELETE FROM `services` WHERE `id`=?";
    const [result] = await db.execute(query, [id]);
    if (result.affectedRows === 1) {
      return { message: "service deleted successfully.", statusCode: 200};
    } 
      return { message: "Failed to delete service.", statusCode: 400 };
  } catch (error) {
    return {
      message: `Error deleting service: ${error.message}`,
      statusCode: 500,
    };  
  }
};

const getServices = async () => {
  try {
    const query =
      "SELECT `id`,`name`, `description`,`price`,`category_id`,`created_at`,`updated_at` FROM `services`";
    const [result] = await db.execute(query);
    return {
      message: "get services succefly ",
      result,
      statusCode: 200,
    };
  } catch (error) {
    return { message: `Error get services: ${error.message}`, statusCode: 500 };  
  }
};
const getOneService = async (id) => {
  try {
    const query =
      "SELECT `id`,`name`, `description`,`created_at`,`updated_at` FROM `services` where id=?";
    const [result] = await db.execute(query, [id]);
    if (result[0] == null) {
      return { message: "Failed to get service ", statusCode: 400 };
    }
    return {
      message: "get service succefly ",
      result: result[0],
      statusCode: 200,
    };
  } catch (error) {
    return { message: `Error get service: ${error.message}`, statusCode: 500 };  
  }
};
const getOneServiceByCategory = async (id) => {
  try {
    const query =
      "SELECT `id`,`name`, `description`,`created_at`,`updated_at` FROM `services` where category_id=?";
    const [result] = await db.execute(query, [id]);
    if (result[0] == null) {
      return { message: "Failed to get service ", statusCode: 400 };
    }
    return {
      message: "get service succefly ",
      result: result,
      statusCode: 200,
    };
  } catch (error) {
    return { message: `Error get service: ${error.message}`, statusCode: 500 };
  }
};
export {
  createService,
  updateService,
  deleteService,
  getServices,
  getOneService,
  getOneServiceByCategory
};

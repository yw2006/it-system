import db from "./config/index.js";
const createCategory = async (category) => {
  try {
    const { name, description } = category;
    const query =
      "INSERT INTO `categories` (`name`, `description`) VALUES (?, ?)";
    const [result] = await db.execute(query, [name, description]);

    if (result.affectedRows === 1) {
      return{message:"Category created successfully.",statusCode:201};
    } else {
      return{message:"Failed to Category Category.",statusCode:404};
    }
  } catch (error) {
    return{ message:`Error creating Category: ${error.message}`,statusCode:500};
  }
};
const updateCategory = async (category, id) => {
  try {
    const { name, description } = category;
    const query =
      "UPDATE `categories` SET `name`=?,`description`=? WHERE `id`=?";
    const [result] = await db.execute(query, [name, description, id]);

    if (result.affectedRows === 1) {
      return{message:"Category updated successfully.",statusCode:201};
    } else {
      return { message: "Failed to update Category.", statusCode: 400 };
    }
  } catch (error) {
    return {
      message: `Error updating Category: ${error.message}`,
      statusCode: 500,
    };  }
};
const deleteCategory = async (id) => {
  try {
    const query = "DELETE FROM `categories` WHERE `id`=?";
    const [result] = await db.execute(query, [id]);
    if (result.affectedRows === 1) {
      return { message: "Category deleted successfully.", statusCode: 200};
    } else {
      return { message: "Failed to delete Category.", statusCode: 400 };
    }
  } catch (error) {
    return{ message:`Error deleting Category: ${error.message}`,statusCode:500}  }
};

const getCategories = async () => {
  try {
    const query = "SELECT `id`,`name`, `description`,`created_at`,`updated_at` FROM `categories`";
    const [result] = await db.execute(query);
    return {
      message: "get Categories succefly ",
      result,
      statusCode: 200,
    };
  } catch (error) {
    return {
      message: `Error getting Categories: ${error.message}`,
      statusCode: 500,
    };  }
};
const getOneCategory = async(id) => {
try {
    const query = "SELECT `id`,`name`, `description`,`created_at`,`updated_at` FROM `categories` where id=?";
    const [result] = await db.execute(query,[id]);
    if(result[0]==null){
        return { message: "Failed to get Category ", statusCode: 400};
    }
    return {
      message: "get Categories succefly ",
      result: result[0],
      statusCode: 200,
    };
  } catch (error) {
    return {
      message: `Error when get Category: ${error.message}`,
      statusCode: 500,
    };  }
};
export {createCategory,updateCategory,deleteCategory,getCategories,getOneCategory}
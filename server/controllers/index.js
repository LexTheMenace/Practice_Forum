const db = require('../models');

/* async function insertIntoTableAndValidate(table_name, item, schema) {
  const result = Joi.validate(item, schema);
  console.log(result)
  
  if (result.error === null) {
    const rows = await db(table_name).insert(item, '*');
    return rows[0];
  } else {
    return Promise.reject(result.error);
  }
} */

function insertIntoTableAndValidate(item) {
  console.log(item);
  return db.Item
      .create(item)
      .then(item => {
        console.log(item);
        return item;
      })
      .catch(err => console.log(err));
}


module.exports = {
  insertIntoTableAndValidate,
};
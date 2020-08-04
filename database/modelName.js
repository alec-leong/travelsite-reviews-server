require('dotenv').config();

const collectionName = process.env.DB_COLLECTION_NAME || 'listings';
const modelName = collectionName[0].toUpperCase() + collectionName.slice(1).toLowerCase();

module.exports = modelName;

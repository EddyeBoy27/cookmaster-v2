const { ObjectId } = require('mongodb');
const connection = require('./connection');

const newUser = async (user, role = 'user') => {
  const roledUser = { ...user, role };
  const db = await connection();
  const userNew = await db.collection('users').insertOne(roledUser);
  return userNew.ops;
};

const findByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email });
  return user;
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const user = await db.collection('users').findOne({ _id: ObjectId(id) });
  return user;
};

const findAll = async () => {
  const db = await connection();
  const allUsers = db.collection('users').find().toArray();
  return allUsers;
};

module.exports = {
  newUser,
  findByEmail,
  findAll,
  findById,
};

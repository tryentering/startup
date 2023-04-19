const {MongoClient} = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const scoreCollection = client.db('startup').collection('score');


async function getUser(user) {
  user = await userCollection.findOne({ user: user });
  return user;
}

async function getUserByToken(token) {
  return await userCollection.findOne({ token: token });
}

async function createUser(userName, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    password: passwordHash,
    user: userName,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addScore(score) {
  scoreCollection.insertOne(score);
}

function getScores(user) {
  const query = {};
  const options = {};
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {addScore, getScores, getUser, getUserByToken, createUser};

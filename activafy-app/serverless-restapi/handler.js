require('dotenv').config({ path: './.env' });

const isEmpty = require('lodash.isempty');
const validator = require('validator');
const connectToDatabase = require('./db');
const User = require('./models/User');

/**
 * Helper function
 * @param {*} statusCode
 * @param {*} message
 * @returns
 */
const createErrorResponse = (statusCode, message) => ({
  statusCode: statusCode || 501,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    error: message || 'An Error occurred.',
  }),
});
/**
 * 
 * @param {*} err Error message
 */
const returnError = (err) => {
  console.log(err);
  if (err.name) {
    const message = `Invalid ${err.path}: ${err.value}`;
    callback(null, createErrorResponse(400, `Error:: ${message}`));
  } else {
    callback(
      null,
      createErrorResponse(err.statusCode || 500, `Error:: ${err.name}`)
    );
  }
};
/**
 * User CRUD functions parameters
 * @param {*} event data that's passed to the function upon execution
 *          - for get user by ID and delete will get the User ID from the event
 * @param {*} context sets callbackWaitsForEmptyEventLoop false
 * @param {*} callback sends a response success or failure
 * @returns
 */
module.exports.create = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  if (isEmpty(event.body)) {
    return callback(null, createErrorResponse(400, 'Missing details'));
  }
  const { name, email, password } = JSON.parse(
    event.body
  );

  const userObj = new User({
    name,
    email,
    password,
  });

  if (userObj.validateSync()) {
    return callback(null, createErrorResponse(400, 'Incorrect user details'));
  }

  try {
    await connectToDatabase();
    console.log(userObj);
    const user = await User.create(userObj);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(user),
    });
  } catch (err) {
    returnError(err);
  }
};

module.exports.getOne = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const id = event.pathParameters.id;
  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect Id.'));
    return;
  }

  try {
    await connectToDatabase();
    const user = await User.findById(id);

    if (!user) {
      callback(null, createErrorResponse(404, `No User found with id: ${id}`));
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(user),
    });
  } catch (err) {
    returnError(err);
  }
};

module.exports.getAll = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectToDatabase();
    const users = await User.find();
    if (!users) {
      callback(null, createErrorResponse(404, 'No Users Found.'));
    }

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(users),
    });
  } catch (err) {
    returnError(err);
  }
};
/**
 *
 * @param {*} event
 * @param {*} context
 * @param {*} callback
 * @returns
 */
module.exports.update = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);

  if (!validator.isAlphanumeric(event.pathParameters.id)) {
    callback(null, createErrorResponse(400, 'Incorrect Id.'));
    return;
  }

  if (isEmpty(data)) {
    return callback(null, createErrorResponse(400, 'Missing details'));
  }
  const { name, email, password } = data;

  try {
    await connectToDatabase();

    const user = await User.findById(event.pathParameters.id);

    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password;
    }

    const newUser = await user.save();

    callback(null, {
      statusCode: 204,
      body: JSON.stringify(newUser),
    });
  } catch (err) {
    returnError(err);
  }
};
/**
 *
 * @param {*} event
 * @param {*} context
 * @param {*} callback
 * @returns
 */
module.exports.delete = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const id = event.pathParameters.id;
  if (!validator.isAlphanumeric(id)) {
    callback(null, createErrorResponse(400, 'Incorrect Id.'));
    return;
  }
  try {
    await connectToDatabase();
    const user = await User.findByIdAndRemove(id);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Removed user with id: ${user._id}`,
        user,
      }),
    });
  } catch (err) {
    returnError(err);
  }
};
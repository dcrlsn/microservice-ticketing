import mongoose from 'mongoose';

import { app } from './app';

const init = async () => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error('JWT KEY NOT DEFINED')
    }
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(err)
  }
  app.listen(3000, () => {
    console.log('Listening on Port 3000');
  });
}

init();
import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.connect('mongodb://127.0.0.1:27017/snm-node-react', {

  }).then(()=> {
    console.log('Database connection success');
  }).catch((e) => {
    console.log('Database connection failed: ' + e);
  });
};

export default { connectDB };
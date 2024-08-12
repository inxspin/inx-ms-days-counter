import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3003;

// heartbeat
app.get('/', (req, res) => {
	res.status(200).json({message: 'Its working!'})
});

// database
import database from './configs/database';
database.connectDB();


// routes


// server
app.listen(port, () => {
	console.log('server started on PORT: ' + port);
});
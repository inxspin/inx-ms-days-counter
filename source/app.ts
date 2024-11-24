import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 80;

// heartbeat
app.get('/', (req, res) => {
	res.status(200).json({message: 'Its working!'})
});

// routes
import daysRoutes from './routes/days.routes'
app.use('/api/v1/', daysRoutes);

// server
app.listen(port, () => {
	console.log('server started on PORT: ' + port);
});

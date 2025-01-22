import express from 'express';
import cors from 'cors';
import session from 'express-session';
import authRoutes from './routes/auth.js';
import dotenv from "dotenv";
import helmet from "helmet"




dotenv.config();



const app = express();
const PORT = 5000;

app.use(helmet());



app.use(cors({ origin: 'http://localhost:5173',methods: ["POST","GET"],credentials: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use('/auth', authRoutes);

app.get("/",(req,res)=>{
  res.send("Default Api");
})


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
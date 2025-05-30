import express from 'express';
import connectToDB from './src/config/db_connection.js';
import dotenv from 'dotenv';
import { userRouter } from './src/routes/user.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { instructorRouter } from './src/routes/instructor.route.js';
import { courseRouter } from './src/routes/course.route.js';
import { paymentRouter } from './src/routes/payment.route.js';
import { examRouter } from './src/routes/exam.route.js';
import { adminRouter } from './src/routes/admin.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json({ limit: "500mb" }));

app.use("/api/user", userRouter);
app.use("/api/instructor", instructorRouter);
app.use("/api/course", courseRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/exam", examRouter);

app.use("/api/admin", adminRouter);

connectToDB()
.then((res) => {
    // console.log(res)
})
.catch((error) => {
    console.log(error);
});

app.listen(PORT, () => console.log(`server started on Port ${PORT}`));
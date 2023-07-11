const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const morgan = require("morgan")
const fs = require("fs");
const connectDB = require("./config/db")

const { AdminRoute, UserRoute, ProductRoute, PromoteRoute, FeedbackRoute, OrderRoute } = require("./routes")

const app = express()
const http = require('http').Server(app);
const PORT = process.env.PORT || 4000;

dotenv.config()

connectDB()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/public', express.static('./public'));

app.get("/", (req, res) => {
    res.send("<h1>ShopTECH E-commerce Server</h1>")
});

app.use('/api/admins', AdminRoute);
app.use('/api/users', UserRoute);
app.use('/api/products', ProductRoute);
app.use('/api/promotes', PromoteRoute);
app.use('/api/feedbacks', FeedbackRoute);
app.use('/api/orders', OrderRoute);

app.get("/api/giftcodes", (req, res) => {
    const dataGiftcode = fs.readFileSync("datas/data-giftcode.json")
    const dataGiftcodes = JSON.parse(dataGiftcode)
    res.json(dataGiftcodes)
});

app.get("/api/comments", (req, res) => {
    const dataComment = fs.readFileSync("datas/data-comment.json")
    const dataComments = JSON.parse(dataComment)
    res.json(dataComments)
});

http.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

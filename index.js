import express from "express";

const app = express ();

app.use (express.static("public"));

app.get("/", (req, res) =>{
    res.render("index.ejs");
});


app.get("/result",(req, res) => {
    res.render("result.ejs");
})

const port = 3000;
app.listen(port,() => {
    console.log(`Server is listening on port ${port}`)
});
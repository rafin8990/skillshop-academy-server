const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


const catagories = require('./Data/Categories.json');
const courses = require('./Data/courses.json');


app.use(cors());
app.get('/', (req, res) => {
    res.send('api running')
});

app.get('/all-courses', (req, res) => {
    res.send(courses);
})

app.get('/course-catagories', (req, res) => {
    res.send(catagories);
});
app.get('/courses/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const selectedcourses = courses.find(course => course._id === id);
    res.send(selectedcourses);
});
app.get('/cheakout/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const selectedCategories = courses.find(course => course.category_id === id);
    res.send(selectedCategories);
})

app.listen(port, () => {
    console.log('serverr is running');
})



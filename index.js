const express = require('express');
const engine = require('ejs-locals');

const data = {
    data: [
        [
            "1",
            "Atarazana",
            "Jacqueline Vera",
            "In place"
        ]
    ]
}

const app = express();

// app.set('view engine', 'pug');

app.engine('ejs', engine);

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// app.get('/', (request, response) => {
//     //response.send('Hello from server!');
//     const name = request.query.name;
//     response.render('pug/index', { name });
// });

app.get('/admin', (request, response) => {
    const name = request.query.name;
    response.render('ejs/admin/index', { name });
});

app.get('/admin/data', (request, response) => {
    response.json(data);
});

app.post('/admin/data', (request, response) => {
    const item = request.body.item;
    data.push(item);
    response.json({ code: 'Ok', message: 'Success!'})
})
app.listen(3000, () => {
    console.log('Ready in port 3000!')
});
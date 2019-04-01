const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const users = [{
        id: 1,
        name: 'user1',
        email: 'user1@test.com',
        address: '123 street'
    },
    {
        id: 2,
        name: 'user2',
        email: 'user2@test.com',
        address: '123 street'
    },
    {
        id: 3,
        name: 'user3',
        email: 'user3@test.com',
        address: '123 street'
    }
];

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:name', (req, res) => {
    const user = users.find(u =>
        u.name === req.params.name
    );
    if (!user) return res.status(404).send('user not found');
    res.send(user);
});

app.post('/api/users', (req, res) => {
    const {
        error
    } = validateuser(req.body); // result.error
    if (error) return res.status(400).send(error.details[0].message); // If invalid, return 400 - Bad request

    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    };
    users.push(user);
    console.log('item posted');
    res.send(users);
});

app.put('/api/users', (req, res) => {
    //Look up the user
    const user = users.find(e =>
        e.id === parseInt(req.body.id)
    );
    if (!user) return res.status(404).send('user not found'); // If not existing, return 404

    console.log(req.body);
    // Validate
    console.log(validateuser(req.body));
    const {
        error
    } = validateuser(req.body); // result.error

    if (error) return res.status(400).send(error.details[0].message); // If invalid, return 400 - Bad request

    // Update user
    user.name = req.body.name;
    user.email = req.body.email;
    user.address = req.body.address;

    //Return updated user to client
    res.send(user);
});

app.delete('/api/users/:id', (req, res) => {
    //Find user
    const user = users.find(e =>
        e.id === parseInt(req.params.id)
    );
    if (!user) return res.status(404).send('user not found'); // If not existing, return 404

    console.log(req);

    //Delete user in array
    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send(user);
});

function validateuser(user) {
    const schema = {
        id: Joi.number(),
        name: Joi.string().min(3).required(),
        email: Joi.string().required(),
        address: Joi.string().required()
    };

    return Joi.validate(user, schema);
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
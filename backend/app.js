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

const employees = [{
        id: 1,
        name: 'employee1',
        email: 'employee1@test.com',
        address: '123 street'
    },
    {
        id: 2,
        name: 'employee2',
        email: 'employee2@test.com',
        address: '123 street'
    },
    {
        id: 3,
        name: 'employee3',
        email: 'employee3@test.com',
        address: '123 street'
    }
];

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/api/employees', (req, res) => {
    res.send(employees);
});

app.get('/api/employees/:id', (req, res) => {
    const employee = employees.find(e =>
        e.id === parseInt(req.params.id)
    );
    if (!employee) return res.status(404).send('employee not found');
    res.send(employee);
});

app.post('/api/employees', (req, res) => {
    const {
        error
    } = validateEmployee(req.body); // result.error
    if (error) return res.status(400).send(error.details[0].message); // If invalid, return 400 - Bad request

    const employee = {
        id: employees.length + 1,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    };
    employees.push(employee);
    res.send(employees);
});

app.put('/api/employees/:id', (req, res) => {
    //Look up the employee
    const employee = employees.find(e =>
        e.id === parseInt(req.params.id)
    );
    if (!employee) return res.status(404).send('employee not found'); // If not existing, return 404

    // Validate
    const {
        error
    } = validateEmployee(req.body); // result.error

    if (error) return res.status(400).send(error.details[0].message); // If invalid, return 400 - Bad request

    // Update employee
    employee.name = req.body.name;

    //Return updated employee to client
    res.send(employee);
});

app.delete('/api/employees/:id', (req, res) => {
    //Find employee
    const employee = employees.find(e =>
        e.id === parseInt(req.params.id)
    );
    if (!employee) return res.status(404).send('employee not found'); // If not existing, return 404

    //Delete employee in array
    const index = employees.indexOf(employee);
    employees.splice(index, 1);

    res.send(employee);
});

function validateEmployee(employee) {
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().required(),
        address: Joi.string().required()
    };

    return Joi.validate(employee, schema);
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
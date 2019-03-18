const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const employees = [{
        id: 1,
        name: 'employee1'
    },
    {
        id: 2,
        name: 'employee2'
    },
    {
        id: 3,
        name: 'employee3'
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
        id: courses.length + 1,
        name: req.body.name
    };
    employees.push(employee);
    res.send(employees);
});

app.put('/api/employee/:id', (req, res) => {
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

app.delete('/api/employee/:id', (req, res) => {
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
        name: Joi.string().min(3).required()
    };

    return Joi.validate(employee, schema);
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
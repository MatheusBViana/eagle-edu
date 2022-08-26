const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const modelos = require("./models");
const modelCourse = require("./models/curso");
const modelSubject = require("./models/assunto");
const modelMission = require("./models/mission");

app.use(bodyParser.json());
app.use(cors());


// modelos.Curso.hasMany(modelos.Assunto,{
//     onDelete: 'CASCADE'
// });

// modelos.Assunto.belongsTo(modelos.Curso);

const sequelize = require('./utils/database');


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

modelCourse.hasMany(modelSubject, {
    onDelete: 'CASCADE'
});
modelSubject.belongsTo(modelCourse);

modelSubject.hasMany(modelMission, {
    onDelete: 'CASCADE'
});

modelMission.belongsTo(modelSubject);

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

const rota_missao = require("./routes/missao");
app.use(rota_missao);

const rota_assunto = require("./routes/assunto");
app.use(rota_assunto);

const rota_curso = require("./routes/curso");
app.use(rota_curso);


app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
})
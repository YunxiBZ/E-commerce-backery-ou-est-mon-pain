require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');

const port = process.env.PORT || 5478;

const router = require('./app/router');

const nodemailer = require('nodemailer');

app.use(cors());

// le parser JSON qui récupère le payload quand il y en a un et le transforme en objet JS disponible sous request.body
app.use(express.json());

app.use('/api', router);

app.post('/api/contact', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'contosflyff@gmail.com',
            pass: 'amnlpq1F'
        }
    });

    const mailOptions = {
        from: "assageant-flyff@hotmail.fr",
        to: 'contosflyff@gmail.com',
        subject: 'message test',
        text: 'Voici un message test'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            res.send('sucess');
        }
    })
})

// ici, on pourrait aussi écrire notre 404

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});
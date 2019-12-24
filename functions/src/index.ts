//import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
var nodemailer = require('nodemailer');
import functions = require('firebase-functions');
import * as cors from 'cors';
const corsHandler = cors({ origin: true });
//const cors = require(‘cors’)({ origin: true });
var transporter = nodemailer.createTransport('smtps://mozhui.lungdsuo@gmail.com:jngttctyicqdxckm@smtp.gmail.com');


exports.sendMail = functions.https.onRequest((req, res) => {

    corsHandler(req, res, () => {

        //res.send(req.body.email);
        var mailOptions = {
            to: 'lungdsuo.mozhui@ramietech.in',
            subject: 'New Inquiry',
            html: 'test'
        }
        transporter.sendMail(mailOptions, function (err: any, response: any) {
            if (err) {
                // res.send('Mail not sent');
                res.status(err.code).send(err.message);
            }
            else {
                // res.send('Mail sent');
                res.status(200).send({
                    msg: 'done'
                });
            }
        });
    });
});
/* exports.sendMail = functions.https.onRequest((req, res) => {

    res.set("Access-Control-Allow-Origin", "*");

    //res.send(req.body.email);
    var mailOptions = {
        to: 'lungdsuo.mozhui@ramietech.in',
        subject: 'New Inquiry',
        html: 'test'
    }
    transporter.sendMail(mailOptions, function (err: any, response: any) {
        if (err) {
            res.end('Mail not sent');
        }
        else {
            res.end('Mail sent');
        }
    });
}); */



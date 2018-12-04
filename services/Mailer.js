const sendgrid = require('sendgrid');
const helper = sendgrid.mailer;
const keys = require('../config/keys');

class Mailer extends helper.Mail {

}

nodule.exports = Mailer;
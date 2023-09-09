

const nodemailer = require("nodemailer");
const { MAILTRAP_USER, MAILTRAP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASSWORD,
  },
});

const sendMail = async (data) => {
    const email = { ...data, to: "ol.m.fed@gmail.com" };
    await transport
      .sendMail(email)
      .then(() => console.log("Email send"))
        .catch((error) => console.log(error.message));
    return true
}

module.exports = sendMail;


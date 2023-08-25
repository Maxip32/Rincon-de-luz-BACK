const { User } = require("../../db");
const Mailer = require("../userControllers/Mailer");

const newUser = async (data) => {
  const {
    name,
    lastName,
    email,
    password,
    birthdate,
    phone,
    dni,
    isAdmin,
    google,
    image,
    state,
    confirmed,
  } = data;
  console.log(data);
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        email,
        image,
        name,
      },
      defaults: {
        name,
        lastName,
        email,
        password,
        birthdate,
        phone,
        dni,
        isAdmin,
        google,
        image,
        state,
        confirmed,
      },
    });

    await user.save();

    if (created) {
      const subject = "Registro Exitoso";

      const content = "¡Bienvenido! Tu registro ha sido exitoso.";

      Mailer.sendEmail(subject, email, name, content);
    }
    return user;
  } catch (error) {
    throw new Error(error.message); //para k tiene un try catch aka si el error burbujea para arriba, lo catchea el try catch del handler
  }
};


module.exports = newUser;

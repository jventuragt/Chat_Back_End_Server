const mongoose = require("mongoose");

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log("DB online");

        console.log("init db config")

    }catch (error) {
        console.log(error);
        throw new Error ("Error en Date Base - Habla con el Admin");
    }
}

module.exports = {
    dbConnection
}
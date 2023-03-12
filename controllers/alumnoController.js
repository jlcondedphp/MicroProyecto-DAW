const Alumno = require('../model/Alumno')

// MOSTRAR
exports.mostrar = async (req, res) => {
    try {
        const AlumnoQuery = await Alumno.find({})
        console.log(AlumnoQuery)
    } catch (error) {
        res.send("Hubo un problema con la consulta")
    }

}
const mongoose = require("mongoose");

const url = "mongodb://localhost/mongo1_curso";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a mongo"))
  .catch((e) => console.log("el error de la conexion es " + e));

const personaSchema = mongoose.Schema(
  {
    nombre: String,
    edad: Number,
    pais: String,
  },
  { versionKey: false }
);

const PersonaModel = mongoose.model("personas", personaSchema);

//mostrar

const mostrar = async () => {
  const personas = await PersonaModel.find();
  console.log(personas);
};

 mostrar() 

//Crear
const crear = async () => {
  const persona = new PersonaModel({
    nombre: "julio",
    edad: 31,
    pais: "argentina",
  });

  const resultado = await persona.save();
  console.log(resultado);
};

/*  crear()
 */

//actualizar

const actualizar = async (id) => {
  const persona = await PersonaModel.updateOne(
    { _id: id },
    {
      $set: {
        nombre: "MODIFICADO",
        pais: "PAIS MODIFICADO",
      },
    }
  );
};

/* actualizar("63c322357c2d4dcbcdec04ee") */

//eliminar

const eliminar = async (id) => {
  const persona = await PersonaModel.deleteOne({ _id: id });
  console.log(persona);
};

/* eliminar("63c322357c2d4dcbcdec04ee");
 */
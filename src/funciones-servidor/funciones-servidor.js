const traerLista = async () => {
  const response = await fetch("http://localhost:3000/projects", {
    method: "GET"
  });

  const data = await response.json();
  return data;
}

const crearRegistro = async (datos) => {
  const response = await fetch("http://localhost:3000/projects", {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  return data;
}

const actualizarRegistro = async (id, datos) => {
  const response = await fetch(`http://localhost:3000/projects/${id}`, {
    method: "PUT",
    body: JSON.stringify(datos),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  return data;
}

const borrarRegistro = async (id) => {
  const response = await fetch(`http://localhost:3000/projects/${id}`, {
    method: "DELETE"
  });

  const data = await response.json();
  return data;
}

export { traerLista, crearRegistro, actualizarRegistro, borrarRegistro };

// const registro = {
//   key: '42342sdf',
//   project: 'Hacer la comida',
//   date: 'Hoy',
//   member: 'Adri',
//   budget: '14',
//   status: 'WIP',
//   description: 'Hacer la comida'
// }

// const actualizacion = {
//   key: 'adsgsdgsd',
//   project: 'Hacer el desayuno',
//   date: 'Hoy',
//   member: 'Adri',
//   budget: '5',
//   status: 'WIP',
//   description: 'Hacer la desayuno'
// }

//const datosPasadosPost = await crearRegistro(registro);
//const registroActualizado = await actualizarRegistro(0, actualizacion);
//const registroBorrado = await borrarRegistro(1);
//const lista = await traerLista();

//console.log(`POST: ${JSON.stringify(datosPasadosPost)}`);
//console.log(`PUT: ${JSON.stringify(registroActualizado)}`);
//console.log(`DELETE: ${JSON.stringify(registroBorrado)}`);
//console.log(`GET => Lista: ${JSON.stringify(lista)}`);

const respuesta = require("../helpers/jsonResponse")

let clientes = [{
    id: 1,
    nombre: 'Jhon Doe',
    empresa: 'Business 123',
    email: 'jd@bus123.com',
    telefono: '320123456',
    notas: 'Nada importante que decir'
}]

const nuevoId = (array) => {
    if (array.length > 0) {
        const anteriorId = array[array.length - 1].id;
        return anteriorId + 1;
    }
    return 1;
}

const postCliente = async (req, res) => {
    try {
        console.log(req.body)
        if (req.body.cliente) {
            let nuevoCliente = req.body.cliente;
            nuevoCliente.id = nuevoId(clientes);
            clientes = [...clientes, nuevoCliente];
            respuesta.sendJsonResponse(res, 200, nuevoCliente)
        } else {
            respuesta.sendJsonResponse(res, 500, { message: 'No se envio un cliente' })
        }
    } catch (error) {
        console.log(error.message);
        respuesta.sendJsonResponse(res, 500, error)
    }
}

const getClientes = async (req, res) => {
    try {
        respuesta.sendJsonResponse(res, 200, clientes)
    } catch (error) {
        respuesta.sendJsonResponse(res, 500, error)
    }
}

const getCliente = async (req, res) => {
    try {
        if(req.params.id){
            const id = req.params.id
            const cliente = clientes.find((cliente)=> cliente.id===Number(id))
            respuesta.sendJsonResponse(res, 200, cliente)    
        } else{
            respuesta.sendJsonResponse(res, 500, {message:'No hay un id'})
        }
        
    } catch (error) {
        respuesta.sendJsonResponse(res, 500, error)
    }
}



const putCliente = async (req, res) => {
    try {
        if (req.body.cliente) {
            let clienteActualizar = req.body.cliente;
            clienteActualizar.id = Number(req.body.id)
            const clientesActualizados = clientes.map((cliente) => {
                return cliente.id === clienteActualizar.id ? clienteActualizar : cliente
            })
            clientes = clientesActualizados;
            respuesta.sendJsonResponse(res, 200, clienteActualizar)
        } else {
            respuesta.sendJsonResponse(res, 500, { message: 'No se envio un cliente' })
        }
    } catch (error) {
        respuesta.sendJsonResponse(res, 500, error)
    }
}

const deleteCliente = async (req, res) => {
    try {
        if (req.body.id) {
            const id = req.body.id
            const clientesActualizados = clientes.filter((cliente) => {
                return cliente.id !== id
            })
            clientes = clientesActualizados;
            respuesta.sendJsonResponse(res, 200, { message: 'ok' })
        } else {
            respuesta.sendJsonResponse(res, 500, { message: 'No se envio un id' })
        }
    } catch (error) {
        respuesta.sendJsonResponse(res, 500, error)
    }
}

module.exports = {

    postCliente,
    getClientes,
    getCliente,
    putCliente,
    deleteCliente,
}
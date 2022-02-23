const Express = require('express');
const clienteController = require("../controllers/clienteController")
const router = Express.Router();

router.get("/getClientes",clienteController.getClientes);
router.get("/getCliente/:id",clienteController.getCliente);
router.post("/postCliente",clienteController.postCliente);
router.put("/putCliente",clienteController.putCliente);
router.delete("/deleteCliente",clienteController.deleteCliente);

module.exports = router;
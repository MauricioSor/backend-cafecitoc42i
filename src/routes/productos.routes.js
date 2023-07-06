import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  crearUsuario,
  editarProducto,
  obtenerProducto,
  obtenerProductos,
  obtenerUsuarios,
  obtenerUsuario
} from "../controllers/productos.controllers";

const router = Router();

// app.get('/productos', (req, res) => {
//   res.send('Se hizo la peticion get')
//   })

router.route("/productos").get(obtenerProductos).post(crearProducto);
router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(editarProducto);

router.route('/usuarios').get(obtenerUsuarios).post(crearUsuario)
router.route('/usuarios/:id').get(obtenerUsuario)

export default router;

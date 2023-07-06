import Producto from '../models/producto';
import Usuario from '../models/usuarios.router';

export const obtenerProductos = async (req, res) => {
  try{
    //pedir a la BD la lista de productos
    const productos = await Producto.find();
    res.status(200).json(productos);
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al buscar los productos',
    });
  }
};
export const obtenerProducto = async (req, res) => {
  try{
    console.log(req.params.id);
    const producto = await Producto.findById(req.params.id)
    res.status(200).json(producto);
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error no se encontro el producto',
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    // console.log(req.body);
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      mensaje: 'El producto se creo correctamente',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al crear el producto',
    });
  }
};

export const borrarProducto = async (req, res)=>{
  try{
   await Producto.findByIdAndDelete(req.params.id);
   res.status(200).json({
    mensaje: 'El producto fue eliminado correctamente',
  });
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error no se pudo eliminar el producto',
    });
  }
}

export const editarProducto = async (req, res)=>{
  try{
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: 'El producto fue editado correctamente',
    });
  }catch(error){
    console.log(error);
    res.status(400).json({
      mensaje: 'Error al intentar editar el producto',
    });
  }
}

export const obtenerUsuarios = async (req, res) => {
  try{
    //pedir a la BD la lista de productos
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al buscar los usuarios',
    });
  }
};
export const obtenerUsuario = async (req, res) => {
  try{
    //pedir a la BD la lista de productos
    console.log(req.params.id)
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  }catch(error){
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al buscar los usuarios',
    });
  }
};
export const crearUsuario = async (req, res) => {
  try {
    // console.log(req.body);
    const usuarioNuevo = new Usuario(req.body);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: 'El usuario se creo correctamente',
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error al crear el usuario',
    });
  }
};
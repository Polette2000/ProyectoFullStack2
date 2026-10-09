# Perfulandia - Proyecto FullStack II

Perfulandia es una tienda web de perfumes desarrollada como proyecto academico para el ramo de Desarrollo FullStack II. El sitio permite navegar productos, revisar informacion de la marca, leer contenido tipo blog, agregar productos al carrito y simular una compra con datos de despacho.

El proyecto tambien incluye un panel de administracion para gestionar productos y usuarios mediante datos guardados en `localStorage`.

## Funcionalidades principales

- Pagina de inicio con presentacion de la tienda.
- Catalogo de productos con busqueda y filtro por categoria.
- Vista de detalle de producto.
- Carrito de compras con control de cantidades.
- Validacion de stock para evitar compras superiores al inventario disponible.
- Formulario de datos del cliente para finalizar compra.
- Seleccion de region y comuna en el formulario del carrito.
- Metodo de pago limitado a tarjeta de debito o tarjeta de credito.
- Blog con recomendaciones de perfumes por tipo de piel, pH y temporada.
- Formulario de contacto.
- Registro e inicio de sesion.
- Panel administrador con resumen de inventario.
- Administracion de productos: crear, editar y eliminar.
- Administracion de usuarios.

## Estructura del proyecto

```text
ProyectoFullStack2/
├── admin/
│   ├── admin-index.html
│   ├── producto-form.html
│   ├── productos.html
│   ├── usuario-form.html
│   └── usuarios.html
├── css/
│   └── style.css
├── img/
│   └── imagenes del sitio
├── js/
│   ├── admin-productos.js
│   ├── carrito.js
│   ├── contacto.js
│   ├── login.js
│   ├── main.js
│   ├── producto-detalle.js
│   ├── productos.js
│   ├── registro.js
│   ├── usuario-form.js
│   └── usuarios.js
├── pages/
│   ├── blogs.html
│   ├── carrito.html
│   ├── contacto.html
│   ├── login.html
│   ├── nosotros.html
│   ├── producto-detalle.html
│   ├── productos.html
│   └── registro.html
├── index.html
└── README.md
```

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons
- LocalStorage para persistencia de datos en el navegador

## Como ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Iniciar el proyecto con la extension Live Server.
4. Abrir `index.html` desde el navegador.

Tambien se puede abrir directamente con una URL local similar a:

```text
http://127.0.0.1:5500/index.html
```

El puerto puede cambiar dependiendo de la configuracion de Live Server.

## Usuario administrador de prueba

Para ingresar al panel administrador se puede usar:

```text
Correo: admin@duoc.cl
Clave: 1234
```

Luego del ingreso, el sistema redirige al panel de administracion.

## Datos y persistencia

El proyecto utiliza `localStorage` para guardar informacion simulada, como:

- Productos administrados.
- Productos agregados al carrito.
- Usuario o cliente activo.
- Ultimo pedido realizado.

Esto significa que los datos se guardan en el navegador del usuario. Si se limpia el almacenamiento del navegador, los datos pueden reiniciarse.

## Flujo de compra

1. El cliente entra al catalogo de productos.
2. Agrega productos al carrito.
3. El carrito valida que no se pidan mas unidades que el stock disponible.
4. El cliente completa sus datos de despacho.
5. Selecciona tarjeta de debito o tarjeta de credito.
6. Finaliza la compra de forma simulada.

## Panel de administracion

Desde el panel administrador se puede:

- Ver resumen del inventario.
- Revisar total de productos registrados.
- Revisar stock total disponible.
- Identificar productos sin stock.
- Crear nuevos productos.
- Editar productos existentes.
- Eliminar productos.

## Integrantes y ramas de trabajo

El proyecto fue trabajado mediante ramas de Git para separar los avances de cada integrante. La rama `DEV-DARLING` contiene los avances asociados al carrito, blog, productos y administracion de productos.

## Estado del proyecto

Proyecto en desarrollo academico. Las funciones de compra, administracion y sesion son simuladas en el navegador mediante JavaScript y `localStorage`.

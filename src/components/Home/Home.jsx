import React from "react";
import "./css/Home.css";

function Home() {
  return (
    <>
      <header className="bg-gray-900">
        <nav className="container mx-auto py-4">
          {/* Contenido del menú de navegación */}
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="text-white">Inicio</a></li>
            <li><a href="#" className="text-white">Productos</a></li>
            <li><a href="#" className="text-white">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero bg-gray-200 py-12">
          {/* Contenido del hero banner */}
          <h1 className="text-4xl text-center text-gray-900">Bienvenido a nuestra tienda en línea</h1>
          <p className="text-lg text-center text-gray-600">Descubre una amplia selección de productos de alta calidad y encuentra las mejores ofertas.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block">Ver más</button>
        </section>

        <section className="products py-12">
          <h2 className="text-2xl text-center mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="product">
              {/* Contenido del producto */}
              <img src="producto1.jpg" alt="Producto 1" className="w-full h-auto" />
              <h3 className="text-lg text-center font-semibold mt-2">Producto 1</h3>
              <p className="text-center">$99.99</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mx-auto block">Agregar al carrito</button>
            </div>
            <div className="product">
              {/* Contenido del producto */}
              <img src="producto2.jpg" alt="Producto 2" className="w-full h-auto" />
              <h3 className="text-lg text-center font-semibold mt-2">Producto 2</h3>
              <p className="text-center">$79.99</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mx-auto block">Agregar al carrito</button>
            </div>
            <div className="product">
              {/* Contenido del producto */}
              <img src="producto3.jpg" alt="Producto 3" className="w-full h-auto" />
              <h3 className="text-lg text-center font-semibold mt-2">Producto 3</h3>
              <p className="text-center">$149.99</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mx-auto block">Agregar al carrito</button>
            </div>
          </div>
        </section>

        <section className="featured py-12">
          <h2 className="text-2xl text-center mb-6">Características Destacadas</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="feature">
              {/* Contenido de la característica */}
              <i className="fas fa-shipping-fast text-3xl text-center text-blue-500"></i>
              <h3 className="text-lg text-center font-semibold mt-2">Envío Rápido</h3>
              <p className="text-center">Recibe tus productos en tiempo récord con nuestro servicio de envío rápido y confiable.</p>
            </div>
            <div className="feature">
              {/* Contenido de la característica */}
              <i className="fas fa-credit-card text-3xl text-center text-blue-500"></i>
              <h3 className="text-lg text-center font-semibold mt-2">Pago Seguro</h3>
              <p className="text-center">Realiza tus compras de forma segura con nuestras opciones de pago confiables y protegidas.</p>
            </div>
            <div className="feature">
              {/* Contenido de la característica */}
              <i className="fas fa-headphones text-3xl text-center text-blue-500"></i>
              <h3 className="text-lg text-center font-semibold mt-2">Soporte 24/7</h3>
              <p className="text-center">Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana para ayudarte.</p>
            </div>
          </div>
        </section>

        <section className="cta">
          {/* Contenido del llamado a la acción (call-to-action) */}
          <h2>Descubre la mejor experiencia de compra en línea</h2>
          <button>Regístrate ahora</button>
        </section>
      </main>

      <footer>
        {/* Contenido del pie de página */}
        <p>Todos los derechos reservados &copy; 2023</p>
      </footer>
    </>
  );

}

export default Home;

/** @format */
import "../Inicio/formulario.scss";

const Formulario = () => {
   return (
    <div className="formulario-container">
    <h3>Contáctenos</h3>
    <div className="formulario-content">
      <form className="formulario-contacto">
        <input type="text" placeholder="Nombre y Apellido" required />
        <input type="tel" placeholder="Número Telefónico" required />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Asunto" required />
        <textarea
          cols={30}
          rows={10}
          placeholder="Consulta"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="formulario-mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.045684734263!2d-58.4054638236448!3d-34.577710572963646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9442e184b32b%3A0x32ac2cc32c4ec92c!2sPalacio%20Alcorta!5e0!3m2!1ses-419!2sar!4v1736367722716!5m2!1ses-419!2sar"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
   );
};

export default Formulario;

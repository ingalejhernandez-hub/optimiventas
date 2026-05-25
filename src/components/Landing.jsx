import { useState } from "react";
import { Logo } from "./UI.jsx";

export default function Landing({ goLogin }) {
  const [contactOpen, setContactOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="landingPage">
      <header className="landingNav">
        <div className="landingNavInner">
          <Logo />
          <nav>
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#faq">FAQ</a>
            <a href="#trabaja">Trabaja con nosotros</a>
          </nav>
          <button onClick={() => setContactOpen(true)}>Solicitar análisis</button>
        </div>
      </header>

      <main>
        <section className="landingHero">
          <div className="landingHeroContent">
            <div className="eyebrow">Optimiventas SRL</div>
            <h1>Orientación financiera humana, confidencial y sin costo para usted.</h1>
            <p>
              Le ayudamos a revisar opciones de crédito personal, unificación de deudas y crédito hipotecario con un proceso claro,
              responsable y sin comisiones para el solicitante.
            </p>
            <div className="landingActions">
              <button onClick={() => setContactOpen(true)}>Solicitar valoración gratuita</button>
              <button className="outline" onClick={goLogin}>Acceso interno</button>
            </div>
          </div>

          <div className="heroPhoto" aria-label="Asesor atendiendo a cliente en oficina">
            <div className="photoCard">
              <span>Asesoría confidencial</span>
              <strong>Revisión de opciones reales</strong>
            </div>
          </div>
        </section>

        <section className="landingGrid" id="servicios">
          <div className="landingCard">
            <h2>Unificación de deudas</h2>
            <p>Analizamos sus obligaciones actuales para valorar si existe una alternativa que mejore su flujo mensual.</p>
          </div>
          <div className="landingCard">
            <h2>Crédito personal</h2>
            <p>Revisión de perfil, ingresos y condiciones para identificar opciones viables según su capacidad de pago.</p>
          </div>
          <div className="landingCard">
            <h2>Crédito hipotecario</h2>
            <p>Acompañamiento inicial para valorar escenarios de financiamiento con garantía hipotecaria.</p>
          </div>
        </section>

        <section className="processSection" id="proceso">
          <div>
            <div className="eyebrow">Proceso claro</div>
            <h2>Te guiamos. No te cobramos.</h2>
            <p>
              Antes de avanzar, revisamos el caso con prudencia. Si el escenario tiene sentido, solicitamos la documentación necesaria
              y el analista de crédito gestiona la autorización SUGEF para iniciar el análisis formal.
            </p>
          </div>
          <div className="steps">
            <div><strong>1</strong><span>Consulta inicial</span></div>
            <div><strong>2</strong><span>Revisión de viabilidad</span></div>
            <div><strong>3</strong><span>Documentos básicos</span></div>
            <div><strong>4</strong><span>Análisis con entidad</span></div>
          </div>
        </section>

        <section className="faqSection" id="faq">
          <div className="sectionTitle">
            <div className="eyebrow">Preguntas frecuentes</div>
            <h2>Información clara antes de avanzar.</h2>
          </div>
          <div className="faqGrid">
            <div><strong>¿Optimiventas cobra comisión?</strong><p>No. La orientación, gestión y análisis no tienen costo para el solicitante.</p></div>
            <div><strong>¿Qué documentos se pueden requerir?</strong><p>Cédula por ambos lados, orden patronal y colillas de pago recientes.</p></div>
            <div><strong>¿Quién gestiona la autorización SUGEF?</strong><p>El analista de crédito contacta al cliente para continuar el proceso correspondiente.</p></div>
            <div><strong>¿La información es confidencial?</strong><p>Sí. La información se usa únicamente para valorar el caso y gestionar el análisis.</p></div>
          </div>
        </section>

        <section className="workSection" id="trabaja">
          <div>
            <div className="eyebrow">Trabaja con nosotros</div>
            <h2>Ayuda a otros a organizarse como alguna vez necesitaste hacerlo tú.</h2>
            <p>
              Buscamos personas con empatía, disciplina y deseo de orientar a quienes atraviesan presión financiera. No se trata solo
              de vender; se trata de escuchar, ordenar información y acompañar con responsabilidad.
            </p>
          </div>
          <button onClick={() => setContactOpen(true)}>Quiero postularme</button>
        </section>
      </main>

      <footer className="landingFooter">
        <div>
          <Logo />
          <p>Optimiventas SRL · Instagram @optimiventas.cr · 40012788</p>
        </div>
        <button onClick={() => setPrivacyOpen(true)}>Política de privacidad</button>
      </footer>

      {contactOpen && (
        <div className="landingModal">
          <div className="landingModalCard">
            <button className="modalX" onClick={() => setContactOpen(false)}>×</button>
            <div className="eyebrow">Contacto</div>
            <h2>Solicitar valoración</h2>
            <form className="landingForm">
              <label>Nombre completo<input /></label>
              <label>Teléfono WhatsApp<input /></label>
              <label>Correo<input type="email" /></label>
              <label>Tipo de consulta<select><option>Unificación de deudas</option><option>Crédito personal</option><option>Crédito hipotecario</option><option>Trabaja con nosotros</option></select></label>
              <label>Comentario<textarea /></label>
              <button type="button">Enviar solicitud</button>
            </form>
          </div>
        </div>
      )}

      {privacyOpen && (
        <div className="landingModal">
          <div className="landingModalCard privacy">
            <button className="modalX" onClick={() => setPrivacyOpen(false)}>×</button>
            <div className="eyebrow">Política de privacidad</div>
            <h2>Manejo de información</h2>
            <p>
              Optimiventas SRL utiliza la información suministrada únicamente para orientar, gestionar y analizar solicitudes de crédito
              o procesos relacionados. Para el análisis pueden solicitarse cédula por ambos lados, orden patronal, colillas de pago y
              autorización SUGEF gestionada por un analista de crédito.
            </p>
            <p>
              La información se trata de forma confidencial y no se comercializa a terceros. El envío de documentos no garantiza aprobación,
              ya que toda resolución depende del análisis de la entidad correspondiente.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

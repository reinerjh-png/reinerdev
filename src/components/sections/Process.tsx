export default function Process() {
  return (
    <section className="section-py" id="nosotros">
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="badge"><span className="dot"></span>Metodología</div>
          <h2 className="section-title">Así trabajamos</h2>
          <p className="section-subtitle">Un proceso estructurado, transparente y orientado a resultados rápidos.</p>
        </div>

        <div className="process-steps">
          <div className="process-line"></div>

          <div className="process-step animate-fade-up animate-delay-1">
            <div className="process-num">01</div>
            <h4 className="process-title">Descubrimiento</h4>
            <p className="process-desc">Analizamos tu negocio, identificamos cuellos de botella y definimos la solución exacta que necesitas.</p>
          </div>

          <div className="process-step animate-fade-up animate-delay-2">
            <div className="process-num">02</div>
            <h4 className="process-title">Diseño y Prototipado</h4>
            <p className="process-desc">Creamos interfaces de usuario premium y flujos de trabajo claros antes de escribir una sola línea de código.</p>
          </div>

          <div className="process-step animate-fade-up animate-delay-3">
            <div className="process-num">03</div>
            <h4 className="process-title">Desarrollo Ágil</h4>
            <p className="process-desc">Construimos tu plataforma en iteraciones rápidas, mostrándote avances reales cada semana.</p>
          </div>

          <div className="process-step animate-fade-up animate-delay-4">
            <div className="process-num">04</div>
            <h4 className="process-title">Lanzamiento y Soporte</h4>
            <p className="process-desc">Desplegamos el sistema en servidores escalables y te acompañamos con soporte continuo 24/7.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

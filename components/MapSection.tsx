export default function MapSection() {
  return (
    <div className="h-96 bg-gray-200 relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.123456789!2d8.0123456!3d44.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQyJzQ0LjQiTiA4wrAwMCc0NC40IkU!5e0!3m2!1sit!2sit!4v1234567890123"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mappa LogicWay - Sistemi Tre s.r.l."
      ></iframe>
    </div>
  );
}

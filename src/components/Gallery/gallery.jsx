import './gallery.css';

export const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__content">
          <h2>Nově otevřeno!</h2>
          <div className="gallery__cols">
            <p className="gallery__col">
              Máte chuť na trochu nostalgie? Rádi vás u nás uvidíme. Atmosféra
              podniku vás pohltí.
            </p>
            <p className="gallery__col">
              V přízemí se nachází nově vystavěný bar a restaurant s koktejly z
              řady "Cocktails & Desires".
            </p>
            <p className="gallery__col">
              Součástí kavárny je dětský koutek, kde se zabaví vaše ratolesti a
              vy si odpočinete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

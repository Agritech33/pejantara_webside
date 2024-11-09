const HeroEdukasi = () => {
  return (
    <div className="Beranda w-full h-screen mb-20 flex flex-col items-center justify-start">
      <div className="heroBerita-container w-full h-screen flex px-24 items-end">
        <div className="heroBerita-title w-2/3 flex justify-center h-full flex-col">
          <h1 className="text-8xl font-bold text-accent">
            Pusat Edukasi Pejantara!
          </h1>
          <p className="text-3xl w-full mt-24 text-balance text-accent">
            Bersama kita menjaga lingkungan dengan pembelajaran seputar sampah
            untuk menciptakan Kota Batam yang bersih dan hijau.
          </p>
        </div>
        <img src="Image 1.svg" alt="heroBerita" className="h-4/5" />
      </div>
      <div className="w-full h-14 bg-gradient-to-t from-background absolute xl:bottom-0 mb:bottom-0 bottom-[-10%]"></div>
    </div>
  );
};

export default HeroEdukasi;

const Hero = () => {
  return (
    <div className="Beranda w-full h-screen flex flex-col items-center justify-start md:pt-0 pt-[6.7rem] md:mb-0 mb-28">
      <div className="hero-container w-full h-screen flex flex-col md:flex-row px-6 md:px-24 items-center md:items-end">
        <div className="hero-title w-full md:w-2/3 flex justify-center h-full flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-accent">
            Selamat Datang Di
            <br /> Pejantara!
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl w-full md:w-3/4 mt-8 md:mt-24 text-center text-accent px-4 md:px-0">
            Terima kasih telah bergabung dan menjadi bagian dari gerakan peduli
            lingkungan di Kota Batam. Setiap langkah kecil yang Anda ambil akan
            membantu menjaga kebersihan kota dan berkontribusi pada masa depan
            yang lebih hijau.
          </p>
        </div>
        <img
          src="Image 3.png"
          alt="hero"
          className="w-3/4 md:w-auto h-1/2 md:h-4/5 mt-8 md:mt-0"
        />
      </div>
      <div className="w-full h-14 bg-gradient-to-t from-background absolute xl:bottom-0 mb:bottom-0 bottom-[-10%]"></div>
    </div>
  );
};

export default Hero;

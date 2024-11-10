const HeroPeta = () => {
    return (
      <section className="relative">
      <img src="heroPeta.png" alt="Welcome to Batam City" className="w-full h-[680px] object-cover"/>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Selamat Datang Di Kota Batam!</h1>
          <p className="text-lg mt-2">Bersama Pejantara untuk mewujudkan kota asri, bersih, dan bebas sampah.</p>
      </div>
  </section>
    );
  };
  
  export default HeroPeta;
  
const SecondHero = () => {
  return (
    <div className="second-hero-container w-full h-[615px] bg-accent relative">
      <img
        src="second hero.png"
        alt="hero"
        className="w-full h-full object-cover"
      />
      <h1 className="flex justify-center w-full absolute md:text-8xl text-5xl font-bold text-white left-1/2 bottom-96 text-center -translate-x-1/2">
        Cleanliness for <br /> Everyone
      </h1>
    </div>
  );
};

export default SecondHero;

const FeetBackLayout = () => {
  return (
    <div className="container-feetback w-full">
      <div className="top-container h-screen w-full flex justify-between">
        <div className="left-container h-full">
          <img
            src="daun.png"
            alt="daun"
            className="daun h-full absolute left-0"
          />
        </div>
        <div className="right-container z-10 h-full flex-col flex justify-center items-center mr-[25%]">
          <h1 className="text-6xl font-bold text-accent">
            Pejantara Kata Mereka
          </h1>
          <div className="container-feetback flex flex-col gap-10 mt-28">
            <div className="card-feetback py-3 px-5 bg-secondaryAccent shadow-lg shadow-slate-600 flex justify-center items-center gap-5 rounded-2xl">
              <img
                src="https://i.pinimg.com/564x/55/cd/61/55cd619d37e96382475dc3056e82efd5.jpg"
                alt="feetback"
                className="feetback w-32 h-32 rounded-full shadow-md shadow-slate-600"
              />
              <div className="text text-accent flex flex-col gap-5">
                <div className="text-container">
                  <h4 className="font-bold text-xl">Budiono Siregar</h4>
                  <p className="text-sm">november 31, 2022</p>
                </div>
                <p>
                  walah we pic mia di lepas mooton bercanda cemas kau dek bek
                  bek bek
                </p>
              </div>
            </div>
            <div className="card-feetback py-3 px-5 bg-secondaryAccent shadow-lg shadow-slate-600 flex justify-center items-center gap-5 rounded-2xl">
              <img
                src="https://i.pinimg.com/564x/55/cd/61/55cd619d37e96382475dc3056e82efd5.jpg"
                alt="feetback"
                className="feetback w-32 h-32 rounded-full shadow-md shadow-slate-600"
              />
              <div className="text text-accent flex flex-col gap-5">
                <div className="text-container">
                  <h4 className="font-bold text-xl">Budiono Siregar</h4>
                  <p className="text-sm">november 31, 2022</p>
                </div>
                <p>
                  walah we pic mia di lepas mooton bercanda cemas kau dek bek
                  bek bek
                </p>
              </div>
            </div>
            <div className="card-feetback py-3 px-5 bg-secondaryAccent shadow-lg shadow-slate-600 flex justify-center items-center gap-5 rounded-2xl">
              <img
                src="https://i.pinimg.com/564x/55/cd/61/55cd619d37e96382475dc3056e82efd5.jpg"
                alt="feetback"
                className="feetback w-32 h-32 rounded-full shadow-md shadow-slate-600"
              />
              <div className="text text-accent flex flex-col gap-5">
                <div className="text-container">
                  <h4 className="font-bold text-xl">Budiono Siregar</h4>
                  <p className="text-sm">november 31, 2022</p>
                </div>
                <p>
                  walah we pic mia di lepas mooton bercanda cemas kau dek bek
                  bek bek
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container h-[500px]">
        <div className="container-form">
          <div className="title"></div>
          <div className="form"></div>
        </div>
      </div>
    </div>
  );
};

export default FeetBackLayout;

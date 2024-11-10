import { useState } from "react";
const FeetBackLayout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Tanggapan Kamu Telah Terkirim, Terima Kasih!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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
      <div className="bottom-container w-full h-[700px] p-24">
        <div className="container-form w-full bg-secondaryAccent rounded-2xl h-full shadow-md shadow-slate-600 flex text-accent">
          <div className="title w-1/2 flex flex-col justify-center items-center gap-5 p-48">
            <h1 className="text-6xl font-bold font-oswald uppercase">
              Pejantara
            </h1>
            <h3 className="text-2xl text-center">
              Feedback dari User sangat penting untuk kami, mohon tinggalkan
              pesan & kesan Anda untuk Pejantara.
            </h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="form w-1/2 flex flex-col justify-center items-center px-10 gap-5"
          >
            <div className="input-container w-full">
              <h3>Full Name</h3>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="name w-full h-12 px-5 rounded-2xl shadow-md shadow-slate-600 bg-white"
              />
            </div>
            <div className="input-container w-full">
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="email w-full h-12 px-5 rounded-2xl shadow-md shadow-slate-600 bg-white"
              />
            </div>
            <div className="input-container w-full">
              <h3>Message</h3>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="message w-full h-20 px-5 rounded-2xl shadow-md shadow-slate-600 bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-12 bg-accent text-white rounded-full hover:bg-secondaryAccent hover:text-accent hover:scale-105 transition-all duration-150 ease-in-out"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeetBackLayout;

import PropTypes from "prop-types";

const FormAdminDataPejantara = ({ type }) => {
  const judul = type === "edukasi" ? "Judul Edukasi" : "Judul Berita";
  const sumber = type === "edukasi" ? "Sumber Edukasi" : "Sumber Berita";
  const isiEdukasi = type === "edukasi" ? "Isi Edukasi" : "Isi Berita";

  return (
    <>
      <form action="form" className="w-1/2 text-accent flex flex-col gap-3">
        {type === "maps" ? (
          <>
            <input
              type="file"
              className="file-input file-input-ghost h-64 px-52 w-full bg-gray-400"
            />
            <div className="container-input w-full flex items-center">
              <label htmlFor="nama" className="w-1/2 text-xl">
                nama
              </label>
              <input
                id="nama"
                type="text"
                placeholder="nama"
                className="input w-1/2 text-accent bg-background"
              />
            </div>
            <div className="container-input w-full flex items-center">
              <label htmlFor="lokasi" className="w-1/2 text-xl">
                lokasi
              </label>
              <input
                id="lokasi"
                type="text"
                placeholder="lokasi"
                className="input w-1/2 text-accent bg-background"
              />
            </div>
            <div className="container-input w-full flex items-center">
              <label htmlFor="latitude" className="w-1/2 text-xl">
                latitude
              </label>
              <input
                id="latitude"
                type="text"
                placeholder="latitude"
                className="input w-1/2 text-accent bg-background"
              />
            </div>
            <div className="container-input w-full flex items-center">
              <label htmlFor="longitude" className="w-1/2 text-xl">
                longitude
              </label>
              <input
                id="longitude"
                type="text"
                placeholder="longitude"
                className="input w-1/2 text-accent bg-background"
              />
            </div>
            <div className="container-input w-full flex items-center">
              <label htmlFor="keterangan" className="w-1/2 text-xl">
                keterangan
              </label>
              <select
                className="select w-1/2 bg-background text-accent"
                defaultValue="TPS"
              >
                <option value="TPS">TPS</option>
                <option value="TPA">TPA</option>
              </select>
            </div>
            <div className="container-input w-full flex items-center">
              <label htmlFor="tanggal" className="w-1/2 text-xl">
                Tanggal
              </label>
              <input
                id="tanggal"
                type="datetime-local"
                className="input w-1/2 text-accent bg-background"
              />
            </div>
            <button
              type="submit"
              className="btn bg-accent text-secondaryAccent"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <input
              type="file"
              className="file-input file-input-ghost h-64 px-52 w-full bg-gray-400"
            />
            <div className="container-input w-full flex items-center">
              <label htmlFor={judul} className="w-1/2 text-xl">
                {judul}
              </label>
              <input
                id={judul}
                type="text"
                placeholder={judul}
                className="input w-1/2 text-accent bg-background"
              />
            </div>
            <div className="container-input w-full flex items-center">
              <label htmlFor={sumber} className="w-1/2 text-xl">
                {sumber}
              </label>
              <input
                id={sumber}
                type="text"
                placeholder={sumber}
                className="input w-1/2 text-accent bg-background"
              />
            </div>
            <div className="container-input w-full flex items-center">
              <label htmlFor={isiEdukasi} className="w-1/2 text-xl">
                {isiEdukasi}
              </label>
              <input
                id={isiEdukasi}
                type="text"
                placeholder={isiEdukasi}
                className="input w-1/2 text-accent bg-background h-32"
              />
            </div>
            <div className="container-input w-full flex items-center">
              <label htmlFor="tanggal" className="w-1/2 text-xl">
                Tanggal
              </label>
              <input
                id="tanggal"
                type="datetime-local"
                className="input w-1/2 text-accent bg-background"
              />
            </div>
            <button
              type="submit"
              className="btn bg-accent text-secondaryAccent"
            >
              Submit
            </button>
          </>
        )}
      </form>
    </>
  );
};

FormAdminDataPejantara.propTypes = {
  type: PropTypes.string,
};

export default FormAdminDataPejantara;

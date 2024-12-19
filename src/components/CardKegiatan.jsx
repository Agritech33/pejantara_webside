import PropTypes from "prop-types";

const CardKegiatan = ({ title, imageUrl, item }) => {
  return (
    <div className="card bg-secondary shadow-xl w-[35rem] h-[40vh]">
      <figure className="w-full h-1/2">
        <img
          src={imageUrl}
          alt="Album"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body h-1/2 text-white">
        <h2 className="card-title text-sm">{title}</h2>
        <p className="text-sm">Click tombol untuk melihat selengkapnya</p>
        <div className="card-actions justify-end">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Baca Selengkap nya
          </button>
          {item.map((item) => (
            <dialog key={item.id} id="my_modal_5" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <img
                  src={item.image}
                  alt="image"
                  className="w-full h-80 object-cover"
                />
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="py-4">{item.deskripsi}</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

CardKegiatan.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  item: PropTypes.array,
};

export default CardKegiatan;

import CardEdukasi from "../components/CardEdukasi";
import edukasi from "../data/edukasi";

const EdukasiLayout = () => {
  const dataEdukasi = edukasi;

  return (
    <>
      <div className="card-container flex flex-col lg:flex-row justify-center items-center w-full md:w-11/12 lg:w-3/4 gap-5 mt-48">
        <div className="second-card-container-1 p-5 xl:p-10 space-y-5 xl:space-y-10 rounded-xl bg-slate-500 w-full">
          {dataEdukasi.slice(0, 1).map((item) => {
            return (
              <CardEdukasi
                id={item.id}
                key={item.id}
                title={item.title}
                imageUrl={item.image}
              />
            );
          })}
          {dataEdukasi.slice(1, 2).map((item) => {
            return (
              <CardEdukasi
                id={item.id}
                key={item.id}
                title={item.title}
                imageUrl={item.image}
              />
            );
          })}
        </div>
        <div className="second-card-container-2 p-5 xl:p-10 space-y-5 xl:space-y-10 rounded-xl bg-slate-500 w-full">
          {dataEdukasi.slice(2, 3).map((item) => {
            return (
              <CardEdukasi
                id={item.id}
                key={item.id}
                title={item.title}
                imageUrl={item.image}
              />
            );
          })}
          {dataEdukasi.slice(3, 4).map((item) => {
            return (
              <CardEdukasi
                id={item.id}
                key={item.id}
                title={item.title}
                imageUrl={item.image}
              />
            );
          })}
        </div>
        <div className="second-card-container-3 p-5 xl:p-10 space-y-5 xl:space-y-10 rounded-xl bg-slate-500 w-full">
          {dataEdukasi.slice(4, 5).map((item) => {
            return (
              <CardEdukasi
                id={item.id}
                key={item.id}
                title={item.title}
                imageUrl={item.image}
              />
            );
          })}
          {dataEdukasi.slice(5, 6).map((item) => {
            return (
              <CardEdukasi
                id={item.id}
                key={item.id}
                title={item.title}
                imageUrl={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EdukasiLayout;

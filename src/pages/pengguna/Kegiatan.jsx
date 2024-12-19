import CardKegiatan from "../../components/CardKegiatan";
import berita from "../../data/berita";

const KegiatanPage = () => {
  const dataKegiatan = berita;

  return (
    <div className="w-full my-10">
      <div className="kegiatan">
        <div className="content flex flex-wrap w-full justify-between gap-10">
          {dataKegiatan.map((item) => (
            <CardKegiatan
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.image}
              item={dataKegiatan}
            />
          ))}
        </div>
      </div>
      <div className="Riwayat-kegiatan mt-20">
        <h1 className="text-4xl font-bold text-accent my-10">
          Riwayat Kegiatan
        </h1>
        <div className="content flex flex-wrap w-full justify-between gap-10">
          {dataKegiatan.map((item) => (
            <CardKegiatan
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.image}
              item={dataKegiatan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KegiatanPage;

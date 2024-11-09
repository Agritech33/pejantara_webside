import CardBerita from "../components/CardBerita";
import berita from "../data/berita";

const CardContainer = () => {
  const dataBerita = berita;
  return (
    <>
      <div className="w-full flex h-[85vh] justify-between gap-10">
        <div className="card-container-left w-1/2 mb-[6vh]">
          {dataBerita.slice(0, 1).map((item) => (
            <CardBerita
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.image}
              type="secondary"
              image="secondary"
            />
          ))}
        </div>
        <div className="card-container-right w-1/2 flex flex-col gap-10">
          {dataBerita.slice(1, 2).map((item) => (
            <CardBerita
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.deskripsi_singkat}
              imageUrl={item.image}
              type="primary"
              image="primary"
            />
          ))}
          {dataBerita.slice(2, 3).map((item) => (
            <CardBerita
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.deskripsi_singkat}
              imageUrl={item.image}
              type="primary"
              image="primary"
            />
          ))}
          {dataBerita.slice(3, 4).map((item) => (
            <CardBerita
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.deskripsi_singkat}
              imageUrl={item.image}
              type="primary"
              image="primary"
            />
          ))}
        </div>
      </div>
      <div className="bottom-container flex gap-10 w-full h-[50vh]">
        {dataBerita.slice(4, 5).map((item) => (
          <CardBerita
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.image}
            type="tertiary"
            image="secondary"
          />
        ))}
        {dataBerita.slice(5, 6).map((item) => (
          <CardBerita
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.image}
            type="tertiary"
            image="secondary"
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;

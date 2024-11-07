import CardLayanan from "../components/CardLayanan";
import SectionLayout from "./SectionLayout";
import data from "../data/data";
const Layanan = () => {
  const dataLayanan = data;

  return (
    <>
      <SectionLayout
        paragraph=" Memberikan solusi inovatif dan berkelanjutan untuk pengelolaan
            sampah di Kota Batam. Mulai dari pengumpulan hingga daur ulang, kami
            berkomitmen untuk menciptakan lingkungan yang bersih dan hijau.
            Jelajahi layanan kami dan bersama-sama wujudkan kota yang lebih
            bersih!"
        style="card-layanan-container text-white gap-5 flex justify-center flex-wrap mt-10 p-10"
        content={dataLayanan.map((layanan) => {
          return (
            <CardLayanan
              key={layanan.id}
              image={layanan.image}
              title={layanan.title}
              paragraph={layanan.paragraph}
            />
          );
        })}
      >
        Layanan Pejantara
      </SectionLayout>
    </>
  );
};

export default Layanan;

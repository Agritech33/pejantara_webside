import GaleriComponent from "../components/GaleriCoponent";
import SectionLayout from "./SectionLayout";
import img from "../data/img";

const Galeri = () => {
  const dataGaleri = img;

  return (
    <>
      <SectionLayout
        paragraph=" Selamat datang di Galeri Pejantara , tempat kami menampilkan
          momen-momen terbaik dan dokumentasi kegiatan yang telah kami lakukan.
          Lihatlah berbagai pencapaian kami dalam upaya melestarikan budaya,
          lingkungan, dan kemajuan komunitas. Temukan inspirasi dari setiap
          langkah yang kami ambil."
        style="galeri w-full mt-24 mb-24"
        content={<GaleriComponent data={dataGaleri} />}
      >
        Galeri Pejantara
      </SectionLayout>
    </>
  );
};

export default Galeri;

import RadioFaq from "../components/RadioFaq";
import SectionLayout from "./SectionLayout";
import data from "../data/pertanyaanUmum";

const PertanyaanUmum = () => {
  const dataPertanyaan = data;

  return (
    <SectionLayout
      paragraph="Temukan jawaban untuk pertanyaan umum seputar Pejantara. Kami
          berkomitmen untuk memberikan informasi yang Anda butuhkan untuk
          memulai kehidupan lingkungan yang bersih. Jika Anda tidak menemukan
          jawaban yang diinginkan, silahkan hubungi tim kami!"
      style="radio-container mt-20 w-full space-y-2"
      content={dataPertanyaan.slice(0, 6).map((pertanyaan) => {
        return (
          <RadioFaq
            key={pertanyaan.id}
            pertanyaan={pertanyaan.question}
            jawaban={pertanyaan.answer}
          />
        );
      })}
    >
      Pertanyaan Umum
    </SectionLayout>
  );
};

export default PertanyaanUmum;

import { Helmet } from "react-helmet-async";
import SectionLayout from "../../LayoutComponents/SectionLayout";
import CardContainer from "../../LayoutComponents/CardContainer";
import { useParams } from "react-router-dom";
import DetailBeritaLayout from "../../LayoutComponents/DetailBeritaLayout";
const Berita = () => {
  const { id } = useParams();

  return (
    <div>
      {id ? (
        <>
          <Helmet>
            <title>Berita Page {id}</title>
          </Helmet>
          <DetailBeritaLayout id={id} />
        </>
      ) : (
        <>
          <Helmet>
            <title>Berita Page</title>
          </Helmet>
          <SectionLayout
            style={"card-container w-full"}
            content={<CardContainer />}
          >
            INFO & BERITA
          </SectionLayout>
        </>
      )}
    </div>
  );
};

export default Berita;

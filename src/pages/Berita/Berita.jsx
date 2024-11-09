import { Helmet } from "react-helmet-async";
import SectionLayout from "../../LayoutComponents/SectionLayout";
import CardContainer from "../../LayoutComponents/CardContainer";
import { useParams } from "react-router-dom";
const Berita = () => {
  const { id } = useParams();

  return (
    <div>
      {id ? (
        <>
          <Helmet>
            <title>Berita Page {id}</title>
          </Helmet>
          <div className="flex justify-center items-center w-full h-screen">
            <h1 className="text-4xl text-accent">Berita Page {id}</h1>
          </div>
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

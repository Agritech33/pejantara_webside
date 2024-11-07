import PropTypes from "prop-types";

const SectionLayout = ({ children, paragraph, content, style }) => {
  return (
    <>
      <div className="layanan-container w-full flex flex-col items-center justify-center p-5">
        <div className="layanan-title w-full flex items-center flex-col">
          <h1 className="text-6xl font-bold text-accent">{children}</h1>
          <p className="text-balance text-center mt-10 text-xl text-accent">
            {paragraph}
          </p>
        </div>
        <div className={style}>{content}</div>
      </div>
    </>
  );
};

SectionLayout.propTypes = {
  children: PropTypes.string,
  paragraph: PropTypes.string,
  content: PropTypes.node,
  style: PropTypes.string,
};

export default SectionLayout;

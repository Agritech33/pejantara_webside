import PropTypes from "prop-types";

const GaleriComponent = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-4">
      <div className="col-span-2 row-span-5 bg-slate-500 rounded-xl sm:col-span-2 md:col-span-3 lg:col-span-2">
        {data.slice(0, 1).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>

      <div className="col-span-1 row-span-3 bg-slate-500 rounded-xl sm:col-start-3 md:col-start-4 lg:col-start-3">
        {data.slice(1, 2).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>

      <div className="col-span-1 row-span-3 bg-slate-500 rounded-xl sm:col-start-4 md:col-start-5 lg:col-start-4">
        {data.slice(2, 3).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>

      <div className="col-span-2 row-span-5 bg-slate-500 rounded-xl sm:col-span-2 md:col-span-3 lg:col-start-5">
        {data.slice(3, 4).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>

      <div className="col-span-2 row-span-2 bg-slate-500 rounded-xl sm:col-span-2 sm:col-start-3 sm:row-start-4 md:col-start-4 md:row-start-3 lg:col-start-3 lg:row-start-auto">
        {data.slice(4, 5).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>
    </div>
  );
};

GaleriComponent.propTypes = {
  data: PropTypes.array,
};

export default GaleriComponent;

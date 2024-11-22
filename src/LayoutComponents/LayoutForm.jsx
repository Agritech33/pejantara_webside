import Input from "../components/Input";
import Select from "../components/Select";
import PropTypes from "prop-types";

const LayoutForm = ({ latitude, longitude }) => {
  const options = ["kategori 1", "kategori 2", "kategori 3"];

  return (
    <form className="w-full h-full flex flex-col gap-5">
      <Select type="text" placeholder="Kategori" options={options} />
      <Input type="text" placeholder="judul Laporan" />
      <Input type="text" placeholder="Deskripsi Laporan" />
      <Input type="text" placeholder="Lokasi Laporan" />
      <Input
        type={"file"}
        placeholder="Upload Laporan"
        accept="image/*"
        multiple={false}
      />
      <Input type="number" value={latitude || ""} readOnly />
      <Input type="number" value={longitude || ""} readOnly />
    </form>
  );
};

LayoutForm.propTypes = {
  latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LayoutForm;

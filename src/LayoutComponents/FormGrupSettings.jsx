import Input from "../components/Input";

const FormGrupSettings = () => {
  return (
    <form action="update" className="w-full flex flex-col gap-3">
      <Input type="text" placeholder="Nama Grup" />
      <Input type="text" placeholder="Deskripsi Grup" />
      <Input type="text" placeholder="Lokasi Grup" />
      <Input type="text" placeholder="Grup role" />
    </form>
  );
};

export default FormGrupSettings;

import Input from "../components/Input";

const FormSettings = () => {
  return (
    <form className="w-full flex flex-col gap-3">
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
    </form>
  );
};

export default FormSettings;

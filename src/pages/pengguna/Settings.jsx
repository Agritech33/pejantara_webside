import FormGrupSettings from "../../LayoutComponents/FormGrupSettings";
import FormSettings from "../../LayoutComponents/FormSettings";
import SettingsLayout from "../../LayoutComponents/SettingsLayout";

const Settings = () => {
  return (
    <div className="w-full flex mb-10">
      <div className="user w-1/2 flex flex-col gap-10 mt-10">
        <h1 className="text-4xl font-bold text-accent">User Settings</h1>
        <SettingsLayout>
          <FormSettings />
        </SettingsLayout>
      </div>
      <div className="grup w-1/2 flex flex-col gap-10 mt-10">
        <h1 className="text-4xl font-bold text-accent">Grup Settings</h1>
        <SettingsLayout>
          <FormGrupSettings />
        </SettingsLayout>
      </div>
    </div>
  );
};
export default Settings;

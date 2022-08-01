import { Name } from "./Name";
import { ToggleMode } from "./ToggleMode";

export const Header = () => {
  return (
    <>
      <header className="title">
        <Name />

        <ToggleMode />
      </header>
    </>
  );
};

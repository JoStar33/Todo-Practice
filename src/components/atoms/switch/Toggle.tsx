import { Button, Switch, ToggleInput } from "./Toggle.style";

interface Props {
  handleChange: () => void;
  checked: boolean;
}

const Toggle = ({ handleChange, checked }: Props) => {
  return (
    <>
      <ToggleInput onChange={handleChange} role="toggle" id="toggle" type="checkbox" hidden checked={checked}/>
      <Switch htmlFor="toggle">
        <Button />
      </Switch>
    </>
  );
};

export default Toggle;

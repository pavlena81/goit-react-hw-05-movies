import { Wrapper, Input, Icon } from "./SearchInput.styled";

export const SearchInput = ({ value, onChange }) => {
   return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
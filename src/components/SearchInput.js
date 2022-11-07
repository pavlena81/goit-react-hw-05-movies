import { Wrapper, Input, Icon, Button, Form} from "./SearchInput.styled";


export const SearchInput = ({ value, onChange}) => {
  

   return (
     <Wrapper>
       <Form>     
     
        <Input
        type="text"        
        value={value}
        onChange={(e) => onChange(e.target.value)}
         />
         <Button type="submit">
           <span><Icon /></span>
          </Button>
      </Form> 
    </Wrapper>
  );
};
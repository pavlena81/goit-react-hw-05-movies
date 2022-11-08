import { Wrapper, Input, Icon, Button, Form} from "./SearchInput.styled";
import { useState } from "react";

export const SearchInput = ({ value, onChange}) => {
  const [searchInput, setSearchInput] = useState(value ?? '');
 
     return (
     <Wrapper>
         <Form onSubmit={(e) => { e.preventDefault(); onChange(searchInput) }}>     
     
        <Input
        type="text"        
        value={searchInput}
             onChange ={(e) => setSearchInput(e.target.value)}
               
              
             
         />
         <Button type="submit">
           <span><Icon /></span>
          </Button>
      </Form> 
    </Wrapper>
  );
};


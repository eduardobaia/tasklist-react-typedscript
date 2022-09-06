import { useState, KeyboardEvent } from "react";
import { Item } from "../../types/Item";
import * as C from './styles'


type Props = {
    onEnter: (taskName:string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) =>{
       if(e.code === 'Enter' && inputText!== ''){
          onEnter(inputText)  
          setInputText('')
       }
    }

return (
    
    <C.Container>
        <div className="image"> ➕ </div>
        <input 
        type="text"
        placeholder="Add task"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        />
    </C.Container>

)


}
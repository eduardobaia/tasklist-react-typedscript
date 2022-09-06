import * as C from './App.styled'
import './App.css';
import { useState } from 'react';
import { Item } from './types/Item'
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


const App = () =>{

  const [list, setList] = useState<Item[]>([
    {id: 1, name:"buy bread", done:false},
    {id: 2, name:"READ", done:false},
  ]);
 
 const handleAddTask = (taskName:string) => {
    let newList = [...list];
    newList.push({
      id: list.length+1,
      name:taskName,
      done: false
    });

    setList(newList);
 }


   // Função feita para tarefinha de casa.
   const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

const handleOnDelete =(id:number) => {



}


  return (
    <C.container>
      <C.Area>
        <C.Header>Task List</C.Header>

        <AddArea  onEnter={handleAddTask}/>
        {list.map((item,index)=> (
          <div> 
          <ListItem key={index} item={item}     onChange={handleTaskChange}   />
          </div>
        ))}
      </C.Area>
    </C.container>
  )
}

export default App;

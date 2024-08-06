
import { useMutation } from "react-query";
import List from "../Lists/List";
import axios from "axios";


export default function MainTodo() {

const {mutate}= useMutation({mutationFn: async ()=> {

    try{
        const response =await axios.post (" http://localhost:3000/list")
        return response.data
    }catch(e){
        console.log(e.massage)
    }
}})

  return (
    <div>
      <h1> Todo list</h1>

    <form action=""  className="flex flex-col justify-center items-center">
<input type="text" placeholder="enter todo" className=""/>
<button className="bg-blue-500 w-[300px] rounded-lg">ADD</button>
</form>

<List/>
    </div>
  )
}

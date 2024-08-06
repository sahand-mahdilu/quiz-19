import { Icon } from '@iconify/react'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function List() {

const {data}= useQuery({queryKey:["getList"], queryFn: async() =>{
    try{
        const response= await axios.get("http://localhost:3000/list")
        return response.data
    }catch (e){
console.log(e.massage)
    }
}})

return (
    <div className="flex flex-col justify-center gap-y-4">
      {data?.map((item) => (
        <div
          key={item.id}
          className="flex bg-gray-200 p-3 w-52 justify-between rounded-lg"
        >
          <p>{item.action}</p>
          <div className="flex gap-x-3">
            <button>
              <Icon icon="ion:trash-outline" />
            </button>
            <button>
              <Icon icon="bx:edit" />
            </button>
          </div>
        </div>
))}
    </div>
  );


}

import {useState,useEffect} from 'react';

import { MegamanContext } from "./MegamanContext";

export const MegamanProvider = ({children}) => {

  const [allRobotMaster , setAllRobotMaster] = useState([]);

  const [ offset, setOffSet ] = useState(0);

  //States for the simple appication
  const [loading,setLoading] = useState(true);
  const [active,setActive] = useState(false);

  //Todo useForm

  const getAllRobotMaster = async() => {
    const baseUrl = 'http://localhost:9001/';

    const res = await fetch(baseUrl);
    const data = await res.json();
    console.log(data);
    return data;

  }

  return (
    <MegamanContext.Provider value={{
      getAllRobotMaster
    }}>
      {children}
    </MegamanContext.Provider>
  )

}

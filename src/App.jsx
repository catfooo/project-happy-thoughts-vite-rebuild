import { useState } from "react";

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const getResult = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
    .then((res) => res.json())
    .then((data) => )setMessageList(data)
  }

  useState(() => {
    getResult()
  }, [])
  
  // // async function getResult() {
  // //   const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
  // //   const result = await response.json()
  // //   console.log(result)
  // }
  return <div>
    <iframe 
    src="https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts" 
    style={{border: 'none', width: '100%', height: 350}}>
      </iframe>
      </div>;
};

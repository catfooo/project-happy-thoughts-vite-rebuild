import { useEffect, useState } from "react";

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const getResult = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
    .then((res) => res.json())
    .then((data) => setMessageList(data))
  }

  useEffect(() => {
    getResult()
  }, [])
  
  // // async function getResult() {
  // //   const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
  // //   const result = await response.json()
  // //   console.log(result)
  // }

  export const PostMessage = () => {
    const [newPost, setNewPost] = useState("")
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: `${newPost}`,
      }),
      headers: { "Content-Type": "application/json" },
    }
    await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
    .then((response) => response.json())
    .then((data) => {

    })
  }
  return <div>
    <form onSubmit={PostMessage}>
      <textarea value={newPost} onChange={(e) => setNewPost(e.target.value)}></textarea>
    </form>
    <button type="submit">submit</button>
    <ul>
      {messageList.map((list, index) => (
        <li key={index}>{list.message} {list.hearts} {list.createdAt}</li>
      ))}
    </ul>
    {/* <iframe 
    src="https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts" 
    style={{border: 'none', width: '100%', height: 350}}>
      </iframe> */}
      </div>;
};

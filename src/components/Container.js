import React, { useEffect } from 'react' 
import { useChat } from '../context/ChatContext'
import { init, subscribeChat } from '../socketApi'
import ChatForm from './ChatForm'
import ChatList from './ChatList'



function Container() {
  const {setMessages} = useChat()
  useEffect (() => {
    init()
    
    subscribeChat((message) =>{
      setMessages ((prevState) => [...prevState, {message}])
    })
  }, [])
    
    
  return (

    <div>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container
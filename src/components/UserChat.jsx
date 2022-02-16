import {useState, useEffect} from "react"
import {FiSend, FiPhoneCall} from 'react-icons/fi'
import {BsFillChatLeftDotsFill, BsFillCameraVideoFill} from 'react-icons/bs'

function UserChat() {
    const [chat, setChat] = useState("")
    const [message, setMessage] = useState([])

    useEffect(() => {
        fetchMessage()
    },[])
    const fetchMessage = async () => {
        const response = await fetch(`http://localhost:5000/message`)

        const data = await response.json()
        setMessage(data);
    }
    const sendMsg = async () => {
        const newMessage = {
            text :chat,
            profile: "https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859"
        }
        if(chat.length > 1){
            const response = await fetch('http://localhost:5000/message',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(newMessage)
    
            })
            console.log(chat);
            const data = await response.json()
    
            setMessage([...message,data])
            setChat("")
        }
    }


  return (
    <div className="container text-center">
     <div className="head">
         <div className="chat-icon">
     <BsFillChatLeftDotsFill />
         </div>
     <h4 class="h4">You are chatting with John</h4>
     <p className="date ms-auto mt-2">October 12, 2017</p>
     <FiPhoneCall className="call mx-4 mt-2" />
     <BsFillCameraVideoFill className="call mx-2 mt-2"/>
     </div>
     <div className="row chat-section">
     <div className="col-md-12">
       <div className="">
            <div className="messages ms-auto mt-5 col-md-6">
             <h4>Did you remember me ?</h4>
             <div>
            <img className="mx-4" src="https://1.bp.blogspot.com/-oM8beZNQshY/YRPrThW_cZI/AAAAAAAAF50/4LbxMBgfrXwkE21ZEgpa4DL4UAe_zsl7ACLcBGAsYHQ/s320/74849a273e61d7f0b3ca8c9a22b6c7fc.jpg" alt="" />
             </div>
            </div>
       </div>
       <div className=" col-md-6">
       {message.map((msg) =>(
            <div key={msg.id} className="messages mx-4 mt-5">
            <img className="mx-4" src={msg.profile} alt="" />
             <h4>{msg.text}</h4>
            </div>
        ))}
       </div>
     </div>
          </div>
      <div className="offset-md-2 col-md-8 mt-4">
      <input type="text" className="form-control" value={chat} onChange={(e)=> {setChat(e.target.value)}}/>
      <button className="btn btn-primary btn-lg mt-3" onClick={sendMsg}>Send <FiSend /></button>
      </div>
    </div>
  )
}

export default UserChat
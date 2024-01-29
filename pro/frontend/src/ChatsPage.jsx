import {
    MultiChatSocket,
    useMultiChatLogic,
    MultiChatWindow
  } from 'react-chat-engine-advanced';
const chatsPage = (props) =>{
    const chatProps= useMultiChatLogic(
        '225e35f6-03be-4233-aed3-60d0fe128306        ',
        props.user.username,
        props.user.secret);
    // return <>chats...</>
    return  (
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
    )
}
export default chatsPage


























// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const ChatsPage = (props) => {
//   return (
//     <div style={{ height: "100vh" }}>
//       <PrettyChatWindow
//         projectId="..."
//         username={props.user.username} // adam
//         secret={props.user.secret} // pass1234
//         style={{ height: "100%" }}
//       />
//     </div>
//   );
// };

// export default ChatsPage;
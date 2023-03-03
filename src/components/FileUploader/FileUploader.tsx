import { UploadButton } from './UploadButton';

// let socket;

// type Message = {
//   author: string;
//   message: string;
// };

const FileUploader = () => {
  // const [username, setUsername] = useState('');
  // const [chosenUsername, setChosenUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const [messages, setMessages] = useState<Array<Message>>([]);

  // const getUniqueID = () => {
  //   const s4 = () =>
  //     Math.floor((1 + Math.random()) * 0x10000)
  //       .toString(16)
  //       .substring(1);
  //   return `${s4() + s4()}-${s4()}`;
  // };

  // const socketInitializer = async () => {
  //   // We just call it because we don't need anything else out of it
  //   await fetch('/api/socket');

  //   socket = io();

  //   socket.emit('join', { username: getUniqueID() });

  //   socket.on('new_msg', (data) => {
  //     // eslint-disable-next-line no-alert
  //     alert(data.msg);
  //   });
  // };

  // useEffect(() => {
  //   socketInitializer();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [username]);

  // const sendMessage = async () => {
  //   socket.emit('createdMessage', { author: chosenUsername, message });
  //   setMessages((currentMsg) => [
  //     ...currentMsg,
  //     { author: chosenUsername, message },
  //   ]);
  //   setMessage('');
  // };

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-purple-500 p-4">
      <main className="flex h-full w-full flex-col items-center justify-center gap-4">
        <UploadButton />
      </main>
    </div>
  );
};

export { FileUploader };

// import { useState, useEffect } from 'react';

// import io from 'socket.io-client';

// let socket;

// type Message = {
//   author: string;
//   message: string;
// };

// const FileUploader = () => {
//   const [loading, setLoading] = useState(0);
//   const [donwloadFileName, setFileName] = useState();
//   const [service, setService] = useState(false);
//   const client = new W3CWebSocket(configData.SOCKET_URL);
//   const formData = new FormData();

//   const socketInitializer = async () => {
//     // We just call it because we don't need anything else out of it
//     await fetch('/api/socket');

//     socket = io();

//     socket.on('newIncomingMessage', (msg) => {
//       setMessages((currentMsg) => [
//         ...currentMsg,
//         { author: msg.author, message: msg.message },
//       ]);
//       console.log(messages);
//     });
//   };

//   useEffect(() => {
//     try {
//       socketInitializer();
//     } catch (e) {
//       // eslint-disable-next-line no-console
//       console.log('Configuration Isseus : SOCKET_URL');
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const getUniqueID = () => {
//     const s4 = () =>
//       Math.floor((1 + Math.random()) * 0x10000)
//         .toString(16)
//         .substring(1);
//     return `${s4() + s4()}-${s4()}`;
//   };

//     const sendUserInfo = (filename) => {
//     setLoading(1);
//     const data = {
//       username: getUniqueID(),
//       filename
//     };
//     socket.emit('createdMessage', { author: chosenUsername, message });
//     client.send(JSON.stringify({
//       ...data,
//       type: "userevent"
//     }));
//     client.onmessage = (message) => {
//       const dataFromServer = JSON.parse(message.data);
//       if (dataFromServer.type === 'finishedprocessing') {
//         setLoading(2);
//         console.log("File Ready : ", dataFromServer.filename);
//         setFileName(dataFromServer.filename);
//         client.close();
//       }
//     };
//   };
//   const sendMessage = async () => {
//     socket.emit('createdMessage', { author: chosenUsername, message });
//     setMessages((currentMsg) => [
//       ...currentMsg,
//       { author: chosenUsername, message },
//     ]);
//     setMessage('');
//   };

//   const handleKeypress = (e) => {
//     // it triggers by pressing the enter key
//     if (e.keyCode === 13) {
//       if (message) {
//         sendMessage();
//       }
//     }
//   };

//   return (
//     <div className="mx-auto flex min-h-screen items-center justify-center bg-purple-500 p-4">
//       <main className="flex h-full w-full flex-col items-center justify-center gap-4">
//         {!chosenUsername ? (
//           <>
//             <h3 className="text-xl font-bold text-white">
//               How people should call you?
//             </h3>
//             <input
//               type="text"
//               placeholder="Identity..."
//               value={username}
//               className="rounded-md p-3 outline-none"
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <button
//               onClick={() => {
//                 setChosenUsername(username);
//               }}
//               className="rounded-md bg-white px-4 py-2 text-xl"
//             >
//               Go!
//             </button>
//           </>
//         ) : (
//           <>
//             <p className="text-xl font-bold text-white">
//               Your username: {username}
//             </p>
//             <div className="flex h-[20rem] min-w-[33%] flex-col justify-end rounded-md bg-white shadow-md ">
//               <div className="h-full overflow-y-scroll last:border-b-0">
//                 {messages.map((msg, i) => {
//                   return (
//                     <div
//                       className="w-full border-b border-gray-200 py-1 px-2"
//                       key={i}
//                     >
//                       {msg.author} : {msg.message}
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="flex w-full rounded-bl-md border-t border-gray-300">
//                 <input
//                   type="text"
//                   placeholder="New message..."
//                   value={message}
//                   className="flex-1 rounded-bl-md p-2 outline-none"
//                   onChange={(e) => setMessage(e.target.value)}
//                   onKeyUp={handleKeypress}
//                 />
//                 <div className="group flex items-center justify-center rounded-br-md  border-l border-gray-300 transition-all hover:bg-purple-500">
//                   <button
//                     className="h-full px-3 group-hover:text-white"
//                     onClick={() => {
//                       sendMessage();
//                     }}
//                   >
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// export { FileUploader };

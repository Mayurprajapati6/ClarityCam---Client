import SocketIoClient from "socket.io-client";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WS_Server = "http://localhost:5500"; // backend server

export const SocketContext = createContext<any | null>(null);

const socket = SocketIoClient(WS_Server,{
    withCredentials: false,
    transports: ["polling","websocket"]
}); // By this we are making connection between our react server to our backend server

interface Props{
    children: React.ReactNode
}

export const SocketProvider: React.FC<Props> = ({ children }) => {

    const navigate = useNavigate(); // will help to programatically handle navigation
    useEffect(() => {
        const enterRoom = ({ roomId } : { roomId: string}) => {
            navigate(`/room/${roomId}`);
        }

        socket.on("room-create", enterRoom);

        
    }, []);
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
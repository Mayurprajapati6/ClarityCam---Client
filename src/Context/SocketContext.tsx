import SocketIoClient from "socket.io-client";
import { createContext } from "react";

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
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
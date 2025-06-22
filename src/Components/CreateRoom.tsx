import { useContext } from "react";
import { SocketContext } from "../Context/SocketContext";

const CreateRoom: React.FC = () => {

    const socket = useContext(SocketContext); // <-- just use socket directly

    const initRoom = () => {
        if (socket && socket.connected) {
            socket.emit("create-room");
        } else {
            console.error("Socket is not connected.");
        }
    }

    return (
        <div className="h-[100vh] flex items-center justify-center">
            <button
                onClick={initRoom}
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center"
            >
                Start a new meeting in a new room
            </button>
        </div>
    );
}

export default CreateRoom;

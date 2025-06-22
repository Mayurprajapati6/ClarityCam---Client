import { useEffect, useRef } from "react";

const UserFeedPlayer : React.FC<{stream?: MediaStream}> = ({stream}) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
        
    },[stream]);

    return (
        <video 
            ref={videoRef}
            muted={true}
            autoPlay
            style={{
                width: '220px',
                height: '160px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                border: '1.5px solid #e0e0e0',
                background: '#000',
                objectFit: 'cover',
                maxWidth: '100%',
                maxHeight: '30vw',
            }}
        />
    )
}

export default UserFeedPlayer;
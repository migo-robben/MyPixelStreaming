import React from "react";

// libs
import PixelStreaming, { usePS } from 'pixel-streaming'


function Container() {
    const PS = usePS()
    return (
        <div>
            <button onClick={() => {

                PS.cls.initConnection({
                    host: 'http://127.0.0.1',
                    port: 80,
                })

            }}>Connect</button>
        </div>
    )
}
export default function Player(props) {
    const refPixelStreaming = React.useRef(null);

    return (
        <div>
            <PixelStreaming
                ref={refPixelStreaming}
                onReady={(payload) => {
                    // console.warn('ready', payload);
                }}
                onLoad={(payload) => {
                    // console.warn('loaded', payload);
                }}
                onConnect={() => {
                    // console.warn('connected');
                }}
                onRestart={() => {
                    // console.warn('onRestart');
                }}
                onError={(payload) => {
                    // console.error('error', payload);
                }}
                onClose={(payload) => {
                    // console.error('closed', payload);
                }}
                onProgress={(payload) => {
                    // console.warn('progress', payload);
                }}
                settings={{
                    volume: 1,
                    quality: 1,
                    pixelStreaming: {
                        warnTimeout: 120,
                        closeTimeout: 10,
                        lockMouse: false,
                        fakeMouseWithTouches: false,
                    }
                }}
            >
                {() => (
                    <Container />
                )}
            </PixelStreaming>
        </div>
    );
}
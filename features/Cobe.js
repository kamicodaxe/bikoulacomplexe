// import createGlobe from "cobe";
// import { useEffect, useRef } from "react";
// import { useSpring } from 'react-spring';

// export default function Cobe() {
//     const canvasRef = useRef();
//     const pointerInteracting = useRef(null);
//     const pointerInteractionMovement = useRef(0);
//     const [{ r }, api] = useSpring(() => ({
//         r: 0,
//         config: {
//             mass: 10,
//             tension: 240,
//             friction: 10,
//             precision: 0.01,
//         },
//     }));
//     useEffect(() => {
//         let width = 0;
//         const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
//         window.addEventListener('resize', onResize)
//         onResize()
//         const globe = createGlobe(canvasRef.current, {
//             devicePixelRatio: 2,
//             width: width * 2,
//             height: width * 2,
//             phi: 0,
//             theta: 0.3,
//             dark: 1,
//             diffuse: 3,
//             mapSamples: 16000,
//             mapBrightness: 1.2,
//             baseColor: [1, 1, 1],
//             markerColor: [251 / 255, 100 / 255, 21 / 255],
//             glowColor: [1.2, 1.2, 1.2],
//             markers: [

//             ],
//             onRender: (state) => {
//                 state.phi = r.get()
//                 state.width = width * 2
//                 state.height = width * 2
//             }
//         })
//         setTimeout(() => canvasRef.current.style.opacity = '1')
//         return () => globe.destroy()
//     }, [])
//     return <div style={{
//         width: '100%',
//         maxWidth: 600,
//         aspectRatio: 1,
//         margin: 'auto',
//         position: 'relative',
//     }}>
//         <canvas
//             ref={canvasRef}
//             onPointerDown={(e) => {
//                 pointerInteracting.current =
//                     e.clientX - pointerInteractionMovement.current;
//                 canvasRef.current.style.cursor = 'grabbing';
//             }}
//             onPointerUp={() => {
//                 pointerInteracting.current = null;
//                 canvasRef.current.style.cursor = 'grab';
//             }}
//             onPointerOut={() => {
//                 pointerInteracting.current = null;
//                 canvasRef.current.style.cursor = 'grab';
//             }}
//             onMouseMove={(e) => {
//                 if (pointerInteracting.current !== null) {
//                     const delta = e.clientX - pointerInteracting.current;
//                     pointerInteractionMovement.current = delta;
//                     api.start({
//                         r: delta / 200,
//                     });
//                 }
//             }}
//             onTouchMove={(e) => {
//                 if (pointerInteracting.current !== null && e.touches[0]) {
//                     const delta = e.touches[0].clientX - pointerInteracting.current;
//                     pointerInteractionMovement.current = delta;
//                     api.start({
//                         r: delta / 100,
//                     });
//                 }
//             }}
//             style={{
//                 width: '100%',
//                 height: '100%',
//                 cursor: 'grab',
//                 contain: 'layout paint size',
//                 opacity: 0,
//                 transition: 'opacity 1s ease',
//             }}
//         />
//     </div>
// }


// # Auto Rotate

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Cobe({ isVisible }) {
    const canvasRef = useRef();
    const phi = useRef(0);

    useEffect(() => {
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
        const globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: width * 2,
          height: width * 2,
          phi: 0,
          theta: 0.3,
          dark: 0.8,
          diffuse: 1,
          mapSamples: 16000,
          mapBrightness: 1,
          baseColor: [96 / 255, 139 / 255, 132 / 255],
          markerColor: [251 / 255, 100 / 255, 21 / 255],
          glowColor: [99 / 255, 99 / 255, 99 / 255],
          markers: [
            { location: [37.7595, -122.4367], size: 0.03 },
            { location: [40.7128, -74.006], size: 0.1 },
            { location: [3.86667, 11.51667], size: 0.05 },
            { location: [48.856614, 2.3522219], size: 0.05 },
            { location: [3.86667, 11.51667], size: 0.05 },
            { location: [14.497401, -14.452362], size: 0.05 },
            { location: [14.497401, -14.452362], size: 0.05 },
          ],
          onRender: (state) => {
            // Called on every animation frame.
            // `state` will be an empty object, return updated params.
            state.phi = phi.current;
            if (isVisible) phi.current += 0.0095;
            if (state.width != width * 2) state.width = width * 2;
            if (state.height != width * 2) state.height = width * 2;
          },
        });
        setTimeout(() => {
            if (canvasRef.current?.style?.opacity) canvasRef.current.style.opacity = '1'
        })
        return () => globe.destroy()
    }, [isVisible])

    return <div style={{
        width: '100%',
        maxWidth: 600,
        aspectRatio: 1,
        margin: 'auto',
        position: 'relative',
    }}>
        <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                contain: 'layout paint size',
                opacity: 0,
                transition: 'opacity 1s ease',
            }}
        />
    </div>
}

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
// const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });
const Globe = dynamic(import('react-globe.gl'), { ssr: false });
// let Globe = () => null
// if (typeof window !== 'undefined') Globe = require('react-globe.gl').default

const MapView = () => {
    const [places, setPlaces] = useState<{
        properties: {
            name: string
            latitude: number
            longitude: number
            pop_max: number
        }
    }[]>([]);

    const globeEl = useRef();

    useEffect(() => {
        console.log(globeEl.current);
        // @ts-ignore
        if (globeEl.current && globeEl.current?.retry) {
            // @ts-ignore
            globeEl.current.retry()
        }
    }, [places]);

    useEffect(() => {
        console.log(globeEl.current);
    }, []);

    return (
        <div className='min-h-[320px] min-w-[320px]'>
            <Globe
                ref={globeEl}
                // @ts-ignore
                globeImageUrl="/datasets/earth-night.jpg"
                // globeImageUrl="/datasets/earth-day.jpg"
                // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                backgroundColor="rgba(0,0,0,0)"
                labelsData={places}
                // @ts-ignore
                labelLat={d => d.properties.latitude}
                // @ts-ignore
                labelLng={d => d.properties.longitude}
                // @ts-ignore
                labelText={d => d.properties.name}
                // @ts-ignore
                labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
                // @ts-ignore
                labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
                labelColor={() => '#a4663d'}
                labelResolution={2}
            />
        </div>
    )
};

export default MapView
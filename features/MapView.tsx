
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const Globe = dynamic(() => import('react-globe.gl').then(pkg => pkg.default), { ssr: false });
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

    useEffect(() => {
        fetch('/datasets/places.json').then(res => res.json())
            .then(({ features }) => {
                setPlaces(features)
                // console.log(features)
            });

    }, []);

    return <Globe
        // @ts-ignore
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
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
    />;
};

export default MapView
"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend, ThreeElements } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

type Object3DNode<T, U> = {
    [P in keyof T]?: T[P] extends (...args: any) => any
    ? T[P]
    : T[P] extends object
    ? Object3DNode<T[P], U>
    : T[P];
} & {
    [key: string]: any;
};

declare module "@react-three/fiber" {
    interface ThreeElements {
        threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
    }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
};

export type GlobeConfig = {
    pointSize?: number;
    globeColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcTime?: number;
    arcLength?: number;
    rings?: number;
    maxRings?: number;
    initialPosition?: {
        lat: number;
        lng: number;
    };
    autoRotate?: boolean;
    autoRotateSpeed?: number;
};

interface WorldProps {
    globeConfig: GlobeConfig;
    data: Position[];
}

let numbersOfRings: number[] = [0];

// Helper function to check if position values are valid
const isValidPosition = (pos: Position): boolean => {
    return (
        typeof pos.startLat === 'number' && !isNaN(pos.startLat) &&
        typeof pos.startLng === 'number' && !isNaN(pos.startLng) &&
        typeof pos.endLat === 'number' && !isNaN(pos.endLat) &&
        typeof pos.endLng === 'number' && !isNaN(pos.endLng) &&
        typeof pos.arcAlt === 'number' && !isNaN(pos.arcAlt)
    );
};

export function Globe({ globeConfig, data }: WorldProps) {
    // Filter out invalid positions with safety check
    const validData = Array.isArray(data) ? data.filter(isValidPosition) : [];

    const [globeData, setGlobeData] = useState<
        | {
            size: number;
            order: number;
            color: (t: number) => string;
            lat: number;
            lng: number;
        }[]
        | null
    >(null);

    const globeRef = useRef<ThreeGlobe | null>(null);

    const defaultProps = {
        pointSize: 1,
        atmosphereColor: "#ffffff",
        showAtmosphere: true,
        atmosphereAltitude: 0.1,
        polygonColor: "rgba(255,255,255,0.7)",
        globeColor: "#1d072e",
        emissive: "#000000",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        arcTime: 2000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        ...globeConfig,
    };

    useEffect(() => {
        if (globeRef.current) {
            _buildData();
            _buildMaterial();
        }
    }, [globeRef.current]);

    const _buildMaterial = () => {
        if (!globeRef.current) return;

        try {
            const globeMaterial = globeRef.current.globeMaterial() as unknown as {
                color: Color;
                emissive: Color;
                emissiveIntensity: number;
                shininess: number;
            };
            globeMaterial.color = new Color(globeConfig.globeColor || defaultProps.globeColor);
            globeMaterial.emissive = new Color(globeConfig.emissive || defaultProps.emissive);
            globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || defaultProps.emissiveIntensity;
            globeMaterial.shininess = globeConfig.shininess || defaultProps.shininess;
        } catch (error) {
            console.error("Error building material:", error);
        }
    };

    const _buildData = () => {
        if (!validData.length) {
            setGlobeData([]);
            return;
        }

        try {
            let points: {
                size: number;
                order: number;
                color: (t: number) => string;
                lat: number;
                lng: number;
            }[] = [];

            for (let i = 0; i < validData.length; i++) {
                const arc = validData[i];
                const rgb = hexToRgb(arc.color);

                if (!rgb) continue;

                if (
                    isFinite(arc.startLat) &&
                    isFinite(arc.startLng) &&
                    Math.abs(arc.startLat) <= 90 &&
                    Math.abs(arc.startLng) <= 180
                ) {
                    points.push({
                        size: defaultProps.pointSize,
                        order: arc.order,
                        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                        lat: arc.startLat,
                        lng: arc.startLng,
                    });
                }

                if (
                    isFinite(arc.endLat) &&
                    isFinite(arc.endLng) &&
                    Math.abs(arc.endLat) <= 90 &&
                    Math.abs(arc.endLng) <= 180
                ) {
                    points.push({
                        size: defaultProps.pointSize,
                        order: arc.order,
                        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                        lat: arc.endLat,
                        lng: arc.endLng,
                    });
                }
            }

            // remove duplicates for same lat and lng with additional validation
            const filteredPoints = points.filter(
                (v, i, a) =>
                    v.lat !== undefined &&
                    v.lng !== undefined &&
                    !isNaN(v.lat) &&
                    !isNaN(v.lng) &&
                    a.findIndex((v2) =>
                        ["lat", "lng"].every(
                            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
                        )
                    ) === i
            );

            setGlobeData(filteredPoints);
        } catch (error) {
            console.error("Error building data:", error);
            setGlobeData([]);
        }
    };

    useEffect(() => {
        if (!globeRef.current || !globeData) return;

        try {
            globeRef.current
                .hexPolygonsData(countries.features || [])
                .hexPolygonResolution(3)
                .hexPolygonMargin(0.7)
                .showAtmosphere(defaultProps.showAtmosphere)
                .atmosphereColor(defaultProps.atmosphereColor)
                .atmosphereAltitude(defaultProps.atmosphereAltitude)
                .hexPolygonColor((_: any) => defaultProps.polygonColor);

            if (globeData.length > 0) {
                startAnimation();
            }
        } catch (error) {
            console.error("Error in globe setup:", error);
        }
    }, [globeData]);

    const startAnimation = () => {
        if (!globeRef.current || !globeData || !validData.length) return;

        try {
            // Set arcs data
            globeRef.current
                .arcsData(validData)
                .arcStartLat((d) => {
                    const val = (d as Position).startLat;
                    return isFinite(val) ? val : 0;
                })
                .arcStartLng((d) => {
                    const val = (d as Position).startLng;
                    return isFinite(val) ? val : 0;
                })
                .arcEndLat((d) => {
                    const val = (d as Position).endLat;
                    return isFinite(val) ? val : 0;
                })
                .arcEndLng((d) => {
                    const val = (d as Position).endLng;
                    return isFinite(val) ? val : 0;
                })
                .arcColor((e: any) => (e as Position).color)
                .arcAltitude((e) => {
                    const val = (e as Position).arcAlt;
                    return isFinite(val) ? val : 0.1;
                })
                .arcStroke(() => [0.32, 0.28, 0.3][Math.min(Math.round(Math.random() * 2), 2)])
                .arcDashLength(defaultProps.arcLength)
                .arcDashInitialGap((e) => (e as Position).order)
                .arcDashGap(15)
                .arcDashAnimateTime(() => defaultProps.arcTime);

            // Set points data
            globeRef.current
                .pointsData(globeData)
                .pointColor((e) => {
                    if (typeof e === 'object' && e && 'color' in e && typeof e.color === 'function') {
                        return e.color(0);
                    }
                    return '#ffffff';
                })
                .pointsMerge(true)
                .pointAltitude(0.0)
                .pointRadius(2);

            // Set rings data (initially empty)
            globeRef.current
                .ringsData([])
                .ringColor((e: any) => (t: any) => {
                    if (e && typeof e.color === 'function') {
                        return e.color(t);
                    }
                    return 'rgba(255,255,255,0.5)';
                })
                .ringMaxRadius(defaultProps.maxRings)
                .ringPropagationSpeed(RING_PROPAGATION_SPEED)
                .ringRepeatPeriod(
                    (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
                );
        } catch (error) {
            console.error("Globe animation error:", error);
        }
    };

    useEffect(() => {
        if (!globeRef.current || !globeData || !globeData.length) return;

        let intervalId: NodeJS.Timeout | undefined;

        try {
            intervalId = setInterval(() => {
                if (!globeRef.current || !globeData || !globeData.length) return;

                try {
                    const dataLength = globeData.length;
                    const ringsCount = Math.min(Math.floor((dataLength * 4) / 5), dataLength);

                    if (ringsCount <= 0) {
                        globeRef.current.ringsData([]);
                        return;
                    }

                    numbersOfRings = genRandomNumbers(0, dataLength - 1, ringsCount);

                    const safeRingsData = globeData.filter((d, i) =>
                        numbersOfRings.includes(i) &&
                        d && typeof d === 'object' &&
                        'lat' in d && 'lng' in d &&
                        typeof d.lat === 'number' &&
                        typeof d.lng === 'number' &&
                        isFinite(d.lat) &&
                        isFinite(d.lng) &&
                        Math.abs(d.lat) <= 90 &&
                        Math.abs(d.lng) <= 180
                    );

                    globeRef.current.ringsData(safeRingsData);
                } catch (error) {
                    console.error("Error in ring animation:", error);
                    if (globeRef.current) {
                        globeRef.current.ringsData([]);
                    }
                }
            }, 2000);
        } catch (error) {
            console.error("Error setting up interval:", error);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [globeRef.current, globeData]);

    return (
        <>
            <threeGlobe ref={globeRef} />
        </>
    );
}

export function WebGLRendererConfig() {
    const { gl, size } = useThree();

    useEffect(() => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(size.width, size.height);
        gl.setClearColor(0x000000, 0);
    }, []);

    return null;
}

export function World(props: WorldProps) {
    try {
        const { globeConfig } = props;
        const scene = new Scene();
        scene.fog = new Fog(0xffffff, 400, 2000);

        return (
            <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
                <WebGLRendererConfig />
                <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
                <directionalLight
                    color={globeConfig.directionalLeftLight}
                    position={new Vector3(-400, 100, 400)}
                />
                <directionalLight
                    color={globeConfig.directionalTopLight}
                    position={new Vector3(-200, 500, 200)}
                />
                <pointLight
                    color={globeConfig.pointLight}
                    position={new Vector3(-200, 500, 200)}
                    intensity={0.8}
                />
                <Globe {...props} />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minDistance={cameraZ}
                    maxDistance={cameraZ}
                    autoRotateSpeed={1}
                    autoRotate={true}
                    minPolarAngle={Math.PI / 3.5}
                    maxPolarAngle={Math.PI - Math.PI / 3}
                />
            </Canvas>
        );
    } catch (error) {
        console.error("Error rendering globe:", error);
        return null;
    }
}

export function hexToRgb(hex: string) {
    try {
        if (!hex || typeof hex !== 'string') return null;

        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16),
            }
            : null;
    } catch (error) {
        console.error("Error in hexToRgb:", error);
        return null;
    }
}

export function genRandomNumbers(min: number, max: number, count: number) {
    try {
        if (!isFinite(min) || !isFinite(max) || !isFinite(count) || count <= 0) {
            return [0];
        }

        min = Math.max(0, Math.floor(min));
        max = Math.max(min, Math.floor(max));
        count = Math.min(max - min + 1, Math.floor(count));

        const arr: number[] = [];
        while (arr.length < count) {
            const r = Math.floor(Math.random() * (max - min + 1)) + min;
            if (arr.indexOf(r) === -1) arr.push(r);
        }

        return arr.length ? arr : [0];
    } catch (error) {
        console.error("Error in genRandomNumbers:", error);
        return [0];
    }
}
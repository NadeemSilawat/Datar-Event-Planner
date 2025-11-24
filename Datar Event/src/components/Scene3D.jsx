import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingRings = () => {
    const ringRef = useRef();
    const ring2Ref = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (ringRef.current) {
            ringRef.current.rotation.x = time * 0.2;
            ringRef.current.rotation.y = time * 0.3;
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.x = time * -0.15;
            ring2Ref.current.rotation.z = time * 0.25;
        }
    });

    return (
        <group>
            {/* Main Ring */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh ref={ringRef} position={[0, 0, 0]}>
                    <torusGeometry args={[2.5, 0.15, 16, 100]} />
                    <meshStandardMaterial
                        color="#D4AF37"
                        metalness={0.9}
                        roughness={0.1}
                        emissive="#D4AF37"
                        emissiveIntensity={0.3}
                    />
                </mesh>
            </Float>

            {/* Second Ring */}
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
                <mesh ref={ring2Ref} position={[1, -0.5, -1]}>
                    <torusGeometry args={[1.8, 0.12, 16, 100]} />
                    <meshStandardMaterial
                        color="#F4D03F"
                        metalness={0.8}
                        roughness={0.2}
                        emissive="#F4D03F"
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </Float>

            {/* Ambient Spheres */}
            {[...Array(5)].map((_, i) => (
                <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.2}>
                    <Sphere
                        args={[0.1, 32, 32]}
                        position={[
                            Math.sin(i * 1.5) * 3,
                            Math.cos(i * 2) * 2,
                            Math.sin(i * 0.8) * -2
                        ]}
                    >
                        <MeshDistortMaterial
                            color="#D4AF37"
                            speed={2}
                            distort={0.3}
                            radius={1}
                            metalness={0.9}
                            roughness={0.1}
                        />
                    </Sphere>
                </Float>
            ))}

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#F4D03F" />
            <spotLight
                position={[0, 10, 0]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
            />
        </group>
    );
};

export const ParticleField = () => {
    const particlesRef = useRef();
    const particleCount = 1000;

    const particles = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        particles[i] = (Math.random() - 0.5) * 20;
    }

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (particlesRef.current) {
            particlesRef.current.rotation.y = time * 0.05;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#D4AF37"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

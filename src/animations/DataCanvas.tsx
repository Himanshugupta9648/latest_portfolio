import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Individual node in the data cloud
const Node = ({ position, size, color }: { position: [number, number, number]; size: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      // Add subtle movement
      ref.current.position.y += Math.sin(clock.getElapsedTime() * 0.5 + position[0]) * 0.01;
      ref.current.position.x += Math.cos(clock.getElapsedTime() * 0.5 + position[1]) * 0.01;
    }
  });

  return (
    <Sphere ref={ref} args={[size, 8, 8]} position={position}>
      <meshStandardMaterial 
        color={color} 
        roughness={0.4}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
};

// Connection line between nodes
const Line = ({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Line>(null);
  
  useEffect(() => {
    if (ref.current) {
      const points = [];
      points.push(new THREE.Vector3(...start));
      points.push(new THREE.Vector3(...end));
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      ref.current.geometry = geometry;
    }
  }, [start, end]);

  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </line>
  );
};

// Data cloud component
const DataCloud = () => {
  const { scene } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const nodesCount = 60;
  const nodes: { position: [number, number, number]; size: number; color: string }[] = [];
  const connections: { start: [number, number, number]; end: [number, number, number]; color: string }[] = [];
  
  // Generate random nodes
  for (let i = 0; i < nodesCount; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;
    
    const size = Math.random() * 0.2 + 0.05;
    
    // Generate different colors for nodes
    let color;
    const colorRandom = Math.random();
    if (colorRandom < 0.33) {
      color = "#4f46e5"; // Primary (purple)
    } else if (colorRandom < 0.66) {
      color = "#0ea5e9"; // Secondary (blue)
    } else {
      color = "#14b8a6"; // Tertiary (teal)
    }
    
    nodes.push({ position: [x, y, z], size, color });
  }
  
  // Generate connections between some nodes
  for (let i = 0; i < nodesCount / 2; i++) {
    const startIndex = Math.floor(Math.random() * nodesCount);
    let endIndex = Math.floor(Math.random() * nodesCount);
    
    // Ensure we don't connect a node to itself
    while (endIndex === startIndex) {
      endIndex = Math.floor(Math.random() * nodesCount);
    }
    
    connections.push({
      start: nodes[startIndex].position,
      end: nodes[endIndex].position,
      color: Math.random() > 0.5 ? "#4f46e5" : "#0ea5e9",
    });
  }
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  // Set the scene background
  useEffect(() => {
    scene.background = new THREE.Color("#050816");
    
    return () => {
      scene.background = new THREE.Color("#000000");
    };
  }, [scene]);
  
  return (
    <group ref={groupRef}>
      {/* Render nodes */}
      {nodes.map((node, i) => (
        <Node key={`node-${i}`} position={node.position} size={node.size} color={node.color} />
      ))}
      
      {/* Render connections */}
      {connections.map((connection, i) => (
        <Line key={`line-${i}`} start={connection.start} end={connection.end} color={connection.color} />
      ))}
    </group>
  );
};

// Main canvas component
export const DataCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <DataCloud />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};
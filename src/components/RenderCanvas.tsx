import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Text } from "../Models/Text";

export const RenderCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 0.75] }}>
      <ambientLight intensity={1} />
      <pointLight position={[0.2, 0.25, 0.4]} />
      <Float>
        <Text position={[-0.2, -0.35, -0]} />
      </Float>
    </Canvas>
  );
};

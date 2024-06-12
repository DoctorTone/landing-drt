import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Text } from "../Models/Text";
import { Loading } from "./Loading";
import { MeshReflectorMaterial } from "@react-three/drei";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const RenderCanvas = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 0.75] }}>
        <Suspense fallback={<Loading />}>
          <ambientLight intensity={1} />
          <pointLight position={[0.2, 0.25, 0.4]} />
          <mesh position={[0, -0.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={512}
              mixBlur={1}
              mixStrength={20}
              depthScale={1}
              minDepthThreshold={0.85}
              color="#252525"
              metalness={0.8}
              roughness={0.5}
              mirror={0}
            />
          </mesh>
          <Float>
            <Text position={[-0.06, -0.35, -0]} />
          </Float>
        </Suspense>
      </Canvas>
      <Box component="div" id="title" className="panel">
        <Typography variant="h3" align="center">
          Unleash the power of 3D.
        </Typography>
        <Typography align="center" sx={{ color: "darkgrey" }}>
          More engaging interaction, enhanced user experiences and increased
          sales for your website.
        </Typography>
      </Box>
    </>
  );
};

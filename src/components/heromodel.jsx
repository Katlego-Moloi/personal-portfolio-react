import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const ThreeScene = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);
  const controlsRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // DEBUG: Log container dimensions
    console.log("=== THREE.JS DEBUG ===");
    console.log("Container dimensions:", {
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
      offsetWidth: containerRef.current.offsetWidth,
      offsetHeight: containerRef.current.offsetHeight,
    });
    console.log(
      "Container computed style:",
      window.getComputedStyle(containerRef.current)
    );
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup - adjusted for better view
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const loader = new GLTFLoader();
    loader.load(
      "models/commodore_pet_gltf/scene.gltf",
      //"models/old_computer_gltf/scene.gltf",

      (gltf) => {
        const model = gltf.scene;
        model.position.set(-4, -3, 0);
        model.scale.set(1.5, 1.5, 1.5);
        scene.add(model);
        modelRef.current = model;
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.error("Model failed to load:", error);
      }
    );

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x7c3aed, 2);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf472b6, 1.5);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    // Add OrbitControls for mouse interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.enablePan = true;
    controls.enableZoom = true;
    controlsRef.current = controls;
    controls.target.set(0, 0, 0);
    controls.update();

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005;
      }

      if (controlsRef.current) controlsRef.current.update();

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Dispose model geometries, materials and textures safely
      const model = modelRef.current;
      if (model) {
        model.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();

            if (child.material) {
              const disposeMaterial = (mat) => {
                if (!mat) return;
                if (mat.map) mat.map.dispose();
                if (mat.lightMap)
                  mat.lightMap.dispose && mat.lightMap.dispose();
                if (mat.bumpMap) mat.bumpMap.dispose && mat.bumpMap.dispose();
                if (mat.normalMap)
                  mat.normalMap.dispose && mat.normalMap.dispose();
                if (mat.specularMap)
                  mat.specularMap.dispose && mat.specularMap.dispose();
                if (mat.envMap) mat.envMap.dispose && mat.envMap.dispose();
                mat.dispose();
              };

              if (Array.isArray(child.material)) {
                child.material.forEach(disposeMaterial);
              } else {
                disposeMaterial(child.material);
              }
            }
          }
        });

        // Remove from scene
        scene.remove(model);
      }

      // Dispose controls
      if (controlsRef.current) {
        try {
          controlsRef.current.dispose();
        } catch (e) {}
        controlsRef.current = null;
      }

      // Remove renderer DOM element and dispose renderer
      if (rendererRef.current) {
        try {
          const dom = rendererRef.current.domElement;
          if (
            dom &&
            containerRef.current &&
            containerRef.current.contains(dom)
          ) {
            containerRef.current.removeChild(dom);
          }
        } catch (e) {
          // ignore
        }
        rendererRef.current.dispose();
      }

      // Clear refs
      modelRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      sceneRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "500px",
        display: "flex",
        position: "relative",
      }}
    />
  );
};

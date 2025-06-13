import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const groupRef = useRef<THREE.Group>();
  const frameRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Renderer configuration
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);

    // Create group for all objects
    const group = new THREE.Group();
    groupRef.current = group;
    scene.add(group);

    // Create main geometric shape - dodecahedron for more interesting geometry
    const mainGeometry = new THREE.DodecahedronGeometry(1.2, 0);
    const mainMaterial = new THREE.MeshPhysicalMaterial({
      color: theme === 'dark' ? 0x4F46E5 : 0x3B82F6,
      metalness: 0.7,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.1,
      thickness: 0.5,
      envMapIntensity: 1.5,
    });
    const mainMesh = new THREE.Mesh(mainGeometry, mainMaterial);
    mainMesh.castShadow = true;
    mainMesh.receiveShadow = true;
    group.add(mainMesh);

    // Create orbiting smaller objects
    const orbitGeometry = new THREE.OctahedronGeometry(0.3, 0);
    const orbitMaterials = [
      new THREE.MeshPhysicalMaterial({
        color: 0x8B5CF6,
        metalness: 0.8,
        roughness: 0.1,
        emissive: 0x8B5CF6,
        emissiveIntensity: 0.1,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x06B6D4,
        metalness: 0.8,
        roughness: 0.1,
        emissive: 0x06B6D4,
        emissiveIntensity: 0.1,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x10B981,
        metalness: 0.8,
        roughness: 0.1,
        emissive: 0x10B981,
        emissiveIntensity: 0.1,
      }),
    ];

    const orbitMeshes: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const orbitMesh = new THREE.Mesh(orbitGeometry, orbitMaterials[i]);
      orbitMesh.castShadow = true;
      orbitMesh.receiveShadow = true;
      orbitMeshes.push(orbitMesh);
      group.add(orbitMesh);
    }

    // Create wireframe overlay
    const wireframeGeometry = new THREE.DodecahedronGeometry(1.25, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: theme === 'dark' ? 0x8B5CF6 : 0x6366F1,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    group.add(wireframeMesh);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    // Add point lights for more dynamic lighting
    const pointLight1 = new THREE.PointLight(0x3B82F6, 0.8, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8B5CF6, 0.6, 20);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Position camera
    camera.position.set(0, 0, 6);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      if (group) {
        // Smooth rotation based on mouse
        group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
        group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
        
        // Add continuous slow rotation
        group.rotation.y += 0.005;
        
        // Floating animation
        group.position.y = Math.sin(time * 0.5) * 0.2;
        
        // Animate orbiting objects
        orbitMeshes.forEach((mesh, index) => {
          const angle = time + (index * Math.PI * 2) / 3;
          const radius = 2.5;
          mesh.position.x = Math.cos(angle) * radius;
          mesh.position.z = Math.sin(angle) * radius;
          mesh.position.y = Math.sin(time * 2 + index) * 0.5;
          mesh.rotation.x += 0.02;
          mesh.rotation.y += 0.03;
        });
        
        // Animate wireframe
        wireframeMesh.rotation.x = time * 0.2;
        wireframeMesh.rotation.y = time * 0.3;
        
        // Animate point lights
        pointLight1.position.x = Math.cos(time) * 8;
        pointLight1.position.z = Math.sin(time) * 8;
        pointLight2.position.x = Math.cos(time + Math.PI) * 6;
        pointLight2.position.z = Math.sin(time + Math.PI) * 6;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Enhanced mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRotationX = mouseY * 0.3;
      targetRotationY = mouseX * 0.3;
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
      mainGeometry.dispose();
      orbitGeometry.dispose();
      wireframeGeometry.dispose();
      mainMaterial.dispose();
      orbitMaterials.forEach(material => material.dispose());
      wireframeMaterial.dispose();
    };
  }, []);

  // Update materials and lighting based on theme
  useEffect(() => {
    if (sceneRef.current && groupRef.current) {
      const mainMesh = groupRef.current.children.find(child => 
        child instanceof THREE.Mesh && child.geometry instanceof THREE.DodecahedronGeometry
      ) as THREE.Mesh;
      
      const wireframeMesh = groupRef.current.children.find(child => 
        child instanceof THREE.Mesh && (child.material as THREE.Material).wireframe
      ) as THREE.Mesh;

      if (mainMesh && mainMesh.material instanceof THREE.MeshPhysicalMaterial) {
        mainMesh.material.color.setHex(theme === 'dark' ? 0x4F46E5 : 0x3B82F6);
        mainMesh.material.emissive.setHex(theme === 'dark' ? 0x1E1B4B : 0x1E3A8A);
        mainMesh.material.emissiveIntensity = theme === 'dark' ? 0.1 : 0.05;
      }

      if (wireframeMesh && wireframeMesh.material instanceof THREE.MeshBasicMaterial) {
        wireframeMesh.material.color.setHex(theme === 'dark' ? 0x8B5CF6 : 0x6366F1);
        wireframeMesh.material.opacity = theme === 'dark' ? 0.4 : 0.3;
      }

      // Update ambient light intensity based on theme
      const ambientLight = sceneRef.current.children.find(child => 
        child instanceof THREE.AmbientLight
      ) as THREE.AmbientLight;
      
      if (ambientLight) {
        ambientLight.intensity = theme === 'dark' ? 0.3 : 0.4;
      }
    }
  }, [theme]);

  return (
    <div 
      ref={mountRef} 
      className={`flex items-center justify-center ${className}`}
      style={{ width: '400px', height: '400px' }}
    />
  );
};

export default ThreeScene;
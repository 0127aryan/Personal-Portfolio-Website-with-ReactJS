import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

function SocialMediaContainer() {
  const [socialMediaLinks, setSocialMediaLinks] = useState([
    { icon: 'facebook', link: 'https://www.facebook.com/yourfacebookhandle' },
    { icon: 'twitter', link: 'https://www.twitter.com/yourtwitterhandle' },
    { icon: 'instagram', link: 'https://www.instagram.com/yourinstagramhandle' },
  ]);

  useEffect(() => {
    const container = document.getElementById('social-media-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: container,
      antialias: true,
    });

    const socialMediaMeshes = socialMediaLinks.map((link, index) => {
      const iconGeometry = new THREE.CircleGeometry(0.5, 32);
      const iconMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
      iconMesh.position.y = index * 2;
      iconMesh.scale.set(0.5, 0.5, 0.5);

      return iconMesh;
    });

    scene.add(...socialMediaMeshes);

    function animate() {
      requestAnimationFrame(animate);
      socialMediaMeshes.forEach((mesh, index) => {
        mesh.rotation.y += 0.01;
        mesh.position.x = Math.sin(index * 0.1) * 0.5;
      });
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div id="social-media-container" style={{ position: 'fixed', bottom: 20, right: 20, width: 50, height: 150 }}>
      {socialMediaLinks.map((link, index) => (
        <a key={index} href={link.link} target="_blank">
          <i className={`fab fa-${link.icon}`} />
        </a>
      ))}
    </div>
  );
}

export default SocialMediaContainer;
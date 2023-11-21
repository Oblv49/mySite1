document.addEventListener('DOMContentLoaded', function () {
    // Converti il colore esadecimale in RGB
    var coloreHex = 0x3d007a;
    var coloreRGB = new THREE.Color(coloreHex);

    // Inizializza la scena Three.js
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Inizializza il renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    var canvasContainer = document.getElementById('canvas-container');
    canvasContainer.appendChild(renderer.domElement);

    // Aggiungi una luce ambientale
    var ambientLight = new THREE.AmbientLight(0x0000FF); // Colore della luce ambientale
    scene.add(ambientLight);

    // Aggiungi una luce direzionale
    var spotLight = new THREE.SpotLight(coloreRGB, 1, 50, Math.PI / 2, 1); // Colore, Intensità, Distanza, Angolo del cono, Penombra
    spotLight.position.set(15, 10, 10); // Posizione
    scene.add(spotLight);

    var spotLight2 = new THREE.SpotLight(coloreRGB, 1, 50, Math.PI / 2, 1); // Colore, Intensità, Distanza, Angolo del cono, Penombra
    spotLight2.position.set(-15, 10, 10); // Posizione
    scene.add(spotLight2);

    // Inizializza la sfera con il nuovo materiale
    var numSpheres = 20;
    var spheres = [];

    for (var i = 0; i < numSpheres; i++) {
        var geometry = new THREE.SphereGeometry(1.5, 60, 60);
        var material = new THREE.MeshStandardMaterial({
            color: coloreRGB,
            emissive: coloreRGB,
            emissiveIntensity: 2,
            metalness: 1,
            roughness: 1,
        });

        var sphere = new THREE.Mesh(geometry, material);

        // Imposta posizioni iniziali diverse per ciascuna sfera per riempire uniformemente lo schermo
        sphere.position.x = Math.random() * window.innerWidth * 0.02 - window.innerWidth * 0.01;  // Posizione x tra -1% e 1% della larghezza dello schermo
        sphere.position.y = Math.random() * window.innerHeight * 0.02 - window.innerHeight * 0.01;  // Posizione y tra -1% e 1% dell'altezza dello schermo
        sphere.position.z = Math.random() * 80 - 5;  // Imposta la profondità tra -20 e 20

        scene.add(sphere);
        spheres.push(sphere);
    }

    // Aggiungi il sistema di particelle
    var particlesGeometry = new THREE.BufferGeometry();
    var particlesMaterial = new THREE.PointsMaterial({
        color: coloreRGB,
        size: 0.3,  // Imposta la dimensione delle particelle
    });

    // Crea un array per le posizioni delle particelle
    var particlesPositions = [];

    for (var i = 0; i < 1000; i++) {
        var phi = Math.random() * Math.PI * 2; // Angolo azimutale
        var theta = Math.random() * Math.PI;    // Angolo polare

        var x = Math.sin(theta) * Math.cos(phi) * 20;
        var y = Math.sin(theta) * Math.sin(phi) * 20;
        var z = Math.cos(theta) * 20;

        particlesPositions.push(x, y, z);
    }

    // Aggiungi le posizioni alla geometria delle particelle
    particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlesPositions, 3));

    // Crea l'oggetto di particelle
    var particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particles.scale.set(3, 3, 3);
    scene.add(particles);

    // Cambia il colore e l'opacità dell'effetto di bagliore
    var glowMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.09});
    var glowSpheres = [];

    for (var i = 0; i < numSpheres; i++) {
        var glowSphere = new THREE.Mesh(geometry.clone(), glowMaterial.clone());
        glowSphere.scale.set(10, 10, 10);
        scene.add(glowSphere);
        glowSpheres.push(glowSphere);
    }

    var speed = 0.009;

    // Animazione delle sfere
    function animate() {
        requestAnimationFrame(animate);

        for (var i = 0; i < numSpheres; i++) {
            var sphere = spheres[i];
            var glowSphere = glowSpheres[i];

            sphere.rotation.x += speed;
            sphere.rotation.y += speed;
            sphere.position.z += speed;

            sphere.scale.x += 0.09;
            sphere.scale.y += 0.09;
            sphere.scale.z += 0.0003;

            glowSphere.scale.copy(sphere.scale);
            glowSphere.position.copy(sphere.position);
        }

        speed += 0.00004;

        // Aggiorna e anima le particelle
        particles.rotation.x += 0.005;
        particles.rotation.y += 0.005;

        renderer.render(scene, camera);
    }

    // Chiamata all'animazione
    animate();
});

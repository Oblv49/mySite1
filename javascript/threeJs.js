document.addEventListener('DOMContentLoaded', function () {
    // Converti il colore esadecimale in RGB
    var coloreHex = 0x3d007a;
    var coloreRGB = new THREE.Color(coloreHex);

    // Inizializza la scena Three.js
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    // Inizializza il renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    var canvasContainer = document.getElementById('canvas-container');
    canvasContainer.appendChild(renderer.domElement);

    // Aggiungi una luce ambientale
    var ambientLight = new THREE.AmbientLight(0x0000FF);
    scene.add(ambientLight);

    // Aggiungi una luce direzionale
    var spotLight = new THREE.SpotLight(coloreRGB, 1, 50, Math.PI / 2, 1);
    spotLight.position.set(15, 10, 10);
    scene.add(spotLight);

    var spotLight2 = new THREE.SpotLight(coloreRGB, 1, 50, Math.PI / 2, 1);
    spotLight2.position.set(-15, 10, 10);
    scene.add(spotLight2);

    // Aggiungi il sistema di particelle sferiche
    var particlesGeometry = new THREE.BufferGeometry();
    var particlesMaterial = new THREE.PointsMaterial({
        color: coloreRGB,
        size: 0.3,
        blending: THREE.AdditiveBlending,
        transparent: true
    });

    // Crea un array per le posizioni delle particelle
    var particlesPositions = [];

    for (var i = 0; i < 1000; i++) {
        var phi = Math.random() * Math.PI * 2;
        var theta = Math.random() * Math.PI;

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
    var glowMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.09 });

    var speed = 0.009;

    // Aggiungi un'interazione del mouse e del tocco
    var mouseX = 0, mouseY = 0;
    var zoomFactor = 2;

    function handleMouseMove(event) {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function handleTouchMove(event) {
        var touch = event.touches[0];
        mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
    }

    function handleZoom(event) {
        var delta = event.deltaY;
        delta *= -0.003;  // Puoi regolare questo valore per modificare la velocità dello zoom

        // Modifica la scala delle particelle in base al movimento della rotellina o al pinch-to-zoom
        particles.scale.x += delta;
        particles.scale.y += delta;
        particles.scale.z += delta;

        // Limita la scala per evitare che le particelle diventino troppo grandi o troppo piccole
        particles.scale.x = Math.max(0.1, particles.scale.x);
        particles.scale.y = Math.max(0.1, particles.scale.y);
        particles.scale.z = Math.max(0.1, particles.scale.z);

        // Aggiorna il fattore di zoom
        zoomFactor = particles.scale.x;
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('wheel', handleZoom);

    // Animazione delle particelle
    function animate() {
        requestAnimationFrame(animate);

        // Aggiorna la posizione delle particelle in base al movimento del mouse o del touch
        particles.position.x = mouseX * 20;
        particles.position.y = mouseY * 20;

        // Aggiorna la scala delle particelle in base allo zoom
        particles.scale.set(zoomFactor, zoomFactor, zoomFactor);

        renderer.render(scene, camera);
    }

    // Chiamata all'animazione
    animate();
});

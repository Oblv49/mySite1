let container;
let camera, scene, renderer, controls;
const clock = new THREE.Clock();
const startTime = performance.now();

init();
animate();

function init() {
    container = document.getElementById('three-js-container');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 15000);

    const pointLight = new THREE.PointLight(0xff2200, 3, 0, 0);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 3);
    dirLight.position.set(0, 0, 1).normalize();
    scene.add(dirLight);

    const geometry = [
        [new THREE.IcosahedronGeometry(100, 16), 50],
        [new THREE.IcosahedronGeometry(100, 8), 300],
        [new THREE.IcosahedronGeometry(100, 4), 1000],
        [new THREE.IcosahedronGeometry(100, 2), 2000],
        [new THREE.IcosahedronGeometry(100, 1), 8000]
    ];

    const material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });

    for (let j = 0; j < 1000; j++) {
        const lod = new THREE.LOD();

        for (let i = 0; i < geometry.length; i++) {
            const mesh = new THREE.Mesh(geometry[i][0], material);
            mesh.scale.set(1.5, 1.5, 1.5);
            mesh.updateMatrix();
            mesh.matrixAutoUpdate = false;
            lod.addLevel(mesh, geometry[i][1]);
        }

        lod.position.x = 10000 * (0.5 - Math.random());
        lod.position.y = 7500 * (0.5 - Math.random());
        lod.position.z = 10000 * (0.5 - Math.random());
        lod.updateMatrix();
        lod.matrixAutoUpdate = false;
        scene.add(lod);
    }

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    controls = new THREE.FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 1000;
    controls.rollSpeed = Math.PI / 10;

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    var currentTime = performance.now();
    var elapsedSeconds = (currentTime - startTime) / 1000;

    if (elapsedSeconds < 3.3) {
        render();
    } else {
        container.style.display = 'none';
        document.getElementById('loader-container').style.display = 'block';
        return;
    }

    render();
}

function render() {
    controls.update(clock.getDelta());
    renderer.render(scene, camera);
}
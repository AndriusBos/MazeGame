
let mainContainer = null;
let fpsContainer
let stats = null;
let camera = null;
let renderer = null;
let scene = null;
let controls = null;
let PlBox = null;
let enemy = null;
let hit = false;
const MazeWall = null;
const addObjects = null;
let player_speed = 10;
let life = 4;
let powerUp = null;
const mazes = null;
let time = null;
let star = null;


let raycaster = new THREE.Raycaster();
let loader = new THREE.TextureLoader();
const gltf_Loader = new THREE.GLTFLoader();
const fbx_Loader = new THREE.FBXLoader();
const obj_Loader = new THREE.OBJLoader();
const listener = new THREE.AudioListener();
const audioLoader = new THREE.AudioLoader();
let objects = [];
let near = [];
let mixer;



let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let runAnim = false;
let playerHit = false;
let powerUpHit = false;
let inside_box = false;
let isPaused = true;

let prevTime = performance.now();
let velocity = new THREE.Vector3();
let direction = new THREE.Vector3();
let projection = new THREE.Vector3();


level_1 = new THREE.Group();
enemies = new THREE.Group();
enemiesBB = new THREE.Group();
enemyBox3Group = new THREE.Group();
edgeBoxGroup = new THREE.Group();
ObjectsGroup = new THREE.Group();
clock = new THREE.Clock();

// ---- GARSAS ----
const soundtrack = new THREE.Audio(listener);

let blocker = document.getElementById('blocker');
let meniu = document.getElementById('meniu');
let instruk = document.getElementById("instrukcija");
let options = document.getElementById("options");
let LifeCon = document.getElementById("lifecount");
let life_1 = document.getElementById("life_1");
let life_2 = document.getElementById("life_2");
let life_3 = document.getElementById("life_3");
let life_4 = document.getElementById("life_4");
let life_5 = document.getElementById("life_5");
let red = document.getElementById("red");
let sound_checkBox = document.getElementById("sound_checkBox");
instruk.style.display = "none";
options.style.display = "none";
life_1.style.visibility = "hidden";
life_2.style.visibility = "hidden";
life_3.style.visibility = "hidden";
life_4.style.visibility = "hidden";
life_5.style.visibility = "hidden";
red.style.visibility = "hidden";
sound_checkBox.checked = true;

const wall_512x512 = loader.load('local/wall/wall_512x512.jpg');
const wall_512x512_bump = loader.load('local/wall/wall_512x512_bump.jpg');
const floor_512x512 = loader.load('local/floor/floor_512x512.jpg');
const floor_512x512_bump = loader.load('local/floor/floor_512x512_bump.jpg');
const ceiling_512x512 = loader.load('local/ceiling/ceiling_512x512.jpg');
const ceiling_512x512_bump = loader.load('local/ceiling/ceiling_512x512_bump.jpg');
const door_512x512 = loader.load('local/door/door_512x512.jpg');
const door_512x512_bump = loader.load('local/door/door_512x512_bump.jpg');
const paiting_1_512x512 = loader.load('local/paiting/1/paiting_1_512x512.jpg');
const paiting_1_512x512_bump = loader.load('local/paiting/1/paiting_1_512x512_bump.jpg');
const paiting_2_512x512 = loader.load('local/paiting/2/paiting_2_512x512.jpg');
const paiting_2_512x512_bump = loader.load('local/paiting/2/paiting_2_512x512_bump.jpg');
const paiting_3_512x512 = loader.load('local/paiting/3/paiting_3_512x512.jpg');
const paiting_3_512x512_bump = loader.load('local/paiting/3/paiting_3_512x512_bump.jpg');
const healthBox_512x512 = loader.load('local/healthBox/healthBox_512x512.jpg');
const healthBox_512x512_bump = loader.load('local/healthBox/healthBox_512x512_bump.jpg');

const wall_256x256 = loader.load('local/wall/wall_256x256.jpg');
const wall_256x256_bump = loader.load('local/wall/wall_256x256_bump.jpg');
const floor_256x256 = loader.load('local/floor/floor_256x256.jpg');
const floor_256x256_bump = loader.load('local/floor/floor_256x256_bump.jpg');
const ceiling_256x256 = loader.load('local/ceiling/ceiling_256x256.jpg');
const ceiling_256x256_bump = loader.load('local/ceiling/ceiling_256x256_bump.jpg');
const door_256x256 = loader.load('local/door/door_256x256.jpg');
const door_256x256_bump = loader.load('local/door/door_256x256_bump.jpg');
const paiting_1_256x256 = loader.load('local/paiting/1/paiting_1_256x256.jpg');
const paiting_1_256x256_bump = loader.load('local/paiting/1/paiting_1_256x256_bump.jpg');
const paiting_2_256x256 = loader.load('local/paiting/2/paiting_2_256x256.jpg');
const paiting_2_256x256_bump = loader.load('local/paiting/2/paiting_2_256x256_bump.jpg');
const paiting_3_256x256 = loader.load('local/paiting/3/paiting_3_256x256.jpg');
const paiting_3_256x256_bump = loader.load('local/paiting/3/paiting_3_256x256_bump.jpg');

const wall_128x128 = loader.load('local/wall/wall_128x128.jpg');
const wall_128x128_bump = loader.load('local/wall/wall_128x128_bump.jpg');
const floor_128x128 = loader.load('local/floor/floor_128x128.jpg');
const floor_128x128_bump = loader.load('local/floor/floor_128x128_bump.jpg');
const ceiling_128x128 = loader.load('local/ceiling/ceiling_128x128.jpg');
const ceiling_128x128_bump = loader.load('local/ceiling/ceiling_128x128_bump.jpg');
const door_128x128 = loader.load('local/door/door_128x128.jpg');
const door_128x128_bump = loader.load('local/door/door_128x128_bump.jpg');
const paiting_1_128x128 = loader.load('local/paiting/1/paiting_1_128x128.jpg');
const paiting_1_128x128_bump = loader.load('local/paiting/1/paiting_1_128x128_bump.jpg');
const paiting_2_128x128 = loader.load('local/paiting/2/paiting_2_128x128.jpg');
const paiting_2_128x128_bump = loader.load('local/paiting/2/paiting_2_128x128_bump.jpg');
const paiting_3_128x128 = loader.load('local/paiting/3/paiting_3_128x128.jpg');
const paiting_3_128x128_bump = loader.load('local/paiting/3/paiting_3_128x128_bump.jpg');

let TextureMap = wall_512x512;
let TextureMapBump = wall_512x512_bump;
let TextureMapFloor = floor_512x512;
let TextureMapFloorBump = floor_512x512_bump;
let TextureMapCeiling = ceiling_512x512;
let TextureMapCeilingBump = ceiling_512x512_bump;
let TextureMapDoor = door_512x512;
let TextureMapDoorBump = door_512x512_bump;
let TexturePaiting1 = paiting_1_512x512;
let TexturePaiting1Bump = paiting_1_512x512_bump;
let TexturePaiting2 = paiting_2_512x512;
let TexturePaiting2Bump = paiting_2_512x512_bump;
let TexturePaiting3 = paiting_3_512x512;
let TexturePaiting3Bump = paiting_3_512x512_bump;
let TextureHealthBox = healthBox_512x512;
let TextureHealthBoxBump = healthBox_512x512_bump;

const map1 = [
  /* 1 */[1, 1, 1, 4, 1, 1, 1, 1, 2, 1, 1, 4, 1, 1, 1, 1, 1, 1, 5, 1, 1],
  /* 2 */[5, 0, 1, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  /* 3 */[1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 1, 5, 1, 0, 1],
  /* 4 */[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1],
  /* 5 */[1, 0, 1, 1, 1, 4, 1, 1, 4, 4, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  /* 6 */[1, 0, 5, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  /* 7 */[1, 0, 1, 0, 1, 1, 1, 1, 5, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  /* 8 */[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 1, 0, 1],
  /* 9 */[1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 3, 1, 0, 1],
 /* 10 */[3, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
 /* 11 */[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 5, 0, 1],
 /* 12 */[1, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
 /* 13 */[1, 0, 4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1],
 /* 14 */[1, 0, 1, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
 /* 15 */[1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 5, 1, 0, 1, 0, 1, 1, 1, 0, 1],
 /* 16 */[1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
 /* 17 */[1, 0, 5, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 1],
 /* 18 */[1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
 /* 19 */[1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
 /* 20 */[1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 1],
 /* 21 */[1, 1, 1, 4, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 5, 1, 1, 1, 1, 1],

];


const health_map = [
  /* 0 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* 0 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* 0 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* 0 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* 0 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* 6 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* 7 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* 8 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* 9 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 00 */[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
 /* 00 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 00 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 00 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 00 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 00 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 06 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 07 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 08 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 09 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
 /* 00 */[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 /* 00 */[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

];




//sukuria sceną, iškviečia kitas funkcijas
function init() {
    if (THREE.WEBGL.isWebGLAvailable() === false) container.appendChild(WEBGL.getWebGLErrorMessage());
    fpsContainer = document.querySelector('#fps');
    mainContainer = document.querySelector('#webgl-secne');

    scene = new THREE.Scene(); //sukuriama žaidimo scena
    scene.background = new THREE.Color(0x00000); //pridedama fono spalva
    scene.add(level_1);

    createStats();
    createCamera();
    createAudio();
    createControls();
    createLights();
    createMeshes();
    createMaze();
    createHealth();
    createRenderer();
    find_near();
    renderer.setAnimationLoop(() => {
        if (runAnim == true) {
            animate();
            update();
        }
        render();
    });
}


function createAudio() {

    camera.add(listener);
    audioLoader.load('local/music/track_0.mp3', function (buffer) {
        soundtrack.setBuffer(buffer);
        soundtrack.setLoop(true);
        soundtrack.setVolume(0.5);
        soundtrack.play();
    });
}

function applySound() {
    if (sound_checkBox.checked) {
        soundtrack.play();
    } else {
        soundtrack.stop();
    }
}


function life_visible() {
    switch (life) {
        case 0:
            return runAnim = false,
                setTimeout(function () { location.replace("https://htmlpreview.github.io/?https://github.com/AndriusBos/MazeGame/blob/master/lose.html"); }, 1000);

        case 1:
            return life_5.style.visibility = "hidden",
                life_4.style.visibility = "hidden",
                life_3.style.visibility = "hidden",
                life_2.style.visibility = "hidden",
                life_1.style.visibility = "visible";
        case 2:
            return life_5.style.visibility = "hidden",
                life_4.style.visibility = "hidden",
                life_3.style.visibility = "hidden",
                life_2.style.visibility = "visible",
                life_1.style.visibility = "visible";
        case 3:
            return life_5.style.visibility = "hidden",
                life_4.style.visibility = "hidden",
                life_3.style.visibility = "visible",
                life_2.style.visibility = "visible",
                life_1.style.visibility = "visible";
        case 4:
            return life_5.style.visibility = "hidden",
                life_4.style.visibility = "visible",
                life_3.style.visibility = "visible",
                life_2.style.visibility = "visible",
                life_1.style.visibility = "visible";
        case 5:
            return life_5.style.visibility = "visible",
                life_4.style.visibility = "visible",
                life_3.style.visibility = "visible",
                life_2.style.visibility = "visible",
                life_1.style.visibility = "visible";
    }
}


function update() {

    // ---- ŽAIDIMO PABAIGOS ELEMENTO JUDĖJIMAS/FUNKCIONALUMAS - PRADŽIA -----

    star.rotation.y += 0.01;
    let starBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
    starBox.setFromObject(star);
    if (new THREE.Box3().setFromObject(PlBox).intersectsBox(starBox)) {
        runAnim = false;
        setTimeout(function () { location.replace("https://htmlpreview.github.io/?https://github.com/AndriusBos/MazeGame/blob/master/winner.html"); }, 100);
    }

    // ---- ŽAIDIMO PABAIGOS ELEMENTO JUDĖJIMAS/FUNKCIONALUMAS - PRADŽIA -----

    life_visible();
  
    // ---- GYBYVIŲ ATSTATYNO ELEMENTO JUDĖJIMAS/FUNKCIONALUMAS - PRADŽIA -----

    for (let i = 0, l = ObjectsGroup.children.length; i < l; i++) {

        ObjectsGroup.children[i].rotation.y -= 0.01;
        let powerUpBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        powerUpBox.setFromObject(ObjectsGroup.children[i]);

        if (!powerUpHit && new THREE.Box3().setFromObject(PlBox).intersectsBox(powerUpBox)) {
            //console.log("hit");

            if (life < 5) {
                life += 1;
                powerUpHit = true;
                const sound = new THREE.Audio(listener);
                audioLoader.load('local/music/heal.wav', function (buffer) {
                    sound.setBuffer(buffer);
                    sound.setVolume(0.5);
                    sound.play();
                });
                ObjectsGroup.remove(ObjectsGroup.children[i]);
                l = ObjectsGroup.children.length;
                setTimeout(function () { powerUpHit = false; }, 500);
            }
        }
    }

    // ---- GYBYVIŲ ATSTATYNO ELEMENTO JUDĖJIMAS/FUNKCIONALUMAS - PABAIGA -----

    PlBox.position.x = camera.position.x;
    PlBox.position.z = camera.position.z;
    const wall0 = new THREE.Box3().setFromObject(edgeBoxGroup.children[0]);
    const wall1 = new THREE.Box3().setFromObject(edgeBoxGroup.children[1]);
    const wall2 = new THREE.Box3().setFromObject(edgeBoxGroup.children[2]);
    const wall3 = new THREE.Box3().setFromObject(edgeBoxGroup.children[3]);

    if (enemies !== null) {

        for (let i = 0, l = enemies.children.length; i < l; i++) {

            let delta = clock.getDelta();
            if (mixer) mixer.update(delta);
            enemiesBB.children[i].rotation.order = 'YXZ';
            enemiesBB.children[i].lookAt(camera.position);
            enemy_rotY = enemiesBB.children[i].rotation.y;
            enemies.children[i].rotation.y = enemy_rotY;
            enemiesBB.children[i].position.x = enemies.children[i].position.x;
            enemiesBB.children[i].position.z = enemies.children[i].position.z;
            let enemyBox3 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
            enemyBox3.setFromObject(enemiesBB.children[i]);
            enemies.children[i].position.x += metaData.enemies[i].vx * 2;
            enemies.children[i].position.z += metaData.enemies[i].vz * 2;

            //gyvybių sistema
            if (!playerHit && new THREE.Box3().setFromObject(PlBox).intersectsBox(enemyBox3)) {
                life -= 1;
                playerHit = true;
                const sound = new THREE.Audio(listener);
                audioLoader.load('local/music/hit.wav', function (buffer) {
                    sound.setBuffer(buffer);
                    sound.setVolume(0.5);
                    sound.play();
                });
                red.style.visibility = "visible";
                setTimeout(function () { red.style.visibility = "hidden"; }, 100);
                setTimeout(function () { playerHit = false; }, 2000);
                console.log(life);
            }

            if (!hit && (wall0).intersectsBox(enemyBox3)) {
                metaData.enemies[i].vz *= -1;
                console.log((wall0).intersectsBox(enemyBox3));
                console.log('collide with 0');
                hit = true;
                setTimeout(function () { hit = false; }, 100);
            }


            if (!hit && (wall1).intersectsBox(enemyBox3)) {
                metaData.enemies[i].vz *= -1;
                console.log((wall0).intersectsBox(enemyBox3));
                console.log('collide with 1');
                hit = true;
                setTimeout(function () { hit = false; }, 100);
            }


            if (!hit && (wall2).intersectsBox(enemyBox3)) {
                metaData.enemies[i].vx *= -1;
                console.log((wall0).intersectsBox(enemyBox3));
                console.log('collide with 2');
                hit = true;
                setTimeout(function () { hit = false; }, 100);
            }


            if (!hit && (wall3).intersectsBox(enemyBox3)) {
                metaData.enemies[i].vx *= -1;
                console.log((wall0).intersectsBox(enemyBox3));
                console.log('collide with 3');
                hit = true;
                setTimeout(function () { hit = false; }, 100);
            }

        }
    }
}

function find_near() {
    near = []

    for (const box of objects) {
        if (camera.position.distanceTo(box.position) < 100) {
            near.push(box)
        }
    }
}

let ping_near = setInterval(function () {

    find_near()

}, 3000)

function is_inside(box, subject) {
    if (box.position.x - 11 < subject.x) {
        if (box.position.x + 11 > subject.x) {
            if (box.position.z - 11 < subject.z) {
                if (box.position.z + 11 > subject.z) {
                    return true
                }
            }
        }
    }
}

function animate() {

    if (controls.isLocked === true) {

        inside_box = false

        time = performance.now();
        let delta = (time - prevTime) / 1000;

        velocity.x -= velocity.x * player_speed * delta;
        velocity.z -= velocity.z * player_speed * delta;

        direction.z = Number(moveBackward) - Number(moveForward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        velocity.z -= direction.z * 200.0 * delta;
        velocity.x += direction.x * 200.0 * delta;

        controls.moveRight(velocity.x * delta);
        controls.moveForward(velocity.z * delta);
        controls.getObject().position.y += velocity.y * delta;

        for (const box of near) {
            if (is_inside(box, camera.position)) {
                inside_box = true
                //console.log('STUCK')
            }
        }

        if (inside_box) {
            controls.moveRight(-velocity.x * delta);
            controls.moveForward(-velocity.z * delta);
            controls.getObject().position.y += velocity.y * delta;
        }

        prevTime = time;

    }
}

// Atvaizduoja kamerą ir sceną
function render() {
    stats.begin();
    renderer.render(scene, camera);
    stats.end();

}
// Skaičiuoja FPS
function createStats() {
    stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    fpsContainer.appendChild(stats.dom);
}
// Sugeneruoja kamerą
function createCamera() {
    const aspect = mainContainer.clientWidth / mainContainer.clientHeight;
    camera = new THREE.PerspectiveCamera(75, aspect, 0.5, 100);
    camera.position.set(170, 10, 30);
    camera.rotation.y = 180 * Math.PI / 180;
    scene.fog = new THREE.Fog(0x00000, 60, 100);

}

function apply() {

    if (document.getElementById("quality").value === "low") {
        TextureMap = wall_128x128;
        TextureMapBump = wall_128x128_bump;
        TextureMapFloor = floor_128x128;
        TextureMapFloorBump = floor_128x128_bump;
        TextureMapCeiling = ceiling_128x128;
        TextureMapCeilingBump = ceiling_128x128_bump;
        TextureMapDoor = door_128x128;
        TextureMapDoorBump = door_128x128_bump;
        TexturePaiting1 = paiting_1_128x128;
        TexturePaiting1Bump = paiting_1_128x128_bump;
        TexturePaiting2 = paiting_2_128x128;
        TexturePaiting2Bump = paiting_2_128x128_bump;
        TexturePaiting3 = paiting_3_128x128;
        TexturePaiting3Bump = paiting_3_128x128_bump;
        createMaze();
    }
    if (document.getElementById("quality").value === "medium") {
        TextureMap = wall_256x256;
        TextureMapBump = wall_256x256_bump;
        TextureMapFloor = floor_256x256;
        TextureMapFloorBump = floor_256x256_bump;
        TextureMapCeiling = ceiling_256x256;
        TextureMapCeilingBump = ceiling_256x256_bump;
        TextureMapDoor = door_256x256;
        TextureMapDoorBump = door_256x256_bump;
        TexturePaiting1 = paiting_1_256x256;
        TexturePaiting1Bump = paiting_1_256x256_bump;
        TexturePaiting2 = paiting_2_256x256;
        TexturePaiting2Bump = paiting_2_256x256_bump;
        TexturePaiting3 = paiting_3_256x256;
        TexturePaiting3Bump = paiting_3_256x256_bump;
        createMaze();
    }
    if (document.getElementById("quality").value === "high") {
        TextureMap = wall_512x512;
        TextureMapBump = wall_512x512_bump;
        TextureMapFloor = floor_512x512;
        TextureMapFloorBump = floor_512x512_bump;
        TextureMapCeiling = ceiling_512x512;
        TextureMapCeilingBump = ceiling_512x512_bump;
        TextureMapDoor = door_512x512;
        TextureMapDoorBump = door_512x512_bump;
        TexturePaiting1 = paiting_1_512x512;
        TexturePaiting1Bump = paiting_1_512x512_bump;
        TexturePaiting2 = paiting_2_512x512;
        TexturePaiting2Bump = paiting_2_512x512_bump;
        TexturePaiting3 = paiting_3_512x512;
        TexturePaiting3Bump = paiting_3_512x512_bump;
        createMaze();
    }
}

function goToInstruction() {

    if (instruk.style.display === "none") {
        instruk.style.display = "block";
        meniu.style.display = 'none';
    } else {
        instruk.style.display = "none";
        blocker.style.display = 'none';
    }
};

function goToOptions() {
    if (options.style.display === "none") {
        options.style.display = "block";
        meniu.style.display = 'none';
    } else {
        options.style.display = "none";
        blocker.style.display = 'none';
    }
};

function backToMeniu() {

    if (instruk.style.display === "block" || options.style.display === "block") {
        instruk.style.display = "none";
        options.style.display = "none";
        meniu.style.display = 'block';
    } else {
        instruk.style.display = "none";
        options.style.display = "none";
        blocker.style.display = 'block';
    }
};

function createControls() {
    controls = new THREE.PointerLockControls(camera, document.body);

    document.getElementById("PLAY").addEventListener("click", function () {
        controls.lock();
    }, false);
    controls.addEventListener('lock', function () {
        runAnim = true;
        blocker.style.display = 'none';
    });
    controls.addEventListener('unlock', function () {
        runAnim = false;
        blocker.style.display = 'block';
    });

    scene.add(controls.getObject());
    var onKeyDown = function (event) {
            switch (event.keyCode) {
                case 38: // up
                case 87: // w
                    moveForward = true;
                    break;
                case 37: // left
                case 65: // a
                    moveLeft = true;
                    break;
                case 40: // down
                case 83: // s
                    moveBackward = true;
                    break;
                case 39: // right
                case 68: // d
                    moveRight = true;
                    break;
                case 16:
                    return player_speed = 5;
                    break;
            }
    };
    var onKeyUp = function (event) {
        switch (event.keyCode) {
            case 38: // up
            case 87: // w
                moveForward = false;
                break;
            case 37: // left
            case 65: // a
                moveLeft = false;
                break;
            case 40: // down
            case 83: // s
                moveBackward = false;
                break;
            case 39: // right
            case 68: // d
                moveRight = false;
                break;
            case 16:
                return player_speed = 10;
                break;
        }
    };
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);

}
// Sugeneruoja šviesos šaltinius
function createLights() {

    ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    ambientLight.castShadow = true;
    level_1.add(ambientLight);

    const light = new THREE.PointLight(0xffffff, 1, 150);
    light.castShadow = true;
    light.position.set(0, 2.5, 0);
    level_1.add(light);
    camera.add(light);
}

//kubo material
function createMaze() {

    // pagrindas
    const floorGeo = new THREE.PlaneGeometry(420, 420);
    const floorMat = new THREE.MeshStandardMaterial({ map: TextureMapFloor, bumpMap: TextureMapFloorBump, roughness: 0.8 });
    TextureMapFloor.wrapS = TextureMapFloor.wrapT = THREE.RepeatWrapping;
    TextureMapFloor.repeat.set(21, 21);
    TextureMapFloorBump.wrapS = TextureMapFloorBump.wrapT = THREE.RepeatWrapping;
    TextureMapFloorBump.repeat.set(21, 21);
    ground = new THREE.Mesh(floorGeo, floorMat);
    ground.position.set(210, 0, 210);
    ground.receiveShadow = true;
    ground.rotateX(-Math.PI / 2);
    level_1.add(ground);

    // lubos
    const ceilingGeo = new THREE.PlaneGeometry(420, 420);
    const ceilingMat = new THREE.MeshStandardMaterial({ map: TextureMapCeiling, bumpMap: TextureMapCeilingBump, roughness: 0.8, metalness: 0.6, side: THREE.DoubleSide });
    TextureMapCeiling.wrapS = TextureMapCeiling.wrapT = THREE.RepeatWrapping;
    TextureMapCeiling.repeat.set(21, 21);
    TextureMapCeilingBump.wrapS = TextureMapCeilingBump.wrapT = THREE.RepeatWrapping;
    TextureMapCeilingBump.repeat.set(21, 21);
    ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.position.set(210, 20, 210);
    ceiling.receiveShadow = true;
    ceiling.rotateX(-Math.PI / 2);
    level_1.add(ceiling);

    const invisible = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, side: THREE.DoubleSide });
    const siena = new THREE.MeshStandardMaterial({ map: TextureMap, bumpMap: TextureMapBump, roughness: 0.8, metalness: 0.6 });
    const durys = new THREE.MeshStandardMaterial({ map: TextureMapDoor, bumpMap: TextureMapDoorBump, roughness: 0.8, metalness: 0.6 });
    const paint1Cell = new THREE.MeshStandardMaterial({ map: TexturePaiting1, bumpMap: TexturePaiting1Bump, roughness: 0.8, metalness: 0.6 });
    const paint2Cell = new THREE.MeshStandardMaterial({ map: TexturePaiting2, bumpMap: TexturePaiting2Bump, roughness: 0.8, metalness: 0.6 });
    const paint3Cell = new THREE.MeshStandardMaterial({ map: TexturePaiting3, bumpMap: TexturePaiting3Bump, roughness: 0.8, metalness: 0.6 });

    const wall = [siena, siena, invisible, invisible, siena, siena];
    const doors = [invisible, invisible, invisible, invisible, durys, durys];

    function getCellYPosition(v, h) {
        switch (v) {
            case 1:
                return h / 2;
            case 2:
                return h / 2;
            case 3:
                return h / 2;
            case 4:
                return h / 2;
            case 5:
                return h / 2;
        }
    }

    function getCellType(v) {

        switch (v) {
            case 1:
                return wall;
            case 2:
                return doors;
            case 3:
                return paint1Cell;
            case 4:
                return paint2Cell;
            case 5:
                return paint3Cell;
        }
    }

    map1.forEach((_, z) => {
        map1[z].forEach((v, x) => {
            if (v !== 0) {
                const w = 20;
                const h = 20;
                const d = 20;
                const MazeWallGeo = new THREE.BoxGeometry(w, h, d);
                const MazeWallMat = getCellType(v);
                const MazeWall = new THREE.Mesh(MazeWallGeo, MazeWallMat);
                const _x = x * w + (w / 2);
                const _y = getCellYPosition(v, h);
                const _z = z * d + (d / 2);
                MazeWall.position.set(_x, _y, _z);
                MazeWall.geometry.computeBoundingBox();
                level_1.add(MazeWall);
                objects.push(MazeWall);

            }
        })
    });
}

function createHealth() {

    function getCellYPosition1(v, h) {
        switch (v) {
            case 1:
                return h / 2.2;
        }
    }

    health_map.forEach((_, z) => {
        health_map[z].forEach((v, x) => {
            if (v !== 0) {
                const w = 20;
                const h = 20;
                const d = 20;
                const powerUpGeo = new THREE.BoxGeometry(2, 5, 5);
                const powerUpMat = new THREE.MeshStandardMaterial({ map: TextureHealthBox, bumpMap: TextureHealthBoxBump, roughness: 1 });
                powerUp = new THREE.Mesh(powerUpGeo, powerUpMat);
                const addObjects = powerUp;
                const _x = x * w + (w / 2);
                const _y = getCellYPosition1(v, h);
                const _z = z * d + (d / 2);
                addObjects.position.set(_x, _y, _z);
                ObjectsGroup.add(addObjects);
                level_1.add(ObjectsGroup);
            }
        })
    });
}

// Sugeneruoja žaidimo objektus
function createMeshes() {

    const BBmaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });

    //labirinto BB
    for (let i = 0; i < 4; i++) {
        const edgeBoxGeo = new THREE.BoxGeometry(420, 20, 20);
        edgeBox = new THREE.Mesh(edgeBoxGeo, BBmaterial);
        edgeBoxGroup.add(edgeBox);
        level_1.add(edgeBoxGroup);
    }

    //labirinto BB vietos nustaymas

    for (let i = 0, l = edgeBoxGroup.children.length; i < l; i++) {

        edgeBoxGroup.children[0].position.set(210, 10, 0);
        edgeBoxGroup.children[1].position.set(210, 10, 420);
        edgeBoxGroup.children[2].rotateY(86);
        edgeBoxGroup.children[2].position.set(0, 10, 210);
        edgeBoxGroup.children[3].rotateY(86);
        edgeBoxGroup.children[3].position.set(420, 10, 210);
    }


    //playerBoundingBox

    const PlBoxGeo = new THREE.BoxGeometry(12, 12);
    PlBox = new THREE.Mesh(PlBoxGeo, BBmaterial);
    PlBox.rotateZ(0.5 * Math.PI);
    PlBox.position.set(0, 8, 0);
    level_1.add(PlBox);





    //priešas

    for (let i = 0; i < 10; i++) {
        const url = 'local/scene.gltf';
        gltf_Loader.load(url, (gltf) => {

            const object = gltf.scene;
            enemy = object;
            enemy.scale.set(0.10, 0.10, 0.10);
            enemy.position.setX(Math.random() * (360 - 60) + 60);
            enemy.position.setY(4);
            enemy.position.setZ(Math.random() * (360 - 60) + 60);
            if (!window.metaData) window.metaData = { enemies: [] };
            metaData.enemies.push({
                vx: Math.random() * 0.2 - 0.1,
                vy: Math.random() * 0.2 - 0.1,
                vz: Math.random() * 0.2 - 0.1
            });
            //mixer = new THREE.AnimationMixer(enemy);
            //const action = mixer.clipAction(gltf.animations[0]);
            //action.play();
            enemies.add(enemy);
            level_1.add(enemies);
        });
    }

    //priešo BB

    for (let i = 0; i < 10; i++) {
        enemyBB = new THREE.Mesh(PlBoxGeo, BBmaterial);
        enemyBB.position.setY(8);
        enemiesBB.add(enemyBB);
        level_1.add(enemiesBB);
    }

    // ---- ŽAIDIMO PABAIGOS ELEMENTAS - PRADŽIA -----

    const objURL = 'local/star.obj';
    const material = new THREE.MeshLambertMaterial({ color: 'yellow', side: THREE.DoubleSide });
    obj_Loader.load(objURL, function (obj) {
        obj.traverse(function (child) {

            if (child instanceof THREE.Mesh) {
                child.material = material;
            }

        });
        obj.scale.set(5, 5, 5);
        obj.position.set(230, 2, 390);
        obj.receiveShadow = true;
        obj.castShadow = true;
        star = obj;
        level_1.add(star);
    });

    // ---- ŽAIDIMO PABAIGOS ELEMENTAS - PABAIGA -----

    //box

    //const OBJFile = '/local/box/box.obj';
    //const MTLFile = '/local/box/box.mtl';
    //const JPGFile = '/local/box/Weapon_box_Albedo.jpg';
    //new THREE.MTLLoader()
    //    .load(MTLFile, function (materials) {
    //        materials.preload();
    //        new THREE.OBJLoader()
    //            .setMaterials(materials)
    //            .load(OBJFile, function (object) {
    //                var texture = new THREE.TextureLoader().load(JPGFile);

    //                object.traverse(function (child) {
    //                    if (child instanceof THREE.Mesh) {
    //                        child.material.map = texture;
    //                    }
    //                });
    //                object.scale.set(15, 15, 15);
    //                object.position.set(172, 0, 76);
    //                level_1.add(object);
    //            });
    //    });

    //power-up
}

// Lango atvaizdavimo funkcija 
function createRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mainContainer.clientWidth, mainContainer.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mainContainer.appendChild(renderer.domElement);
}
// Nurodo ką daryti kai langas yra sumažinamas
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
init();

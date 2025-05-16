import { HealthBar } from '../Functions/HealthBar';


export default function villain1(scene){
    const villain1 = scene.physics.add.sprite(150, 150, 'villain1')
    villain1.setSize(0, 0).setOffset(0, 10);
    villain1.setBounce(0.08);
    villain1.setCollideWorldBounds(true);
    villain1.body.setGravityY(300);
    villain1.detectionRange = 200
    

    // villain1.startX = scene.villain1.x;

    villain1.speed = 150;
    villain1.detectionRange = 400;
    villain1.attackRange = 50;

    scene.villain1 = villain1;

    scene.villainHealthBar = new HealthBar(
        scene,
        scene.villain1.x,
        scene.villain1.y - 50,
        64,
        6
    );

}

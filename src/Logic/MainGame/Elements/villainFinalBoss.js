import { HealthBar } from '../Functions/HealthBar';

export default function villainFinalBoss(scene){
    const villainFinalBoss = scene.physics.add.sprite(2600, 450, 'villainFinalBossIdle').setScale(1.5)
    villainFinalBoss.setSize(0, 0).setOffset(0, 10);
    villainFinalBoss.setBounce(0.08);
    villainFinalBoss.setCollideWorldBounds(true);
    villainFinalBoss.body.setGravityY(300);
    villainFinalBoss.detectionRange = 200
    

    // villain1.startX = scene.villain1.x;

    villainFinalBoss.speed = 150;
    villainFinalBoss.detectionRange = 400;
    villainFinalBoss.attackRange = 50;

    scene.villainFinalBoss = villainFinalBoss;

    scene.villainFinalBossHealthBar = new HealthBar(
        scene,
        scene.villainFinalBoss.x,
        scene.villainFinalBoss.y - 50,
        64,
        6
    );

}

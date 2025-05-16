export default function(scene){
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNumbers('kart', { start: 0, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'left',
        frames: scene.anims.generateFrameNumbers('runimg', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    
    scene.anims.create({
        key: 'right',
        frames: scene.anims.generateFrameNumbers('runimg', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    scene.anims.create({
        key: 'up',
        frames: scene.anims.generateFrameNumbers('jumpimg', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'superup',
        frames: scene.anims.generateFrameNumbers('jumpimg', { start: 7, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'attack_1',
        frames: scene.anims.generateFrameNumbers('attack_1', { start: 0, end: 4 }),
        frameRate: 15,
        repeat: 0
    });
    scene.anims.create({
        key: 'attack_2',
        frames: scene.anims.generateFrameNumbers('attack_2', { start: 0, end: 4 }),
        frameRate: 15,
        repeat: 0
    });
    scene.anims.create({
        key: 'attack_3',
        frames: scene.anims.generateFrameNumbers('attack_3', { start: 0, end: 5 }),
        frameRate: 15,
        repeat: 0
    });
    scene.anims.create({
        key: 'hero_hurt',
        frames: scene.anims.generateFrameNumbers('hero_hurt', { start: 0, end: 2 }),
        frameRate: 3,
        repeat: 0
    });
    scene.anims.create({
        key: 'hero_dead',
        frames: scene.anims.generateFrameNumbers('hero_dead', { start: 0, end: 4 }),
        frameRate: 5,
        repeat: 0
    });
    scene.anims.create({
        key: 'hero_dead_f',
        frames: scene.anims.generateFrameNumbers('hero_dead', { start: 4, end: 4 }),
        frameRate: 5,
        repeat: 0
    });

    scene.anims.create({
        key: 'villain1.idle',
        frames: scene.anims.generateFrameNumbers('villain1', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: 0
    });
    scene.anims.create({
        key: 'villain1Walk',
        frames: scene.anims.generateFrameNumbers('villain1Walk', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'villain1Attack',
        frames: scene.anims.generateFrameNumbers('villain1Attack', { start: 0, end: 3 }),
        frameRate: 7,
        repeat: 0
    });
    scene.anims.create({
        key: 'villain1Dead',
        frames: scene.anims.generateFrameNumbers('villain1Dead', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: 0
    });
    scene.anims.create({
        key: 'villain1Attack2',
        frames: scene.anims.generateFrameNumbers('villain1Attack2', { start: 0, end: 5 }),
        frameRate: 7,
        repeat: 0
    });


    scene.anims.create({
        key: 'villainFinalBoss',
        frames: scene.anims.generateFrameNumbers('villainFinalBossIdle', { start: 0, end: 5 }),
        frameRate: 7,
        repeat: 0
    });
    scene.anims.create({
        key: 'villainFinalBossWalk',
        frames: scene.anims.generateFrameNumbers('villainFinalBossWalk', { start: 0, end: 7 }),
        frameRate: 14,
        repeat: 0
    });
    scene.anims.create({
        key: 'villainFinalBossAttack',
        frames: scene.anims.generateFrameNumbers('villainFinalBossAttack', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: 0
    });
    scene.anims.create({
        key: 'villainFinalBossAttack2',
        frames: scene.anims.generateFrameNumbers('villainFinalBossAttack2', { start: 0, end: 5 }),
        frameRate: 5,
        repeat: 0
    });
    scene.anims.create({
        key: 'villainFinalBossDead',
        frames: scene.anims.generateFrameNumbers('villainFinalBossDead', { start: 0, end: 5 }),
        frameRate: 7,
        repeat: 0
    });

    // scene.anims.create({
    //     key: 'heart',
    //     frames: scene.anims.generateFrameNumbers('heart2', { start: 0, end: 0 }),
    //     frameRate: 10,
    //     repeat: 0
    // });
    
}

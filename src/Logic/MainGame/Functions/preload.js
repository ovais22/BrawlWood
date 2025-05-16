import Phaser from "phaser";

import kart from '../../../assets/kart.png'
import bgi from "../../../assets/bgi.png"
import blockimg from "../../../assets/block.jpg"
import runimg from "../../../assets/Player/Run.png"
import jumpimg from "../../../assets/Player/Jump.png"
import attack_1 from "../../../assets/Player/Attack_1.png"
import attack_2 from "../../../assets/Player/Attack_2.png"
import attack_3 from "../../../assets/Player/Attack_3.png"
import hero_hurt from "../../../assets/Player/Hurt.png"
import hero_dead from "../../../assets/Player/Dead.png"
import villain1  from "../../../assets/Villain1/Idle.png"
import villain1Attack from "../../../assets/Villain1/Attack_3.png";
import villain1Attack2 from "../../../assets/Villain1/Attack_2.png";
import villain1Walk from "../../../assets/Villain1/Walk.png";
import villain1Dead from "../../../assets/Villain1/Dead.png";
import villainFinalBoss from "../../../assets/VillainFinalBoss/Idle.png";
import villainFinalBossWalk from "../../../assets/VillainFinalBoss/Run.png";
import villainFinalBossAttack from "../../../assets/VillainFinalBoss/Attack_2.png";
import villainFinalBossAttack2 from "../../../assets/VillainFinalBoss/Attack_1.png";
import villainFinalBossDead from "../../../assets/VillainFinalBoss/Dead.png";
import bar from "../../../assets/bar.png";
import heart from "../../../assets/heart.png"
import fire from "../../../assets/fire.png"

export default function preload(scene){
    scene.load.image('bgi', bgi);
    scene.load.image('heart', heart);
    scene.load.image('blockimg', blockimg);
    scene.load.image('fire', fire);
    scene.load.image('bar', bar);


    scene.load.spritesheet('kart', kart,
        { frameWidth: 128, frameHeight: 105}
    );
    scene.load.spritesheet('runimg', 
        runimg,
        { frameWidth: 128, frameHeight: 105}
    );
    scene.load.spritesheet('jumpimg', 
        jumpimg,
        { frameWidth: 128, frameHeight: 105}
    );
    scene.load.spritesheet('attack_1', 
        attack_1,
        { frameWidth: 128, frameHeight: 105}
    );
    scene.load.spritesheet('attack_2', 
        attack_2,
        { frameWidth: 128, frameHeight: 105}
    );
    scene.load.spritesheet('attack_3', 
        attack_3,
        { frameWidth: 128, frameHeight: 105}
    );
    scene.load.spritesheet('hero_hurt', 
        hero_hurt,
        { frameWidth: 128, frameHeight: 105}
    );
    scene.load.spritesheet('hero_dead', 
        hero_dead,
        { frameWidth: 128, frameHeight: 105}
    );

    scene.load.spritesheet('villain1', 
        villain1,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('villain1Walk', 
        villain1Walk,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('villain1Attack', 
        villain1Attack,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('villain1Attack2', 
        villain1Attack2,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('villain1Dead', 
        villain1Dead,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('heart2', 
        heart,
        { frameWidth: 100, frameHeight: 100}
    );
    scene.load.spritesheet('villainFinalBossIdle', 
        villainFinalBoss,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('villainFinalBossWalk', 
        villainFinalBossWalk,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('villainFinalBossAttack', 
        villainFinalBossAttack,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('villainFinalBossAttack2', 
        villainFinalBossAttack2,
        { frameWidth: 128, frameHeight: 128}
    );
    scene.load.spritesheet('villainFinalBossDead', 
        villainFinalBossDead,
        { frameWidth: 128, frameHeight: 128}
    );
}
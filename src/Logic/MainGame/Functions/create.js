import animations from "../Animations/animations";
import blockCreate from "../Elements/block";
import villain1 from "../Elements/villain1";
import villainFinalBoss from "../Elements/villainFinalBoss";
import { HeroHealthBar } from '../Functions/HeroHealthBar';

export default function create(scene){
    //\\
    scene.add.image(700, 315, 'bgi').setScale(1.0).setScrollFactor(0);
    //\\
    // scene.add.image(1400, 155, 'heart').setScale(0.3);
    const heart = scene.physics.add.sprite(1400, 155, 'heart2').setScale(0.3).setSize(0, 0).setOffset(0, 10).setCollideWorldBounds(true).setBounce(0.08).setGravityY(300);
    const bar = scene.physics.add.staticGroup().create(1720, 350, 'bar').setSize(0, 0).setOffset(0, 10).setScale(1.1).refreshBody();
    
    //\\
    scene.physics.world.setBounds(0, 0, 2800, 700);
    scene.cameras.main.setBounds(0, 0, 2800, 700);
    //\\

    const block = scene.physics.add.staticGroup();
    // const blockNull = scene.add.image

    blockCreate(block);

    scene.physics.add.staticGroup().create(1475, 685 , 'fire');
    scene.physics.add.staticGroup().create(1625, 685 , 'fire');
   
    const player = scene.physics.add.sprite(55, 550, 'kart').setScale(1.1);
    player.setSize(40, 80).setOffset(50, 24);
    // player.setSize(105, 80).setOffset(0, 25); 
    player.setBounce(0.08);
    player.setCollideWorldBounds(true);
    // player.body.onWorldBounds = true;
    player.body.setGravityY(300);

    villain1(scene)
    villainFinalBoss(scene)

    scene.physics.add.collider(player, block)
    scene.physics.add.collider(scene.villain1, block)
    scene.physics.add.collider(scene.villainFinalBoss, block)
    scene.physics.add.collider(heart, block)
    scene.physics.add.collider(player, bar)

    scene.cameras.main.startFollow(player, true, 0.1, 0.1);
    scene.cameras.main.setFollowOffset(0, 0);

    animations(scene);

    scene.player = player
    scene.heart = heart
    scene.bar = bar
    scene.cursors = scene.input.keyboard.createCursorKeys();

    const screenWidth = scene.scale.width;

    // scene.heroHealthBar = new HeroHealthBar(scene, screenWidth);
    scene.heroHealthBar = new HeroHealthBar(scene, scene.player);

    // // Example: reduce hero health over time (for demo)
    // this.time.addEvent({
    //     delay: 2000,
    //     callback: () => {
    //         this.heroHealthBar.decrease(10);
    //     },
    //     loop: true
    // });
}

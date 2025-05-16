// import Phaser from "phaser"
// import kart from '../assets/kart.png';
// import bgi from "../assets/bgi.jpg"
// import blockimg from "../assets/block.jpg"
// import runimg from "../assets/Player/Run.png"
// import jumpimg from "../assets/Player/Jump.png"

// var config = {
//     type: Phaser.AUTO,
//     width: 1400,
//     height: 700,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 300 },
//             debug: false
//         }
//     },
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
//     this.load.image('bgi', bgi);
//     this.load.image('blockimg', blockimg);
//     this.load.spritesheet('kart', 
//         kart,
//         { frameWidth: 128, frameHeight: 128}
//     );
//     this.load.spritesheet('runimg', 
//         runimg,
//         { frameWidth: 128, frameHeight: 128}
//     );
//     this.load.spritesheet('jumpimg', 
//         jumpimg,
//         { frameWidth: 128, frameHeight: 128}
//     );
    
// }

// var block;
// var player;
// var cursors;

// function create ()
// {
//     this.add.image(700, 300, 'bgi').setScale(1.3).setScrollFactor(0);;

//     this.physics.world.setBounds(0, 0, 2800, 700);
//     this.cameras.main.setBounds(0, 0, 2800, 700);

//     block = this.physics.add.staticGroup();
//     for (let i = 25; i < 2800; i+=50) {
//         block.create(i, 675, 'blockimg').setScale(0.051025).refreshBody();
//     }

//     // block.create(350,300,'blockimg').setScale(0.051025)
//     block.create(400,300,'blockimg').setScale(0.051025).refreshBody();

   
//     player = this.physics.add.sprite(0, 550, 'kart').setScale(1.5);
//     player.setBounce(0.2);
//     player.setCollideWorldBounds(true);
//     // player.body.onWorldBounds = true;
//     player.body.setGravityY(300);


//     this.physics.add.collider(player, block)

//     this.cameras.main.startFollow(player, true, 0.1, 0.1);
//     this.cameras.main.setFollowOffset(0, 0);

//     this.anims.create({
//         key: 'idle',
//         frames: this.anims.generateFrameNumbers('kart', { start: 0, end: 8 }),
//         frameRate: 10,
//         repeat: -1
//     });

//     this.anims.create({
//         key: 'left',
//         frames: this.anims.generateFrameNumbers('runimg', { start: 0, end: 7 }),
//         frameRate: 10,
//         repeat: -1
//     });
    
//     this.anims.create({
//         key: 'right',
//         frames: this.anims.generateFrameNumbers('runimg', { start: 0, end: 7 }),
//         frameRate: 10,
//         repeat: -1
//     });

//     this.anims.create({
//         key: 'up',
//         frames: this.anims.generateFrameNumbers('jumpimg', { start: 0, end: 7 }),
//         frameRate: 10,
//         repeat: -1
//     });  
    
    

// }

// function update ()
// {
//     cursors = this.input.keyboard.createCursorKeys();
//     let playerfaceright = true;
//     // player.body.onWorldBounds = true;

//     if (cursors.left.isDown && player.body.touching.down){
//         player.setVelocityX(-200);
//         player.setFlipX(true);
//         player.anims.play('left', true);
//         playerfaceright = false;
//     }
//     else if (cursors.right.isDown && player.body.touching.down){
//         player.setVelocityX(200);
//         player.setFlipX(false);
//         player.anims.play('right', true);
//         playerfaceright = true;
//     }

//     if (cursors.up.isDown){
//         player.anims.play('up', true);
//         if(player.body.touching.down){
//             player.setVelocityY(-630)
//         }
//         if (cursors.left.isDown) {
//             player.setVelocityX(-200);
//         } else if (cursors.right.isDown) {
//             player.setVelocityX(200);
//         }
        
//     }
//     if(!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown){
//         player.setVelocityX(0);
//         player.anims.play('idle', true);
//     }
    
// }


// export default config
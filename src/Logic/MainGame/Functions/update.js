import Phaser from "phaser"

let playerattacking = false;
let villain1Dead = false;
let hero_Damage = 0;
let heroDeathTriggered = false
let hero_dead_anim_done = false

let villain1DeathTriggered = false
let playerattackingVillainFinalBoss = false
let villain1Cooldown = false;
let HeroDead = false;
let villainWalk = true;

let damageVillain1 = 0;
let playerattackingV1 = false

let initiation = false;
let villainFinalBossDead = false;
let villainFinalBossWalk = true;
let villainFinalBossCooldown = false
let villainFinalBossDeathTriggered = false
let damageVillainFinalBoss = 0;

function triggerVillainAttack(scene) {
    const villain1 = scene.villain1;
    // villain1.anims.play('villain1Attack', true);
    // villain1AttackCount++;
    if(villainWalk){
        villain1.anims.play('villain1Attack2', false);
    }
    villainWalk = false;
    
    villain1Cooldown = true;
    villain1.setVelocityX(0);

    scene.time.delayedCall(1000, () => {
        villain1Cooldown = false;
        if(!villain1Dead){
            villain1.anims.play('villain1Attack', true);
        }
        if(Math.abs(scene.villain1.x - scene.player.x) < 50 && Math.abs(scene.villain1.y - scene.player.y) < 80 && !HeroDead && !villain1Dead){
            scene.heroHealthBar.decrease(20);
            hero_Damage+=20;
        }  
    }, [], scene); 
}
function triggerVillainFinalBossAttack(scene) {
    const villainFinalBoss = scene.villainFinalBoss;
    if(villainFinalBossWalk && villainFinalBossDead){
        villainFinalBoss.anims.play('villainFinalBossAttack2', false);
    }
    villainFinalBossWalk = false;
    
    villainFinalBossCooldown = true;
    villainFinalBoss.setVelocityX(0);

    scene.time.delayedCall(1000, () => {
        villainFinalBossCooldown = false;
        if(!villainFinalBossDead && scene.villainFinalBoss.y > 500){
            villainFinalBoss.anims.play('villainFinalBossAttack', true);
        }
        if(Math.abs(scene.villainFinalBoss.x - scene.player.x) < 50 && scene.villainFinalBoss.y > 500 && !HeroDead && !villainFinalBossDead){
            scene.time.delayedCall(1000, () => {
                if(!villainFinalBossDead && scene.player.y > 500){
                    scene.heroHealthBar.decrease(33);
                    hero_Damage+=33;
                }      
            }, [], scene);   
        }    
    }, [], scene);   
}

export default function update(scene){
    const cursors = scene.cursors
    const player = scene.player
    const villain1 = scene.villain1
    const villainFinalBoss = scene.villainFinalBoss;
    let playerfaceright = true;

    scene.heroHealthBar.updatePosition();


    // player.body.onWorldBounds = true;

    // villain1.anims.play('villain1.idle', true)
    // let distance = Phaser.Math.Distance.Between(scene.player.x, scene.player.y, scene.villain1.x, scene.villain1.y)
    // let distance2 = Phaser.Math.Distance.Between(150, 0, scene.villain1.x, 0)

    if(damageVillain1 >= 100){
        villain1Dead = true
    }
    if(damageVillainFinalBoss >= 100){
        villainFinalBossDead = true

        scene.time.delayedCall(1000, () => {
            HeroDead = false
            scene.scene.start('Victory')
            damageVillainFinalBoss = 0
            damageVillain1 = 0
            villainFinalBossDead = false
            villain1Dead = false
            villainFinalBossCooldown = false;

            }, [], scene);
    }
    if(hero_Damage >=100){
        HeroDead = true
        scene.time.delayedCall(1500, () => {
            scene.scene.start('GameOver')
        }, [], scene);   
    }
    if(villain1Dead){
        scene.bar.destroy();
    }
    if(!villain1Dead){
        // if (Math.abs(distance) > 50 && Math.abs(distance) < 500 && scene.player.y < 400) {
        //     // console.log(distance)
        //     if (scene.player.x > scene.villain1.x) {
        //         scene.villain1.setVelocityX(30);
        //         scene.villain1.anims.play('villain1Walk', true)
        //         scene.villain1.setFlipX(false);  // Facing right
        //         // console.log("q")
        //     } else {
        //         scene.villain1.setVelocityX(-30);
        //         scene.villain1.setFlipX(true);   // Facing left
        //         // console.log("r")
        //     }
        // } 
        // else if (Math.abs(distance) <= 50) {
        //     scene.villain1.setVelocityX(0);
        //     scene.villain1.anims.play('villain1Attack', true)
        //     villain1Attack(scene);
        // } 
        // else if (distance > 350 && distance2 != 0) {
        //     if (distance2 > 0) {
        //         scene.villain1.setVelocityX(-30);
        //         scene.villain1.setFlipX(true);  // Facing left
        //     } else if (distance2 < 0) {
        //         scene.villain1.setVelocityX(30);
        //         scene.villain1.setFlipX(false); // Facing right
        //     }
        // } 
        // else if (Math.abs(distance2) < 30) {
        //     scene.villain1.setVelocityX(0);
        //     scene.villain1.setFlipX(false)
        // }
        // else if(distance2==0){
        //     scene.villain1.setFlipX(false)
        // }
        
        if(scene.villain1.x < scene.player.x && (scene.villain1.x - scene.player.x) > -350 && scene.player.y < 400  && !HeroDead){
            if((scene.villain1.x - scene.player.x) < -50){
                scene.villain1.setVelocityX(40)
                scene.villain1.anims.play('villain1Walk', true);
                scene.villain1.setFlipX(false)
                villainWalk = true;
            }
            // else{
            //     // scene.villain1.anims.play('villain1Attack', true)
            //     // scene.time.delayedCall(1000, () => {
            //     //     scene.villain1.anims.play('villain1Attack', true)
            //     //     villain1AttackCount++
            //     //   }, [], scene);
            //     triggerVillainAttack(scene);
            //     scene.villain1.setVelocityX(0)
            // }
            else{
                // scene.villain1.anims.play('villain1.idle', true);
                scene.villain1.setVelocityX(0)
                if (!villain1Cooldown) {
                    triggerVillainAttack(scene);
                }
            }
        }
        else if(scene.villain1.x > scene.player.x && (scene.villain1.x - scene.player.x) < 350 && scene.player.y < 400  && !HeroDead){
            if((scene.villain1.x - scene.player.x) > 50){
                scene.villain1.setVelocityX(-40)
                scene.villain1.anims.play('villain1Walk', true)
                scene.villain1.setFlipX(true)
                villainWalk = true;
            }
            // else{
            //     // scene.villain1.anims.play('villain1Attack', true)
            //     // scene.time.delayedCall(1000, () => {
            //     //     scene.villain1.anims.play('villain1Attack', true)
            //     //     villain1AttackCount++
            //     //   }, [], scene);
            //     triggerVillainAttack(scene);
            //     scene.villain1.setVelocityX(0)
            // }
            else{
                // scene.villain1.anims.play('villain1.idle', true);
                scene.villain1.setVelocityX(0)
                if (!villain1Cooldown) {
                    triggerVillainAttack(scene);
                }
            }
        }
        else if(scene.villain1.x != 150  && !HeroDead){

            if(scene.villain1.x > 150 && Math.abs(scene.villain1.x - 150)>10){
                scene.villain1.setVelocityX(-40)
                villainWalk = true;
                scene.villain1.anims.play('villain1Walk', true)
                scene.villain1.setFlipX(true)
            }
            else if(scene.villain1.x < 150 && Math.abs(scene.villain1.x - 150)>10){
                scene.villain1.setVelocityX(+40)
                villainWalk = true;
                scene.villain1.anims.play('villain1Walk', true)
                scene.villain1.setFlipX(false)
            }
        }
        else if((scene.villain1.x - scene.player.x) < -25 && (scene.villain1.x - scene.player.x) > 25  && !HeroDead){
            scene.villain1.anims.play('villain1Attack', true)
        }
        // else if(scene.villain1.x - 150 < 10 ){
        //     scene.villain1.setVelocityX(0)
        //     scene.villain1.anims.play('villain1.idle', true)
        //     // console.log("hahaah")
        //     scene.villain1.setFlipX(false)
        // }
        else{
            scene.villain1.setVelocityX(0)
            scene.villain1.anims.play('villain1.idle', true)
            // console.log("hahaah")
            scene.villain1.setFlipX(false)
        }
    }
    else if (villain1Dead && !villain1DeathTriggered) {
        villain1DeathTriggered = true;
        scene.villain1.setVelocityX(0)
        
        scene.villain1.anims.play('villain1Dead', true)
        villain1.on('animationcomplete', function(anim) {
            if (anim.key === 'villain1Dead') {
                villain1.anims.stop();
                villain1.setFrame(villain1.anims.currentAnim.frames.length - 1);
            }
        });
        return;
    }


    if(!villainFinalBossDead){
        if(scene.villainFinalBoss.x < scene.player.x && (scene.villainFinalBoss.x - scene.player.x) > -550 && scene.player.y > 400  && !HeroDead){
            if((scene.villainFinalBoss.x - scene.player.x) < -50){
                scene.villainFinalBoss.setVelocityX(100)
                scene.villainFinalBoss.anims.play('villainFinalBossWalk', true);
                scene.villainFinalBoss.setFlipX(false)
                villainFinalBossWalk = true;
            }
            else{
                scene.villainFinalBoss.setVelocityX(0)
                if (!villainFinalBossCooldown) {
                    triggerVillainFinalBossAttack(scene);
                }
            }
        }
        else if(scene.villainFinalBoss.x > scene.player.x && (scene.villainFinalBoss.x - scene.player.x) < 550 && scene.player.y > 400  && !HeroDead){
            if((scene.villainFinalBoss.x - scene.player.x) > 50){
                scene.villainFinalBoss.setVelocityX(-100)
                scene.villainFinalBoss.anims.play('villainFinalBossWalk', true)
                scene.villainFinalBoss.setFlipX(true)
                villainFinalBossWalk = true;
            }
            else{
                scene.villainFinalBoss.setVelocityX(0)
                if (!villainFinalBossCooldown) {
                    triggerVillainFinalBossAttack(scene);
                }
            }
        }
        // else if(scene.villainFinalBoss.x != 150  && !HeroDead){
    
        //     if(scene.villainFinalBoss.x > 150 && Math.abs(scene.villainFinalBoss.x - 150)>10){
        //         scene.villainFinalBoss.setVelocityX(-40)
        //         villainWalk = true;
        //         scene.villainFinalBoss.anims.play('villainFinalBossWalk', true)
        //         scene.villainFinalBoss.setFlipX(true)
        //     }
        //     else if(scene.villainFinalBoss.x < 150 && Math.abs(scene.villainFinalBoss.x - 150)>10){
        //         scene.villainFinalBoss.setVelocityX(+40)
        //         villainFinalBossWalk = true;
        //         scene.villainFinalBoss.anims.play('villainFinalBossWalk', true)
        //         scene.villainFinalBoss.setFlipX(false)
        //     }
        // }
        else if((scene.villainFinalBoss.x - scene.player.x) < -25 && (scene.villainFinalBoss.x - scene.player.x) > 25  && !HeroDead){
            scene.villainFinalBoss.anims.play('villainFinalBossAttack', true)
        }
    
        else{
            scene.villainFinalBoss.setVelocityX(0)
            scene.villainFinalBoss.anims.play('villainFinalBoss', true)
            if(!initiation){
                scene.villainFinalBoss.setFlipX(true)
                initiation = true
            }
            
        }
    }
    else if (villainFinalBossDead && !villainFinalBossDeathTriggered) {
        villainFinalBossDeathTriggered = true;
        scene.villainFinalBoss.setVelocityX(0)
        
        scene.villainFinalBoss.anims.play('villainFinalBossDead', true)
        villainFinalBoss.on('animationcomplete', function(anim) {
            if (anim.key === 'villainFinalBossDead') {
                villainFinalBoss.anims.stop();
                villainFinalBoss.setFrame(villainFinalBoss.anims.currentAnim.frames.length - 1);
            }
        });
        return;
    }
    







    if(!playerattacking && !HeroDead){
        if (cursors.left.isDown && player.body.touching.down){
            player.setVelocityX(-200);
            player.setFlipX(true);
            player.anims.play('left', true);
            playerfaceright = false;
        }
        else if (cursors.right.isDown && player.body.touching.down){
            player.setVelocityX(200);
            player.setFlipX(false);
            player.anims.play('right', true);
            playerfaceright = true;
        }
        
        if (cursors.left.isDown && !player.body.touching.down && !cursors.up.isDown){
            player.setVelocityX(-200);
            player.setFlipX(true);
            player.anims.play('superup');
            playerfaceright = true;
        }
        else if (cursors.right.isDown && !player.body.touching.down && !cursors.up.isDown){
            player.setVelocityX(200);
            player.setFlipX(false);
            player.anims.play('superup');
            playerfaceright = true;
        }
    
        if (cursors.up.isDown){
            if(player.body.touching.down){
                player.anims.play('up', true);
            }
            if(player.body.touching.down){
                player.setVelocityY(-475)
            }
            if (cursors.left.isDown) {
                player.setVelocityX(-150);
            } else if (cursors.right.isDown) {
                player.setVelocityX(150);
            }  
            if (!player.body.touching.down){
                if (cursors.left.isDown){
                    player.setVelocityX(-200);
                    player.setFlipX(true);
                    // player.anims.play('superup');
                    playerfaceright = false;
                }
                else if (cursors.right.isDown){
                    player.setVelocityX(200);
                    player.setFlipX(false);
                    // player.anims.play('superup');
                    playerfaceright = true;
                }  
            }
        }
        if(!cursors.left.isDown && !cursors.right.isDown && !cursors.up.isDown && !playerattacking){
            player.setVelocityX(0);
            player.anims.play('idle', true);
        }
    
    }
    if(HeroDead){
        scene.player.setVelocityX(0)
        if(!heroDeathTriggered){
            heroDeathTriggered = true;
            player.anims.play('hero_dead', true);
            player.on('animationcomplete', function(anim) {
                hero_dead_anim_done = true
                // player.anims.play('hero_dead_f', true)
            });
            return;
        }
        if(hero_dead_anim_done){
            console.log("entered here")
            player.anims.play('hero_dead_f', true)
        }
        // player.anims.play('hero_dead_f', true)  
    }

var keyObject1 = scene.input.keyboard.addKey("Z");
var keyObject2 = scene.input.keyboard.addKey("X");
var keyObject3 = scene.input.keyboard.addKey("C");

if (Phaser.Input.Keyboard.JustDown(keyObject1) && !HeroDead && !playerattackingV1 && !playerattackingVillainFinalBoss) {
    playerattacking = true
    player.setVelocityX(0)
    player.anims.play('attack_1', true);
    player.once('animationcomplete', function (anim) {
        if (anim.key === 'attack_1') {
            playerattacking = false;
        }
    });
    if(Math.abs(scene.villain1.x - scene.player.x) < 50 && Math.abs(scene.villain1.y - scene.player.y) < 80 && !HeroDead && !villain1Dead){
        playerattackingV1 = true
        scene.time.delayedCall(500, () => {
            damageVillain1 += 20
            scene.villainHealthBar.decrease(20);
            playerattackingV1 = false
        }, [], scene);
    }
    if(Math.abs(scene.villainFinalBoss.x - scene.player.x) < 50 && !HeroDead && !villainFinalBossDead){
        playerattackingVillainFinalBoss = true
        scene.time.delayedCall(500, () => {
            damageVillainFinalBoss += 15
            scene.villainFinalBossHealthBar.decrease(15);
            playerattackingVillainFinalBoss = false
        }, [], scene);
    }
}
else if (Phaser.Input.Keyboard.JustDown(keyObject2) && !HeroDead && !playerattackingV1 && !playerattackingVillainFinalBoss) {
    playerattacking = true
    player.setVelocityX(0)
    player.anims.play('attack_2', true);
    player.once('animationcomplete', function (anim) {
        if (anim.key === 'attack_2') {
            playerattacking = false;
        }
    });
    if(Math.abs(scene.villain1.x - scene.player.x) < 50 && Math.abs(scene.villain1.y - scene.player.y) < 80 && !HeroDead && !villain1Dead){
        playerattackingV1 = true
        scene.time.delayedCall(500, () => {
            damageVillain1 += 22
            scene.villainHealthBar.decrease(22);
            playerattackingV1 = false
        }, [], scene);
    }
    if(Math.abs(scene.villainFinalBoss.x - scene.player.x) < 50 && !HeroDead && !villainFinalBossDead){
        playerattackingVillainFinalBoss = true
        scene.time.delayedCall(500, () => {
            damageVillainFinalBoss += 17
            scene.villainFinalBossHealthBar.decrease(17);
            playerattackingVillainFinalBoss = false
        }, [], scene);
    }
}
else if (Phaser.Input.Keyboard.JustDown(keyObject3) && !HeroDead && !playerattackingV1 && !playerattackingVillainFinalBoss) {
    playerattacking = true
    player.setVelocityX(0)
    player.anims.play('attack_3', true);
    player.once('animationcomplete', function (anim) {
        if (anim.key === 'attack_3') {
            playerattacking = false;
        }
    });
    if(Math.abs(scene.villain1.x - scene.player.x) < 50 && Math.abs(scene.villain1.y - scene.player.y) < 80 && !HeroDead && !villain1Dead){
        playerattackingV1 = true
        scene.time.delayedCall(500, () => {
            damageVillain1 += 24
            scene.villainHealthBar.decrease(24);
            playerattackingV1 = false
        }, [], scene);
    }
    if(Math.abs(scene.villainFinalBoss.x - scene.player.x) < 50 && !HeroDead && !villainFinalBossDead){
        playerattackingVillainFinalBoss = true
        scene.time.delayedCall(500, () => {
            damageVillainFinalBoss += 19
            scene.villainFinalBossHealthBar.decrease(19);
            playerattackingVillainFinalBoss = false
        }, [], scene);
    }
} 



if(scene.villain1 && scene.villainHealthBar) {
    scene.villainHealthBar.updatePosition(scene.villain1.x - 32, scene.villain1.y - 50);
}
if(scene.villainFinalBoss && scene.villainFinalBossHealthBar) {
    scene.villainFinalBossHealthBar.updatePosition(scene.villainFinalBoss.x - 32, scene.villainFinalBoss.y - 50);
}

if(scene.player.x > 1400 && scene.player.x < 1700 && scene.player.y > 625){
    // console.log("hello")
    // console.log(scene.player.x);
    hero_Damage+=100;
    for (let i = 0; i < 5; i++) {
        scene.time.delayedCall(200 * i, () => {
            scene.heroHealthBar.decrease(20);
        }, [], scene);
    }
}
if(scene.player.x > 1370 && scene.player.x < 1420 && scene.player.y < 200 && scene.player.y >100){
    scene.heart.destroy()
    hero_Damage = 0;
    scene.heroHealthBar.setValue(100)
    console.log(scene.player.x)
    console.log(scene.player.y)

}

}
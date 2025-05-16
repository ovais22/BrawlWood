import Phaser from 'phaser'
import MainGame from './MainGame/MainGame';
import MainMenuScene from './MainMenuScene/MainMenuScene';
import GameOverScene from './GameOverScene/GameOverScene';
import Victory from './Victory/Victory';
var conf = {
    type: Phaser.AUTO,
    width: 1400,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [MainMenuScene, MainGame, GameOverScene, Victory]
};

export default conf
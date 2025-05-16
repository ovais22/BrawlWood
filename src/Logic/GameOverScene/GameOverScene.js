import Phaser from "phaser";
import menu_bg from "../../assets/menu_bg.png"
import menu_music from "../../assets/menu_theme.mp3"


export default class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOver' });
    }

    preload() {
        this.load.image('menu_bg', menu_bg);
        this.load.audio('menu_music', menu_music);
    }

    create() {
        this.add.image(700, 315, 'menu_bg').setScale(1.0).setScrollFactor(0);
        
        this.add.text(700, 180, '💀 Game Over 💀', {
            fontSize: '54px',
            color: '#ff4444',
            fontFamily: 'Doto',
            stroke: '#FFFFFF',
            strokeThickness: 3,
            backgroundColor: '#000',
            padding: {x:10, y: 10},
        }).setOrigin(0.5);

        this.add.text(700, 250, 'The darkness consumed you...', {
            fontSize: '20px',
            color: '#000000',
            fontFamily: 'Doto',stroke: '#000',
            strokeThickness: 1,
        }).setOrigin(0.5);

        this.add.text(20, 560, 'Controls:\n\nMove: ← → ↑\n\nAttack: Z, X, C', {
            fontSize: '24px',
            fontFamily: 'Doto',
            color: '#FFFFFF',
            stroke: '#FFFFFF',
            strokeThickness: 1,
        });

        const retryButton = this.add.text(700, 380, '[ Retry ]', {
            fontSize: '32px',
            color: '#ffffff',
            backgroundColor: '#550000',
            padding: { x: 20, y: 10 },
            fontFamily: 'Doto',
            stroke: '#FFFFFF',
            strokeThickness: 1,
        }).setOrigin(0.5).setInteractive();

        retryButton.on('pointerover', () => {
            retryButton.setStyle({ backgroundColor: '#880000' });
        });
        retryButton.on('pointerout', () => {
            retryButton.setStyle({ backgroundColor: '#550000' });
        });
        retryButton.on('pointerdown', () => {
            location.reload();
        });

        const music = this.sound.add('menu_music', { loop: true });
        music.play();

    }
}

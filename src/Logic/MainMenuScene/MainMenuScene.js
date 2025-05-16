import Phaser from "phaser";
import menu_bg from "../../assets/menu_bg.png"
import menu_music from "../../assets/menu_theme.mp3"

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        this.load.image('menu_bg', menu_bg);
        this.load.audio('menu_music', menu_music);
    }

    create() {
        this.add.image(700, 350, 'menu_bg').setDisplaySize(1400, 700);

        this.add.text(700, 180, ' BrawlWood ', {
            fontSize: '68px',
            fontFamily: 'Doto',
            color: '#D9D6FF',
            stroke: '#FFFFFF',
            strokeThickness: 3.5,
            backgroundColor: '#101010',
            padding: { x: 10, y: 10 },
        }).setOrigin(0.5);

        this.add.text(20, 560, 'Controls:\n\nMove: ← → ↑\n\nAttack: Z, X, C', {
            fontSize: '24px',
            fontFamily: 'Doto',
            color: '#FFFFFF',
            stroke: '#FFFFFF',
            strokeThickness: 1,
        });

        const startText = this.add.text(700, 350, '[ Start Game ]', {
            fontSize: '32px',
            fontFamily: 'Doto',
            color: '#FFFFFF',
            stroke: '#FFFFFF',
            strokeThickness: 1,
            backgroundColor: '#550000',
            padding: { x: 10, y: 5 },
        }).setOrigin(0.5).setInteractive();

        startText.on('pointerover', () => {
            startText.setStyle({ backgroundColor: '#770000' });
        });

        startText.on('pointerout', () => {
            startText.setStyle({ backgroundColor: '#550000' });
        });

        startText.on('pointerdown', () => {
            this.scene.start('MainGame');
            music.stop();

        });

        const music = this.sound.add('menu_music', { loop: true });
        music.play();
    }
}

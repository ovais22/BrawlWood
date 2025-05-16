import Phaser from "phaser";
import menu_bg from "../../assets/menu_bg.png"
import menu_music from "../../assets/menu_theme.mp3"


export default class Victory extends Phaser.Scene {
    constructor() {
        super({ key: 'Victory' });
    }

    preload() {
        this.load.image('menu_bg', menu_bg);
        this.load.audio('menu_music', menu_music);
    }

    create() {
        this.add.image(700, 315, 'menu_bg').setScale(1.0).setScrollFactor(0);
        this.add.text(700, 190, ' 🏆You Won🏆 ', {
            fontSize: '54px',
            fontFamily: 'Doto',
            color: '#005500',
            stroke: '#FFFFFF',
            strokeThickness: 3,
            backgroundColor: '#000',
            padding: {x:10, y: 10},
        }).setOrigin(0.5);

        const playAgain = this.add.text(700, 340, '[ Play Again ]', {
            fontSize: '24px',
            color: '#ffffff',
            backgroundColor: '#550000',
            padding: { x: 20, y: 10 },
            fontFamily: 'Doto',
            stroke: '#FFFFFF',
            strokeThickness: 1,
        }).setOrigin(0.5).setInteractive();

        playAgain.on('pointerover', () => {
            playAgain.setStyle({ backgroundColor: '#770000' });
        });
        playAgain.on('pointerout', () => {
            playAgain.setStyle({ backgroundColor: '#550000' });
        });
        playAgain.on('pointerdown', () => {
            location.reload();
        });
        
        const music = this.sound.add('menu_music', { loop: true });
        music.play();
    
    }
   
}

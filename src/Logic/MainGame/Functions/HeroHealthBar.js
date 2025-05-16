export class HeroHealthBar {
    constructor(scene, hero, width = 64, height = 6) {
        this.scene = scene;
        this.hero = hero;
        this.x = hero.x - width / 2;
        this.y = hero.y - 40;
        this.value = 100;
        this.maxWidth = width;
        this.height = height;
        this.divisions = 5;

        this.bar = scene.add.graphics();
        this.bar.setDepth(10);

        this.heart = scene.add.image(0, 0, 'heart');
        this.heart.setDisplaySize(16, 16);
        this.heart.setDepth(10);

        this.draw();
    }

    draw() {
        this.bar.clear();

        const borderWidth = 2;
        const filledWidth = (this.value / 100) * this.maxWidth;

        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x - borderWidth, this.y - borderWidth, this.maxWidth + borderWidth * 2, this.height + borderWidth * 2);

        this.bar.fillStyle(0x003300);
        this.bar.fillRect(this.x, this.y, this.maxWidth, this.height);

        this.bar.fillStyle(0x00cc44);
        this.bar.fillRect(this.x, this.y, filledWidth, this.height);

        this.bar.lineStyle(1, 0x000000);
        const step = this.maxWidth / this.divisions;
        for (let i = 1; i < this.divisions; i++) {
            const dx = this.x + i * step;
            this.bar.beginPath();
            this.bar.moveTo(dx, this.y);
            this.bar.lineTo(dx, this.y + this.height);
            this.bar.strokePath();
        }

        this.heart.setPosition(this.x - 12, this.y + this.height / 2);
    }

    decrease(amount) {
        this.value = Phaser.Math.Clamp(this.value - amount, 0, 100);
        this.draw();
    }

    increase(amount) {
        this.value = Phaser.Math.Clamp(this.value + amount, 0, 100);
        this.draw();
    }

    setValue(value) {
        this.value = Phaser.Math.Clamp(value, 0, 100);
        this.draw();
    }

    updatePosition() {
        this.x = this.hero.x - this.maxWidth / 2;
        this.y = this.hero.y - 80;
        this.draw();
    }
}

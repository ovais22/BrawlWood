export class HealthBar {
    constructor(scene, x, y, width, height) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.value = 100;
        this.maxWidth = width;
        this.height = height;

        this.bar = scene.add.graphics();
        this.draw();
    }

    draw() {
        this.bar.clear();

        const borderWidth = 2;

        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x - borderWidth, this.y - borderWidth, this.maxWidth + borderWidth * 2, this.height + borderWidth * 2);

        this.bar.fillStyle(0x300000); 
        this.bar.fillRect(this.x, this.y, this.maxWidth, this.height);

        this.bar.fillStyle(0x8B0000);
        this.bar.fillRect(this.x, this.y, (this.value / 100) * this.maxWidth, this.height);
    }

    decrease(amount) {
        this.value = Phaser.Math.Clamp(this.value - amount, 0, 100);
        this.draw();
    }

    setValue(amount) {
        this.value = Phaser.Math.Clamp(amount, 0, 100);
        this.draw();
    }

    updatePosition(x, y) {
        this.x = x;
        this.y = y;
        this.draw();
    }
}

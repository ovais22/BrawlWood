import Phaser from "phaser";
import { preload, create, update } from "./Functions";

export default class MainGame extends Phaser.Scene{
    constructor() {
        super({ key: 'MainGame' });
    }

    preload() {
        preload(this);
    }
    create() {
        create(this);
    }
    update() {
        update(this);
    }
}
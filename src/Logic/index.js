import Phaser from 'phaser';
import conf from './conf';

let game;
export const thisGame =  (parentID) =>{
    game = new Phaser.Game({...conf, parent: parentID});
}
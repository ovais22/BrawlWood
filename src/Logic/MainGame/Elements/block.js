export default function blockCreate(block){

    for (let i = 25; i < 2800; i+=50) {
        if(i>=1425 && i<=1675){
            continue;
        }
        block.create(i, 690, 'blockimg');
    }

    for (let i = 25; i < 700; i+=50) {
        block.create(i, 10, 'blockimg');
    }

    for (let i = 25; i < 100; i+=50) {
        block.create(700,i , 'blockimg');
    }

    block.create(600, 285 , 'blockimg');

    for (let i = 25; i < 350; i+=50) {
        block.create(25, i, 'blockimg');
    }
    for (let i = 0; i < 9; i++) {
        let k = 630 + i*50;
        block.create(k,505,'blockimg');   
    }
    for (let i = 0; i < 15; i++) {
        let k = i*50;
        block.create(k, 335,'blockimg');   
    }

    block.create(1125, 415 , 'blockimg');
    block.create(1225, 315 , 'blockimg');
    block.create(1325, 215 , 'blockimg');

    block.create(975, 25 , 'blockimg');
    for (let i = 975; i < 2800; i+=50) {
        block.create(i, 10 , 'blockimg');
        
    }
    for (let i = 1375; i < 1500; i+=50) {
        block.create(i, 215 , 'blockimg');
        
    }
    block.create(1325, 665 , 'blockimg');
    block.create(1375, 665 , 'blockimg');
    block.create(1725, 665 , 'blockimg');
    block.create(1775, 665 , 'blockimg');

    for (let i = 0; i <= 450; i+=50) {
        block.create(2775, i , 'blockimg');
        
    }
    block.create(2725, 450 , 'blockimg');

}

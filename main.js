//*** リソースの登録 ***
var assets = [
    //
    "images/e_tanuki.png",
    "images/title.png",// タイトル
];

//9leap screen size
let GAME_SCREENSIZE_W = 320;
let GAME_SCREENSIZE_H = 320;


function gameStart() {
    //ゲーム画面
    scene = gameManager.createGameScene();
    core.replaceScene(scene);

    //==========
    // ここから
    //==========

    //背景色
    scene.backgroundColor = "darkgray";

    //タヌキを表示
    var tanuki = new ExSprite(32, 32);
    tanuki.image = core.assets["images/e_tanuki.png"];
    tanuki.x = 0;
    tanuki.y = 0;
    scene.addChild(tanuki);


    //スコア送信テスト
    tanuki.addEventListener(Event.TOUCH_START, function(e){
        core.end(score, "score:" + score);
    });


    //スコア表示テスト
    showUIScore(scene);
    scoreLabel.text = "SCORE: " + score;

    //スコア加算テスト
    scene.addEventListener(Event.TOUCH_START, function(e){
        score++;
        scoreLabel.text = "SCORE: " + score;
    });


    //==========
    // ここまで
    //==========
}

function getRandom(start, end) {
    return start + Math.floor( Math.random() * (end - start + 1));
}


function titleStart() {
    // タイトル画面
    var scene = gameManager.createTitleScene();
    core.replaceScene(scene);
    scene.on(enchant.Event.TOUCH_START, function(){
        gameStart();
    });
}


//==========
// EnchantJS
//==========
enchant();
var gameManager;
var core;
var scene;
window.onload = function(){
    gameManager = new common.GameManager();
    core = gameManager.createCore(GAME_SCREENSIZE_W, GAME_SCREENSIZE_H);
    core.preload(assets);
    core.onload = function(){titleStart();};
    core.start();
}

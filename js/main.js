var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
    preload: function() {
        this.load.image('background', 'assets/images/background.jpg');
        this.load.image('chicken', 'assets/images/chicken.png');
    },
    create: function() {
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        this.background = this.game.add.sprite(0, 0, 'background');
        this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken');
        this.chicken.anchor.setTo(0.5, 0.5);
        this.chicken.scale.setTo(0.5);
        this.chicken.angle = 90;
    },
    update: function() {
        this.chicken.angle += 0.5;
    }
};

game.state.add('GameState', GameState );
game.state.start('GameState');

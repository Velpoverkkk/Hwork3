function Jerry(){
    this.x = 200;
    this.y = 300;
    this.speedX = 10;
    this.speedY = 10;
    this.width = 25;
    this.height = 25;
    this.pointCounter = 0;
    var n;

   /* this.move = function(edit){
        if(edit === 'left' ){
            this.x -= this.speedX;
        } else if( edit === ' right' ){
            this.x += this.speedX;
        } else if( edit === 'top' ){
            this.y -= this.speedY;
        } else if( edit === 'bottom' ){
            this.y += this.speedY;
        }
    }*/

this.move =  function(edit) {
    switch(edit) {
        case 'left': this.x -= this.speedX; console.log(this.x)
        break; 
        case 'right': this.x += this.speedX
        break; 
        case 'top': this.y -= this.speedY
        break;
        case 'bottom': this.y += this.speedY
        break;
        default: 
        break; 
       }
   }
}



  function Thomas(){
    this.x = 50;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.speedX = 10;
    this.speedY = 5;
    count = 1;
    this.countThomas = function(){
        setInterval(function(){ 
            count++;
        }, 8000);
    };
};

function draw(){
    square();
    triangle();
    circle();
}
function square(){
    const canva = document.getElementById('square');
    if(canva.getContext){
        let ctx = canva.getContext('2d');
        ctx.fillStyle = "green";
        ctx.fillRect(100, 100, 100, 100);
    } 
}
function triangle(){
    const canva = document.getElementById('triangle');
    if(canva.getContext){
        let ctx = canva.getContext('2d');
        var h = 100 * (Math.sqrt(3)/2);
        let cx = canva.width/2;
        let cy = canva.height/2;
        ctx.fillStyle = "black";
        ctx.save();
        ctx.translate(cx, cy);
        ctx.beginPath();
        ctx.moveTo(0, -h / 2);
        ctx.lineTo( -100 / 2, h / 2);
        ctx.lineTo(100 / 2, h / 2);
        ctx.lineTo(0, -h / 2);
        ctx.fill(); 
        ctx.closePath();
        ctx.save();

    } 
}

function circle(){
    const canva = document.getElementById('circle');
    if(canva.getContext){
        let ctx = canva.getContext('2d');
        ctx.fillStyle = "red";
            ctx.lineWidth = 5;
            ctx.arc(100,100,75,0,2*Math.PI);
            ctx.fill();
    } 
}

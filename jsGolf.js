function golfScore(par, strokes){

    if(strokes === 1){
        console.log("Hole-in-one!");
    }else if(strokes === par-1){
        console.log("Birdie");
    }else if(strokes <= par-2){
        console.log("Eagle");
    }else if(strokes === par){
        console.log("Par");
    }else if(strokes === par+1){
        console.log("Bogey");
    }else if(strokes === par+2){
        console.log("Double Bogey");
    }else{
        console.log("Go Home!");
    }
}

golfScore(4, 1) 
golfScore(4, 2) 
golfScore(5, 2) 
golfScore(4, 3)
golfScore(4, 4) 
golfScore(1, 1) 
golfScore(5, 5) 
golfScore(4, 5)
golfScore(4, 6)
golfScore(4, 7) 
golfScore(5, 9)
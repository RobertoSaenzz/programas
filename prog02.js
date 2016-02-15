function linea(num){
    var guion = "";
    for(i=0;i<num;i++){
        guion = guion + "-";
    }
    return guion
}
console.log(linea(8));
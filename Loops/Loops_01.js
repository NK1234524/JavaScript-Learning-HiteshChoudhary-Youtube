for(let i = 1 ; i<=10 ;i++){
    let val = `5 * ${i} = ${5*i}`
    console.log(val);
    
}

let arrays =["Flash","Butter","Food"]
for(let i = 0 ; i<arrays.length ;i++){
    if(arrays[i]=="Flash"){
        console.log("Found flash");
        break;        
    }
    console.log("1 step up");    
} 
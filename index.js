let N=514;

if (N<=50){
    console.log(80+N*3);
}
else if((N>50)&&(N<=150)){
    console.log(80+(50*3)+(N-50)*5);
}
else if(N>150){
      console.log(80+(50*3)+(100*5)+(N-150)*10);
}
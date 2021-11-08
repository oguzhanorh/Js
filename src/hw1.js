function findPrime(...numbers){
    let count=0;
    for(let i=0; i<numbers.length;i++){
        for(let j=2; j<numbers[i];j++){
            if((numbers[i] % j )==0){
            count++;
        }
    }
    
    if(count == 0 ){
        console.log(numbers[i] + " Sayisi Asaildir...")
    }
    else{
        console.log(numbers[i] + " Sayisi Asal degildir...")
    }
     
    count=0
    }
}

findPrime(25,13,14,15,27,5,7,9,12,16)


function perfectNumber(number){
    console.log(number + "Sayisi mükemmel bir Sayidir..")

}
    let count2=0;
    for(let i=1;i<1000;i++){
        for(let j=1; j<i; j++){
            if((i %j) == 0 ){
                count2 = j+count2;
            }
        }
        if(count2 == i ){
            perfectNumber(i)
        }
        count2 = 0 ;
    }
function primeNumber(number){
    console.log(number + " Sayisi Asal Sayidir...!")
}
 let count =0;
 for(let i =2; i<1000; i++){
     for(let j=2; j<i; j++){
         if((i %j)==0){
             count++
         }
     }
     if(count == 0 ){
         primeNumber(i)
     }
     count =0;
 }

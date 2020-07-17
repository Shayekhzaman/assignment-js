// Question no:01

function feetToMile(num){
    if(num<=0){
       return "Please take positive number"
    }
    else {
        let oneMile=5280,oneFeet,result;
        oneFeet=1/oneMile;
        result=oneFeet*num;
        result=result.toFixed(4);
        return num+" foot = "+result+" mile.";
    }
    
}
let mile=feetToMile(26400);
console.log(mile);


// Question no:02

 function woodCalculator(chair,table,bed){
     let i,sum=0,number=[chair,table,bed]
     for(i=0;i<3;i++){
         
         if(number[i]<0){
             sum=sum+1;
         }
    }
    if(sum>0){
        return "Error! Don't take Negative number"
    }
    else{
      chair=chair*1,table=table*3,bed=bed*5;
      let total=chair+table+bed;
      return "Required wood = "+total+" qubic foot"
    }
     
 }
 let wood=woodCalculator(chair=6,table=1,bed=2);
  console.log(wood);


//Question no:03

function brickCalculator(num){
    if(num<0){
        return "Must be needes positive value"
    }
    else{
        let i,sum,need,sum1=0,sum2=0,sum3=0;
        for(i=1;i<=num;i++){
            if(i>0 && i<=10){
                sum1=sum1+1;            
            }
            else if(i>10 && i<=20){
                sum2=sum2+1;
            }
            else{
                sum3=sum3+1;
            }
        }
         sum =sum1*15+sum2*12+sum3*10;
         need=sum*1000;
         return need+" Pieces";
    }
}
let bricks=brickCalculator(10);
console.log(bricks);

// Question no:04

function tinyFriend(name){
    let i, array=[name.length];
    for(i=0;i<name.length;i++){
        let nameLength=name[i].length;
        array[i]=nameLength;      
    }
    let smallLength=array[0];
    let smallName=name[0];
    for(i=1;i<array.length;i++){
       if(smallLength>array[i]){
            smallLength=array[i];
            smallName=name[i];      
       } 
    }
    return smallName;    
    }
let friendsName=["shayekh","ashik","akib","jayed","alvi","rafi","mif","arfun"];
let friends=tinyFriend(friendsName);
 console.log(friends);
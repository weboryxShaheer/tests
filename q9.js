function positivenegativezero(arr){
    var positive=0;
    var negative=0;
    var zero=0;
    var len=arr.length;

    for(let i=0;i<len;i++){
        if(arr[i]>0){
            positive++;
        }
        else if(arr[i]<0){
            negative++;
        }
        else if(arr[i]==0){
            zero++;
        }
    }
    console.log(positive/len);
    console.log(negative/len);
    console.log(zero/len);
}
let a=[2,3,-5,-4,0,1];
positivenegativezero(a);
let b=[-8,-6,-6,-7,0,0,1,2,3];
positivenegativezero(b);

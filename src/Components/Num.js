
const Num=(arr)=>{
    var obj = {},
    k  = [];
    for(var i = 0, len = arr.length; i < len; i++) {
        k = arr[i].profile.gender;
        if(obj[k])
            obj[k]++;
        else
            obj[k] = 1;
    }
    // for(var o in obj) {
    //     arr1.push({
    //         gender: o,
    //         count : obj[o]
    //     });
    // }
    return obj
} 
export default Num
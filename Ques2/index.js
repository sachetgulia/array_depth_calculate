
// ------------- helper function -------------------

const __displayOnScreen = (value) => {
  const valueBeautify = JSON.stringify(value, undefined, 2);
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `<h1><pre>${valueBeautify}</pre></h1>`;
};

// ----------- end helper function -------------------

const myArray = [[7, 12], 8, [5, [3, 10], [4, 2]], 3, [1, [2]]];
const calculateNestedSum = (arr) => {
  // todo: implement here
  // 7*2+12*2 + 8*1 + 5*2+ 3*3 + 10*3, ......./
  const ans=fun(arr,1);
  console.log("answer of given prob is :"+ans);
  return ans;
};
const fun=(arr,depth)=>{
    const res=arr.reduce((acc,ele)=>{
        if(typeof(ele)==="object"){
            return acc+fun(ele,depth+1);
        }
        return acc+ele*depth;
    },0)
    return res;
}

const result = calculateNestedSum(myArray);
__displayOnScreen(result);

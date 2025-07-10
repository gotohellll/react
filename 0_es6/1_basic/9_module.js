
let base = 100;
const getBase = ()=> base;

const add = x => base + x; 
const multiple = x => base * x;

// 다른곳에서 가져다쓰기 위해 먼저 export해야 함 
export default getBase; // default : 기본으로 빼는 함수라는 뜻 ?
export {add, multiple}; //기본은 아니지만 내보낼 수 있음 


/* 
    var base = 100;

    function getBase(){
        return base;
    }

    function add(x){
        return base + x;
    }



 */
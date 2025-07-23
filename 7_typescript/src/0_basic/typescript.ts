
function typefunc(n:number){ //ts에서는 자료형을 정확히 기술해야함
    return n*2;
}

console.log(typefunc(100));
// console.log(typefunc('a')); //처음부터 쓰지 못함 

// [실행] ts-node src\0_basic\typescript.ts
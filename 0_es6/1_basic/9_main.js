
import getBase from './9_module.js';
//module.js파일안에 있는 getBase 함수 import , default로 내보냈기 때문에 괄호 없이 사용 가능 
import {add, multiple} from './9_module.js';
// 기본이 아닌 함수를 가져오려면 중괄호 안에 넣어줘야 함 

console.log(getBase());
console.log(add(5));
console.log(multiple(5));
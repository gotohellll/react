import React from "react";
import Comment from './Comment';

const comments = [
    {
        name: "홍순이",
        comment: "안녕하세요",
        imgname : "imgs/img1.PNG",
    },
    {
        name: "홍길동",
        comment: "오늘도 행복~!",
        imgname : "imgs/img2.PNG",
    },
    {
        name: "박길동",
        comment: "리액트~ 화이팅!!!!!",
        imgname : "imgs/img3.PNG",
    },
];

//Each child in a list should have a unique "key" prop. => key부여 
function CommentList() {
    return(
        <div>
            {
                //comments 배열의 요소를 하나씩 뽑아 함수에 적용 (반복)
                comments.map((comment, idx)=>{ //map쓰면 return가능 / map : 집합이들어오고 하나씩 뽑는 element(comment)와 인덱스번호(idx)가들어옴
                    return(
                        <Comment key={idx} 
                                name={comment.name}
                                comment={comment.comment}
                                imgname={comment.imgname}
                        />
                    );
                }) 
            }
        </div>
    );
}

export default CommentList;

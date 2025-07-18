
function BoardUpdateComp () {
    

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center"> 수정 작업을 해주세요</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> 제목 </label>
                                    <input type="text" placeholder="title" name="title" className="form-control"/>
                                </div>
                                <div className = "form-group">
                                    <label> 작성자 </label>
                                    <input type="text" placeholder="writer" name="writer" className="form-control" />
                                </div>
                                <div className = "form-group">
                                    <label> 내용  </label>
                                    <textarea placeholder="content" name="content" className="form-control" />
                                </div>
                                <button className="btn btn-success" >수정하기</button> 
                                <button className="btn btn-danger"style={{marginLeft:"10px"}}>취소하기</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BoardUpdateComp;
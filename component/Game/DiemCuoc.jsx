import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
export default function DiemCuoc(props) {
    const diem = useSelector( (state)=> state.gameReducer.tongDiem);
    const dispatch = useDispatch()
    return (
        <div className="">
            <h1 className="" style={{ color: 'red' }}>game bau cua</h1>
            <div className="text-center ">
                <span style={{fontSize:"20px",padding:"5px 10px",backgroundColor:"black",color:"white",border:"1px solid black",borderRadius:"20px"}}>tien thuong : <span className="text-warning"> {diem.toLocaleString()}</span> </span>
            </div>
            <div className="text-center mt-3 ">
                    <button className="btn btn-danger"
                    onClick={() => {
                        dispatch({
                            type: "Play_Again"
                        })
                    }}
                    >Play Again</button>
            </div>
        </div>
    )
}

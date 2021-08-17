import React from 'react'
import XucXac from './XucXac'
import { useSelector,useDispatch } from 'react-redux'
export default function DsXucXac(props) {
    const dsXucXac = useSelector((state) => state.gameReducer.mangXucXac);
    const dispatch = useDispatch()
    return (
        <div className="text-center ml-5">


            <div className="bg-white ml-5 mt-5" style={{ width: '310px', height: '320px', borderRadius: "150px",}}>
                <div className="row text-center">
                    <div className="col-12 text-right" style={{marginLeft:"80px"}}>
                        <XucXac xucXacItem={dsXucXac[0]} />
                    </div>
                </div>
                <div className="row ">
                   
                    <div className="col-6 text-right" style={{paddingLeft:'50px'}}>
                        <XucXac xucXacItem={dsXucXac[1]} />
                    </div>
                    <div className="col-6 text-right " style={{paddingLeft:'0px'}}>
                        <XucXac xucXacItem={dsXucXac[2]} />
                    </div>
               
                    {/* {renderMang()} */}
                </div>

            </div>
            <div style={{ marginLeft: "-21%" }}>
                <button className="btn btn-info mt-4 mr-5" 
                onClick = {()=>{
                    dispatch({
                        type: "Play_Game"
                    })
                }}
                >Play Game</button>
            </div>
        </div>
    )
}

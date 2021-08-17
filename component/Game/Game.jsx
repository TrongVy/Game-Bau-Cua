import React from 'react'
import DsCuoc from './DsCuoc'
import DsXucXac from './DsXucXac'
import './css/BTGameBauCua.css'
import DiemCuoc from './DiemCuoc'
export default function Game() {
    return (
        <div id="baiTapGameBauCua" className=" container-fluid">
            <div className="text-center">
                    <DiemCuoc/>
            </div>
            <div className="row">
                <div className="col-7 text-center">
                    <DsCuoc />
                </div>
                <div className="col-5">
                    <DsXucXac />
                </div>
            </div>
        </div>
    )
}

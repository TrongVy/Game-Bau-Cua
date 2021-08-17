import React from 'react'
import QuanCuoc from './QuanCuoc'
//useSelector cho phep chung t lay state tu redux ve
import { useSelector } from 'react-redux'
export default function DsCuoc(props) {

    const dsCuoc = useSelector((state) => state.gameReducer.dsCuoc);
    // console.log(dsCuoc)

    return (
        <div className="row mt-5">
            {dsCuoc.map((item, index) => {
                return (
                    <div className="col-4" key={index}>
                        <QuanCuoc item={item} />
                    </div>
                )
            })}


        </div>
    )
}

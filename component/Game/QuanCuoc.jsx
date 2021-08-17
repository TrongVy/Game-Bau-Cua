import React from 'react'
import { useDispatch } from 'react-redux';

export default function QuanCuoc(props) {

    const quanCuoc = props.item;

    // dispatch 1 action len reducer
    const dispatch = useDispatch();
    return (
        <div className="mt-2">
            <img height={150} width={150} src={quanCuoc.hinhAnh} alt="" />
            <div className="mt-1 mb-1 bg-success" style={{ fontSize: "20px", borderRadius: "20px" }} >
                <button className="btn btn-danger"
                    onClick={() => {
                        dispatch({
                            type: 'Dat_Cuoc',
                            quanCuoc,
                            tangGiam: true
                        })
                    }}
                >+</button>
                <span className="ml-1 mr-1" onClick={() => useDispatch}>{quanCuoc.diemCuoc}</span>
                <button className="btn btn-info"
                    onClick={() => {
                        dispatch({
                            type: 'Dat_Cuoc',
                            quanCuoc,
                            tangGiam: false
                        })
                    }}
                >-</button>
            </div>
        </div>
    )
}

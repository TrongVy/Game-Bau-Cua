import React, { Fragment } from 'react'

export default function XucXac(props) {

    return (
        <Fragment >
            <div className="scene"

            >
                <div className="cube">
                    <img className="cube__face front" src={props.xucXacItem.hinhAnh} style={{ width: '100%' }} alt="" />
                    <img className="cube__face back" src='./image/bau.png' style={{ width: '100%' }} alt="" />
                    <img className="cube__face top" src='./image/cua.png' style={{ width: '100%' }} alt="" />
                    <img className="cube__face left" src='./image/tom.png' style={{ width: '100%' }} alt="" />
                    <img className="cube__face right" src='./image/ca.png' style={{ width: '100%' }} alt="" />
                    <img className="cube__face bottom" src='./image/nai.png' style={{ width: '100%' }} alt="" />
                </div>
            </div>
        </Fragment>
    )
}

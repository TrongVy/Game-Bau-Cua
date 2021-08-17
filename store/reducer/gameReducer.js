

const initialState = {
    dsCuoc: [
        { ma: "bau", hinhAnh: './image/bau.png', diemCuoc: 0 },
        { ma: "cua", hinhAnh: './image/cua.png', diemCuoc: 0 },
        { ma: "tom", hinhAnh: './image/tom.png', diemCuoc: 0 },
        { ma: "ca", hinhAnh: './image/ca.png', diemCuoc: 0 },
        { ma: "ga", hinhAnh: './image/ga.png', diemCuoc: 0 },
        { ma: "nai", hinhAnh: './image/nai.png', diemCuoc: 0 }
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: "ca", hinhAnh: './image/ca.png' },
        { ma: "ga", hinhAnh: './image/ga.png' },
        { ma: "nai", hinhAnh: './image/nai.png' }
    ]
}

const gameReducer = (state = initialState, action) => {
    const { type, tangGiam, quanCuoc } = action;
    switch (type) {

        case 'Dat_Cuoc': {
            //tim trong dsCuoc con nào được click
            let dsCuocUpdate = [...state.dsCuoc]
            let index = state.dsCuoc.findIndex((item) => item.ma === quanCuoc.ma);
            if (index !== -1) {

                if (tangGiam && state.tongDiem > 10) {
                    state.dsCuoc[index].diemCuoc += 100;
                    state.tongDiem -= 100;
                } else {
                    if (state.dsCuoc[index].diemCuoc > 0) {
                        state.dsCuoc[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }
            }
            // console.log("dsCuocUpdate",dsCuocUpdate)
            return { ...state, dsCuoc: dsCuocUpdate }
        }
        case "Play_Game": {

            const listNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                let xucXacNgauNhien = state.dsCuoc[soNgauNhien];
                listNgauNhien.push(xucXacNgauNhien);
            }
            // sử lí điểm cộng
            listNgauNhien.forEach((xucXacNN, index) => {
                let indexDatTrung = state.dsCuoc.findIndex((item) => item.ma === xucXacNN.ma);
                if (indexDatTrung !== -1) {
                    console.log("dat trung :", state.dsCuoc[indexDatTrung]);
                    state.tongDiem += state.dsCuoc[indexDatTrung].diemCuoc
                }

            })
            //sử lí hoàn tiền
            state.dsCuoc.forEach((item, index) => {
                let indexXucXacNN = listNgauNhien.findIndex(xucXacNN => xucXacNN.ma === item.ma)
                if (indexXucXacNN !== -1) {
                    state.tongDiem += item.diemCuoc
                }
            })
            // làm mới game
            state.dsCuoc = state.dsCuoc.map((item, index) => {
                return { ...item, diemCuoc: 0 }
            })
            return { ...state, mangXucXac: listNgauNhien }
        }
        case "Play_Again": {
            state.dsCuoc = state.dsCuoc.map((item, index) => {
                return { ...item, diemCuoc: 0}
            })
            return { ...state,tongDiem:1000 }
        }
        default:
            return state
    }
}
export default gameReducer
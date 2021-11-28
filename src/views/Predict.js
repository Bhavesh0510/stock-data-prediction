import React, { useEffect, useState } from 'react'
import "./index.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import axios from 'axios';

function Predict() {
    const [compnyList, setcompnyList] = useState([])
    const [predictedPrice, setpredictedPrice] = useState(0)
    const [companies, setcompanies] = useState([])
    const [selectedCompanyInfo, setselectedCompanyInfo] = useState({})
    const searchStock = (e) => {
        setpredictedPrice(0)
        let name = e.target.value
        fetch(`/get_ticker?query=${name}&exchange=NSI`).then((res) => {
            if (res.status == 200) {
                return res.json()
            }
        })
            .then(data => setcompnyList(data.data))
    }
    const predict = (symbol) => {
        let c = Object.keys(companies);
        console.log(c);
        if (c?.includes(symbol)) {
            setpredictedPrice(companies[symbol])
            setcompnyList([])
        }
        else {
            fetch(`/predict?ticker=${symbol}`).then((res) => {
                if (res.status == 200) {
                    return res.json()
                }
            }).then(data => {
                setpredictedPrice(data.data)
                let obj = {}
                obj[symbol] = data.data
                setcompanies((old) => old.push(obj))
                setcompnyList([])
            })
        }
        fetch(`/fetch_details?ticker=${symbol}`).then((res) => {
            if (res.status == 200) {
                return res.json()
            }
        }).then(data => {
            setselectedCompanyInfo(data)
            console.log(data.INFO);
        })
    }

    return (
        <>
            <div className="stock-name container-sm">
                <div className="form-group stock-name container-sm">
                    <label>Enter Stock name</label>
                    <input type="text" className="form-control" placeholder="Enter Ticker Name" name="tickername" onChange={searchStock} />
                </div>
                <div>
                    { (compnyList && compnyList?.length > 0) || (predictedPrice) ?
                        compnyList?.map(item => <p style={{cursor:"pointer"}} onClick={() =>predict(item.symbol)}>{item?.symbol } : {item?.name}</p>)
                        :<>NO DATA FOUND</>
                    }
                </div>
                <div>
                    {predictedPrice && <p>{predictedPrice}</p>}
                </div>
                </div>
        </>
    )
}

export default Predict

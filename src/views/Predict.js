import React from 'react'
import "./index.css";
import "C:/Users/HP/Desktop/ReactStock/stock-data-prediction/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

function Predict() {

    const onSubmit = () => {

        try {
            const res1 = await fetch(`https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxCompanySearch.jsp?search=${name}`);
            const data1 = await res1.json();
            console.log(data1.data);
            setdata1(data1.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getStockData();
        getGainers();
    }, [])



    return (
        <>
            <form className="form-horizontal" onSubmit={onSubmit}>
                <input type="text" className="inp" placeholder="Enter Stock name" name="stockname" />
                <br />
                <br />
                <button type="button" name="search" className="btn btn-info" id="btn1">Predict</button>
            </form>
        </>
    )
}

export default Predict

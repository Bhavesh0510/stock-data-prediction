import React,{useState,useEffect} from "react";
import ChartistGraph from "react-chartist";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
//import "./index.css";

function Dashboard() {

  const[sta,setstatus] = useState({});
  const[dta,setdata] = useState([]);
  const[dta1,setdata1] = useState([]);
  const[dta2,setdata11] = useState([]);
  const[value,setvalue] = useState([]);
  const[volume,setvolume] = useState([]);

  const getStatus = async()=>{
    try{
   const res0 = await fetch("https://www1.nseindia.com//emerge/homepage/smeNormalMktStatus.json");
   const data0 = await res0.json();
   console.log(data0);
   setstatus(data0);
    }catch(err){
        console.log(err);
    }
};

  const getStockData = async()=>{
      try{
     const res = await fetch("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json");
     const data = await res.json();
     console.log(data.data);
     setdata(data.data);
      }catch(err){
          console.log(err);
      }
  }

  const getGainers = async()=>{
    try{
      const res1 = await fetch("https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json");
     const data1 = await res1.json();
     console.log(data1.data);
     setdata1(data1.data);
      }catch(err){
          console.log(err);
      }
    }

    const getLosers = async()=>{
      try{
        const res11 = await fetch("https://www1.nseindia.com/live_market/dynaContent/live_analysis/losers/niftyLosers1.json");
       const data11 = await res11.json();
       console.log(data11.data);
       setdata11(data11.data);
        }catch(err){
            console.log(err);
        }
      }

    const getValue = async()=>{
      try{
        const res2 = await fetch("https://www1.nseindia.com/live_market/dynaContent/live_analysis/most_active/allTopValue1.json");
       const data2 = await res2.json();
       console.log(data2.data);
       setvalue(data2.data);
        }catch(err){
            console.log(err);
        }
      }

      const getVolume = async()=>{
        try{
          const res3 = await fetch("https://www1.nseindia.com/live_market/dynaContent/live_analysis/most_active/allTopVolume1.json");
         const data3 = await res3.json();
         console.log(data3.data);
         setvolume(data3.data);
          }catch(err){
              console.log(err);
          }
        }

  useEffect(() => {
      getStatus();
      getStockData();
      getGainers();
      getLosers();
      getValue();
      getVolume();
  }, [])


  return (
    <>
      <Container fluid>
        <h4 className="legend" id="st" style={{textAlign:"center"}}><b>Market Status: </b><span style={{color:"#26f10b",textTransform:"uppercase"}}>{sta.NormalMktStatus}</span></h4><hr/>
        <div className="table-responsive" id="ov">
      <table className="table table-dark table-striped"> 
          <thead> 
              <tr style={{position:"sticky"}}> 
                  <th scope="col"><b>Time & Date</b></th> 
                  <th scope="col"><b>Indexname</b></th> 
                  <th scope="col"><b>Open</b></th> 
                  <th scope="col"><b>high</b></th>
                  <th scope="col"><b>low</b></th>
                  <th scope="col"><b>Prev.close</b></th> 
              </tr> 
          </thead> 
            
          <tbody> 
              {
                  dta.map((curelem,index)=>{
                    return(
                        <tr key={index}> 
                    <th scope="row" className="indexname">{curelem.timeVal}</th> 
                    <td className="low">{curelem.indexName}</td> 
                    <td className="high">{curelem.open}</td> 
                    <td className="prevclose">{curelem.high}</td> 
                    <td className="timeval">{curelem.low}</td> 
                    <td className="open">{curelem.previousClose}</td> 
                        </tr>
                    )
                  })
              } 
          </tbody> 
      </table> 
  </div>
  <br></br>
  <br></br>
        <Row>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">NSE Data</Card.Title>
                <p className="card-category">Daily Trade Data Of National Stock Exchange</p>
              </Card.Header><hr/>
              <Card.Body>
              <div className="legend"><p><b>Top Gainers:-</b></p></div>
                <div className="table-responsive">
                  
                <table className="table table-dark table-striped">
                  <thead>
                  <tr>
                    <th scope="col"><b>NAME</b></th>
                    <th scope="col"><b>Open Price</b></th>
                  </tr>
                  </thead>
                    {
                     dta1.map((curelem1,index)=>{
                    return(
                      <tbody>
                        <tr key={index}> 
                      <td className="low"><h5>{curelem1.symbol}</h5></td> 
                      <td className="high"><h5>{curelem1.openPrice}</h5></td> 
                        </tr>
                      </tbody>
                    )
                  })
                  }
                </table>  
                </div>
                <br></br>
                <div className="legend">
                  <i className="fas fa-circle text-info">
                   
                  </i>
                   <i className="fas fa-circle text-danger">
                   </i>    
                </div>
                <hr></hr>
                <Card.Footer>
                <div style={{color:"green"}} className="stats">
                  <i className="fas fa-check"></i>
                  Data Information Certified
                </div>
              </Card.Footer>
              </Card.Body>
            </Card>
          </Col>


          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">NSE Data</Card.Title>
                <p className="card-category">Daily Trade Data Of National Stock Exchange</p>
              </Card.Header><hr/>
              <Card.Body>
                
              <div className="legend">
              <p><b>Top Losers:-</b></p></div>
              <div className="table-responsive">
                  
                  <table className="table table-dark table-striped">
                  <thead>
                  <tr>
                    <th scope="col"><b>NAME</b></th>
                    <th scope="col"><b>Open Price</b></th>
                  </tr>
                  </thead>
              {
                     dta2.map((curelem11,index)=>{
                    return(
                      <tbody>
                        <tr key={index}> 
                      <td className="low"><h5>{curelem11.symbol}</h5></td> 
                      <td className="high"><h5>{curelem11.openPrice}</h5></td> 
                        </tr>
                      </tbody>
                    )
                  })
                  }
                </table>
              </div>
                <br></br>
                <div className="legend">
                  <i className="fas fa-circle text-info">
                   
                  </i>
                   <i className="fas fa-circle text-danger">
                   </i>
                 
                </div><hr></hr>
              <Card.Footer>
                <div style={{color:"green"}} className="stats">
                  <i className="fas fa-check"></i>
                  Data Information Certified
                </div>
              </Card.Footer>
              </Card.Body>
            </Card>
          </Col>


          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Top Value Stocks</Card.Title>
                <p className="card-category"></p>
              </Card.Header><hr/>
              <Card.Body>
              
              <p><b>Top Value Stocks:-</b></p>
              <div className="table-responsive">
                  
                  <table className="table table-dark table-striped">
                  <thead>
                  <tr>
                    <th scope="col"><b>NAME</b></th>
                    <th scope="col"><b>Turnover In Lakhs</b></th>
                  </tr>
                  </thead>
                {
                     value.map((curelem2,index)=>{
                    return(
                      <tbody>
                        <tr key={index}> 
                      <td className="low"><h5>{curelem2.symbol}</h5></td>
                      <td className="high"><h5>{curelem2.turnoverInLakhs}</h5></td>  
                        </tr>
                        </tbody>
                    )
                  })
                  }
                </table> 
                </div>
                <br></br>
                <div className="legend">
                  <i className="fas fa-circle text-info">
                   
                  </i>
                   <i className="fas fa-circle text-danger">
                   </i>
                 
                </div>
              <hr></hr>
              <Card.Footer>
                <div style={{color:"green"}} className="stats">
                  <i className="fas fa-check"></i>
                  Data Information Certified
                </div>
              </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Top Volume Stocks</Card.Title>
                <p className="card-category"></p>
              </Card.Header><hr/>
              <Card.Body>
                
              <p><b>Top Volume Stocks:-</b></p>
                <div className="table-responsive">
                  
                  <table className="table table-dark table-striped">
                  <thead>
                  <tr>
                    <th scope="col"><b>NAME</b></th>
                    <th scope="col"><b>Traded Quantity</b></th>
                  </tr>
                  </thead>
                {
                     volume.map((curelem3,index)=>{
                    return(
                      <tbody>
                        <tr key={index}> 
                      <td className="low"><h5>{curelem3.symbol}</h5></td> 
                      <td className="high"><h5>{curelem3.tradedQuantity}</h5></td> 
                        </tr>
                        </tbody>
                    )
                  })
                  }
                </table> 
                </div>
                <br></br>
                <div className="legend">
                  <i className="fas fa-circle text-info">
                   
                  </i>
                   <i className="fas fa-circle text-danger">
                   </i>
                 
                </div>
              <hr></hr>
              <Card.Footer>
                <div style={{color:"green"}} className="stats">
                  <i className="fas fa-check"></i>
                  Data Information Certified
                </div>
              </Card.Footer>
              </Card.Body>
            </Card>
          </Col>          
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
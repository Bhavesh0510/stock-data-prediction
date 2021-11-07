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

  const[sta,setstatus] = useState([]);
  const[dta,setdata] = useState([]);
  const[dta1,setdata1] = useState([]);
  const[value,setvalue] = useState([]);

  const getStatus = async()=>{
    try{
   const res0 = await fetch("https://www1.nseindia.com//emerge/homepage/smeNormalMktStatus.json");
   const data0 = await res0.json();
   console.log(data0.data);
   setstatus(data0.data);
    }catch(err){
        console.log(err);
    }
}

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

  useEffect(() => {
      getStatus();
      getStockData();
      getGainers();
      getValue();
  }, [])


  return (
    <>
      <Container fluid>
        <div className="legend" id="st"><b>Market Status: </b></div><hr/>
        <div className="table-responsive" id="ov">
      <table className="table table-dark table-striped"> 
          <thead> 
              <tr> 
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
                    <th scope="row" className="timeval">{curelem.timeVal}</th> 
                    <td className="open">{curelem.indexName}</td> 
                    <td className="high">{curelem.open}</td> 
                    <td className="low">{curelem.high}</td> 
                    <td className="prevclose">{curelem.low}</td> 
                    <td className="indexname">{curelem.previousClose}</td> 
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
              </Card.Header>
              <Card.Body>
                
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <p><b>Top Gainers:-</b></p>
                    {
                     dta1.map((curelem1,index)=>{
                    return(
                      <ol>
                        <tr key={index}> 
                      <td><h5>{curelem1.symbol}</h5></td> 
                        </tr>
                        </ol>
                    )
                  })
                  }
                  
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer>
            </Card>
          </Col>


          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">BSE Data</Card.Title>
                <p className="card-category">Daily Trade Data Of Bombay Stock Exchange</p>
              </Card.Header>
              <Card.Body>
                <br></br>
              <p><b>Top Gainers:-</b></p>
                <br></br>
                <div className="legend">
                  <i className="fas fa-circle text-info">
                   
                  </i>
                   <i className="fas fa-circle text-danger">
                   </i>
                 
                </div>
              </Card.Body>
              <Card.Footer>
                
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer>
            </Card>
          </Col>


          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Top Value Stocks</Card.Title>
                <p className="card-category"></p>
              </Card.Header>
              <Card.Body>
                <br></br>
              <p><b>Top Value Stocks:-</b></p>
                <br></br>
                <div className="legend">
                {
                     value.map((curelem2,index)=>{
                    return(
                      <ul>
                        <tr key={index}> 
                      <td><h5>{curelem2.symbol}</h5></td> 
                        </tr>
                        </ul>
                    )
                  })
                  }
                 
                </div>
              </Card.Body>
              <Card.Footer>
                
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer>
            </Card>
          </Col>





          
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
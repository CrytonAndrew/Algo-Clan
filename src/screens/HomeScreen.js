import React from 'react'
import {Row, Col, Container, Image} from "react-bootstrap"
import BarGraphs from "../Graphs/BarGraphs"
// import StackedBar1 from "../Graphs/StackedBar1"
import StackedAreaGraph from "../Graphs/StackedAreaGraph"
// import ScaterPlot from "../Graphs/ScaterPlot"
// import BarGraphWithToolTip from "../Graphs/BarGraphWithToolTip"
// import Histogram from "../Graphs/Histogram"
// import GraphInter from "../Graphs/GraphInter"
// import Perctage from "../Graphs/PercentageLoader"
// import Alternative from "../Graphs/Alternative"
import ZoomInOut from "../Graphs/ZoomInOutLine"
import StackedBars from "../Graphs/StackedBars"
import CustomPie from "../Graphs/CustomPie"
import BarGraph2 from "../Graphs/BarGraph2"
import BarGraph3 from "../Graphs/BarGraph3"

const HomeScreen = () => {
  
  return (
    <div className="data-graphs">
      <Container>
      <h2 className="sub-headings" id="data-visualizaion"> Data Analysis and Visualization </h2>
      <p className="sub-headings">Data Resources Used: <a href="https://drive.google.com/drive/folders/1jlapUeeMrK1bSBCjyW590OG4kapnItst">Mpumalanga</a></p>
      <p className="sub-headings">Our Data Manipulation (Using Jupter Notebook & Pandas): <a href="https://drive.google.com/file/d/1VdBjBGEVxNPoxpRloDmedVaP3g2RF0UT/view?usp=sharing">Here</a></p>
      <Row>
        <Col>
          <div className="population-pie">
            <CustomPie />
          </div>
        </Col>
        <Col>
          <h3 className="population-pie-title">Why is this a thing ?</h3>
          <p className="population-body">
            In the next few minutes we will observe some visual representation of some datasets, this 
            way we will be able to easily identify why this is thing. We will then look at a few things we can introduce
            in order to balance the pie. At the end we will share one of our solutions that might be of assistants to this 
            crisis
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
        <h3 className="population-pie-title">Technology Advancements Trend In The Last 30 Years</h3>
          <p className="population-body">
             This is the techonolody Development trend from the last 30 years, within those years a lot
             tech companies have been born, and a lot of died as well. However, the ones that survive become something
             large and international.  
             <br></br>
             This trend showing how much development is put into advancing our technology, goes to show 
             how important of role techonology plays in our daily lives and overall in general. A great example 
             of this, is during these times of pandemic. We are still able to communicate with each other even during theses
             toughs and its all being done by techonology.  
          </p>
          <p className="population-body">Graph Data Source <a href="https://www.timetoast.com/timelines/the-development-of-the-computer-over-time">here</a>.</p>
        </Col>
        <Col>
          <ZoomInOut />
        </Col>
      </Row>

      <Row>
        <div className="about-sa-section">
          <h2 className="sub-headings">A Look at South Africa</h2>
          <h3>The SA Economy</h3>
            <p className="population-body">
              Being rich in coal, SA has one of the largest coal-fired power stations in the world.
              This is one the largest contributors to the South African economy. However, SA also holds a good
              numbe rof high value patents related to mining as well which contibutes to 10% of the economy
              <br></br>
              However, most of the largest contributors to the economy are mostly based on business model that has limited 
              limited resources. Which means if those resources where to finish tomorrow the SA economy would drop.
              <br></br>
               One of the most effective solutions can be implemented is having the transition to be more reliant on high 
               technology. A good example of a country that is more relient on in high techonology is the united states. 
               This is firms make it to be at the forefront of techonological advances.
            </p>
        </div>
      </Row>
      
      <h2>Provincial Devide:</h2>
      <h3>Calculating Technological Literacy for each province</h3>
  <Row>

      <Col>
            <BarGraphs/>
            <h4 className="literacy-heading">Literacy in Rural Areas</h4>
            <p className="literacy-body">
              The Bar Graph represented here show the amount of Technological Literacy in 
              each province compared to one another, only in the rural areas
            </p>
      </Col>

      <Col>
        <BarGraph2 />
          <h4 className="literacy-heading">Literacy in TownShips</h4>
            <p className="literacy-body">
              The Bar Graph represented here show the amount of Technological Literacy in 
              each province compared to one another, only in the TownShip areas
            </p>
            
    </Col>


      <Col>
          <BarGraph3 />
          <h4 className="literacy-heading">Literacy in Urban Areas</h4>
            <p className="literacy-body">
              The Bar Graph represented here show the amount of Technological Literacy in 
              each province compared to one another, only in the Urban Areas
            </p>
    </Col>
</Row>

<Row className="combo-data-section-row">
    <Col>
      <Image src="images/graph-combo.png" className="graph-combo"/>
    </Col>
    <Col>
      <h2 className="what-do-we-see-heading">
        What do we see when we combine all the above data?
      </h2>
      <p className="what-do-we-body">
        This is what we see with respect to techonological literacy, however you will also notice a new 
        addition of an area Peri-Urban.
        Multiple conclusions can be draw from this graph
        <br/>
        Such as:
        <ul>
          <li>
            How big of a digital divide we have with all the areas in th ecountry
          </li>
          <li>
            The graph can tells which part of the country should focus on bring development
            towards: such as Rural Areas and TownShips
          </li>
        </ul>
      </p>
    </Col>
</Row>


  <Row className="prof-section-row">
    <Col> 
    <h2 className="deeper-heading">Going a little Deeper</h2>
      <h3 className="prof-heading">Proficiency Distribution</h3>
      <p className="prof-body">
        Rather than just looking at whether everyone is aware or just knows about techonology, or has access to 
        great tools.
        We want to understand whether they are using those tools to extend that makes them understand these tools 
        , along with the benefits they have.
        <br/>
        This graph provides with a little more insight on how the proficiency is distributed across the whole country
        Range from Level 1(Aware/Beginner) - Level 5(Professional)
      </p>
    </Col>
    <Col>
      <Image src="images/proficiency-dist.png" className="prof-img"/>
    </Col>
  </Row>

  <Row className="prof-section-row">
    <Col> 
      <h3 className="prof-heading">Gender Proficiency Distribution</h3>
      <p className="prof-body">
        Rather than just looking at whether everyone is aware or just knows about techonology, or has access to 
        great tools.
        We want to understand whether they are using those tools to extend that makes them understand these tools 
        , along with the benefits they have.
        <br/>
        This graph provides with a little more insight on how the proficiency is distributed across the whole country
        Range from Level 1(Aware/Beginner) - Level 5(Professional)
      </p>
    </Col>
    <Col>
      <Image src="images/malevsfemale.png" className="prof-img"/>
    </Col>
  </Row>

  <Row className="prof-section-row">
    <Col>
      <StackedBars />
    </Col>
    <Col> 
      <h4 className="prof-heading">Contibuting Factors to Gender Proficiency (Balance)</h4>
      <p className="prof-body">
        The techonology divide between is close to non existent, as male's dominate some aspects and female's 
        also dominte in other aspects
        <br></br>
        With progress this tables above can be brought to a state of equilibrium. In many aspects techonology can 
        by its build gender equality. How you may ask?
        <br></br>
        Like this:
        <ul>
          <li>Getting more females invloved in techonology revolution</li>
          <li>Get more females started early in the tech space</li>
          <li>Celebrating women leadership</li>
          <li>Get everyone involved</li>
        </ul> 
      </p>
    </Col>
  </Row>
  
  <Row>

  </Row>

  <Row className="prof-section-row">
    <Col> 
      <h3 className="prof-heading">Age Distribution</h3>
      <p className="prof-body">
        This Pie Chart shows us how the age is distributed with respect to the exposure to techonology.
        What the pie then shows us, is that people between the ages of 20 - 35 tend be the ones who are more 
        exposed to techonology and use it more regularly. 
        <br/>
        <br/>
        They are also the who  tend to have a high interest in techonology. In this aspect I 
        would like to think we are on the right path, as the young generations are the ones who have to continue 
        the nations legacy. 
        Possibly the one of the things we can do is just bring more techonology exposure to the rest of the young population
      </p>
    </Col>
    <Col>
      <Image src="images/age-dist.png" className="prof-img"/>
    </Col>
  </Row>

  <Row className="area-section-row">
      <Col md={6} className="area-plot-graph">
        <StackedAreaGraph/> 
        {/* <h3 className="area-title">Area Map</h3> */}
        <p></p>
      </Col>
      <Col md={6}>
        <Image src="images/less-ict.png" />
        {/* <h3 className="joint-title">Joint Plot</h3> */}
        <p></p>
      </Col>
  </Row>



  <Row>
    <Col>
      <h2 className="outcome-heading outcome-alone">Outcomes due to  Digital Divide</h2>
      <div className="outcomes">
      <h3 className="outcome-heading">Increase In Household Incomes:</h3>
      <Image src="images/house-income.png"/>
      <p className="prof-body">Due to this digital divide, households tha are more techonology servy, are the ones that 
        see much high incomes. Many factors contribute to this. 
        Such as being able to get passive through some online businesses and work. Things as small 
        as writing blogs, can earn thier webpages ad revenue if monetized. Another factor, is that they are just
        more up to date with the latest trends, and by that they can make some of the best decisions. 
      </p>
      </div>
    </Col>
  </Row>


  <Row>
    <Col>
    <div className="outcome">
    <h3 className="outcome-heading">Economic Advantage</h3>
      <Image src="images/economical-adv.png"/>
      <p className="prof-body">
        When we furthur examine the data through the heat map above we manage to find that there is high correlation between, someone who 
        is tech servy and Economic Advantage. This is mainly just due to how all the advancements that take place 
        in the tech are able to influence everyone's life, even if its not direct. 
      </p>
      </div>
    </Col>
  </Row>


      {/* <Row>
      
          <Col>
          
          </Col>
          <Col>
            <StackedBar1/>
          </Col>
      </Row>
      <Row>
        <Col>
          
        </Col>
        <Col>
          <ScaterPlot/>
        </Col>
      </Row>
      <Row>
        <Col>
          <BarGraphWithToolTip/>
        </Col>
        <Col>
          <Histogram/>
        </Col>
      </Row>
      <Row>
        <Col>
          <GraphInter/>
        </Col>
        <Col>
          <Perctage/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alternative/>
        </Col>
        <Col>
          
        </Col>
      </Row>
      <Row>
        <Col>
          
        </Col>
      </Row> */}
      </Container>
    </div>
  )
}

export default HomeScreen

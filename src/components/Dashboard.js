import "./Dashboard.css";
export const Dashboard = () => {
  return (
    
    // <div className="dashboard">
    //   <div className="header">
    //     <i className="bi bi-nut "></i>
    //     <span className="space">Dashboard</span>
    //   </div>

    //   <div className="header1">
    //   <i class="bi bi-nut-fill"></i>
    //     <span className="space">Dashboard</span>
    //   </div>


    //   <div className="list">
    //   <i class="bi bi-bag-check"></i>
    //   <span className="space">Product</span>
    //   <i id="arrow1" class="bi bi-chevron-right"></i>
    //   </div>

    //   <div className="list">
    //   <i class="bi bi-person-square"></i>
    //   <span className="space">Customer</span>
    //   <i id="arrow" class="bi bi-chevron-right"></i>
    //   </div>

    //   <div className="list">
    //    <i class="bi bi-cash"></i>
    //    <span className="space">Incom</span>
    //    <i id="arrow2" class="bi bi-chevron-right"></i>
    //   </div>

    //   <div className="list">
    //   <i class="bi bi-gear"></i>
    //   <span className="space">Promote</span>
    //   <i id="arrow4" class="bi bi-chevron-right"></i>
    //   </div>

    //   <div className="list">
    //   <i class="bi bi-question-square"></i>
    //   <span className="space">Help</span>
    //   <i id="arrow3" class="bi bi-chevron-right"></i>  
    //   </div>

    //   <div className="profile">
    //     <div className="image">
    //       <img src="https://media.vanityfair.com/photos/63068cbbbfb0c00da24590fe/3:2/w_1500,h_1000,c_limit/Luke-MacFarlane-Profile-Story-Image.jpg" alt="name" />
    //     </div>
    //     <div className="detail">
    //       <p>Evano</p>
    //       <p>Project Manager</p>
    //     </div>
    //     <i id="down" class="bi bi-chevron-down"></i>
    //   </div>
    // </div>

    <div className="content">
      <div className="dashboard">
      <div className="header">
        <i className="bi bi-nut "></i>
        <span className="space">Dashboard</span>
      </div>

      <div className="header1">
      <i class="bi bi-nut-fill"></i>
        <span className="space">Dashboard</span>
      </div>


      <div className="list">
      <i class="bi bi-bag-check"></i>
      <span className="space">Product</span>
      <i id="arrow1" class="bi bi-chevron-right"></i>
      </div>

      <div className="list">
      <i class="bi bi-person-square"></i>
      <span className="space">Customer</span>
      <i id="arrow" class="bi bi-chevron-right"></i>
      </div>

      <div className="list">
       <i class="bi bi-cash"></i>
       <span className="space">Incom</span>
       <i id="arrow2" class="bi bi-chevron-right"></i>
      </div>

      <div className="list">
      <i class="bi bi-gear"></i>
      <span className="space">Promote</span>
      <i id="arrow4" class="bi bi-chevron-right"></i>
      </div>

      <div className="list">
      <i class="bi bi-question-square"></i>
      <span className="space">Help</span>
      <i id="arrow3" class="bi bi-chevron-right"></i>  
      </div>

      <div className="profile">
        <div className="image">
          <img src="https://media.vanityfair.com/photos/63068cbbbfb0c00da24590fe/3:2/w_1500,h_1000,c_limit/Luke-MacFarlane-Profile-Story-Image.jpg" alt="name" />
        </div>
        <div className="detail">
          <p>Evano</p>
          <p>Project Manager</p>
        </div>
        <i id="down" class="bi bi-chevron-down"></i>
      </div>
    </div>
    {/* ------------data----- */}

      <div className="data">
        <div className="nav">
          <span>Hello Shahrukh <img src="https://cdn1.iconfinder.com/data/icons/hand-gestures-color/128/hand-wave-y-64.png" alt="" />,</span>
          <input type="text" className="search" placeholder="Search..."/>
        </div>

        <div className="incom">
         <div className="incom1">
          <div id="round">
          <i id="coin" className="bi bi-coin"></i>
          </div>
          <div className="info">
            <p id="earning">Earning</p>
            <p id="price">$198k</p>
            <span> <i id="percentage" className="bi bi-arrow-up">37.8%</i>this month</span>
          </div>
         </div>

         <div className="currency">
          <div id="round1">
            <i id="coin1" className="bi bi-file-text"></i>
            </div>
            <div className="info">
              <p id="earning">Orders</p>
              <p id="price">$2.4k</p>
              <span> <i id="percentage1" className="bi bi-arrow-up">2%</i>this month</span>
            </div>
         </div>

         <div className="currency">
         <div id="round2">
         <i id="coin2" className="bi bi-wallet2"></i>
            </div>
            <div className="info">
              <p id="earning">Balance</p>
              <p id="price">$2.4k</p>
              <span> <i id="percentage1" className="bi bi-arrow-up">2%</i>this month</span>
            </div>
         </div>

         <div className="currency">
         <div id="round3">
         
         <i id="coin3"className="bi bi-bag-check"></i>
            </div>
            <div className="info">
              <p id="earning">Total Sales</p>
              <p id="price">$89k</p>
              <span> <i id="percentage" className="bi bi-arrow-up">11 %</i>this month</span>
            </div>
         </div>
        </div>

        {/* ------------chart------------------------------------ */}

        <div className="chart">

            <div className="chart1">
                  <div className="charthead">
                    <div>
                    <p className="overview" >Overview</p>
                    <p className="month">Monthly Earning</p>
                    </div>
                    <div className="quartarly">
                      <span id="qua">Quartarly<i id="qua" className="bi bi-chevron-down"></i></span>
                     </div>
                  </div>

                  <div className="chart1content">
                    <div className="div1"></div>
                    <div className="div2"></div>
                    <div className="div3"></div>
                    <div className="div4"></div>
                    <div className="div5"></div>
                    <div className="div6"></div>
                    <div className="div7"></div>
                    <div className="div8"></div>
                    <div className="div9"></div>
                    <div className="div10" ></div>
                    <div className="div11"></div>
                    <div className="div12"></div>
                    
                  </div>

                  <div className="chart1content1">
                    <p>Jan</p> 
                    <p>Feb</p>
                    <p>Mar</p>
                    <p>Apr</p>
                    <p>May</p>
                    <p>Jun</p>
                    <p>Jul</p>
                    <p>Aug</p>
                    <p>Sep</p>
                    <p>Oct</p>
                    <p>Nov</p>
                    <p>Dec</p>
                  </div>
                  
            </div>

            <div className="chart2">
            <p className="customer">Customers</p>
            <p className="customer1" >Customers that buy products</p>

            <div className="total">
                <div className="tota2">
                    <div className="tota3">

                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="footer">

        </div>

      </div>

    </div>
    
  )
}



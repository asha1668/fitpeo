import "./Dashboard.css";
export const Dashboard = () => {
  return (
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
  )
}



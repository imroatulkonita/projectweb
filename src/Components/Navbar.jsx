function Navbar({setMenu}) {
    return(
        <nav className="navbar navbar-expand-Ig navbar-dark bg-primary">
            <div className="container"> 
                <span
                 className="navbar-brand fw-bold"
                 style={{cursor : "pointer"}}
                 onClick={() => setMenu("home")}
                >
                   InfoNusa 
                </span>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("kesehatan")}>kesehatan</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("pendidikan")}>pendidikan</span>
                    </li>
                     <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("teknologi")}>teknologi</span>
                     </li>
                      <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("ekonomi")}>ekonomi</span>
                      </li>
                       <li className="nav-item">
                         <span className="nav-link" onClick={() => setMenu("nasional")}>nasional</span>
                       </li>
                    </ul>
                 </div>
              </nav>
    );
}

export default Navbar;
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
                        <span className="nav-link" onClick={() => setMenu("kesehatan")}>Kesehatan</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("pendidikan")}>Pendidikan</span>
                    </li>
                     <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("teknologi")}>Teknologi</span>
                     </li>
                      <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("ekonomi")}>Ekonomi</span>
                      </li>
                       <li className="nav-item">
                         <span className="nav-link" onClick={() => setMenu("nasional")}>Nasional</span>
                       </li>
                    </ul>
                 </div>
              </nav>
    );
}

export default Navbar;
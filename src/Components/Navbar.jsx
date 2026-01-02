function Navbar({setMenu}) {
    <h1>{setMenu}</h1>
    return(
        <nav className="navbar navbar-expand-Ig navbar-dark bg-primary">
            <div className="container"> 
                <span
                 className="navbar-brand fw-bold"
                 style={{cursor : "pointer"}}
                 onClick={() => setMenu("home")}
                >
                   Selamat datang di InfoNusa 
                </span>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("kesehatan")}>Kesehatan</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("Pendidikan")}>Pendidikan</span>
                    </li>
                     <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("Teknologi")}>Teknologi</span>
                     </li>
                      <li className="nav-item">
                        <span className="nav-link" onClick={() => setMenu("Ekonomi")}>Ekonomi</span>
                      </li>
                       <li className="nav-item">
                         <span className="nav-link" onClick={() => setMenu("Nasional")}>Nasional</span>
                       </li>
                    </ul>
                 </div>
              </nav>
    );
}

export default Navbar;
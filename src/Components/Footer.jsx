function Footer(){
    return(
        <footer className="bg-dark text-light mt-4">
            <div className="container py-4">
                <div className="row text-center text-md-start">

                    {/* Tentang */} 
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">InfoNusa</h5>
                        <p className="small">
                            Portal berita nasional yang menyajikan informasi terkini, terpercaya, dan aktual untuk masyarakat Indonesia.
                        </p>
                    </div>

                    {/* Kategori */ }
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Kategori</h5>
                        <ul className="list-unstyled small">
                            <li>Kesehatan</li>
                            <li>Pendidikan</li>
                            <li>Teknologi</li>
                            <li>Ekonomi</li>
                            <li>Nasional</li>
                        </ul>
                    </div>

                    {/* Kontak */ }
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Kontak</h5>
                        <p className="small mb-1">Email : infonusa@gmail.com</p>
                        <p className="small mb-0">© 2025 InfoNusa</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
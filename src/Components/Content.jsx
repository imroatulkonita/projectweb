function Content({menu}) {
    if (menu === "kesehatan") {
        return(
            <>
            <h3>Kesehatan</h3>
            <p>
                Kementerian kesehatan memperluas layanan kesehatan digital untuk meningkatkan akses masyarakat di daerah terpencil.
            </p>
            <a href="https://www.kemkes.go.id/">Sumber : Kemenkes RI</a>
            </>
        );
    }

    if (menu === "Pendidikan") {
        return(
            <>
            <h3>Pendidikan</h3>
            <p>
                Pemerintah terus mendorong transformasi pendidikan nasional melalui digitalisasi pembelajaran dan peningkatan kompetensi guru.
            </p>
            <a href="https://kemendikdasmen.go.id/">Sumber : Kemendikbut</a>
            </>
        );
    }

    if (menu === "Teknologi") {
        return(
            <>
            <h3>Teknologi</h3>
            <p>
                Perkembangan teknologi artificial intelligence dinilai mampu meningkatkan efisiensi industri dan layanan publik di Indonesia.
            </p>
            <a href="https://tekno.kompas.com/">Sumber : Kompas Tekno</a>
            </>
        );
    }

    if (menu === "Ekonomi") {
        return(
            <>
            <h3>Ekonomi</h3>
            <p>
                Stabilitas ekonomi nasional tetap terjaga meskipun menghadapi tekanan global dan fluktuasi pasar internasional.
            </p>
            <a href="https://www.cnbcindonesia.com/">Sumber : CNBC Indonesia</a>
            </>
        );
    }

    if(menu === "Nasional") {
        return(
            <>
            <h3>Nasional</h3>
            <p>
               Pemerintah menegaskan komitmen untuk mempercepat pembangunan infrastruktur demi pemerataan kesejahteraan masyarakat.
            </p>
            <a href="https://www.tempo.co/">Sumber : Tempo Nasional</a>
            </>
        );
    }

    return(
        <>
          <h3>Berita Utama InfoNusa</h3>
          <ul>
            <li>Layanan kesehatan digital diperluas secara nasional</li>
            <li>Digitalisasi pendidikan masuk ke sekolah daerah</li>
            <li>Teknologi AI dorong efisiensi industri</li>
          </ul>
        </>
    );
}

export default Content;
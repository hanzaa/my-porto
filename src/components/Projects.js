const Projects = () => {
    return(
        <>
        <div  id='projects' style={{background: "linear-gradient(135deg, rgba(146,222,215,1) 13%, rgba(250,45,253,0.5499241933101365) 82%)"}}>
        <div class="container" >
            <div class="row text-center mb-4 ">
                <div class="col ">
                    <h2 style={{color:"white", textShadow: '2px 2px 4px #000000'}}>My Projects</h2>
                </div>
            </div>
            <div class="row pb-4 d-flex justify-content-center" >
                <div class="col-md-6 col-xl-4 d-flex justify-content-center my-4">
                    <div class="card" >
                        <a href='https://toko-buku.netlify.app' target='_blank' rel='noopener noreferrer'>
                        <img src={require("../assets/toko-buku.png")} class="card-img-top" alt="Prjoect Preview" width="100%" height="100%"/>    
                        </a>
                        <div class="card-body">
                            <p class="card-text">Website toko buku yang menampilkan buku-buku yang datanya diambil dari sebuah endpoint API. Dibangun menggunakan React dan Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 d-flex justify-content-center my-4">
                    <div class="card" >
                        <a href='https://luang.vercel.app/' target='_blank' rel='noopener noreferrer'>
                        <img src={require("../assets/luang.png")} class="card-img-top" alt="Prjoect Preview" width="100%" height="100%"/>    
                        </a>
                        <div class="card-body">
                            <p class="card-text">Website marketplace untuk layanan freelancer untuk membantu para pekerja lepas memasarkan jasa yang mereka miliki dengan menghubungkan antara klien dengan para freelancer.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4 d-flex justify-content-center my-4">
                    <div class="card" >
                        <a href='https://www.google.com/' target='_blank' rel='noopener noreferrer'>
                        <img src={require("../assets/open-book.png")} class="card-img-top" alt="Prjoect Preview" width="100%" height="100%"/>    
                        </a>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}

export default Projects
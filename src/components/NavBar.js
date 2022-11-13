const NavBar = ()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">
            <img src="/logo512.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top m-2"/>
            </a>
            <a class="navbar-brand" href="#">MyPorto | M. Farhan Zachary</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#jumbotron">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
                </li>
            
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}

export default NavBar
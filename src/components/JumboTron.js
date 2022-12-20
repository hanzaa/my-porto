import pp from '../assets/pp2.jpg'

const JumboTron = () => {
    return(
        <>

            <div id='jumbotron' class=" pt-5 text-center" style={{background:"#9aa9ff"}}>
                <img src={pp} alt="M. Farhan Zachary" width="300" class="rounded-circle img-thumbnail" />
                <h1 class="display-4" style={{color:"white", textShadow: '2px 2px 4px #000000'}}>M. Farhan Zachary</h1>
                <p class="lead mb-0" style={{color:"white", textShadow: '2px 2px 4px #000000'}}> Passionate Learner | Cadet</p>
            </div>

        </>
    )
}

export default JumboTron
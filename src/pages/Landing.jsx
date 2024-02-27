import '../App.css'

const Landing = () =>{
    return(
        <header>
            <div className="info">
                <h1>Delicioso, Original,</h1>
                <h1>Familiar</h1>
                <p>Bar familiar: ven y disfruta de nuestra cerveza de barril. Acompáñala con alitas en nuestra receta original; también puedes disfrutarla con camarones. No te pierdas nuestros mariscos los viernes y sábados.</p>
                <button>Ubicación</button>
            </div>
            <div className="imagenes">
                <img className='imag-alitas' src="../../public/img/alitas.png" alt="alitas" />
                <img className='imag-cerveza' src="../../public/img/tarro.png" alt="cerveza" />
            </div>
        </header>
    )
}

export default Landing;
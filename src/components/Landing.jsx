import '../App.css'

const Landing = () =>{
    return(
        <header>
            <section className='conjunto' >
                <div className="info">
                    <h1>Delicioso, Original,</h1>
                    <h1>Familiar</h1>
                    <p>Bar familiar: ven y disfruta de nuestra cerveza de barril. Acompáñala con alitas en nuestra receta original; también puedes disfrutarla con camarones. No te pierdas nuestros mariscos los viernes y sábados.</p>
                    <button>Ubicación</button>
                </div>
                <div className="imagenes">
                    <img src="../../public/svg/logo-tenanpa.svg" alt="logo" />
                </div>
            </section>
            <section className='flechas' >
                <box-icon size="90px" name='chevrons-down' animation='fade-down' color='#ffffff' ></box-icon>
            </section>
        </header>
    )
}

export default Landing;
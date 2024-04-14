import '../App.css'

const Info = () =>{
    return(
        <section className='informacion' >
            <article>
                
                <box-icon size='60px' name='calendar' color='#ffc107' ></box-icon>
                <h2>Horario</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis?</p>
            </article>
            <article>
                <box-icon size='60px' name='food-menu' color='#ffc107'></box-icon>
                <h2>Receta</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis?</p>
            </article>
            <article>
                <box-icon size='60px' name='basket' color='#ffc107' ></box-icon>
                <h2>Ingredientes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nobis?</p>
            </article>
        </section>
    )
}

export default Info;
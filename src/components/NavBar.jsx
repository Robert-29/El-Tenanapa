import '../App.css'

const NavBar = () => {
    return(
        <nav className='menu' >
            <div className="logoTitulo">
                <img src="#" alt="logo" />
                <h1>EL TENANPA</h1>
            </div>
            <ul>
                <li><a href="#">Seccion 1</a></li>
                <li><a href="#">Seccion 2</a></li>
                <li><a href="#">Seccion 3</a></li>
                <li><a href="#">Seccion 4</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
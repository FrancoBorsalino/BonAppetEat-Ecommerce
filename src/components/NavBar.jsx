import logoNavBar from "../assets/logoNavBar.png"
import cart from "../assets/carritoLogo.png"

export const NavBar = () => (
        <header class="grid__header">
            <nav class="navBar">
                <ol class="grid__padding--left grid__padding--right noBullet">
                    <img id="logoNavBar" src={logoNavBar} alt="Logo y leyenda Bon AppetEat" />
                    <ul class="navBar__links--center noBullet">
                        <li><a class="robotoSemibold" href="*">Viandas con Carne</a></li>
                        <li><a class="robotoSemibold" href="*">Viandas Vegetarianas</a></li>
                        <li><a class="robotoSemibold" href="*">Viandas Veganas</a></li>
                        <li><a class="robotoSemibold" href="*">Viandas Celíacas</a></li>
                    </ul>
                    <img src={cart} id="logoCarrito" alt="carrito" /> 0
                </ol>
            </nav>
            </header>
)
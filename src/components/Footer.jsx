import iconoYoutube from "../assets/iconoYoutube.png"
import iconoTwitter from "../assets/iconoTwitter.png"
import iconoInstagram from "../assets/iconoInstagram.png"
import iconoFacebook from "../assets/iconoFacebook.png"
import iconoCompartir from "../assets/iconoCompartir.png"

export const Footer = () => (
    <footer class="grid__footer">
        <ol class="main__footer">
            <ul class="footer__links noBullet grid__padding--left">
                <li class="robotoRegular"><a href="https://www.youtube.com/channel/UC9D3T1NfKx_tJhrFBuXiDGg"><img src={ iconoYoutube } alt="Link a Youtube" /></a></li>
                <li class="robotoRegular"><a href="https://twitter.com/BonAppetEat_app"><img src={ iconoTwitter } alt="Link a Twitter" /></a></li>
                <li class="robotoRegular"><a href="https://www.instagram.com/bonappeteat_app/"><img src={ iconoInstagram } alt="Link a Instagram" /></a></li>
                <li class="robotoRegular"><a href="https://www.facebook.com/profile.php?id=100087445178159"><img src={ iconoFacebook } alt="Link a Facebook" /></a></li>
                <li class="robotoRegular"><a href=""><img src={ iconoCompartir } alt="Compartir" /></a></li>
            </ul>
            <ul class="footer__mapsite noBullet grid__padding--right">
                <li class="robotoRegular"><p>Copyright @ 2023 Bon AppetEat</p></li>
                <li class="robotoRegular"><a href="./pages/recetas.html">Buscá recetas</a></li>
                <li class="robotoRegular"><a href="./pages/contacto.html">Contactanos!</a></li>
                <li class="robotoRegular"><a href="./pages/sobreNosotros.html">Sobre Nosotros</a></li>
                <li class="robotoRegular"><a href="">Legales, privacidad y cookies</a></li>
            </ul>
        </ol>
    </footer>
)
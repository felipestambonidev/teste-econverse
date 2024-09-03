import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import formasdepagamento from "../../assets/imgfooter/formas_pagto.png";
import "./Footer.scss"

export default function Footer() {
  return (
    <footer>
      <div className="footer_content">
        <div className="footer_contacts">
          <h3 className="footer-h1">SOBRE NÓS</h3>
          <ul className="about-us-list">
            <li>
              <a href="#" className="
              footer-link">CONHEÇA</a>
            </li>
            <li>
              <a href="#" className="
              footer-link">COMO COMPRAR</a>
            </li>
            <li>
              <a href="#" className="
              footer-link">
                INDICAÇÃO DE DESCONTO</a>
            </li>
          </ul>

          <div className="footer_social_media">
            <a href="#" className="footer-link" id="facebook">
              <FaFacebook />
            </a>
            <a href="#" className="footer-link" id="instagram">
              <FaInstagram />
            </a>
            <a href="#" className="footer-link" id="youtube">
              <FaYoutube />
            </a>
          </div>
        </div>
        <ul className="footer-list-info">
          <li>
            <h3>INFORMAÇÕES ÚTEIS</h3>
          </li>
          <li>
            <a href="#" className="
              footer-link">FALE CONOSCO</a>
          </li>
          <li>
            <a href="#" className="
              footer-link">DÚVIDAS</a>
          </li>
          <li>
            <a href="#" className="
              footer-link">PRAZOS DE ENTREGA</a>
          </li>
          <li>
            <a href="#" className="
              footer-link">FORMAS DE PAGAMENTO</a>
          </li>
          <li>
            <a href="#" className="
              footer-link">POLÍTICA DE PRIVACIDADE</a>
          </li>
          <li>
            <a href="#" className="
              footer-link">TROCAS E DEVOLUÇÕES</a>
          </li>
        </ul>
        <ul className="footer-list-info">
          <li>
            <h3>FORMAS DE PAGAMENTO</h3>
          </li>
          <img src={formasdepagamento} alt="bandeiras" className="bandeiras" />
        </ul>
        <div className="footer-subscribe">
          <h4 className="h4-sub">Cadastre-se e Receba nossas</h4>
          <h2 className="h2-sub">novidades e promoções</h2>

          <p className="p-sub">
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>

          <div className="input_group">
            <input type="email" id="email" placeholder="SEU E-MAIL" />
            <button className="button-input">
                OK
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

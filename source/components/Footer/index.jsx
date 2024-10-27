import { Container } from "./styles";

import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";

import logo from "../../assets/logo.png";

export function Footer() {
	return (
		<Container>
			<div>
				<span>
					Acompanhe a gente em nossas redes sociais ou entre em contato em
				</span>
				<ul className="social-links">
					<li>
						<a href="https://www.instagram.com/monarca_b_care" target="_blank">
							<FaInstagram size={25} />
						</a>
					</li>
					<li>
						<a href="https://www.tiktok.com/@monarca.b_care" target="_blank">
							<FaTiktok size={25} />
						</a>
					</li>
					<li>
						<a href="mailto:monarcabcare24@gmail.com">
							<MdEmail size={25} />
						</a>
					</li>
					<li>
						<a href="https://api.whatsapp.com/send?phone=5511973256631">
							<ImWhatsapp size={25} />
						</a>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li></li>
				</ul>
			</div>
			<div>
				<img className="footer-icon" src={logo} alt="Logo Monarca" />
			</div>
		</Container>
	);
}

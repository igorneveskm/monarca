import { Routes, Route, Navigate } from "react-router-dom";

import { Acne } from "../pages/Acne";
import { Aha } from "../pages/Aha";
import { Bha } from "../pages/Bha";
import { CancerPele } from "../pages/CancerPele";
import { Dermatites } from "../pages/Dermatites";
import { Dermatologista } from "../pages/Dermatologista";
import { Home } from "../pages/Home";
import { Niacinamida } from "../pages/Niacinamida";
import { Produtos } from "../pages/Produtos";
import { Retinoides } from "../pages/Retinoides";
import { Rotina } from "../pages/Rotina";
import { VitaminaC } from "../pages/VitaminaC";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/acne" element={<Acne />} />
			<Route path="/aha" element={<Aha />} />
			<Route path="/bha" element={<Bha />} />
			<Route path="/cancer" element={<CancerPele />} />
			<Route path="/dermatites" element={<Dermatites />} />
			<Route path="/dermatologista" element={<Dermatologista />} />
			<Route path="/niacinamida" element={<Niacinamida />} />
			<Route path="/produtos" element={<Produtos />} />
			<Route path="/retinoides" element={<Retinoides />} />
			<Route path="/rotina" element={<Rotina />} />
			<Route path="/vitamina" element={<VitaminaC />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

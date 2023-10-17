import { motion } from "framer-motion";
import { useState } from "react";
import '../style/menu.css'
import { useRecoilState } from "recoil";
import { languageState, lengthState, premiereState } from "./state";

const menuItems = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closeed: { opacity: 0, y: 20 }
}

const buttonHover = {
	backgroundColor: '#e7c263',
}

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)

	function handleLanguageClick() {
		setIsLanguageClicked(true)
		setIsLengthClicked(false)
		setIsPremiereClicked(false)
		setIsOpen(false)
	}

	function handlePremiereClick() {
		setIsPremiereClicked(true)
		setIsLengthClicked(false)
		setIsLanguageClicked(false)
		setIsOpen(false)
	}

	function handleLengthClick() {
		setIsLengthClicked(true)
		setIsPremiereClicked(false)
		setIsLanguageClicked(false)
		setIsOpen(false)
	}

	return (
		<section className="menu-container">
			<motion.nav
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				className="menu"
			>
				<motion.button
					whileTap={{
						scale: 0.95,
						transition: {
							type: "spring",
							bounce: 0.7,
							duration: 0.7,
						},
					}}
					whileHover={{ ...buttonHover }}
					onClick={() => setIsOpen(!isOpen)}
					className="menu-button"
				>Statistik
				</motion.button>
				<motion.ul
					variants={{
						open: {
							clipPath: "inset(0% 0% 0% 0% round 10px)",
							transition: {
								type: "spring",
								bounce: 0.7,
								duration: 0.7,
							},
						},
						closed: {
							clipPath: "inset(10% 50% 90% 50% round 10px)",
							transition: {
								type: "spring",
								duration: 0.3
							}
						}
					}}
					className="menu-item-container"
				>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={handleLanguageClick}
					>Språk
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={handlePremiereClick}
					>Premiärmånad
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={handleLengthClick}
					>Längd
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
					>Antal filmer per genre
					</motion.li>
				</motion.ul>

			</motion.nav>
		</section>
	)
}
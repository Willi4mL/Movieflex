import { motion } from "framer-motion";
import { useState } from "react";
import '../style/menu.css'

const menuItems = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closeed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
}

const buttonHover = {
	backgroundColor: '#e7c263',
}

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	
	return (
		<section className="menu-container">
			<motion.nav
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				className="menu"
				>
				<motion.button
					whileTap={{ scale: 0.95, 
						transition: {
							type: "spring",
							bounce: 0.7,
							duration: 0.7,
						},
					}}
					whileHover = {{...buttonHover}}
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
					<motion.li item={menuItems}>Item 1 </motion.li>
					<motion.li item={menuItems}>Item 2 </motion.li>
					<motion.li item={menuItems}>Item 3 </motion.li>
					<motion.li item={menuItems}>Item 4 </motion.li>
					<motion.li item={menuItems}>Item 5 </motion.li>
				</motion.ul>

			</motion.nav>
		</section>
	)
}
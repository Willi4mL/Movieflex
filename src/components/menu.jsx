import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import '../style/menu.css'
import { useRecoilState } from "recoil";
import { genreState, languageState, lengthState, premiereState, searchState } from "./state";

const menuItems = {
	open: {
		opacity: 1,
		y: 0,
		position: 'relative',
		zIndex: 2,
		transition: { type: "spring", stiffness: 150, damping: 10 }
	},
	closed: {
		opacity: 0,
		y: -20,
		zIndex: 0,
		transition: { duration: 0.2 }
	}
}

const buttonHover = {
	backgroundColor: '#75bce6',
	color: '#f0f0f5'
}

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)
	const [isGenreClicked, setIsGenreClicked] = useRecoilState(genreState)
	const [isSearch, setIsSearch] = useRecoilState(searchState)
	const ref = useRef(null)

	// close menu when click outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('click', handleClickOutside, true)
	}, [ref])

	function handleLanguageClick() {
		setIsLanguageClicked(true)
		setIsLengthClicked(false)
		setIsPremiereClicked(false)
		setIsGenreClicked(false)
		setIsOpen(false)
		setIsSearch([])
	}

	function handlePremiereClick() {
		setIsPremiereClicked(true)
		setIsLengthClicked(false)
		setIsLanguageClicked(false)
		setIsGenreClicked(false)
		setIsOpen(false)
		setIsSearch([])
	}

	function handleLengthClick() {
		setIsLengthClicked(true)
		setIsPremiereClicked(false)
		setIsLanguageClicked(false)
		setIsGenreClicked(false)
		setIsOpen(false)
		setIsSearch([])
	}

	function handleGenreClick() {
		setIsGenreClicked(true)
		setIsLengthClicked(false)
		setIsPremiereClicked(false)
		setIsLanguageClicked(false)
		setIsOpen(false)
		setIsSearch([])
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
				>Statistics
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
							position: 'relative',
							zIndex: 2,
							height: '100%'
						},
						closed: {
							clipPath: "inset(10% 50% 90% 50% round 10px)",
							transition: {
								type: "spring",
								duration: 0.3
							},
							zIndex: 0,
							height: '0px'
						}
					}}
					className="menu-item-container"
					ref={ref}
				>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={handleLanguageClick}
						variants={menuItems}
					>Popular language
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={handlePremiereClick}
						variants={menuItems}
					>Release month
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={handleLengthClick}
						variants={menuItems}
					>Runtime
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={handleGenreClick}
						variants={menuItems}
					>Movies by genre
					</motion.li>
				</motion.ul>

			</motion.nav>
		</section>
	)
}
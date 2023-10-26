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
	backgroundColor: '#1ada90',
}

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false)
	const [isLanguageClicked, setIsLanguageClicked] = useRecoilState(languageState)
	const [isPremiereClicked, setIsPremiereClicked] = useRecoilState(premiereState)
	const [isLengthClicked, setIsLengthClicked] = useRecoilState(lengthState)
	const [isGenreClicked, setIsGenreClicked] = useRecoilState(genreState)
	const [isSearch, setIsSearch] = useRecoilState(searchState)
	const buttonRef = useRef(null);
	const ref = useRef(null)

	function handleMenuClick() {
		setIsOpen(!isOpen)
	}

	// close menu when click outside
	useEffect(() => {
		const handleClickOutside = (event) => {
		  if (ref.current && !ref.current.contains(event.target) && event.target !== buttonRef.current) {
			setIsOpen(false);
		  }
		}
		document.addEventListener('click', handleClickOutside, true)
	  
		return () => {
		  document.removeEventListener('click', handleClickOutside, true)
		}
	  }, [ref])

	function handleChartClick(clickedState) {
		setIsLanguageClicked(clickedState === 'language')
		setIsPremiereClicked(clickedState === 'premiere')
		setIsLengthClicked(clickedState === 'length')
		setIsGenreClicked(clickedState === 'genre')
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
					onClick={handleMenuClick}
					whileTap={{
						scale: 0.95,
						transition: {
							type: "spring",
							bounce: 0.7,
							duration: 0.7,
						},
					}}
					whileHover={{ ...buttonHover }}
					ref={buttonRef} 
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
								duration: 0.9,
							},
							position: 'relative',
							zIndex: 2,
						},
						closed: {
							clipPath: "inset(10% 50% 90% 50% round 10px)",
							transition: {
								type: "spring",
								duration: 0.5
							},
							zIndex: 0,
						}
					}}
					className="menu-item-container"
					ref={ref}
				>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={() => handleChartClick('language')}
						variants={menuItems}
					>Popular language
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={() => handleChartClick('premiere')}
						variants={menuItems}
					>Release month
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={() => handleChartClick('length')}
						variants={menuItems}
					>Runtime
					</motion.li>
					<motion.li item={menuItems}
						whileHover={{ ...buttonHover }}
						onClick={() => handleChartClick('genre')}
						variants={menuItems}
					>Movies by genre
					</motion.li>
				</motion.ul>

			</motion.nav>
		</section>
	)
}
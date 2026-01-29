/**
 * Search page component responsible for displaying search results.
 * It retrieves the current search input value from Redux and renders
 * a list of movie or TV show posters with animation effects.
 * If no results are found, a fallback message is displayed.
 */

import "./search.scss"
import Poster from "../../components/Poster/Poster";
import { motion } from "framer-motion";
import { staggerHalf } from "../../motionUtils";
import { useSelector } from "react-redux";
import { selectSearchInputValue } from "../../redux/search/search.selectors";

// Search component that renders search results based on user input.
// It receives search results as props and conditionally displays content.
const Search = searchResults => {
	// Extract search results from props
	const { results } = searchResults;
	// Retrieve the current search input value from Redux store
	const selectInputValue = useSelector(selectSearchInputValue);

	return (
		<div className="Search">
			{results && results.length > 0 && (
				<h2 className="Search__title">Search results for: {selectInputValue}</h2>
			)}
			<motion.div
				className="Search__wrp"
				variants={staggerHalf}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				{results && results.length > 0
					? results.map(result => (
						<Poster
							key={result.id}
							item={result}
							{...result}
						/>)
					)
					: (
						<h2 className="Search__title">
							Sorry, we searched everywhere but we did not found any movie or tv-show with that title.
						</h2>
					)
				}
			</motion.div>
		</div>
	);
}

export default Search

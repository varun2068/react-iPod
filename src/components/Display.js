import React from "react";
import Menu from "./Menu";
import Allsongs from "./Allsongs";

// Functional Display Component to Render the Display in Ipod
const Display = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const { menu, screen, songsList, updateProgress, progressRef, theme } =
		props;
	const { wallpaper, screenIndex } = screen;
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Display Theme Color
	const themeDisplay = () => {
		if (theme.themeIndex === 0) {
			return { 
				background: "transparent"
			 };
		} else {
			return { 
				background: "transparent"
			};
		}
	};
	//------------------------------------------------------------------------------------------
	return (
		<div className="display" style={themeDisplay()}>
			{screenIndex === 7 && (
				<Allsongs
					songsList={songsList}
					updateProgress={updateProgress}
					progressRef={progressRef}
				/>
			)}
			{screenIndex !== 7 && (
				<img
					src={wallpaper[screenIndex]}
					alt="DISPLAY SCREEN"
					style={{
						height: "99%",
						width: "100%",
						borderRadius: "10%",
						marginTop: "1%",
						zIndex: 2,
					}}
				/>
			)}

			<Menu menu={menu} />
		</div>
	);
	//------------------------------------------------------------------------------------------
};

export default Display;

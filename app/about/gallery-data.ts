export interface GalleryImage {
	src: string;
	alt: string;
	title: string;
	description: string;
}

export interface GalleryCollection {
	id: string;
	title: string;
	description: string;
	images: GalleryImage[];
	gridClassName: string;
}

export const aboutGalleryCollections: GalleryCollection[] = [
	{
		id: "desk-setup",
		title: "Desk Setup Over the Years",
		description:
			"A visual timeline showing how my workspace changed as my interests, equipment, and needs evolved.",
		images: [
			{
				src: "/setup_progression/0.jpg",
				alt: "An early version of Cham's desk setup",
				title: "The Starting Point",
				description:
					"This was one of the earliest versions of my workspace, before I began treating the setup itself as an ongoing personal project.",
			},
			{
				src: "/setup_progression/1.jpg",
				alt: "Cham's early laptop-based desk setup",
				title: "A Simple Laptop Setup",
				description:
					"My workspace initially centered on a laptop and only the essentials I needed for studying, browsing, and learning to code.",
			},
			{
				src: "/setup_progression/2.jpeg",
				alt: "Cham's desk after adding new equipment",
				title: "The First Upgrades",
				description:
					"I gradually began adding equipment and arranging the space more deliberately, with productivity and comfort in mind.",
			},
			{
				src: "/setup_progression/3.jpeg",
				alt: "A later version of Cham's programming workspace",
				title: "A More Practical Workspace",
				description:
					"This version gave me more room to program, study, and work with multiple windows without constantly rearranging everything.",
			},
			{
				src: "/setup_progression/4.jpeg",
				alt: "Cham's desk setup with improved monitor placement",
				title: "Improving the Layout",
				description:
					"I continued refining monitor placement, peripheral positions, and the overall use of the limited desk space.",
			},
			{
				src: "/setup_progression/5.jpeg",
				alt: "Cham's increasingly organized desk setup",
				title: "Becoming More Intentional",
				description:
					"At this stage, ergonomics, cable management, and visual balance became more important parts of how I planned the setup.",
			},
			{
				src: "/setup_progression/6.jpeg",
				alt: "Cham's desk setup with an ultrawide monitor",
				title: "The Ultrawide Era",
				description:
					"Adding an ultrawide monitor made the workspace much better suited for development, research, and working across several applications.",
			},
			{
				src: "/setup_progression/7.jpeg",
				alt: "Cham's current personalized desk setup",
				title: "The Current Setup",
				description:
					"My current workspace reflects what I have learned about ergonomics, organization, productivity, and making a setup feel personal.",
			},
		],
		gridClassName: "aspect-[4/3]",
	},
	{
		id: "drawings",
		title: "Drawings",
		description:
			"A collection of character drawings that I created while practicing line work, observation, proportion, and shading.",
		images: [
			{
				src: "/drawings/mista.jpg",
				alt: "A pencil drawing of Guido Mista",
				title: "Guido Mista",
				description:
					"A character study focused on the pose, costume details, and distinctive shapes used in the original design.",
			},
			{
				src: "/drawings/jotaro.jpg",
				alt: "A pencil drawing of Jotaro Kujo",
				title: "Jotaro Kujo",
				description:
					"A drawing exercise centered on strong facial features, clothing folds, and a dramatic character silhouette.",
			},
			{
				src: "/drawings/levi.jpg",
				alt: "A pencil drawing of Levi Ackerman",
				title: "Levi Ackerman",
				description:
					"A character portrait where I practiced controlled line work and reproducing a recognizable expression.",
			},
			{
				src: "/drawings/dio.jpg",
				alt: "A pencil drawing of Dio Brando",
				title: "Dio Brando",
				description:
					"A study of dramatic posing and the exaggerated visual language associated with the character.",
			},
			{
				src: "/drawings/kaguya.jpg",
				alt: "A pencil drawing of Kaguya Shinomiya",
				title: "Kaguya Shinomiya",
				description:
					"A softer character portrait that allowed me to practice facial proportions, hair, and lighter shading.",
			},
			{
				src: "/drawings/zenitsu.jpg",
				alt: "A pencil drawing of Zenitsu Agatsuma",
				title: "Zenitsu Agatsuma",
				description:
					"A drawing where I focused on translating an animated character into detailed pencil line work.",
			},
			{
				src: "/drawings/giyu.jpg",
				alt: "A pencil drawing of Giyu Tomioka",
				title: "Giyu Tomioka",
				description:
					"A character study focused on clothing patterns, facial structure, and maintaining clean outlines.",
			},
			{
				src: "/drawings/kurisu.jpg",
				alt: "A pencil drawing of Kurisu Makise",
				title: "Kurisu Makise",
				description:
					"A portrait of one of my favorite characters, drawn as an exercise in expression and hair detail.",
			},
			{
				src: "/drawings/gojo.jpg",
				alt: "A pencil drawing of Satoru Gojo",
				title: "Satoru Gojo",
				description:
					"A drawing focused on capturing the character's expression and recognizable visual features.",
			},
			{
				src: "/drawings/joseph.jpg",
				alt: "A pencil drawing of Joseph Joestar",
				title: "Joseph Joestar",
				description:
					"A character study that gave me another opportunity to work with bold shapes and exaggerated anatomy.",
			},
			{
				src: "/drawings/bakugo.jpg",
				alt: "A pencil drawing of Katsuki Bakugo",
				title: "Katsuki Bakugo",
				description:
					"A more energetic character drawing where I practiced sharp expressions, costume detail, and dynamic lines.",
			},
			{
				src: "/drawings/120.jpg",
				alt: "A pencil character drawing created by Cham",
				title: "Character Study",
				description:
					"Add a personal note describing the character, when you made the drawing, or what you practiced while creating it.",
			},
		],
		gridClassName: "aspect-[3/4]",
	},
	{
		id: "favorites",
		title: "Favorites",
		description:
			"A small collection of media, food, creators, and other things that have stayed memorable to me.",
		images: [
			{
				src: "/favorites/anime.jpg",
				alt: "Artwork representing Steins;Gate",
				title: "Favorite Anime: Steins;Gate",
				description:
					"I enjoy Steins;Gate for its combination of science fiction, mystery, character development, and the consequences behind its time-travel ideas.",
			},
			{
				src: "/favorites/manga.jpeg",
				alt: "An image representing Cham's favorite manga",
				title: "Favorite Manga",
				description:
					"Add the manga title and a short explanation of what makes its story, characters, or artwork memorable to you.",
			},
			{
				src: "/favorites/cartoon.jpeg",
				alt: "Artwork representing Gravity Falls",
				title: "Favorite Cartoon: Gravity Falls",
				description:
					"I like Gravity Falls for its mysteries, humor, hidden details, memorable characters, and the way its story rewards close attention.",
			},
			{
				src: "/favorites/movie.jpg",
				alt: "An image representing Cham's favorite movie",
				title: "Favorite Movie",
				description:
					"Add the movie title and a sentence about the story, performance, or idea that made it stand out to you.",
			},
			{
				src: "/favorites/game.jpg",
				alt: "Artwork representing Undertale",
				title: "Favorite Game: Undertale",
				description:
					"Undertale stayed memorable to me because of its characters, music, humor, emotional storytelling, and the way player choices influence the experience.",
			},
			{
				src: "/favorites/youtuber.jpg",
				alt: "An image representing YouTuber nigahiga",
				title: "Favorite YouTuber: nigahiga",
				description:
					"I grew up enjoying nigahiga's creative sketches, editing, humor, and ability to turn simple ideas into memorable videos.",
			},
			{
				src: "/favorites/food.jpeg",
				alt: "A serving of Cham's favorite food",
				title: "Favorite Food",
				description:
					"Add the name of the food and a short personal note about why it is your favorite.",
			},
			{
				src: "/favorites/color.jpg",
				alt: "An image representing Cham's favorite color",
				title: "Favorite Color",
				description:
					"Add the color and a short explanation of how it appears in your clothes, setup, artwork, or visual preferences.",
			},
			{
				src: "/favorites/animal.jpg",
				alt: "An axolotl representing Cham's favorite animal",
				title: "Favorite Animal: Axolotl",
				description:
					"I like axolotls for their unusual appearance, calm expression, and ability to regenerate parts of their bodies.",
			},
		],
		gridClassName: "aspect-[3/4]",
	},
	{
		id: "hobbies",
		title: "Hobbies",
		description:
			"Some of the activities I enjoy outside formal software development.",
		images: [
			{
				src: "/hobbies/piano.png",
				alt: "Cham sitting at a grand piano while wearing a suit",
				title: "Playing the Piano",
				description:
					"Playing the piano gives me a different kind of challenge from programming and lets me focus on rhythm, coordination, and expression.",
			},
			{
				src: "/hobbies/badminton.jpg",
				alt: "Cham participating in badminton",
				title: "Badminton",
				description:
					"Badminton is one of the sports I enjoy because it combines quick movement, coordination, strategy, and competition.",
			},
			{
				src: "/hobbies/pickle.jpg",
				alt: "Cham participating in pickleball",
				title: "Pickleball",
				description:
					"Pickleball is another activity I have tried and enjoyed for its approachable but competitive style of play.",
			},
			{
				src: "/hobbies/sudoku.jpg",
				alt: "A Sudoku puzzle being solved",
				title: "Solving Sudoku",
				description:
					"I enjoy Sudoku as a compact logic challenge that rewards careful observation, elimination, and patience.",
			},
			{
				src: "/hobbies/running.jpeg",
				alt: "Running shoes and clothing prepared for exercise",
				title: "Running",
				description:
					"Running gives me a straightforward way to stay active, clear my mind, and gradually improve my endurance.",
			},
			{
				src: "/hobbies/origami.jpg",
				alt: "An origami creation made by Cham",
				title: "Origami",
				description:
					"Origami appeals to me because a simple sheet of paper can become something complex through precision and a clear sequence of steps.",
			},
			{
				src: "/hobbies/rubiks.jpeg",
				alt: "A Rubik's Cube being solved",
				title: "Rubik's Cube",
				description:
					"Learning to solve a Rubik's Cube was an enjoyable exercise in recognizing patterns, memorizing algorithms, and improving through repetition.",
			},
			{
				src: "/hobbies/coding.jpg",
				alt: "Code displayed on Cham's computer",
				title: "Coding",
				description:
					"Coding is both part of my professional direction and something I genuinely enjoy doing when experimenting with ideas or learning new technologies.",
			},
		],
		gridClassName: "aspect-[4/3]",
	},
];

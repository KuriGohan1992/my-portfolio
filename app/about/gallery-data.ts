export interface GalleryImage {
	src: string;
	alt: string;
	title: string;
	referenceLink?: string;
	description: string;
}

export interface GalleryCollection {
	id: string;
	title: string;
	description: string;
	images: GalleryImage[];
	gridClassName: string;
	driveLink?: string;
}

export const aboutGalleryCollections: GalleryCollection[] = [
	{
		id: "workspace",
		title: "Workspace",
		description:
			"This is how my workspace evolved over the past few years as I obtained more and more money.",
		images: [
			{
				src: "/setup_progression/0.jpg",
				alt: "Me using my brother's setup",
				title: "Setup Zero",
				description:
					"Much like the other people who has an older sibling, my first experience at a setup was with my older brother's laptop and monitor. This is where I got spoiled by experiencing having an ultrawide screen (21:9), it feels like a huge boost at productivity. Whenever he's not using it, I'm allowed to use it (with some equivalent exchange of course).",
			},
			{
				src: "/setup_progression/1.jpg",
				alt: "My actual first setup",
				title: "My not-so-first Setup",
				description:
					"This is actually my second laptop since my first one was a hand-me-down from my brother which I used mainly for online classes. It was a very old but reliable Dell laptop (couldn't find a picture of it, sadly). This is my mother's old Lenovo Thinkpad, but it got me through senior high and freshman year. About the other things on my table, I have Gojo bobblehead I got as a gift from my mother in the Christmas of 2021, a Gan rubiks cube, and my old wallet (which is also from my mother).",
			},
			{
				src: "/setup_progression/2.jpeg",
				alt: "First upgrades to my setup",
				title: "The First Upgrades",
				description:
					"This was around early sophomore year, it is the first major upgrade to my setup since I bought a new table, a new mouse, a mousepad, and I owned my first mechanical keyboard which is a birthday gift from my brother and sister (I'm the youngest of 3). My mother also gave me her old monitor since the screen of my laptop broke.",
			},
			{
				src: "/setup_progression/3.jpeg",
				alt: "Picture of my ultrawide setup",
				title: "Ultrawide Unlocked",
				description:
					"(sorry no HD pic) I mentioned how I liked ultrawide in the first picture. So this happened in December 2024 when my brother randomly searched his monitor model (Huawei Mateview GT34) in Facebook Marketplace, then we found one selling for ₱13,000 (for reference the original price of this monitor is ₱28,000 or so). The best part is that it's only 3km away from our house. We immediately went there, my parents and brother chipped in so that I can buy it, I was very happy that day. Also, I bought the headphones for cheap from my friend.",
			},
			{
				src: "/setup_progression/4.jpeg",
				alt: "My setup with Mac Mini M4",
				title: "Officially a Mac Boi",
				description:
					"I've been eyeing the Mac Mini M4 ever since its announcement on November 2024. I've been needing a new PC since my old one has been slowing down, my brother recommended this to me, and I did my research, I watched countless videos, and read dozens of articles about it. I placed my order around early December and I got in on January 6, 2025. I can't believe how much value I'm getting from this ₱30,990 PC, it's probably the best bang for buck, before this I thought all they sell is a bunch of overpriced hardware.",
			},
			{
				src: "/setup_progression/5.jpeg",
				alt: "My setup with even more upgrades",
				title: "Even More Upgrades",
				description:
					"The most obvious upgrade here is the Arzopa Z1RC Portable Monitor which allowed me to bring my Mac Mini outside and just carry a single Type-C cable to have a display monitor. Aside from that I also got more screen real estate now which is an even greater boost to my workflow. I also bought a second-hand Logitech Brio 4k webcam for half its original price.",
			},
			{
				src: "/setup_progression/6.jpeg",
				alt: "My ergonomic setup with a split keyboard and a trackball mouse",
				title: "Er(a)gonomics Phase",
				description:
					"I was at the phase where I wanted to go mouseless in my workflow because of how interrupting it is to lift my right hand (first world problems, I know), I downloaded a bunch of software like Mouseless, Shortcat, I downloaded the extension SurfingKeys for my web browser, I was also getting into Vim around this time. I searched more about this style in YouTube and that's where I learnt about Ferris Sweep which is a 34-key keyboard, I searched online and there just happens to be a guy selling it a cheap price of ₱4,000, I picked it up in BGC and also went from QWERTY to Colemak-DH layout. I spent the whole Christmas Vacation practicing typing and optimizing my keyboard. I got the Trackball mouse (Logitech MX Ergo S) 4 months later, also second-hand (I love shopping for second-hands now). I bought it because I love weird things and new experiences while using ergonomics as an excuse.",
			},
			{
				src: "/setup_progression/7.jpeg",
				alt: "My setup at present date",
				title: "The Current Setup (Peak)",
				description:
					"Unlike the previous ones where I kept having more and more stuff, I decided to lean into minimalism here. Thanks to my short-term freelance work, I was able to buy a standing desk (Flexispot Comhar EW8) and finally an ergonomic chair (SiHoo M57 Pro) not seen in the picture. I also bought a new monitor arm (North Bayou G60) to really clean up my desk, as well as a new mousepad which looks better aesthetically. But above all of those, the elephant in the room is that thing that's displaying seemingly random digits in orange light. It is my favorite thing on the table, it is a Divergence Meter from Steins;Gate which I have been wanting to buy for years now but I just didn't have enough money back then, but I do now, and I did.",
			},
		],
		gridClassName: "aspect-[4/3]",
	},
	{
		id: "drawings",
		title: "Drawings",
		driveLink:
			"https://drive.google.com/drive/folders/1cZ1HMJl471jRczDNghU_LOIdmkia_yn_?usp=sharing",
		description:
			"These are my drawings where I used the grid technique. If you want to see more of my drawings you can click ",
		images: [
			{
				src: "/drawings/mista.jpg",
				alt: "A pencil drawing of Guido Mista",
				title: "Guido Mista",
				referenceLink:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlP89ZjXUWIOHRT5GuG7UREh-2fqaprjkzG5wmtSuOFUB36hWdAOPCA0&s=10",
				description:
					"This was my first time drawing in a long time and also the first time I tried employing the grid method. I decided to embrace the grid here and I think it looked fitting as a background for the character.",
			},
			{
				src: "/drawings/jotaro.jpg",
				alt: "A pencil drawing of Jotaro Kujo",
				title: "Jotaro Kujo",
				referenceLink:
					"https://i.pinimg.com/736x/16/d0/45/16d0459e6e63473f55b3f66c0310cede.jpg",
				description:
					"I was in my JoJo phase during pandemic so I drew a few JoJo characters. The hardest part here was darkening spots with an ordinary pencil.",
			},
			{
				src: "/drawings/levi.jpg",
				alt: "A pencil drawing of Levi Ackerman",
				title: "Levi Ackerman",
				referenceLink:
					"https://i.pinimg.com/originals/9a/33/4a/9a334a587d813845720c9e7d363bc2c0.png",
				description:
					"I guess the unique thing here was that I used a ruler for the blades, that's why they're so straight. Also, the pants was very difficult because of the white parts so I can't just spam my pencil all over it, I had to be careful.",
			},
			{
				src: "/drawings/dio.jpg",
				alt: "A pencil drawing of Dio Brando",
				title: "DIO",
				referenceLink:
					"https://i.pinimg.com/736x/e6/3b/46/e63b46a851a9487a5a6f78ea6247cba2.jpg",
				description:
					"This was my first time having access to actual drawing pencils with different hardness. I kinda messed up the circular shape of the clock at the background.",
			},
			{
				src: "/drawings/kaguya.jpg",
				alt: "A pencil drawing of Kaguya Shinomiya",
				title: "Kaguya Shinomiya",
				description:
					"I drew DIO before this to get experience first on using the drawing pencils, this is Top 1-Top 2 anime for me so I didn't want to mess it up. I couldn't find the reference for this sadly, it was a YouTube video but I think it got deleted.",
			},
			{
				src: "/drawings/zenitsu.jpg",
				alt: "A pencil drawing of Zenitsu Agatsuma",
				title: "Zenitsu Agatsuma",
				referenceLink:
					"https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/0/00/Thunder_Breathing_(Zenshuchuten).png/revision/latest?cb=20240529105731",
				description:
					"I loved doing the shading on his hair and clothing, this is where I really utilized having different drawing pencils. Doing the dark background was very tedious though.",
			},
			{
				src: "/drawings/giyu.jpg",
				alt: "A pencil drawing of Giyu Tomioka",
				title: "Giyu Tomioka",
				referenceLink:
					"https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/3/32/Water_Breathing_(Zenshuchuten).png/revision/latest?cb=20240529110051",
				description:
					"This is probably my most detailed drawing because of the water particles surround Giyu. I spent two weeks because of how draining it is to try and grid copy those water droplets 1:1. If you take a look at the reference, I think there's only a single water particle I didn't do.",
			},
			{
				src: "/drawings/kurisu.jpg",
				alt: "A pencil drawing of Kurisu Makise",
				title: "Kurisu Makise",
				referenceLink:
					"https://64.media.tumblr.com/566dc3b91260dd2f5f0e786036914564/tumblr_pklw3eTMSW1qg53joo1_1280.png",
				description:
					"This is my favorite drawing. This was my 3rd attempt at drawing this, I failed the first two times because of the white part in her eyes. So I bought a white ink pen just to do this. Self-glaze alert but I love my shading on her left side. The white ink actually came in clutch for this, it added so much contrast which I didn't have previously.",
			},
			{
				src: "/drawings/gojo.jpg",
				alt: "A pencil drawing of Satoru Gojo",
				title: "Satoru Gojo",
				referenceLink:
					"https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5a/Satoru_Gojo_arrives_on_the_battlefield_%28Anime%29.png/revision/latest?cb=20210226205256",
				description:
					"The white ink pen I bought for the previous drawing also did a huge part here for Gojo's hair and eyes. The contrast is superb, Although, the blackness and shading for the clothing could use some improvements.",
			},
			{
				src: "/drawings/joseph.jpg",
				alt: "A pencil drawing of Joseph Joestar",
				title: "Joseph Joestar",
				referenceLink:
					"https://i.pinimg.com/736x/96/c2/83/96c28354e0c7a18e7d9df36b81eaaee5.jpg",
				description: "My favorite JoJo. It was fun drawing his motorcycle.",
			},
			{
				src: "/drawings/bakugo.jpg",
				alt: "A pencil drawing of Katsuki Bakugo",
				title: "Katsuki Bakugo",
				referenceLink:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqx4tTlPZnsg100FaB2NBoG1iPenxPRPufVMhzRujksAScwDWURHxPvMa&s=10",
				description:
					"Glaze alert: The shading and the background is actually insane. One of my prettiest drawings for sure. I just noticed that starting from Kaguya I have been putting Kanji characters on every drawing.",
			},
			{
				src: "/drawings/120.jpg",
				alt: "A pencil drawing of Mahito, Todo, Yuji",
				title: "Mahito, Todo, Yuji",
				referenceLink:
					"https://i.pinimg.com/736x/c7/b5/1e/c7b51ebb8c5015eab685f78cccf096dd.jpg",
				description:
					"My latest drawing which was during my freshman year. It's my first time drawing 3 detailed characters, very time consuming. Especially Gege's artstyle with those lines, I could just do them randomly but I really wanted to do a 1:1 copy as much as possible. The lines really gave me a hard time most of all.",
			},
		],
		gridClassName: "aspect-[3/4]",
	},
	{
		id: "favorites",
		title: "Favorites",
		description:
			"A collection of media, food, creators, and other things that have been influential to my being.",
		images: [
			{
				src: "/favorites/anime.jpg",
				alt: "Anime poster of Steins;Gate",
				title: "Favorite Anime",
				description:
					"In case you didn't know the design of my website is based on my favorite anime Steins;Gate. I watched this back in June 2019 and I can say it's definitely one of the most influential media in my life. It changed my philosophy on things, my way of thinking, and my emotions. It's really THAT good. I lost interest in majority of the anime after watching this. ",
			},
			{
				src: "/favorites/manga.jpeg",
				alt: "Kaguya-sama Manga cover",
				title: "Favorite Manga",
				description:
					"If Steins;Gate is a 10 this is easily a 9.9 and due to recency bias, it has even surpassed Steins;Gate on some occassions, I decided to give it the award of favorite manga since I can't put in on favorite anime. This has also been very influential in my life especially the emotion and feelings side of things. Shirogane Miyuki is probably my favorite and model fictional character. It's the best romance and comedy out there for sure. I know this is categorized as best manga but the anime adaptation was perfect in terms of opening, animation, voice acting, memes, music, pacing, you can really tell that the animators loved working on this.",
			},
			{
				src: "/favorites/cartoon.jpeg",
				alt: "Gravity Falls opening frame",
				title: "Favorite Cartoon",
				description:
					"My favorite cartoon series ever since I was a kid and nothing really ever came close, this was really ahead of its time. I loved the mystery, the depth of its lore,  doing those cryptography stuff. I used to have one episode which I have memorized the entire dialogue due to how much I've seen it on TV. I think I like weird things because of this show. The humor here also definitely shaped who I am.",
			},
			{
				src: "/favorites/movie.jpg",
				alt: "A frame from Shawshank Redemption",
				title: "Favorite Movie",
				description:
					"It was pretty tough choosing a movie for this category, because I also liked the Green Mile about as much. Also if I could do repeats my favorite movie would probably either be the Steins;Gate or Kaguya-sama movie lolz. But Shawshank is a movie that I don't think anyone can dislike, it's such a good movie to watch for just about anyone, anytime, I love the storytelling specifically of this movie and I think the pacing was perfect.",
			},
			{
				src: "/favorites/game.jpg",
				alt: "Picture of Undertale",
				title: "Favorite Game",
				description:
					"I found out about this game from a song, then I went down the rabbit hole of comic skits on YouTube before even playing the game because I had no device to play it on back then. Definitely my favorite game, especially because of how good and useful the music in this game is to my academic projects, I've lost count how many times I used an Undertale soundtrack for my submission. Some honorable mentions for favorite game are: Slay the Spire, Valorant, Binding of Isaac, Plants vs Zombies.",
			},
			{
				src: "/favorites/youtuber.jpg",
				alt: "YouTube Channel of nigahiga",
				title: "Favorite YouTuber",
				description:
					"Even though I only started watching him when I was Grade 11, his skits and videos have greatly influenced my style on a lot of video projects I did for school back then and until now. His roundabout videos especially are my favorite ones where he connects one thing to another out of nowhere. Aside from that I think he's just a cool and wholesome person. Nobody can really hate this guy.",
			},
			{
				src: "/favorites/food.jpeg",
				alt: "A serving Buldak cooked by me",
				title: "Favorite Food",
				description:
					"This is a recent one but buldak carbonara with milk, kewpie mayo, soft-boiled eggs, seaweed flakes, parsley, tteokbokki, cheese, more cheese, and EVEN MORE CHEESE has become my comfort food. Matter of fact, while looking for pictures of buldak to put here, I craved it and decided to prepare one, which is the picture I used.",
			},
			{
				src: "/favorites/color.jpg",
				alt: "Random things colored black",
				title: "Favorite Color",
				description: "I just love the black aesthetic 'nuff said.",
			},
			{
				src: "/favorites/animal.jpg",
				alt: "A cute Axolotl",
				title: "Favorite Animal",
				description:
					"I learned about Axolotls from Gravity Falls and it has been my favorite animal since 6th grade, they're so cute, they regenerate which is awesome, and their name is so cool and just rolls of my tongue so smoothly. I wish to be able to take care of one in the future.",
			},
		],
		gridClassName: "aspect-[3/4]",
	},
	{
		id: "hobbies",
		title: "Hobbies",
		description:
			"Some of the activities I enjoy outside formal software development?",
		images: [
			{
				src: "/hobbies/piano.png",
				alt: "Me in front of a piano while wearing a suit",
				title: "Piano",
				description:
					"I only know how to play at a performative level, the only piece I know is Gate of Steiner and I haven't even mastered it yet. I just put it here because it looks good as a cover photo for this collection. My proficiency with the Piano is 2/10 at best.",
			},
			{
				src: "/hobbies/badminton.jpg",
				alt: "Me playing badminton",
				title: "Badminton",
				description:
					"I got into Badminton back in November 2022, I think it's the perfect sport for my physique, I love doing quick, explosive movements, and doing proper footwork. It has definitely boosted my athleticism which I'm very thankful for. Recently, I haven't been able to play as much though due to my college and professional life.",
			},
			{
				src: "/hobbies/pickle.jpg",
				alt: "Pickleball with friends",
				title: "Pickleball",
				description:
					"I only got into pickleball because of my family, It's a very tame sport compared to badminton. I don't sweat nearly as much, nor get tired, wouldn't say I'm that good at it though.",
			},
			{
				src: "/hobbies/sudoku.jpg",
				alt: "Me solving a Sudoku Puzzle",
				title: "Sudoku",
				description:
					"I love doing casual sudoku, it definitely gave a boost to my logical thinking skills, but I don't think I'm nearly as good as the other guys here. Still a very fun activity to do from time to time.",
			},
			{
				src: "/hobbies/running.jpeg",
				alt: "Running shoes prepared for exercise",
				title: "Running",
				description:
					"I love running at nighttime it's my way of clearing my mind. I'm a decent runner thanks to playing badminton. But right now I'm very far from my prime since I've been a decrepit (n)vim user and haven't touch much grass in a while.",
			},
			{
				src: "/hobbies/origami.jpg",
				alt: "Young me wearing an origame hat I made",
				title: "Origami",
				description:
					"I learned about Origami from Jeremy Shafer, I used to watch him on YouTube in my Mom's phone. His origami designs are insane, and it was thanks to him that I got hooked on origami. But this is more of a thing I used to do when I was a kid, the last time I did a complex origami was for a school competition back in 2021. Origami taught me patience which was a very valuable thing to learn especially as a kid. I was able to just sit for hours, or fold for consecutive days to finish a complex origami. It was a good pasttime back then when I didn't own any gadgets.",
			},
			{
				src: "/hobbies/rubiks.jpeg",
				alt: "A Rubik's Cube",
				title: "Rubik's Cube",
				description:
					"Solving the Rubik's cube is a good destressor for me. I'm not that fast at it, but I enjoy solving a rubik's cube every once in a while.",
			},
			{
				src: "/hobbies/coding.jpg",
				alt: "Me in a programming competition",
				title: "Competitive Programming",
				description:
					"I'm kind of shy to admit that this is one of my hobbies. I started learning competitive programming on November 2025 because I was picked to represent our school in a national competition along with other students. After that event, I enjoyed it actually and wanted more so I dipped my toes a bit into the vast, deep ocean that is Competitive Programming.",
			},
		],
		gridClassName: "aspect-[4/3]",
	},
];

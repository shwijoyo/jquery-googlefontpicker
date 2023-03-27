(function ($) {
    $.fn.googlefontpicker = function (callback = function (font){}) {
        let data = [
	{
		family: "ABeeZee",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Abel",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Abhaya Libre",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"sinhala"
		]
	},
	{
		family: "Aboreto",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Abril Fatface",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Abyssinica SIL",
		category: "serif",
		subsets: [
			"ethiopic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Aclonica",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Acme",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Actor",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Adamina",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Advent Pro",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Aguafina Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Akaya Kanadaka",
		category: "display",
		subsets: [
			"kannada",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Akaya Telivigala",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"telugu"
		]
	},
	{
		family: "Akronim",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Akshar",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Aladin",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Alata",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alatsi",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Albert Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Aldrich",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Alef",
		category: "sans-serif",
		subsets: [
			"hebrew",
			"latin"
		]
	},
	{
		family: "Alegreya",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alegreya SC",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alegreya Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alegreya Sans SC",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Aleo",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Alex Brush",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alexandria",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alfa Slab One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alice",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Alike",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Alike Angular",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Alkalami",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Alkatra",
		category: "display",
		subsets: [
			"bengali",
			"devanagari",
			"latin",
			"latin-ext",
			"oriya"
		]
	},
	{
		family: "Allan",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Allerta",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Allerta Stencil",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Allison",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Allura",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Almarai",
		category: "sans-serif",
		subsets: [
			"arabic"
		]
	},
	{
		family: "Almendra",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Almendra Display",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Almendra SC",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Alumni Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alumni Sans Collegiate One",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alumni Sans Inline One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Alumni Sans Pinstripe",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Amarante",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Amaranth",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Amatic SC",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"hebrew",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Amethysta",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Amiko",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Amiri",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Amiri Quran",
		category: "serif",
		subsets: [
			"arabic",
			"latin"
		]
	},
	{
		family: "Amita",
		category: "handwriting",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Anaheim",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Andada Pro",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Andika",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Anek Bangla",
		category: "sans-serif",
		subsets: [
			"bengali",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Anek Devanagari",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Anek Gujarati",
		category: "sans-serif",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Anek Gurmukhi",
		category: "sans-serif",
		subsets: [
			"gurmukhi",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Anek Kannada",
		category: "sans-serif",
		subsets: [
			"kannada",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Anek Latin",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Anek Malayalam",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"malayalam"
		]
	},
	{
		family: "Anek Odia",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"oriya"
		]
	},
	{
		family: "Anek Tamil",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Anek Telugu",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"telugu"
		]
	},
	{
		family: "Angkor",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Annie Use Your Telescope",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Anonymous Pro",
		category: "monospace",
		subsets: [
			"cyrillic",
			"greek",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Antic",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Antic Didone",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Antic Slab",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Anton",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Antonio",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Anybody",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Arapey",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Arbutus",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Arbutus Slab",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Architects Daughter",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Archivo",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Archivo Black",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Archivo Narrow",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Are You Serious",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Aref Ruqaa",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Aref Ruqaa Ink",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Arima",
		category: "display",
		subsets: [
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"malayalam",
			"tamil",
			"vietnamese"
		]
	},
	{
		family: "Arimo",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"hebrew",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Arizonia",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Armata",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Arsenal",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Artifika",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Arvo",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Arya",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Asap",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Asap Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Asar",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Asset",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Assistant",
		category: "sans-serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Astloch",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Asul",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Athiti",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Atkinson Hyperlegible",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Atma",
		category: "display",
		subsets: [
			"bengali",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Atomic Age",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Aubrey",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Audiowide",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Autour One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Average",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Average Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Averia Gruesa Libre",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Averia Libre",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Averia Sans Libre",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Averia Serif Libre",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Azeret Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "B612",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "B612 Mono",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "BIZ UDGothic",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"greek-ext",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "BIZ UDMincho",
		category: "serif",
		subsets: [
			"cyrillic",
			"greek-ext",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "BIZ UDPGothic",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"greek-ext",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "BIZ UDPMincho",
		category: "serif",
		subsets: [
			"cyrillic",
			"greek-ext",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Babylonica",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bad Script",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"latin"
		]
	},
	{
		family: "Bahiana",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bahianita",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bai Jamjuree",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Bakbak One",
		category: "display",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ballet",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Baloo 2",
		category: "display",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Baloo Bhai 2",
		category: "display",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Baloo Bhaijaan 2",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Baloo Bhaina 2",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"oriya",
			"vietnamese"
		]
	},
	{
		family: "Baloo Chettan 2",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"malayalam",
			"vietnamese"
		]
	},
	{
		family: "Baloo Da 2",
		category: "display",
		subsets: [
			"bengali",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Baloo Paaji 2",
		category: "display",
		subsets: [
			"gurmukhi",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Baloo Tamma 2",
		category: "display",
		subsets: [
			"kannada",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Baloo Tammudu 2",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"telugu",
			"vietnamese"
		]
	},
	{
		family: "Baloo Thambi 2",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"tamil",
			"vietnamese"
		]
	},
	{
		family: "Balsamiq Sans",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Balthazar",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bangers",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Barlow",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Barlow Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Barlow Semi Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Barriecito",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Barrio",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Basic",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Baskervville",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Battambang",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Baumans",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bayon",
		category: "sans-serif",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Be Vietnam Pro",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Beau Rivage",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bebas Neue",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Belgrano",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bellefair",
		category: "serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Belleza",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bellota",
		category: "display",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bellota Text",
		category: "display",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "BenchNine",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Benne",
		category: "serif",
		subsets: [
			"kannada",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bentham",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Berkshire Swash",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Besley",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Beth Ellen",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bevan",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "BhuTuka Expanded One",
		category: "display",
		subsets: [
			"gurmukhi",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Big Shoulders Display",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Big Shoulders Inline Display",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Big Shoulders Inline Text",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Big Shoulders Stencil Display",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Big Shoulders Stencil Text",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Big Shoulders Text",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bigelow Rules",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bigshot One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bilbo",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bilbo Swash Caps",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "BioRhyme",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "BioRhyme Expanded",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Birthstone",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Birthstone Bounce",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Biryani",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bitter",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Black And White Picture",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Black Han Sans",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Black Ops One",
		category: "display",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Blaka",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Blaka Hollow",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Blaka Ink",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Blinker",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bodoni Moda",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bokor",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Bona Nova",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"hebrew",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bonbon",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bonheur Royale",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Boogaloo",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bowlby One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bowlby One SC",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Brawler",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Bree Serif",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Brygada 1918",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bubblegum Sans",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bubbler One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Buda",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Buenard",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Bungee",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bungee Hairline",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bungee Inline",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bungee Outline",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bungee Shade",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Bungee Spice",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Butcherman",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Butterfly Kids",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cabin",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cabin Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cabin Sketch",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Caesar Dressing",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Cagliostro",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Cairo",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cairo Play",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Caladea",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Calistoga",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Calligraffitti",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Cambay",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cambo",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Candal",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Cantarell",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cantata One",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cantora One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Capriola",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Caramel",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Carattere",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cardo",
		category: "serif",
		subsets: [
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Carme",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Carrois Gothic",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Carrois Gothic SC",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Carter One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Castoro",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Catamaran",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Caudex",
		category: "serif",
		subsets: [
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Caveat",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Caveat Brush",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cedarville Cursive",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Ceviche One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Chakra Petch",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Changa",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Changa One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Chango",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Charis SIL",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Charm",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Charmonman",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Chathura",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Chau Philomene One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Chela One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Chelsea Market",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Chenla",
		category: "display",
		subsets: [
			"khmer"
		]
	},
	{
		family: "Cherish",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cherry Cream Soda",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Cherry Swash",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Chewy",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Chicle",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Chilanka",
		category: "handwriting",
		subsets: [
			"latin",
			"malayalam"
		]
	},
	{
		family: "Chivo",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Chivo Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Chonburi",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Cinzel",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cinzel Decorative",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Clicker Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Climate Crisis",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Coda",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Coda Caption",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Codystar",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Coiny",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"tamil",
			"vietnamese"
		]
	},
	{
		family: "Combo",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Comfortaa",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Comforter",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Comforter Brush",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Comic Neue",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Coming Soon",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Commissioner",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Concert One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Condiment",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Content",
		category: "display",
		subsets: [
			"khmer"
		]
	},
	{
		family: "Contrail One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Convergence",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cookie",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Copse",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Corben",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Corinthia",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cormorant",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cormorant Garamond",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cormorant Infant",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cormorant SC",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cormorant Unicase",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cormorant Upright",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Courgette",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Courier Prime",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cousine",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"hebrew",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Coustard",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Covered By Your Grace",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Crafty Girls",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Creepster",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Crete Round",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Crimson Pro",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Crimson Text",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Croissant One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Crushed",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Cuprum",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Cute Font",
		category: "display",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Cutive",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Cutive Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "DM Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "DM Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "DM Serif Display",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "DM Serif Text",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Damion",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Dancing Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Dangrek",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Darker Grotesque",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "David Libre",
		category: "serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Dawning of a New Day",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Days One",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Dekko",
		category: "handwriting",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Dela Gothic One",
		category: "display",
		subsets: [
			"cyrillic",
			"greek",
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Delicious Handrawn",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Delius",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Delius Swash Caps",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Delius Unicase",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Della Respira",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Denk One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Devonshire",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Dhurjati",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Didact Gothic",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Diplomata",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Diplomata SC",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Do Hyeon",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Dokdo",
		category: "handwriting",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Domine",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Donegal One",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Dongle",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Doppio One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Dorsa",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Dosis",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "DotGothic16",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Dr Sugiyama",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Duru Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "DynaPuff",
		category: "display",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Dynalight",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "EB Garamond",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Eagle Lake",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "East Sea Dokdo",
		category: "handwriting",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Eater",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Economica",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Eczar",
		category: "serif",
		subsets: [
			"devanagari",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Edu NSW ACT Foundation",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Edu QLD Beginner",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Edu SA Beginner",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Edu TAS Beginner",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Edu VIC WA NT Beginner",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "El Messiri",
		category: "sans-serif",
		subsets: [
			"arabic",
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Electrolize",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Elsie",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Elsie Swash Caps",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Emblema One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Emilys Candy",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Encode Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Encode Sans Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Encode Sans Expanded",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Encode Sans SC",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Encode Sans Semi Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Encode Sans Semi Expanded",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Engagement",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Englebert",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Enriqueta",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ephesis",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Epilogue",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Erica One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Esteban",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Estonia",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Euphoria Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ewert",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Exo",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Exo 2",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Expletus Sans",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Explora",
		category: "handwriting",
		subsets: [
			"cherokee",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fahkwang",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Familjen Grotesk",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fanwood Text",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Farro",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Farsan",
		category: "display",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fascinate",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Fascinate Inline",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Faster One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fasthand",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Fauna One",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Faustina",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Federant",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Federo",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Felipa",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fenix",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Festive",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Figtree",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Finger Paint",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Finlandica",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fira Code",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fira Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fira Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fira Sans Condensed",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fira Sans Extra Condensed",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fjalla One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fjord One",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Flamenco",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Flavors",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fleur De Leah",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Flow Block",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Flow Circular",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Flow Rounded",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fondamento",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fontdiner Swanky",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Forum",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fragment Mono",
		category: "monospace",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Francois One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Frank Ruhl Libre",
		category: "serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fraunces",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Freckle Face",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fredericka the Great",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Fredoka",
		category: "sans-serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Freehand",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Fresca",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Frijole",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Fruktur",
		category: "display",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fugaz One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Fuggles",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Fuzzy Bubbles",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "GFS Didot",
		category: "serif",
		subsets: [
			"greek"
		]
	},
	{
		family: "GFS Neohellenic",
		category: "sans-serif",
		subsets: [
			"greek"
		]
	},
	{
		family: "Gabriela",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin"
		]
	},
	{
		family: "Gaegu",
		category: "handwriting",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Gafata",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gajraj One",
		category: "display",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Galada",
		category: "display",
		subsets: [
			"bengali",
			"latin"
		]
	},
	{
		family: "Galdeano",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Galindo",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gamja Flower",
		category: "handwriting",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Gantari",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gayathri",
		category: "sans-serif",
		subsets: [
			"latin",
			"malayalam"
		]
	},
	{
		family: "Gelasio",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Gemunu Libre",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"sinhala"
		]
	},
	{
		family: "Genos",
		category: "sans-serif",
		subsets: [
			"cherokee",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Gentium Book Plus",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Gentium Plus",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Geo",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Georama",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Geostar",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Geostar Fill",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Germania One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Gideon Roman",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Gidugu",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Gilda Display",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Girassol",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Give You Glory",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Glass Antiqua",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Glegoo",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gloock",
		category: "serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gloria Hallelujah",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Glory",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Gluten",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Goblin One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Gochi Hand",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Goldman",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Golos Text",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gorditas",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Gothic A1",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Gotu",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Goudy Bookletter 1911",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Gowun Batang",
		category: "serif",
		subsets: [
			"korean",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Gowun Dodum",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Graduate",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Grand Hotel",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Grandstander",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Grape Nuts",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Gravitas One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Great Vibes",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Grechen Fuemen",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Grenze",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Grenze Gotisch",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Grey Qo",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Griffy",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gruppo",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gudea",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gugi",
		category: "display",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Gulzar",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Gupter",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Gurajada",
		category: "serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Gwendolyn",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Habibi",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hachi Maru Pop",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hahmlet",
		category: "serif",
		subsets: [
			"korean",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Halant",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hammersmith One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hanalei",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hanalei Fill",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Handlee",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Hanken Grotesk",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Hanuman",
		category: "serif",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Happy Monkey",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Harmattan",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Headland One",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Heebo",
		category: "sans-serif",
		subsets: [
			"hebrew",
			"latin"
		]
	},
	{
		family: "Henny Penny",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Hepta Slab",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Herr Von Muellerhoff",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hi Melody",
		category: "handwriting",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Hina Mincho",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Hind",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hind Guntur",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"telugu"
		]
	},
	{
		family: "Hind Madurai",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Hind Siliguri",
		category: "sans-serif",
		subsets: [
			"bengali",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hind Vadodara",
		category: "sans-serif",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Holtwood One SC",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Homemade Apple",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Homenaje",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Hubballi",
		category: "display",
		subsets: [
			"kannada",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Hurricane",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "IBM Plex Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "IBM Plex Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "IBM Plex Sans Arabic",
		category: "sans-serif",
		subsets: [
			"arabic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "IBM Plex Sans Condensed",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "IBM Plex Sans Devanagari",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "IBM Plex Sans Hebrew",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "IBM Plex Sans JP",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "IBM Plex Sans KR",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "IBM Plex Sans Thai",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"thai"
		]
	},
	{
		family: "IBM Plex Sans Thai Looped",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"thai"
		]
	},
	{
		family: "IBM Plex Serif",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "IM Fell DW Pica",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell DW Pica SC",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell Double Pica",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell Double Pica SC",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell English",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell English SC",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell French Canon",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell French Canon SC",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell Great Primer",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "IM Fell Great Primer SC",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Ibarra Real Nova",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Iceberg",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Iceland",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Imbue",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Imperial Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Imprima",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Inconsolata",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Inder",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Indie Flower",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Ingrid Darling",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Inika",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Inknut Antiqua",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Inria Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Inria Serif",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Inspiration",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Inter",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Inter Tight",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Irish Grover",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Island Moments",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Istok Web",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Italiana",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Italianno",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Itim",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Jacques Francois",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Jacques Francois Shadow",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Jaldi",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "JetBrains Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Jim Nightshade",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Joan",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Jockey One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Jolly Lodger",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Jomhuria",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Jomolhari",
		category: "serif",
		subsets: [
			"latin",
			"tibetan"
		]
	},
	{
		family: "Josefin Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Josefin Slab",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Jost",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Joti One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Jua",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Judson",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Julee",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Julius Sans One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Junge",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Jura",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"kayah-li",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Just Another Hand",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Just Me Again Down Here",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "K2D",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Kadwa",
		category: "serif",
		subsets: [
			"devanagari",
			"latin"
		]
	},
	{
		family: "Kaisei Decol",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kaisei HarunoUmi",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kaisei Opti",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kaisei Tokumin",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kalam",
		category: "handwriting",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kameron",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Kanit",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Kantumruy Pro",
		category: "sans-serif",
		subsets: [
			"khmer",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Karantina",
		category: "display",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Karla",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Karma",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Katibeh",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kaushan Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kavivanar",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Kavoon",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kdam Thmor Pro",
		category: "sans-serif",
		subsets: [
			"khmer",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Keania One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kelly Slab",
		category: "display",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kenia",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Khand",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Khmer",
		category: "display",
		subsets: [
			"khmer"
		]
	},
	{
		family: "Khula",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kings",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Kirang Haerang",
		category: "display",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Kite One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kiwi Maru",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Klee One",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"greek-ext",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Knewave",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "KoHo",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Kodchasan",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Koh Santepheap",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Kolker Brush",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Kosugi",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kosugi Maru",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kotta One",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Koulen",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Kranky",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Kreon",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kristi",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Krona One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Krub",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Kufam",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Kulim Park",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kumar One",
		category: "display",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kumar One Outline",
		category: "display",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Kumbh Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"math"
		]
	},
	{
		family: "Kurale",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "La Belle Aurore",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Labrada",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lacquer",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Laila",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Lakki Reddy",
		category: "handwriting",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Lalezar",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lancelot",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Langar",
		category: "display",
		subsets: [
			"gurmukhi",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Lateef",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Lato",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Lavishly Yours",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "League Gothic",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "League Script",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "League Spartan",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Leckerli One",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Ledger",
		category: "serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Lekton",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Lemon",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Lemonada",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lexend",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lexend Deca",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lexend Exa",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lexend Giga",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lexend Mega",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lexend Peta",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lexend Tera",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lexend Zetta",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Libre Barcode 128",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Libre Barcode 128 Text",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Libre Barcode 39",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Libre Barcode 39 Extended",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Libre Barcode 39 Extended Text",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Libre Barcode 39 Text",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Libre Barcode EAN13 Text",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Libre Baskerville",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Libre Bodoni",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Libre Caslon Display",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Libre Caslon Text",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Libre Franklin",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Licorice",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Life Savers",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Lilita One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Lily Script One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Limelight",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Linden Hill",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Literata",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Liu Jian Mao Cao",
		category: "handwriting",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "Livvic",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lobster",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Lobster Two",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Londrina Outline",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Londrina Shadow",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Londrina Sketch",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Londrina Solid",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Long Cang",
		category: "handwriting",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "Lora",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Love Light",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Love Ya Like A Sister",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Loved by the King",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Lovers Quarrel",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Luckiest Guy",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Lusitana",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Lustria",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Luxurious Roman",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Luxurious Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "M PLUS 1",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "M PLUS 1 Code",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "M PLUS 1p",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"hebrew",
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "M PLUS 2",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "M PLUS Code Latin",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "M PLUS Rounded 1c",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"hebrew",
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Ma Shan Zheng",
		category: "handwriting",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "Macondo",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Macondo Swash Caps",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Mada",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin"
		]
	},
	{
		family: "Magra",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Maiden Orange",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Maitree",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Major Mono Display",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Mako",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Mali",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Mallanna",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Mandali",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Manjari",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"malayalam"
		]
	},
	{
		family: "Manrope",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Mansalva",
		category: "handwriting",
		subsets: [
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Manuale",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Marcellus",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Marcellus SC",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Marck Script",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Margarine",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Marhey",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Markazi Text",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Marko One",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Marmelad",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Martel",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Martel Sans",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Martian Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Marvel",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Mate",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Mate SC",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Material Icons",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Material Icons Outlined",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Material Icons Round",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Material Icons Sharp",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Material Icons Two Tone",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Material Symbols Outlined",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Material Symbols Rounded",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Material Symbols Sharp",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Maven Pro",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "McLaren",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mea Culpa",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Meddon",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "MedievalSharp",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Medula One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Meera Inimai",
		category: "sans-serif",
		subsets: [
			"latin",
			"tamil"
		]
	},
	{
		family: "Megrim",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Meie Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Meow Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Merienda",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Merriweather",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Merriweather Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Metal",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Metal Mania",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Metamorphous",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Metrophobic",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Michroma",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Milonga",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Miltonian",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Miltonian Tattoo",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Mina",
		category: "sans-serif",
		subsets: [
			"bengali",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mingzat",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"lepcha"
		]
	},
	{
		family: "Miniver",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Miriam Libre",
		category: "sans-serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mirza",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Miss Fajardose",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mitr",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Mochiy Pop One",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin"
		]
	},
	{
		family: "Mochiy Pop P One",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin"
		]
	},
	{
		family: "Modak",
		category: "display",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Modern Antiqua",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mogra",
		category: "display",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mohave",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Molengo",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Molle",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Monda",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Monofett",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Monoton",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Monsieur La Doulaise",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Montaga",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Montagu Slab",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "MonteCarlo",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Montez",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Montserrat",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Montserrat Alternates",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Montserrat Subrayada",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Moo Lah Lah",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Moon Dance",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Moul",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Moulpali",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Mountains of Christmas",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Mouse Memoirs",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mr Bedfort",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mr Dafoe",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mr De Haviland",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mrs Saint Delafield",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mrs Sheppards",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ms Madi",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Mukta",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mukta Mahee",
		category: "sans-serif",
		subsets: [
			"gurmukhi",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mukta Malar",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Mukta Vaani",
		category: "sans-serif",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Mulish",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Murecho",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "MuseoModerno",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "My Soul",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Mynerve",
		category: "handwriting",
		subsets: [
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Mystery Quest",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "NTR",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Nabla",
		category: "display",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"math",
			"vietnamese"
		]
	},
	{
		family: "Nanum Brush Script",
		category: "handwriting",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Nanum Gothic",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Nanum Gothic Coding",
		category: "monospace",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Nanum Myeongjo",
		category: "serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Nanum Pen Script",
		category: "handwriting",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Neonderthaw",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Nerko One",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Neucha",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"latin"
		]
	},
	{
		family: "Neuton",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "New Rocker",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "New Tegomin",
		category: "serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "News Cycle",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Newsreader",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Niconne",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Niramit",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Nixie One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nobile",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Nokora",
		category: "sans-serif",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Norican",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Nosifer",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Notable",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nothing You Could Do",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Noticia Text",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Noto Color Emoji",
		category: "sans-serif",
		subsets: [
			"emoji"
		]
	},
	{
		family: "Noto Emoji",
		category: "sans-serif",
		subsets: [
			"emoji"
		]
	},
	{
		family: "Noto Kufi Arabic",
		category: "sans-serif",
		subsets: [
			"arabic"
		]
	},
	{
		family: "Noto Music",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"music"
		]
	},
	{
		family: "Noto Naskh Arabic",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Nastaliq Urdu",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Rashi Hebrew",
		category: "serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"devanagari",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Noto Sans Adlam",
		category: "sans-serif",
		subsets: [
			"adlam",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Adlam Unjoined",
		category: "sans-serif",
		subsets: [
			"adlam",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Anatolian Hieroglyphs",
		category: "sans-serif",
		subsets: [
			"anatolian-hieroglyphs"
		]
	},
	{
		family: "Noto Sans Arabic",
		category: "sans-serif",
		subsets: [
			"arabic"
		]
	},
	{
		family: "Noto Sans Armenian",
		category: "sans-serif",
		subsets: [
			"armenian",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Avestan",
		category: "sans-serif",
		subsets: [
			"avestan",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Balinese",
		category: "sans-serif",
		subsets: [
			"balinese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Bamum",
		category: "sans-serif",
		subsets: [
			"bamum",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Bassa Vah",
		category: "sans-serif",
		subsets: [
			"bassa-vah",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Batak",
		category: "sans-serif",
		subsets: [
			"batak",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Bengali",
		category: "sans-serif",
		subsets: [
			"bengali",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Bhaiksuki",
		category: "sans-serif",
		subsets: [
			"bhaiksuki"
		]
	},
	{
		family: "Noto Sans Brahmi",
		category: "sans-serif",
		subsets: [
			"brahmi"
		]
	},
	{
		family: "Noto Sans Buginese",
		category: "sans-serif",
		subsets: [
			"buginese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Buhid",
		category: "sans-serif",
		subsets: [
			"buhid",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Canadian Aboriginal",
		category: "sans-serif",
		subsets: [
			"canadian-aboriginal",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Carian",
		category: "sans-serif",
		subsets: [
			"carian"
		]
	},
	{
		family: "Noto Sans Caucasian Albanian",
		category: "sans-serif",
		subsets: [
			"caucasian-albanian"
		]
	},
	{
		family: "Noto Sans Chakma",
		category: "sans-serif",
		subsets: [
			"chakma",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Cham",
		category: "sans-serif",
		subsets: [
			"cham",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Cherokee",
		category: "sans-serif",
		subsets: [
			"cherokee",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Coptic",
		category: "sans-serif",
		subsets: [
			"coptic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Cuneiform",
		category: "sans-serif",
		subsets: [
			"cuneiform"
		]
	},
	{
		family: "Noto Sans Cypriot",
		category: "sans-serif",
		subsets: [
			"cypriot"
		]
	},
	{
		family: "Noto Sans Deseret",
		category: "sans-serif",
		subsets: [
			"deseret"
		]
	},
	{
		family: "Noto Sans Devanagari",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Display",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Noto Sans Duployan",
		category: "sans-serif",
		subsets: [
			"duployan"
		]
	},
	{
		family: "Noto Sans Egyptian Hieroglyphs",
		category: "sans-serif",
		subsets: [
			"egyptian-hieroglyphs"
		]
	},
	{
		family: "Noto Sans Elbasan",
		category: "sans-serif",
		subsets: [
			"elbasan"
		]
	},
	{
		family: "Noto Sans Elymaic",
		category: "sans-serif",
		subsets: [
			"elymaic"
		]
	},
	{
		family: "Noto Sans Ethiopic",
		category: "sans-serif",
		subsets: [
			"ethiopic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Georgian",
		category: "sans-serif",
		subsets: [
			"georgian",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Glagolitic",
		category: "sans-serif",
		subsets: [
			"glagolitic"
		]
	},
	{
		family: "Noto Sans Gothic",
		category: "sans-serif",
		subsets: [
			"gothic"
		]
	},
	{
		family: "Noto Sans Grantha",
		category: "sans-serif",
		subsets: [
			"grantha",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Gujarati",
		category: "sans-serif",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Gunjala Gondi",
		category: "sans-serif",
		subsets: [
			"gunjala-gondi"
		]
	},
	{
		family: "Noto Sans Gurmukhi",
		category: "sans-serif",
		subsets: [
			"gurmukhi",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans HK",
		category: "sans-serif",
		subsets: [
			"chinese-hongkong",
			"latin"
		]
	},
	{
		family: "Noto Sans Hanifi Rohingya",
		category: "sans-serif",
		subsets: [
			"hanifi-rohingya",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Hanunoo",
		category: "sans-serif",
		subsets: [
			"hanunoo",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Hatran",
		category: "sans-serif",
		subsets: [
			"hatran"
		]
	},
	{
		family: "Noto Sans Hebrew",
		category: "sans-serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Imperial Aramaic",
		category: "sans-serif",
		subsets: [
			"imperial-aramaic"
		]
	},
	{
		family: "Noto Sans Indic Siyaq Numbers",
		category: "sans-serif",
		subsets: [
			"indic-siyaq-numbers"
		]
	},
	{
		family: "Noto Sans Inscriptional Pahlavi",
		category: "sans-serif",
		subsets: [
			"inscriptional-pahlavi"
		]
	},
	{
		family: "Noto Sans Inscriptional Parthian",
		category: "sans-serif",
		subsets: [
			"inscriptional-parthian"
		]
	},
	{
		family: "Noto Sans JP",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin"
		]
	},
	{
		family: "Noto Sans Javanese",
		category: "sans-serif",
		subsets: [
			"javanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans KR",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Noto Sans Kaithi",
		category: "sans-serif",
		subsets: [
			"kaithi"
		]
	},
	{
		family: "Noto Sans Kannada",
		category: "sans-serif",
		subsets: [
			"kannada",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Kayah Li",
		category: "sans-serif",
		subsets: [
			"kayah-li",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Kharoshthi",
		category: "sans-serif",
		subsets: [
			"kharoshthi"
		]
	},
	{
		family: "Noto Sans Khmer",
		category: "sans-serif",
		subsets: [
			"khmer",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Khojki",
		category: "sans-serif",
		subsets: [
			"khojki",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Khudawadi",
		category: "sans-serif",
		subsets: [
			"khudawadi"
		]
	},
	{
		family: "Noto Sans Lao",
		category: "sans-serif",
		subsets: [
			"lao",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Lao Looped",
		category: "sans-serif",
		subsets: [
			"lao",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Sans Lepcha",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"lepcha"
		]
	},
	{
		family: "Noto Sans Limbu",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"limbu"
		]
	},
	{
		family: "Noto Sans Linear A",
		category: "sans-serif",
		subsets: [
			"linear-a"
		]
	},
	{
		family: "Noto Sans Linear B",
		category: "sans-serif",
		subsets: [
			"linear-b"
		]
	},
	{
		family: "Noto Sans Lisu",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"lisu"
		]
	},
	{
		family: "Noto Sans Lycian",
		category: "sans-serif",
		subsets: [
			"lycian"
		]
	},
	{
		family: "Noto Sans Lydian",
		category: "sans-serif",
		subsets: [
			"lydian"
		]
	},
	{
		family: "Noto Sans Mahajani",
		category: "sans-serif",
		subsets: [
			"mahajani"
		]
	},
	{
		family: "Noto Sans Malayalam",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"malayalam"
		]
	},
	{
		family: "Noto Sans Mandaic",
		category: "sans-serif",
		subsets: [
			"mandaic"
		]
	},
	{
		family: "Noto Sans Manichaean",
		category: "sans-serif",
		subsets: [
			"manichaean"
		]
	},
	{
		family: "Noto Sans Marchen",
		category: "sans-serif",
		subsets: [
			"marchen"
		]
	},
	{
		family: "Noto Sans Masaram Gondi",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"masaram-gondi"
		]
	},
	{
		family: "Noto Sans Math",
		category: "sans-serif",
		subsets: [
			"math"
		]
	},
	{
		family: "Noto Sans Mayan Numerals",
		category: "sans-serif",
		subsets: [
			"mayan-numerals"
		]
	},
	{
		family: "Noto Sans Medefaidrin",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"medefaidrin"
		]
	},
	{
		family: "Noto Sans Meetei Mayek",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"meetei-mayek"
		]
	},
	{
		family: "Noto Sans Mende Kikakui",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"mende-kikakui"
		]
	},
	{
		family: "Noto Sans Meroitic",
		category: "sans-serif",
		subsets: [
			"meroitic"
		]
	},
	{
		family: "Noto Sans Miao",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"miao"
		]
	},
	{
		family: "Noto Sans Modi",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"modi"
		]
	},
	{
		family: "Noto Sans Mongolian",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"mongolian"
		]
	},
	{
		family: "Noto Sans Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Noto Sans Mro",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"mro"
		]
	},
	{
		family: "Noto Sans Multani",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"multani"
		]
	},
	{
		family: "Noto Sans Myanmar",
		category: "sans-serif",
		subsets: [
			"myanmar"
		]
	},
	{
		family: "Noto Sans NKo",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"nko"
		]
	},
	{
		family: "Noto Sans Nabataean",
		category: "sans-serif",
		subsets: [
			"nabataean"
		]
	},
	{
		family: "Noto Sans New Tai Lue",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"new-tai-lue"
		]
	},
	{
		family: "Noto Sans Newa",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"newa"
		]
	},
	{
		family: "Noto Sans Nushu",
		category: "sans-serif",
		subsets: [
			"nushu"
		]
	},
	{
		family: "Noto Sans Ogham",
		category: "sans-serif",
		subsets: [
			"ogham"
		]
	},
	{
		family: "Noto Sans Ol Chiki",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"ol-chiki"
		]
	},
	{
		family: "Noto Sans Old Hungarian",
		category: "sans-serif",
		subsets: [
			"old-hungarian"
		]
	},
	{
		family: "Noto Sans Old Italic",
		category: "sans-serif",
		subsets: [
			"old-italic"
		]
	},
	{
		family: "Noto Sans Old North Arabian",
		category: "sans-serif",
		subsets: [
			"old-north-arabian"
		]
	},
	{
		family: "Noto Sans Old Permic",
		category: "sans-serif",
		subsets: [
			"old-permic"
		]
	},
	{
		family: "Noto Sans Old Persian",
		category: "sans-serif",
		subsets: [
			"old-persian"
		]
	},
	{
		family: "Noto Sans Old Sogdian",
		category: "sans-serif",
		subsets: [
			"old-sogdian"
		]
	},
	{
		family: "Noto Sans Old South Arabian",
		category: "sans-serif",
		subsets: [
			"old-south-arabian"
		]
	},
	{
		family: "Noto Sans Old Turkic",
		category: "sans-serif",
		subsets: [
			"old-turkic"
		]
	},
	{
		family: "Noto Sans Oriya",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"oriya"
		]
	},
	{
		family: "Noto Sans Osage",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"osage"
		]
	},
	{
		family: "Noto Sans Osmanya",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"osmanya"
		]
	},
	{
		family: "Noto Sans Pahawh Hmong",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"pahawh-hmong"
		]
	},
	{
		family: "Noto Sans Palmyrene",
		category: "sans-serif",
		subsets: [
			"palmyrene"
		]
	},
	{
		family: "Noto Sans Pau Cin Hau",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"pau-cin-hau"
		]
	},
	{
		family: "Noto Sans Phags Pa",
		category: "sans-serif",
		subsets: [
			"phags-pa"
		]
	},
	{
		family: "Noto Sans Phoenician",
		category: "sans-serif",
		subsets: [
			"phoenician"
		]
	},
	{
		family: "Noto Sans Psalter Pahlavi",
		category: "sans-serif",
		subsets: [
			"psalter-pahlavi"
		]
	},
	{
		family: "Noto Sans Rejang",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"rejang"
		]
	},
	{
		family: "Noto Sans Runic",
		category: "sans-serif",
		subsets: [
			"runic"
		]
	},
	{
		family: "Noto Sans SC",
		category: "sans-serif",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "Noto Sans Samaritan",
		category: "sans-serif",
		subsets: [
			"samaritan"
		]
	},
	{
		family: "Noto Sans Saurashtra",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"saurashtra"
		]
	},
	{
		family: "Noto Sans Sharada",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"sharada"
		]
	},
	{
		family: "Noto Sans Shavian",
		category: "sans-serif",
		subsets: [
			"shavian"
		]
	},
	{
		family: "Noto Sans Siddham",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"siddham"
		]
	},
	{
		family: "Noto Sans SignWriting",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"signwriting"
		]
	},
	{
		family: "Noto Sans Sinhala",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"sinhala"
		]
	},
	{
		family: "Noto Sans Sogdian",
		category: "sans-serif",
		subsets: [
			"sogdian"
		]
	},
	{
		family: "Noto Sans Sora Sompeng",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"sora-sompeng"
		]
	},
	{
		family: "Noto Sans Soyombo",
		category: "sans-serif",
		subsets: [
			"soyombo"
		]
	},
	{
		family: "Noto Sans Sundanese",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"sundanese"
		]
	},
	{
		family: "Noto Sans Syloti Nagri",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"syloti-nagri"
		]
	},
	{
		family: "Noto Sans Symbols",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"symbols"
		]
	},
	{
		family: "Noto Sans Symbols 2",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"symbols"
		]
	},
	{
		family: "Noto Sans Syriac",
		category: "sans-serif",
		subsets: [
			"syriac"
		]
	},
	{
		family: "Noto Sans TC",
		category: "sans-serif",
		subsets: [
			"chinese-traditional",
			"latin"
		]
	},
	{
		family: "Noto Sans Tagalog",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tagalog"
		]
	},
	{
		family: "Noto Sans Tagbanwa",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tagbanwa"
		]
	},
	{
		family: "Noto Sans Tai Le",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tai-le"
		]
	},
	{
		family: "Noto Sans Tai Tham",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tai-tham"
		]
	},
	{
		family: "Noto Sans Tai Viet",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tai-viet"
		]
	},
	{
		family: "Noto Sans Takri",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"takri"
		]
	},
	{
		family: "Noto Sans Tamil",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Noto Sans Tamil Supplement",
		category: "sans-serif",
		subsets: [
			"tamil-supplement"
		]
	},
	{
		family: "Noto Sans Tangsa",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tangsa"
		]
	},
	{
		family: "Noto Sans Telugu",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"telugu"
		]
	},
	{
		family: "Noto Sans Thaana",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thaana"
		]
	},
	{
		family: "Noto Sans Thai",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai"
		]
	},
	{
		family: "Noto Sans Thai Looped",
		category: "sans-serif",
		subsets: [
			"thai"
		]
	},
	{
		family: "Noto Sans Tifinagh",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tifinagh"
		]
	},
	{
		family: "Noto Sans Tirhuta",
		category: "sans-serif",
		subsets: [
			"tirhuta"
		]
	},
	{
		family: "Noto Sans Ugaritic",
		category: "sans-serif",
		subsets: [
			"ugaritic"
		]
	},
	{
		family: "Noto Sans Vai",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vai"
		]
	},
	{
		family: "Noto Sans Wancho",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"wancho"
		]
	},
	{
		family: "Noto Sans Warang Citi",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"warang-citi"
		]
	},
	{
		family: "Noto Sans Yi",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"yi"
		]
	},
	{
		family: "Noto Sans Zanabazar Square",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"zanabazar-square"
		]
	},
	{
		family: "Noto Serif",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Noto Serif Ahom",
		category: "serif",
		subsets: [
			"ahom",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Armenian",
		category: "serif",
		subsets: [
			"armenian",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Balinese",
		category: "serif",
		subsets: [
			"balinese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Bengali",
		category: "serif",
		subsets: [
			"bengali",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Devanagari",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Display",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Noto Serif Dogra",
		category: "serif",
		subsets: [
			"dogra"
		]
	},
	{
		family: "Noto Serif Ethiopic",
		category: "serif",
		subsets: [
			"ethiopic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Georgian",
		category: "serif",
		subsets: [
			"georgian",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Grantha",
		category: "serif",
		subsets: [
			"grantha",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Gujarati",
		category: "serif",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Gurmukhi",
		category: "serif",
		subsets: [
			"gurmukhi",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif HK",
		category: "serif",
		subsets: [
			"chinese-hongkong",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Noto Serif Hebrew",
		category: "serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif JP",
		category: "serif",
		subsets: [
			"japanese",
			"latin"
		]
	},
	{
		family: "Noto Serif KR",
		category: "serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Noto Serif Kannada",
		category: "serif",
		subsets: [
			"kannada",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Khmer",
		category: "serif",
		subsets: [
			"khmer",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Khojki",
		category: "serif",
		subsets: [
			"khojki",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Lao",
		category: "serif",
		subsets: [
			"lao",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Noto Serif Malayalam",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"malayalam"
		]
	},
	{
		family: "Noto Serif Myanmar",
		category: "serif",
		subsets: [
			"myanmar"
		]
	},
	{
		family: "Noto Serif NP Hmong",
		category: "serif",
		subsets: [
			"latin",
			"nyiakeng-puachue-hmong"
		]
	},
	{
		family: "Noto Serif Oriya",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"oriya"
		]
	},
	{
		family: "Noto Serif SC",
		category: "serif",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "Noto Serif Sinhala",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"sinhala"
		]
	},
	{
		family: "Noto Serif TC",
		category: "serif",
		subsets: [
			"chinese-traditional",
			"latin"
		]
	},
	{
		family: "Noto Serif Tamil",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Noto Serif Tangut",
		category: "serif",
		subsets: [
			"tangut"
		]
	},
	{
		family: "Noto Serif Telugu",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"telugu"
		]
	},
	{
		family: "Noto Serif Thai",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai"
		]
	},
	{
		family: "Noto Serif Tibetan",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"tibetan"
		]
	},
	{
		family: "Noto Serif Toto",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"toto"
		]
	},
	{
		family: "Noto Serif Yezidi",
		category: "serif",
		subsets: [
			"yezidi"
		]
	},
	{
		family: "Noto Traditional Nushu",
		category: "sans-serif",
		subsets: [
			"nushu"
		]
	},
	{
		family: "Nova Cut",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nova Flat",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nova Mono",
		category: "monospace",
		subsets: [
			"greek",
			"latin"
		]
	},
	{
		family: "Nova Oval",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nova Round",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nova Script",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nova Slim",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nova Square",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Numans",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Nunito",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Nunito Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Nuosu SIL",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"yi"
		]
	},
	{
		family: "Odibee Sans",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Odor Mean Chey",
		category: "serif",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Offside",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Oi",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"tamil",
			"vietnamese"
		]
	},
	{
		family: "Old Standard TT",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Oldenburg",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ole",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Oleo Script",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Oleo Script Swash Caps",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Oooh Baby",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Open Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"hebrew",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Oranienbaum",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Orbitron",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Oregano",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Orelega One",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Orienta",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Original Surfer",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Oswald",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Outfit",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Over the Rainbow",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Overlock",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Overlock SC",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Overpass",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Overpass Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Ovo",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Oxanium",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Oxygen",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Oxygen Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "PT Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "PT Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "PT Sans Caption",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "PT Sans Narrow",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "PT Serif",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "PT Serif Caption",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Pacifico",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Padauk",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"myanmar"
		]
	},
	{
		family: "Padyakke Expanded One",
		category: "display",
		subsets: [
			"kannada",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Palanquin",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Palanquin Dark",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Pangolin",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Paprika",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Parisienne",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Passero One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Passion One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Passions Conflict",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Pathway Gothic One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Patrick Hand",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Patrick Hand SC",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Pattaya",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Patua One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Pavanam",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Paytone One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Peddana",
		category: "serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Peralta",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Permanent Marker",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Petemoss",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Petit Formal Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Petrona",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Philosopher",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"vietnamese"
		]
	},
	{
		family: "Phudu",
		category: "display",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Piazzolla",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Piedra",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Pinyon Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Pirata One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Plaster",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Play",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Playball",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Playfair Display",
		category: "serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Playfair Display SC",
		category: "serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Plus Jakarta Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Podkova",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Poiret One",
		category: "display",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Poller One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Poly",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Pompiere",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Pontano Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Poor Story",
		category: "display",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Poppins",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Port Lligat Sans",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Port Lligat Slab",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Potta One",
		category: "display",
		subsets: [
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Pragati Narrow",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Praise",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Prata",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"vietnamese"
		]
	},
	{
		family: "Preahvihear",
		category: "sans-serif",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Press Start 2P",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Pridi",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Princess Sofia",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Prociono",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Prompt",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Prosto One",
		category: "display",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Proza Libre",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Public Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Puppies Play",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Puritan",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Purple Purse",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Qahiri",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin"
		]
	},
	{
		family: "Quando",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Quantico",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Quattrocento",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Quattrocento Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Questrial",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Quicksand",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Quintessential",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Qwigley",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Qwitcher Grypen",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Racing Sans One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Radio Canada",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Radley",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rajdhani",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rakkas",
		category: "display",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Raleway",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Raleway Dots",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ramabhadra",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Ramaraja",
		category: "serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Rambla",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rammetto One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rampart One",
		category: "display",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ranchers",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rancho",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Ranga",
		category: "display",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rasa",
		category: "serif",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Rationale",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Ravi Prakash",
		category: "display",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Readex Pro",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Recursive",
		category: "sans-serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Red Hat Display",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Red Hat Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Red Hat Text",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Red Rose",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Redacted",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Redacted Script",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Redressed",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Reem Kufi",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Reem Kufi Fun",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Reem Kufi Ink",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Reenie Beanie",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Reggae One",
		category: "display",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Revalia",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rhodium Libre",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ribeye",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ribeye Marrow",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Righteous",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Risque",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Road Rage",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Roboto",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Roboto Condensed",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Roboto Flex",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Roboto Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Roboto Serif",
		category: "serif",
		subsets: [
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Roboto Slab",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Rochester",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Rock Salt",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "RocknRoll One",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rokkitt",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Romanesco",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ropa Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rosario",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Rosarivo",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rouge Script",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Rowdies",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Rozha One",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik 80s Fade",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Beastly",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Bubbles",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Burned",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Dirt",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Distressed",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Gemstones",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Glitch",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Iso",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Marker Hatch",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Maze",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Microbe",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Mono One",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Moonrocks",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Puddles",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Spray Paint",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Storm",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Vinyl",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rubik Wet Paint",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ruda",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Rufina",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ruge Boogie",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Ruluko",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Rum Raisin",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ruslan Display",
		category: "display",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Russo One",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ruthie",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Rye",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "STIX Two Text",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Sacramento",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sahitya",
		category: "serif",
		subsets: [
			"devanagari",
			"latin"
		]
	},
	{
		family: "Sail",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Saira",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Saira Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Saira Extra Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Saira Semi Condensed",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Saira Stencil One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Salsa",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Sanchez",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sancreek",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sansita",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sansita Swashed",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Sarabun",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Sarala",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sarina",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sarpanch",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sassy Frass",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Satisfy",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Sawarabi Gothic",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Sawarabi Mincho",
		category: "serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Scada",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Scheherazade New",
		category: "serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Schoolbell",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Scope One",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Seaweed Script",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Secular One",
		category: "sans-serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sedgwick Ave",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Sedgwick Ave Display",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Sen",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Send Flowers",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Sevillana",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Seymour One",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Shadows Into Light",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Shadows Into Light Two",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Shalimar",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Shantell Sans",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Shanti",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Share",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Share Tech",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Share Tech Mono",
		category: "monospace",
		subsets: [
			"latin"
		]
	},
	{
		family: "Shippori Antique",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Shippori Antique B1",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Shippori Mincho",
		category: "serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Shippori Mincho B1",
		category: "serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Shojumaru",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Short Stack",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Shrikhand",
		category: "display",
		subsets: [
			"gujarati",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Siemreap",
		category: "display",
		subsets: [
			"khmer"
		]
	},
	{
		family: "Sigmar One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Signika",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Signika Negative",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Silkscreen",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Simonetta",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Single Day",
		category: "display",
		subsets: [
			"korean"
		]
	},
	{
		family: "Sintony",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sirin Stencil",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Six Caps",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Skranji",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Slabo 13px",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Slabo 27px",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Slackey",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Smokum",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Smooch",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Smooch Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Smythe",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Sniglet",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Snippet",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Snowburst One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sofadi One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Sofia",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Sofia Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sofia Sans Condensed",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sofia Sans Extra Condensed",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sofia Sans Semi Condensed",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Solitreo",
		category: "handwriting",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Solway",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Song Myung",
		category: "serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Sono",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Sonsie One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sora",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sorts Mill Goudy",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Source Code Pro",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Source Sans 3",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Source Sans Pro",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Source Serif 4",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Source Serif Pro",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Space Grotesk",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Space Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Special Elite",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Spectral",
		category: "serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Spectral SC",
		category: "serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Spicy Rice",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Spinnaker",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Spirax",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Splash",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Spline Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Spline Sans Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Squada One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Square Peg",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Sree Krushnadevaraya",
		category: "serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Sriracha",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Srisakdi",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Staatliches",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Stalemate",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Stalinist One",
		category: "display",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Stardos Stencil",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Stick",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Stick No Bills",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"sinhala"
		]
	},
	{
		family: "Stint Ultra Condensed",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Stint Ultra Expanded",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Stoke",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Strait",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Style Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Stylish",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Sue Ellen Francisco",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Suez One",
		category: "serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sulphur Point",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sumana",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Sunflower",
		category: "sans-serif",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Sunshiney",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Supermercado One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Sura",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Suranna",
		category: "serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Suravaram",
		category: "serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Suwannaphum",
		category: "serif",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Swanky and Moo Moo",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Syncopate",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Syne",
		category: "sans-serif",
		subsets: [
			"greek",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Syne Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Syne Tactile",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tai Heritage Pro",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"tai-viet",
			"vietnamese"
		]
	},
	{
		family: "Tajawal",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin"
		]
	},
	{
		family: "Tangerine",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Tapestry",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Taprom",
		category: "display",
		subsets: [
			"khmer",
			"latin"
		]
	},
	{
		family: "Tauri",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Taviraj",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Teko",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Telex",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tenali Ramakrishna",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Tenor Sans",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Text Me One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Texturina",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Thasadith",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "The Girl Next Door",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "The Nautigal",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Tienne",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Tillana",
		category: "handwriting",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Timmana",
		category: "sans-serif",
		subsets: [
			"latin",
			"telugu"
		]
	},
	{
		family: "Tinos",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"hebrew",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Tiro Bangla",
		category: "serif",
		subsets: [
			"bengali",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tiro Devanagari Hindi",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tiro Devanagari Marathi",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tiro Devanagari Sanskrit",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tiro Gurmukhi",
		category: "serif",
		subsets: [
			"gurmukhi",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tiro Kannada",
		category: "serif",
		subsets: [
			"kannada",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tiro Tamil",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"tamil"
		]
	},
	{
		family: "Tiro Telugu",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"telugu"
		]
	},
	{
		family: "Titan One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Titillium Web",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tomorrow",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tourney",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Trade Winds",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Train One",
		category: "display",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Trirong",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"thai",
			"vietnamese"
		]
	},
	{
		family: "Trispace",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Trocchi",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Trochut",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Truculenta",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Trykker",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Tulpen One",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Turret Road",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Twinkle Star",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Ubuntu",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ubuntu Condensed",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Ubuntu Mono",
		category: "monospace",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"greek-ext",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Uchen",
		category: "serif",
		subsets: [
			"latin",
			"tibetan"
		]
	},
	{
		family: "Ultra",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Unbounded",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Uncial Antiqua",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Underdog",
		category: "display",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Unica One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "UnifrakturCook",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "UnifrakturMaguntia",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Unkempt",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Unlock",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Unna",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Updock",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Urbanist",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "VT323",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Vampiro One",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Varela",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Varela Round",
		category: "sans-serif",
		subsets: [
			"hebrew",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Varta",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Vast Shadow",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Vazirmatn",
		category: "sans-serif",
		subsets: [
			"arabic",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Vesper Libre",
		category: "serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Viaoda Libre",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Vibes",
		category: "display",
		subsets: [
			"arabic",
			"latin"
		]
	},
	{
		family: "Vibur",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Vidaloka",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Viga",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Voces",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Volkhov",
		category: "serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Vollkorn",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"greek",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Vollkorn SC",
		category: "serif",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Voltaire",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Vujahday Script",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Waiting for the Sunrise",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Wallpoet",
		category: "display",
		subsets: [
			"latin"
		]
	},
	{
		family: "Walter Turncoat",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Warnes",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Water Brush",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Waterfall",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Wellfleet",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Wendy One",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Whisper",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "WindSong",
		category: "handwriting",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Wire One",
		category: "sans-serif",
		subsets: [
			"latin"
		]
	},
	{
		family: "Work Sans",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Xanh Mono",
		category: "monospace",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Yaldevi",
		category: "sans-serif",
		subsets: [
			"latin",
			"latin-ext",
			"sinhala"
		]
	},
	{
		family: "Yanone Kaffeesatz",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Yantramanav",
		category: "sans-serif",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Yatra One",
		category: "display",
		subsets: [
			"devanagari",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Yellowtail",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Yeon Sung",
		category: "display",
		subsets: [
			"korean",
			"latin"
		]
	},
	{
		family: "Yeseva One",
		category: "display",
		subsets: [
			"cyrillic",
			"cyrillic-ext",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Yesteryear",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Yomogi",
		category: "handwriting",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Yrsa",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext",
			"vietnamese"
		]
	},
	{
		family: "Yuji Boku",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Yuji Mai",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Yuji Syuku",
		category: "serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Yusei Magic",
		category: "sans-serif",
		subsets: [
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "ZCOOL KuaiLe",
		category: "sans-serif",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "ZCOOL QingKe HuangYou",
		category: "sans-serif",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "ZCOOL XiaoWei",
		category: "sans-serif",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "Zen Antique",
		category: "serif",
		subsets: [
			"cyrillic",
			"greek",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Antique Soft",
		category: "serif",
		subsets: [
			"cyrillic",
			"greek",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Dots",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Kaku Gothic Antique",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Kaku Gothic New",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Kurenaido",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"greek",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Loop",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Maru Gothic",
		category: "sans-serif",
		subsets: [
			"cyrillic",
			"greek",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Old Mincho",
		category: "serif",
		subsets: [
			"cyrillic",
			"greek",
			"japanese",
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zen Tokyo Zoo",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zeyada",
		category: "handwriting",
		subsets: [
			"latin"
		]
	},
	{
		family: "Zhi Mang Xing",
		category: "handwriting",
		subsets: [
			"chinese-simplified",
			"latin"
		]
	},
	{
		family: "Zilla Slab",
		category: "serif",
		subsets: [
			"latin",
			"latin-ext"
		]
	},
	{
		family: "Zilla Slab Highlight",
		category: "display",
		subsets: [
			"latin",
			"latin-ext"
		]
	}
];

let Picker = (function (){
	function Picker($original){
		this.$original = $original;
		this.$main = $(`
		<div style="position: fixed; top: 0px; left: 0px; width: ${$(window).width()}px; height: ${$(window). height()}px; background-color: #00000044">
		<div style="position: relative; width: ${$(window).width()-20}px; height: ${$(window). height()-20}px;margin: 10px; background-color: #fefefe;">
		<select style="position: absolute; width: 90px; height: 30px; top: 10px; left: 10px;">
		<option value="all" selected>All Categories</option>
		<option value="serif">Serif</option>
		<option value="sans-serif">Sans-Serif</option>
		<option value="display">Display</option>
		<option value="handwriting">Handwriting</option>
		<option value="monospace">Monospace</option>
		</select>
		<select style="position: absolute; width: 90px; height: 30px; top: 10px; left: 100px;">
		<option value="all" selected>All languages</option>
		<option value="adlam">Adlam</option>
<option value="ahom">Ahom</option>
<option value="anatolian-hieroglyphs">Anatolian-hieroglyphs</option>
<option value="arabic">Arabic</option>
<option value="armenian">Armenian</option>
<option value="avestan">Avestan</option>
<option value="balinese">Balinese</option>
<option value="bamum">Bamum</option>
<option value="bassa-vah">Bassa-vah</option>
<option value="batak">Batak</option>
<option value="bengali">Bengali</option>
<option value="bhaiksuki">Bhaiksuki</option>
<option value="brahmi">Brahmi</option>
<option value="buginese">Buginese</option>
<option value="buhid">Buhid</option>
<option value="canadian-aboriginal">Canadian-aboriginal</option>
<option value="carian">Carian</option>
<option value="caucasian-albanian">Caucasian-albanian</option>
<option value="chakma">Chakma</option>
<option value="cham">Cham</option>
<option value="cherokee">Cherokee</option>
<option value="chinese-hongkong">Chinese-hongkong</option>
<option value="chinese-simplified">Chinese-simplified</option>
<option value="chinese-traditional">Chinese-traditional</option>
<option value="coptic">Coptic</option>
<option value="cuneiform">Cuneiform</option>
<option value="cypriot">Cypriot</option>
<option value="cyrillic">Cyrillic</option>
<option value="cyrillic-ext">Cyrillic-ext</option>
<option value="deseret">Deseret</option>
<option value="devanagari">Devanagari</option>
<option value="dogra">Dogra</option>
<option value="duployan">Duployan</option>
<option value="egyptian-hieroglyphs">Egyptian-hieroglyphs</option>
<option value="elbasan">Elbasan</option>
<option value="elymaic">Elymaic</option>
<option value="emoji">Emoji</option>
<option value="ethiopic">Ethiopic</option>
<option value="georgian">Georgian</option>
<option value="glagolitic">Glagolitic</option>
<option value="gothic">Gothic</option>
<option value="grantha">Grantha</option>
<option value="greek">Greek</option>
<option value="greek-ext">Greek-ext</option>
<option value="gujarati">Gujarati</option>
<option value="gunjala-gondi">Gunjala-gondi</option>
<option value="gurmukhi">Gurmukhi</option>
<option value="hanifi-rohingya">Hanifi-rohingya</option>
<option value="hanunoo">Hanunoo</option>
<option value="hatran">Hatran</option>
<option value="hebrew">Hebrew</option>
<option value="imperial-aramaic">Imperial-aramaic</option>
<option value="indic-siyaq-numbers">Indic-siyaq-numbers</option>
<option value="inscriptional-pahlavi">Inscriptional-pahlavi</option>
<option value="inscriptional-parthian">Inscriptional-parthian</option>
<option value="japanese">Japanese</option>
<option value="javanese">Javanese</option>
<option value="kaithi">Kaithi</option>
<option value="kannada">Kannada</option>
<option value="kayah-li">Kayah-li</option>
<option value="kharoshthi">Kharoshthi</option>
<option value="khmer">Khmer</option>
<option value="khojki">Khojki</option>
<option value="khudawadi">Khudawadi</option>
<option value="korean">Korean</option>
<option value="lao">Lao</option>
<option value="latin">Latin</option>
<option value="latin-ext">Latin-ext</option>
<option value="lepcha">Lepcha</option>
<option value="limbu">Limbu</option>
<option value="linear-a">Linear-a</option>
<option value="linear-b">Linear-b</option>
<option value="lisu">Lisu</option>
<option value="lycian">Lycian</option>
<option value="lydian">Lydian</option>
<option value="mahajani">Mahajani</option>
<option value="malayalam">Malayalam</option>
<option value="mandaic">Mandaic</option>
<option value="manichaean">Manichaean</option>
<option value="marchen">Marchen</option>
<option value="masaram-gondi">Masaram-gondi</option>
<option value="math">Math</option>
<option value="mayan-numerals">Mayan-numerals</option>
<option value="medefaidrin">Medefaidrin</option>
<option value="meetei-mayek">Meetei-mayek</option>
<option value="mende-kikakui">Mende-kikakui</option>
<option value="meroitic">Meroitic</option>
<option value="miao">Miao</option>
<option value="modi">Modi</option>
<option value="mongolian">Mongolian</option>
<option value="mro">Mro</option>
<option value="multani">Multani</option>
<option value="music">Music</option>
<option value="myanmar">Myanmar</option>
<option value="nabataean">Nabataean</option>
<option value="new-tai-lue">New-tai-lue</option>
<option value="newa">Newa</option>
<option value="nko">Nko</option>
<option value="nushu">Nushu</option>
<option value="nyiakeng-puachue-hmong">Nyiakeng-puachue-hmong</option>
<option value="ogham">Ogham</option>
<option value="ol-chiki">Ol-chiki</option>
<option value="old-hungarian">Old-hungarian</option>
<option value="old-italic">Old-italic</option>
<option value="old-north-arabian">Old-north-arabian</option>
<option value="old-permic">Old-permic</option>
<option value="old-persian">Old-persian</option>
<option value="old-sogdian">Old-sogdian</option>
<option value="old-south-arabian">Old-south-arabian</option>
<option value="old-turkic">Old-turkic</option>
<option value="oriya">Oriya</option>
<option value="osage">Osage</option>
<option value="osmanya">Osmanya</option>
<option value="pahawh-hmong">Pahawh-hmong</option>
<option value="palmyrene">Palmyrene</option>
<option value="pau-cin-hau">Pau-cin-hau</option>
<option value="phags-pa">Phags-pa</option>
<option value="phoenician">Phoenician</option>
<option value="psalter-pahlavi">Psalter-pahlavi</option>
<option value="rejang">Rejang</option>
<option value="runic">Runic</option>
<option value="samaritan">Samaritan</option>
<option value="saurashtra">Saurashtra</option>
<option value="sharada">Sharada</option>
<option value="shavian">Shavian</option>
<option value="siddham">Siddham</option>
<option value="signwriting">Signwriting</option>
<option value="sinhala">Sinhala</option>
<option value="sogdian">Sogdian</option>
<option value="sora-sompeng">Sora-sompeng</option>
<option value="soyombo">Soyombo</option>
<option value="sundanese">Sundanese</option>
<option value="syloti-nagri">Syloti-nagri</option>
<option value="symbols">Symbols</option>
<option value="syriac">Syriac</option>
<option value="tagalog">Tagalog</option>
<option value="tagbanwa">Tagbanwa</option>
<option value="tai-le">Tai-le</option>
<option value="tai-tham">Tai-tham</option>
<option value="tai-viet">Tai-viet</option>
<option value="takri">Takri</option>
<option value="tamil">Tamil</option>
<option value="tamil-supplement">Tamil-supplement</option>
<option value="tangsa">Tangsa</option>
<option value="tangut">Tangut</option>
<option value="telugu">Telugu</option>
<option value="thaana">Thaana</option>
<option value="thai">Thai</option>
<option value="tibetan">Tibetan</option>
<option value="tifinagh">Tifinagh</option>
<option value="tirhuta">Tirhuta</option>
<option value="toto">Toto</option>
<option value="ugaritic">Ugaritic</option>
<option value="vai">Vai</option>
<option value="vietnamese">Vietnamese</option>
<option value="wancho">Wancho</option>
<option value="warang-citi">Warang-citi</option>
<option value="yezidi">Yezidi</option>
<option value="yi">Yi</option>
<option value="zanabazar-square">Zanabazar-square</option>
		</select>
		<input type="text" placeholder="Search font..." style="position: absolute; width: ${$(window).width()-220}px; height: 30px; top: 10px; left: 190px; padding: 0px 10px" />
		<input type="button" value="Previous" style="position: absolute; width: 90px; height: 30px; bottom: 10px; left: 10px;"/>
		<input type="button" value="Next" style="position: absolute; width: 90px; height: 30px; bottom: 10px; left: 100px;"/>
		<input type="button" value="Cancel" style="position: absolute; width: 90px; height: 30px; bottom: 10px; right: 10px;"/>
		<div class="list" style="position: absolute; width: ${$(window).width()-40}px; height: ${$(window). height()-120}px; top: 50px; left: 10px; overflow-y: scroll">
		
		</div>
		</div>
		</div>
		`);
		this.initialize();
		this.$category = this.$main.find("select").eq(0);
		this.$subset = this.$main.find("select").eq(1);
		this.$query = this.$main.find("input[type=text]").eq(0);
		this.$prev = this.$main.find("input[type=button]").eq(0);
		this.$next = this.$main.find("input[type=button]").eq(1);
		this.$cancel = this.$main.find("input[type=button]").eq(2);
		this.$list = this.$main.find("div.list").eq(0);
		
		this.input();
		}
	Picker.prototype = {
		data: [],
		page: 0,
		pagelast: 0,
		initialize: function (){
			this.$main.css({display: "none"});
			this.$original.after(this.$main);
			},
		input: function (){
			let ti = undefined;
			this.$original.on("click", function (){
				picker.$main.css({display: "block"});
				picker.search();
				});
			this.$category.on("change", function (){
				picker.search();
				});
			this.$subset.on("change", function (){
				picker.search();
				});
			this.$query.on("input", function (){
				clearTimeout(ti);
				ti = setTimeout(function (){
					picker.search();
					}, 2000);
				
				});
			this.$prev.on("click", function (){
				picker.page -= 1;
				picker.render();
				});
			this.$next.on("click", function (){
				picker.page += 1;
				picker.render();
				});
			this.$cancel.on("click", function (){
				picker.$main.css({display: "none"});
				});
			
			},
		render: function (){
			let dataslice = this.data.slice(this.page*25, this.page*25+25);
			(this.page==0)?this.$prev.attr("disabled", true):this.$prev.removeAttr("disabled");
			(this.page==this.pagelast)?this.$next.attr("disabled", true):this.$next.removeAttr("disabled");
			this.$list.html(``);
			$.each(dataslice, function (i, v){
				$("head").append(`<link href="https://fonts.googleapis.com/css2?family=${String(v.family).replace(/ /g, '+')}&display=swap" rel="stylesheet" />`);
				picker.$list.append($(`<input class="item" type="button" style="width: 100%; padding: 10px; font-size: 25px; font-family:'${v.family}'" value="${v.family}"/>`).data(v).on("click", function (){
				picker.$original.val(this.value).css({fontFamily:`${this.value}`});
				callback($(this).data());
				picker.$main.css({display: "none"});
				}));
				});
			
			},
		search: function (){
			let category = this.$category.val();
			let subset = this.$subset.val();
			let query = this.$query.val();
			let datasortcategory = [];
			$.each(data, function (i,v){
				if(v.category == category){
					datasortcategory.push(v);
					}
				if(category == "all"){
					datasortcategory.push(v);
					}
				});
			let datasortsubset = [];
			$.each(datasortcategory, function (i,v){
				if(v.subsets.includes(subset)){
					datasortsubset.push(v);
					}
				if(subset == "all"){
					datasortsubset.push(v);
					}
				});
			let datasortquery = [];
			$.each(datasortsubset, function (i,v){
				if(String(v.family).toLowerCase().includes(String(query).toLowerCase())){
					datasortquery.push(v);
					}
				});
			picker.data = datasortquery;
			this.page = 0;
			this.pagelast = ((picker.data.length+(25-(picker.data.length%25)))/25)-1;
			this.render();
			
			}
		}
		return Picker;
	})();
        let picker = new Picker(this);
        return this;
    };
})(jQuery);

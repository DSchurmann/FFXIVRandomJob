const IMAGES = {};
const JOBLIST = [
	"Paladin",
	"Warrior",
	"Dark Knight",
	"Gunbreaker",
	"White Mage",
	"Scholar",
	"Astrologian",
	"Sage",
	"Monk",
	"Dragoon",
	"Ninja",
	"Samurai",
	"Reaper",
	"Bard",
	"Machinist",
	"Dancer",
	"Black Mage",
	"Summoner",
	"Red Mage"
	];

function loadImages() {
	for(let i = 0; i < JOBLIST.length; i++) {
		IMAGES[JOBLIST[i]] = "images/" + JOBLIST[i] + ".gif";
	}
}

function generate() {
	loadImages();
	jobs = getSelectedJobs();
	if(jobs.length < 0)
	{
		rand = Math.floor(Math.random() * jobs.length);
		document.getElementById("job").innerHTML = jobs[rand];
		document.getElementById("image").src = IMAGES[jobs[rand]];
	}
}

function getSelectedJobs() {
	tanks = [];
	healers = [];
	mdps = [];
	rdps = [];
	madps = [];
	jobs = [];

	if(document.getElementById("tanks").checked == true) {
		if(document.getElementById("pal").checked == true)
			tanks.push("Paladin");
		if(document.getElementById("war").checked == true)
			tanks.push("Warrior");
		if(document.getElementById("drk").checked == true)
			tanks.push("Dark Knight");
		if(document.getElementById("gnb").checked == true)
			tanks.push("Gunbreaker");
	}

	if(document.getElementById("healers").checked == true) {
		if(document.getElementById("whm").checked == true)
			tanks.push("White Mage");
		if(document.getElementById("sch").checked == true)
			tanks.push("Scholar");
		if(document.getElementById("ast").checked == true)
			tanks.push("Astrologian");
		if(document.getElementById("sge").checked == true)
			tanks.push("Sage");
	}

	if(document.getElementById("mdps").checked == true) {
		if(document.getElementById("mnk").checked == true)
			tanks.push("Monk");
		if(document.getElementById("drg").checked == true)
			tanks.push("Dragoon");
		if(document.getElementById("nin").checked == true)
			tanks.push("Ninja");
		if(document.getElementById("sam").checked == true)
			tanks.push("Samurai");
		if(document.getElementById("rpr").checked == true)
			tanks.push("Reaper");
	}

	if(document.getElementById("rdps").checked == true) {
		if(document.getElementById("brd").checked == true)
			tanks.push("Bard");
		if(document.getElementById("mch").checked == true)
			tanks.push("Machinist");
		if(document.getElementById("dnc").checked == true)
			tanks.push("Dancer");
	}

	if(document.getElementById("madps").checked == true) {
		if(document.getElementById("blm").checked == true)
			tanks.push("Black Mage");
		if(document.getElementById("smn").checked == true)
			tanks.push("Summoner");
		if(document.getElementById("rdm").checked == true)
			tanks.push("Red Mage");
	}


	jobs = jobs.concat(tanks);
	jobs = jobs.concat(healers);
	jobs = jobs.concat(mdps);
	jobs = jobs.concat(rdps);
	jobs = jobs.concat(madps);
	return jobs;
}

function selectAll() {
	var inputs = document.getElementsByTagName("input");
	for(let i = 0; i < inputs.length; i++)
		inputs[i].checked = true;
}

function deselectAll() {
	var inputs = document.getElementsByTagName("input");
	for(let i = 0; i < inputs.length; i++)
		inputs[i].checked = false;
}
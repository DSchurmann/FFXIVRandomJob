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
	"Viper",
	"Bard",
	"Machinist",
	"Dancer",
	"Black Mage",
	"Summoner",
	"Red Mage",
	"Pictomancer"
	];

function loadImages() {
	for(let i = 0; i < JOBLIST.length; i++) {
		IMAGES[JOBLIST[i]] = "images/" + JOBLIST[i] + ".gif";
	}
}

function generate() {
	loadImages();
	jobs = getSelectedJobs();
	if(jobs.length > 0)
	{
		rand = Math.floor(Math.random() * jobs.length);
		document.getElementById("job").innerHTML = jobs[rand];
		document.getElementById("image").src = IMAGES[jobs[rand]];
	}
}

function getSelectedJobs() {
	jobs = [];

	if(document.getElementById("tanks").checked == true) {
		if(document.getElementById("pal").checked == true)
			jobs.push("Paladin");
		if(document.getElementById("war").checked == true)
			jobs.push("Warrior");
		if(document.getElementById("drk").checked == true)
			jobs.push("Dark Knight");
		if(document.getElementById("gnb").checked == true)
			jobs.push("Gunbreaker");
	}

	if(document.getElementById("healers").checked == true) {
		if(document.getElementById("whm").checked == true)
			jobs.push("White Mage");
		if(document.getElementById("sch").checked == true)
			jobs.push("Scholar");
		if(document.getElementById("ast").checked == true)
			jobs.push("Astrologian");
		if(document.getElementById("sge").checked == true)
			jobs.push("Sage");
	}

	if(document.getElementById("mdps").checked == true) {
		if(document.getElementById("mnk").checked == true)
			jobs.push("Monk");
		if(document.getElementById("drg").checked == true)
			jobs.push("Dragoon");
		if(document.getElementById("nin").checked == true)
			jobs.push("Ninja");
		if(document.getElementById("sam").checked == true)
			jobs.push("Samurai");
		if(document.getElementById("rpr").checked == true)
			jobs.push("Reaper");
		if(document.getElementById("vpr").checked == true)
			jobs.push("Viper");
	}

	if(document.getElementById("rdps").checked == true) {
		if(document.getElementById("brd").checked == true)
			jobs.push("Bard");
		if(document.getElementById("mch").checked == true)
			jobs.push("Machinist");
		if(document.getElementById("dnc").checked == true)
			jobs.push("Dancer");
	}

	if(document.getElementById("madps").checked == true) {
		if(document.getElementById("blm").checked == true)
			jobs.push("Black Mage");
		if(document.getElementById("smn").checked == true)
			jobs.push("Summoner");
		if(document.getElementById("rdm").checked == true)
			jobs.push("Red Mage");
		if(document.getElementById("pct").checked == true)
			jobs.push("Pictomancer");
	}

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
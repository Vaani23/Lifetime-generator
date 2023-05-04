const isDoBOpen = false;
const settingcog = document.getElementById('setting-icon');
const settingcontent = document.getElementByIdse('setting');

cosnt toggleDateOfBirthSelector = ()=>{
	if(isDoBOpen){
		settingEl.classList.add("hide");
	}
	else{
		settingEl.classList.remove("hide");
	}
	isDoBOpen = !isDoBOpen;
}
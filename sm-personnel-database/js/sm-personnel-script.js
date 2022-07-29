document.getElementById("user-search-bar").defaultValue = "Search for a user...";

var names = ['BJS', 'Professor', 'Triumph', 'Curtis', 'Spring', 'Eyeless', 'Professor', 'SOLO', 'Panzershrek', 'ALJXT', 'Wave', 'Raven', 'SonicBacon', 'Marc', 'CurvedKiwi', 'Wearhint', 'Shala', 'Grim', 'h4ziq', 'David', 'Baxter', 'PleaseSatanDude', 'Halliwedge', 'Bomber', 'Jronz', 'ChillyD', 'Endeavor', 'Ghost', 'Biggsy', 'ItsKen746', 'Mr Kenji', 'Spartan1zi', 'IRISHSNIPER1171', 'mattB', 'Ikaros', 'Marius', 'appy_wall', 'Floris', 'Corn', 'Pepik', 'Floris', 'Icer', 'Nakedpooper', 'Knifetail (Carrier)', 'Chief_IDK', 'RellaFella', 'Tragical', 'Sify', 'Arcius'];
var ranks = ['1Lt', 'Sgt', 'Cpl', 'Sgt', 'LCpl', 'Cpl', 'Sgt', 'Cpl', 'LCpl', 'Cpl', 'Pvt', 'Pfc', 'Sgt', 'Sgt', 'Cpl', 'Cpl', 'Pvt', 'LCpl', 'Pfc', 'SSgt', 'Cpl', 'Pfc', 'SSgt', 'LCpl', 'LCpl', 'Rct', 'Rct', 'Rct', 'Rct', 'Rct', 'Pfc', 'Pvt', 'LCpl', 'Cpl', 'Pfc', 'Sgt', 'Pvt', 'LCpl', 'Cpl', 'Pvt', 'LCpl', 'Pvt', 'LCpl', 'Pfc', 'LCpl', 'LCpl', 'LCpl', 'Pvt', 'Sgt'];
var teams = ['Apollo', 'Apollo', 'Apollo', 'Apollo', 'Apollo', 'Apollo', 'Ares', 'Ares', 'Ares', 'Ares', 'Ares', 'Ares', 'Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'Aura', 'Athena', 'Athena', 'Athena', 'Kratos', 'Kratos', 'Kratos', 'Recruits', 'Recruits', 'Recruits', 'Recruits', 'Recruits', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL', 'Reserves / E-LOA / AWOL'];
var ribbons = [['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'EXPL', 'JTAC', 'CMO', 'FO', 'TL', 'PL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'JTAC', 'CMO', 'FO', 'TL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'CMO', 'FO'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'JTAC', 'FO', 'TL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'JTAC'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'JTAC', 'CMO', 'FO', 'TL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'FO'], ['BIT', 'AIT', 'AR', 'LAT', 'HAT', 'MG', 'EXPL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'FO'], ['BIT', 'AIT'], ['BIT', 'AIT', 'M'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'CMO', 'FO', 'TL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'FC', 'JTAC', 'FO', 'TL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'FO'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'JTAC'], ['BIT', 'AIT'], ['BIT', 'AIT', 'AR', 'LAT', 'M', 'HAT', 'CMT', 'EXPL'], ['BIT', 'AIT', 'AR', 'M', 'HAT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'CMO', 'FO', 'TL', 'PL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'FO'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'FC', 'JTAC', 'CMO', 'FO', 'TL', 'PL'], ['BIT', 'AIT', 'AR', 'LAT', 'M', 'EXPL', 'FC'], ['BIT', 'AIT', 'LAT', 'M', 'CMT'], [], [], [], [], [], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG'], ['BIT', 'AIT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'FO'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'MG'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'FC', 'CMO', 'FO', 'TL'], ['BIT', 'AIT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'CMT'], ['BIT', 'AIT', 'AR', 'LAT', 'CMT', 'EXPL', 'JTAC', 'FO'], ['BIT', 'AIT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'CMT'], ['BIT', 'AIT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'CMT'], ['BIT', 'AIT', 'LAT', 'M', 'HAT', 'MG'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'EXPL'], ['BIT', 'AIT'], ['BIT', 'AIT', 'G', 'AR', 'LAT', 'M', 'HAT', 'MG', 'CMT', 'EXPL', 'JTAC', 'FO', 'TL']];
var notes = ['', '', '', '', '', '', 'Acting Teamleader', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Reserves', 'E-LOA', '', '', '', 'E-LOA', '', '', 'E-LOA', 'Reserves', 'Reserves', 'Reserves', 'Reserves', '', 'Reserves', 'Reserves (27-03-2022)', '', '', ''];

var rankReference = {
  "Rct" : "Recruit",
  "Pvt" : "Private",
  "Pfc" : "Private First Class",
  "LCpl" : "Lance Corporal",
  "Cpl" : "Corporal",
  "Sgt" : "Sergeant",
  "SSgt" : "Staff Sergeant",
  "1Lt" : "First Lieutenant"
}

var ribbonReference = {
  "Basic Training" : ["BIT", "AIT"],
  "Entry Level" : ["G", "AR", "LAT", "M", "HAT", "MG"],
  "Level 2" : ["CMT", "EXPL", "FC"],
  "Level 3" : ["JTAC", "CMO", "FO"],
  "Level 4" : ["TL"],
  "Level 5" : ["PL"]
}

function searchUser(){
  var searchValue = document.getElementById("user-search-bar").value;
  var found = false;
  for (var i = 0; i < names.length; i++){
    if (names[i].toLowerCase() == searchValue.toLowerCase()){
      found = true;
      displayInfo(i);
      break;
    }
  }
  if (found == false){
    document.getElementById("user-search-bar").value = "User not found.";
  }
}

function displayInfo(userIndex){
  document.getElementById("name-display").innerHTML = "Name: " + names[userIndex];
  document.getElementById("rank-display").innerHTML = "Rank: " + rankReference[ranks[userIndex]];
  document.getElementById("rank-display").style.fontSize = "3vh";
  document.getElementById("rank-display").style.backgroundImage = "url('media/ranks/" + ranks[userIndex].toLowerCase() + ".png')";
  document.getElementById("team-display").innerHTML = "Team: " + teams[userIndex];
  if (teams[userIndex] == "Recruits" || teams[userIndex] == "Reserves / E-LOA / AWOL"){
    document.getElementById("team-display").style.backgroundImage = "url('media/teams/reserves.png')";
    document.getElementById("team-display").innerHTML = "Team: " + teams[userIndex].slice(0, 8);
  }
  else {
    document.getElementById("team-display").style.backgroundImage = "url('media/teams/" + teams[userIndex].toLowerCase() + ".png')";
  }
  document.getElementById("notes-display").innerHTML = "Notes:<br>" + notes[userIndex];
  var ribbonLevel = 0;
  var newInnerHTML = "";
  if (ribbons[userIndex].length > 0){
    newInnerHTML = "Basic Training: ";
    for (var ribbon of ribbons[userIndex]) {
      if (Object.entries(ribbonReference)[ribbonLevel][1].includes(ribbon)){
        newInnerHTML += ribbon + " ";
      }
      else {
        ribbonLevel ++;
        newInnerHTML += "<br>" + Object.entries(ribbonReference)[ribbonLevel][0] + ": " + ribbon + " ";
      }
    }
  }
  document.getElementById("ribbon-display").innerHTML = newInnerHTML;
}

function clearText(){
  document.getElementById("user-search-bar").value = "";
}
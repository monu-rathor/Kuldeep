//Create team--------------------------------------------------------------------------------------------------------------------------------------------

function createteam() {
  const TeamName = document.getElementById("team").value.trim();

  if (!TeamName) {
    alert("Enter the TeamName?");
    return;
  }

  const teamArr = JSON.parse(localStorage.getItem("Team")) || [];

  if (teamArr.some((obj) => obj.team === TeamName)) {
    alert(`Team ${TeamName} is already exist`);
    return;
  }

  teamArr.push({
    team: TeamName,
  });

  localStorage.setItem("Team", JSON.stringify(teamArr));
  alert(`Team ${TeamName} added successfully`);
  return;
}

function showTeam() {
  const teams = JSON.parse(localStorage.getItem("Team")) || [];
  console.log(teams);

  const elem = document.getElementById("p");
  elem.innerText = JSON.stringify(teams);
}

//Add Users-------------------------------------------------------------------------------------------------------------------------------------------------------

function adduser() {
  const TeamName = document.getElementById("team").value.trim();
  const user = document.getElementById("user").value.trim();
  console.log(TeamName, user);

  if (!TeamName || !user) {
    alert("Enter TeamName and User both");
    return;
  }

  const team = JSON.parse(localStorage.getItem("Team")) || [];

  if (!team.some((obj) => obj.team === TeamName)) {
    alert("Team not found, first create the team and then add the user");
    return;
  }

  const teamuserArr = JSON.parse(localStorage.getItem("TeamUser")) || [];
  const teamobj = teamuserArr.find((obj) => obj[TeamName]);
  if (teamobj) {
    if (teamobj[TeamName].includes(user)) {
      alert(`Team ${TeamName} already contais the ${user} user`);
      return;
    } else {
      teamobj[TeamName].push(user);
    }
  } else {
    teamuserArr.push({
      [TeamName]: [user],
    });
  }

  localStorage.setItem("TeamUser", JSON.stringify(teamuserArr));
  alert(`user ${user} is successfully added to the ${TeamName} team`);
  return;
}

function teamUser() {
  const teamUser = JSON.parse(localStorage.getItem("TeamUser")) || [];
  const elem = document.getElementById("p1");
  elem.innerText = JSON.stringify(teamUser);
}

//Delete users--------------------------------------------------------------------------------------------------------------------------------------------------------

function deleteUser() {
  const TeamName = document.getElementById("team1").value.trim();
  const user = document.getElementById("user1").value.trim();
  console.log(TeamName, user);

  if (!TeamName || !user) {
    alert("Enter the Team and User");
    return;
  }

  const teamuserArr = JSON.parse(localStorage.getItem("TeamUser")) || [];

  const teamobj = teamuserArr.find((obj) => obj[TeamName]);
  if (teamobj) {
    if (teamobj[TeamName].includes(user)) {
      teamobj[TeamName].map((elem, id) => {
        teamobj[TeamName].splice(id, 1);
        alert(`Uesr ${user} is deleted successfully from ${TeamName} team`);
        return;
      });
    }
  } else {
    alert(`Team ${TeamName} is not present`);
  }
}

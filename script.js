function toggleApps() {
  const apps = document.getElementById("apps");
  apps.style.display = apps.style.display === "block" ? "none" : "block";
}

function handleSearch(e) {
  if (e.key === "Enter") {
    const q = e.target.value.toLowerCase();

    if (q.includes("ai")) location.href = "apps/ai.html";
    else if (q.includes("music")) location.href = "apps/music.html";
    else if (q.includes("video")) location.href = "apps/video.html";
    else if (q.includes("game")) location.href = "apps/games.html";
    else alert("No Rivo app found");
  }
}

document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

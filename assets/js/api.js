
async function fetchProfileData() {
    const url = "https://biahandrade.github.io/js-developer-portfolio/assets/data/profile.json"
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("Erro ao buscar JSON");
    return response.json();
  })
  .then(data => {
    // mostrar dados
  })
  .catch(error => {
    console.error("Erro ao carregar dados:", error);
  });

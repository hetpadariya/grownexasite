function openPlant(page){ window.location.href = page; }
function searchPlants(){
 let input = document.getElementById('search').value.toLowerCase();
 let cards = document.getElementsByClassName('plant-card');
 for(let c of cards){
   let name = c.innerText.toLowerCase();
   c.style.display = name.includes(input) ? '' : 'none';
 }
}
//=====================première partie=================\\

const parent = document.getElementById("parent");
const children = document.getElementById("children");

parent.addEventListener('click' , () => {
  alert('parent')
},true);
children.addEventListener('click' ,(event) => {
  alert('chilren')
  //event.stopPropagation();
  
},true);
//la methode event.stopPropagation() va annuler la phase de bouillenement a partir du moment ou le code rencontreral'instruction.Ainsi ,l'evenement ne remontera pas jusqu'a la div "parent". 
// losqu'on ajoute l'option "true"a l'evenement, on ignore la phase de bouillenemnent et les evenments sont éxécutés pendant la phase de capture;=> comportement inversé.

//====================Conclusion==================\\
// il existe deux phases losrqu'u événement est déclenché: la phase de capture et la phase de bouillenement.
//la phase de capture partb de l'encètre le plus haut vers l'élément ecouteur.
//la phase de bouillonnement fait le chemin en sens inverse et rexécute les événements .
//stopPropagation() permet de stoper la phase de bouillonnement.
//le troisième paramétre de la methode addEvenetListener() délègue l'éxécution des événements à la phase de capture et annule la phase de bouillonnement.

//======================deuxième partie du code=================\\
for(let element of document.querySelectorAll("*")){
  element.addEventListener("click",(event) => {
      event.stopPropagation();
      alert(`capturing the element:${element.tagName}`)
  },false);
}

//======================troisième partie =======================\\
// Dans cet exercice on va chercher a lier l'action de deux fonctions grace à un événement personnalisé;
//Cette méthode est appelée au chargement de la pâge et permet de changer la couleur du background de notre div.

function hightlight(elem) {
  const bgColor = "yellow";
  elem.style.background = bgColor;

  //create the event
  let event = new CustomEvent("backgroundYellpw", {
    detail:{
      backgroundColor : bgColor
    }
  });
  //dispatch the event
  elem.dispatchEvent(event);
}

//select the div element
let div = document.querySelector  ('.note');

//add border style
function addBorder(elem) {
  elem.style.border = "solid 1px red";

}

//Listen to the highlight event
div.addEventListener('backgroundyellow', function (e) {
  addBorder(this);

  //examine the background
  console.log(e.detail);
});

//highlight div element
hightlight(div);

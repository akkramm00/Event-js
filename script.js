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

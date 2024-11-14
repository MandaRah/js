

  const input2 = document.getElementById("test");
  setTimeout(() => {
    // On sélectionne l'input2 :
    input2.focus();
    // On défini son attribut value à 12, sa propriété value
    // sur le DOM est mise à jour automatiquement.
    input2.setAttribute("value", 12);
    // On peut donc accéder à la propriété value du DOM :
    if (input2.value !== 42) {
      // On décide que le champ n'est pas valide et on défini notre message d'erreur :
      input2.setCustomValidity("42 est la seule réponse possible !");
      // On décide d'afficher dès maintenant le message d'erreur à l'utilisateur :
      input2.reportValidity();
      // On sélectionne le texte pour qu'il puisse le remplacer
      input2.select();
    }
  }, 1);
  // ** Sans les évènements nous ne pouvons pas réagir à ce que l'utilisateur entre **
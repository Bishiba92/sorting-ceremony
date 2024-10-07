```javascript
var questions = [
    {    
        question: "Face à un défi, quel est votre premier réflexe ?",
        options: [
            { text: "Le confronter de front, quelles qu'en soient les conséquences.", weight: [3, 1, 1, 1] },
            { text: "Planifier soigneusement une stratégie avant d'agir.", weight: [1, 3, 1, 2] },
            { text: "Travailler sans relâche jusqu'à surmonter le défi, même si cela m'épuise.", weight: [2, 1, 3, 1] },
            { text: "Chercher des moyens de transformer le défi en opportunité de gain personnel.", weight: [1, 1, 1, 3] },
            { text: "Procrastiner et espérer que le problème se résolve de lui-même avec le temps.", weight: [0, 1, 2, 0] },
            { text: "Suivre l'exemple de quelqu'un d'autre, en faisant confiance à leur jugement sur la meilleure marche à suivre.", weight: [1, 2, 3, 1] },
            { text: "Me sentir submergé et éviter de traiter le défi complètement.", weight: [0, 0, 2, 0] },
            { text: "Essayer de trouver une solution créative ou non conventionnelle au problème.", weight: [1, 3, 1, 2] },
            { text: "Déléguer le problème à quelqu'un d'autre qui pourrait mieux le gérer.", weight: [0, 1, 1, 3] },
            { text: "Utiliser l'humour ou la distraction pour détourner la gravité du défi.", weight: [2, 1, 2, 1] }
        ]
    },
    {
        question: "Qu'est-ce qui est important pour vous chez vos amis ?",
        options: [
            { text: "Ils doivent être faciles à diriger.", weight: [1, 1, 1, 3] },
            { text: "Ils me défient intellectuellement.", weight: [1, 3, 1, 2] },
            { text: "Ils me poussent à me surpasser pour rester au sommet.", weight: [1, 2, 1, 3] },
            { text: "Ils m'acceptent tel que je suis.", weight: [1, 1, 3, 1] },
            { text: "Ils partagent mon sens de l'aventure.", weight: [3, 1, 1, 1] },
            { text: "Ils ont des connexions qui peuvent m'aider à réussir.", weight: [1, 1, 1, 3] },
            { text: "Ils sont loyaux et soutenants.", weight: [2, 1, 3, 1] },
            { text: "Ils m'aident à me sentir important et valorisé.", weight: [1, 1, 2, 2] },
            { text: "Ils apportent de nouvelles idées et perspectives.", weight: [1, 3, 1, 2] },
            { text: "Ils sont amusants et spontanés.", weight: [3, 1, 2, 1] }
        ]
    },
    {
        question: "Laquelle de ces descriptions correspond à votre approche de l'apprentissage ?",
        options: [
            { text: "Je cherche la connaissance pour elle-même ; comprendre le monde est mon objectif.", weight: [1, 3, 1, 1] },
            { text: "J'apprends mieux en plongeant et en faisant l'expérience des choses directement.", weight: [3, 1, 1, 1] },
            { text: "La pratique constante est essentielle ; je travaille avec diligence pour maîtriser de nouvelles compétences.", weight: [1, 1, 3, 1] },
            { text: "Je me concentre sur l'apprentissage de choses qui m'aideront à atteindre mes ambitions.", weight: [1, 1, 1, 3] },
            { text: "J'apprends juste ce qu'il faut pour m'en sortir ; pas besoin d'en faire trop.", weight: [0, 1, 2, 1] },
            { text: "Je préfère apprendre des expériences des autres pour éviter de faire des erreurs moi-même.", weight: [1, 2, 1, 2] },
            { text: "J'absorbe l'information rapidement et compte sur mon esprit pour m'en sortir.", weight: [1, 3, 1, 2] },
            { text: "Je procrastine souvent mais réussis à apprendre ce dont j'ai besoin à la dernière minute.", weight: [1, 1, 2, 1] },
            { text: "J'aime collaborer avec d'autres pour apprendre de nouvelles choses.", weight: [2, 1, 3, 1] },
            { text: "Je cherche des défis qui mettent mes capacités à l'épreuve et j'apprends en les surmontant.", weight: [3, 1, 1, 2] }
        ]
    },
    {
        question: "Si quelqu'un vous fait du tort, quelle est votre réaction ?",
        options: [
            { text: "Pardonner et passer à autre chose, en me concentrant sur le maintien de la paix.", weight: [1, 1, 3, 1] },
            { text: "Les confronter directement pour régler le problème.", weight: [3, 1, 1, 1] },
            { text: "Planifier une manière de les empêcher de me faire du tort à nouveau.", weight: [1, 2, 1, 3] },
            { text: "Réfléchir à l'expérience pour en tirer des leçons et grandir.", weight: [1, 3, 1, 1] },
            { text: "Les éviter et me concentrer sur mon propre chemin.", weight: [0, 1, 2, 1] },
            { text: "Faire comme si cela ne me dérangeait pas mais garder du ressentiment.", weight: [0, 1, 1, 2] },
            { text: "Chercher des conseils auprès d'autres personnes sur la façon de gérer la situation.", weight: [1, 2, 2, 1] },
            { text: "Essayer de me venger à ma manière.", weight: [1, 1, 0, 3] },
            { text: "Laisser tomber et me concentrer sur des relations positives.", weight: [1, 1, 3, 1] },
            { text: "Me défendre et m'assurer qu'ils comprennent mes limites.", weight: [3, 1, 1, 1] }
        ]
    },
    {
        question: "Comment gérez-vous le stress ?",
        options: [
            { text: "Je prends une profonde inspiration et essaie de me calmer avant de continuer.", weight: [1, 2, 3, 1] },
            { text: "Je passe à l'action et le traite immédiatement.", weight: [3, 1, 1, 1] },
            { text: "J'analyse la situation pour trouver la solution la plus logique.", weight: [1, 3, 1, 2] },
            { text: "Je canalise le stress en détermination pour atteindre mes objectifs.", weight: [2, 1, 1, 3] },
            { text: "Je l'ignore et j'espère que le problème se résoudra de lui-même.", weight: [0, 1, 2, 0] },
            { text: "Je cherche des conseils auprès d'autres personnes pour m'aider à le gérer.", weight: [1, 2, 3, 1] },
            { text: "Je me frustre et peux agir impulsivement.", weight: [3, 1, 1, 1] },
            { text: "Je fais un plan pour prévenir ce type de stress à l'avenir.", weight: [1, 2, 1, 3] },
            { text: "Je me concentre sur d'autres tâches pour me distraire.", weight: [1, 1, 2, 1] },
            { text: "J'essaie de trouver une solution créative au problème.", weight: [1, 3, 1, 2] }
        ]
    },
    {
        question: "Que feriez-vous si vous trouviez un portefeuille par terre ?",
        options: [
            { text: "Le remettre immédiatement aux autorités.", weight: [2, 1, 3, 1] },
            { text: "Essayer de trouver le propriétaire moi-même pour le lui rendre.", weight: [3, 1, 2, 1] },
            { text: "Prendre l'argent mais rendre le portefeuille anonymement.", weight: [0, 1, 0, 3] },
            { text: "Le laisser là où il est ; peut-être que le propriétaire reviendra le chercher.", weight: [1, 1, 2, 1] },
            { text: "Le prendre et considérer que c'est ma journée de chance.", weight: [0, 0, 0, 3] },
            { text: "Analyser le contenu pour décider de la suite à donner.", weight: [1, 3, 1, 2] },
            { text: "Le garder en sécurité jusqu'à ce que je puisse trouver le propriétaire moi-même.", weight: [2, 1, 3, 1] },
            { text: "Demander autour de moi si quelqu'un à proximité a perdu un portefeuille.", weight: [2, 1, 3, 1] },
            { text: "L'ignorer ; ce n'est pas mon problème.", weight: [0, 0, 1, 1] },
            { text: "Utiliser toute identification à l'intérieur pour contacter directement le propriétaire.", weight: [2, 2, 2, 1] }
        ]
    },
    {
        question: "Comment préférez-vous passer votre temps libre ?",
        options: [
            { text: "Lire un livre pour élargir mes connaissances.", weight: [1, 3, 1, 1] },
            { text: "Pratiquer des activités physiques ou des sports.", weight: [3, 1, 1, 1] },
            { text: "Passer du temps de qualité avec des amis et la famille.", weight: [2, 1, 3, 1] },
            { text: "Travailler sur un projet personnel pour atteindre mes objectifs.", weight: [1, 1, 1, 3] },
            { text: "Essayer de nouvelles expériences excitantes.", weight: [3, 1, 1, 2] },
            { text: "Me détendre et prendre le temps de me ressourcer.", weight: [1, 1, 3, 1] },
            { text: "Apprendre quelque chose de nouveau purement pour le plaisir.", weight: [1, 3, 1, 1] },
            { text: "Stratégiser et planifier pour des objectifs futurs.", weight: [1, 2, 1, 3] },
            { text: "Faire du bénévolat ou aider les autres dans le besoin.", weight: [2, 1, 3, 1] },
            { text: "S'adonner à des loisirs créatifs comme l'art ou la musique.", weight: [1, 3, 1, 2] }
        ]
    },
    {
        question: "Quelle est votre plus grande faiblesse ?",
        options: [
            { text: "Je peux être trop confiant et parfois me faire exploiter.", weight: [1, 1, 3, 1] },
            { text: "J'agis impulsivement sans considérer les conséquences.", weight: [3, 1, 1, 1] },
            { text: "Je suranalyse les choses, ce qui mène à l'indécision.", weight: [1, 3, 1, 1] },
            { text: "Je peux être manipulateur pour atteindre mes objectifs.", weight: [1, 1, 1, 3] },
            { text: "J'ai tendance à éviter la confrontation même quand c'est nécessaire.", weight: [1, 1, 3, 1] },
            { text: "Je suis excessivement compétitif et me concentre trop sur la victoire.", weight: [1, 1, 1, 3] },
            { text: "Parfois, je parais arrogant à cause de mes connaissances.", weight: [1, 3, 1, 2] },
            { text: "Je reconnais rarement mes propres défauts et crois généralement avoir raison.", weight: [1, 2, 1, 2] },
            { text: "Je peux être imprudent, prenant des risques inutiles.", weight: [3, 1, 1, 1] },
            { text: "J'ai du mal à tenir mes engagements.", weight: [1, 1, 3, 1] }
        ]
    },
    {
        question: "Comment abordez-vous le travail en groupe ?",
        options: [
            { text: "Prendre en charge et diriger le groupe pour atteindre nos objectifs.", weight: [3, 1, 1, 2] },
            { text: "Prendre en charge et déléguer les tâches aux autres tout en contribuant peu moi-même.", weight: [1, 1, 0, 3] },
            { text: "Assurer que tout le monde se sente inclus et valorisé dans le groupe.", weight: [1, 1, 3, 1] },
            { text: "Me concentrer sur ma part pour la faire au mieux de mes capacités.", weight: [1, 3, 2, 1] },
            { text: "Assurer que le groupe suive le plan le plus efficace et efficient.", weight: [1, 3, 1, 2] },
            { text: "Rester en arrière-plan et faire ce qu'on me dit.", weight: [1, 1, 2, 1] },
            { text: "Utiliser l'occasion pour montrer mes capacités et me démarquer.", weight: [2, 1, 1, 3] },
            { text: "Espérer que mon manque d'effort ne se voit pas et que les autres compensent.", weight: [0, 0, 1, 1] },
            { text: "Collaborer étroitement avec les membres de l'équipe pour combiner nos forces.", weight: [2, 1, 3, 1] },
            { text: "Offrir des idées et solutions créatives pour guider le projet.", weight: [1, 3, 1, 2] }
        ]
    },
    {
        question: "Comment réagissez-vous lorsque les choses ne vont pas comme vous le souhaitez ?",
        options: [
            { text: "Rester calme et analyser la situation pour trouver une solution.", weight: [1, 3, 1, 1] },
            { text: "Me frustrer mais persévérer jusqu'à réussir.", weight: [3, 1, 1, 1] },
            { text: "L'accepter avec grâce et passer à autre chose.", weight: [1, 1, 3, 1] },
            { text: "Chercher quelqu'un ou quelque chose à blâmer pour le contretemps.", weight: [0, 0, 1, 3] },
            { text: "Élaborer rapidement un plan alternatif pour atteindre mon objectif.", weight: [1, 2, 1, 3] },
            { text: "Faire semblant que cela ne me dérange pas, mais me sentir contrarié intérieurement.", weight: [1, 1, 2, 2] },
            { text: "Croire que si les choses ne vont pas comme je le souhaite, c'est que je n'ai pas assez essayé.", weight: [1, 1, 1, 3] },
            { text: "Utiliser l'humour pour alléger la situation et maintenir le moral.", weight: [2, 1, 2, 1] },
            { text: "Prendre du temps seul pour réfléchir et ajuster mon approche.", weight: [1, 3, 1, 2] },
            { text: "Exprimer ouvertement ma frustration et éventuellement m'emporter.", weight: [3, 1, 1, 1] }
        ]
    },
    {
        question: "Votre ami a triché à un examen à l'école. Quelle est votre position à ce sujet ?",
        options: [
            { text: "Informer immédiatement le professeur, car c'est la bonne chose à faire.", weight: [3, 1, 1, 1] },
            { text: "Encourager mon ami à avouer et à faire face aux conséquences.", weight: [2, 1, 3, 1] },
            { text: "Proposer d'aider mon ami à étudier pour qu'il n'ait pas besoin de tricher la prochaine fois.", weight: [1, 2, 3, 1] },
            { text: "Garder son secret et l'aider à éviter d'être pris.", weight: [1, 1, 1, 3] },
            { text: "Me joindre à lui pour tricher la prochaine fois afin d'améliorer mes propres notes.", weight: [0, 1, 0, 3] },
            { text: "M'occuper de mes affaires ; ce n'est pas mon rôle d'intervenir.", weight: [1, 1, 1, 2] },
            { text: "Confronter mon ami et exprimer comment cela affecte notre confiance.", weight: [3, 1, 2, 1] },
            { text: "Avertir mon ami des risques mais l'aider à dissimuler cette fois-ci.", weight: [1, 1, 1, 3] },
            { text: "Considérer que tout le monde fait des erreurs et laisser passer cette fois-ci.", weight: [1, 1, 3, 1] },
            { text: "Discuter avec mon ami pourquoi tricher n'est pas bénéfique et encourager de meilleurs choix.", weight: [1, 3, 2, 1] }
        ]
    },
    {
        question: "Quelle est votre opinion sur l'utilisation du Sortilège Impardonnable Crucio sur les animaux en classe pour l'apprentissage ?",
        options: [
            { text: "Absolument inacceptable ; causer de la douleur aux animaux est mal.", weight: [1, 1, 3, 0] },
            { text: "Je protesterais et refuserais de participer, même si c'est autorisé.", weight: [3, 1, 1, 1] },
            { text: "Je crois que c'est acceptable si c'est nécessaire pour notre éducation.", weight: [1, 2, 1, 3] },
            { text: "Je me sentirais mal à l'aise mais participerais pour comprendre.", weight: [1, 2, 1, 2] },
            { text: "Je proposerais d'utiliser des méthodes alternatives qui ne nuisent pas aux animaux.", weight: [2, 3, 2, 1] },
            { text: "Je participerais sans hésiter ; maîtriser les sorts est important.", weight: [1, 2, 0, 3] },
            { text: "Refuserais de participer mais respecterais les choix des autres.", weight: [1, 2, 2, 1] },
            { text: "Je me sentirais partagé mais ferais confiance au professeur.", weight: [1, 2, 1, 2] },
            { text: "Je rassemblerais des camarades pour demander collectivement des leçons alternatives.", weight: [3, 1, 2, 1] },
            { text: "Participerais mais me sentirais mal à l'aise, en me concentrant sur la valeur éducative.", weight: [1, 2, 1, 2] }
        ]
    },
    {
        question: "Vous devez aller aux toilettes pendant le cours, comment vous excusez-vous ?",
        options: [
            { text: "Lever la main et demander poliment à être excusé.", weight: [1, 1, 3, 1] },
            { text: "Attendre une pause naturelle dans le cours puis demander la permission de partir.", weight: [1, 3, 1, 1] },
            { text: "Me lever et partir sans interrompre la classe.", weight: [2, 1, 1, 2] },
            { text: "Attendre que le professeur soit distrait et sortir discrètement.", weight: [1, 1, 1, 3] },
            { text: "Endurer jusqu'à la fin du cours ; je ne veux pas causer de perturbation.", weight: [1, 1, 3, 1] },
            { text: "Lever la main et dire directement que je dois partir maintenant.", weight: [3, 1, 1, 1] },
            { text: "Trouver une excuse créative pour quitter la salle de classe.", weight: [1, 3, 1, 2] },
            { text: "Attendre que le travail de groupe commence, puis partir sans être remarqué.", weight: [1, 1, 2, 3] },
            { text: "Demander à un ami de créer une distraction pour que je puisse partir discrètement.", weight: [1, 1, 1, 3] },
            { text: "M'excuser pour l'interruption et demander poliment à être excusé.", weight: [1, 1, 3, 1] }
        ]
    },
    {
        question: "Pendant vos études à Poudlard, vous découvrez une recette de potion rare qui peut grandement améliorer vos capacités magiques, vous donnant un avantage dans vos cours et votre future carrière. Cependant, la préparation et l'utilisation peuvent involontairement drainer l'énergie magique des étudiants à proximité, les affaiblissant temporairement. Que faites-vous ?",
        options: [
            { text: "Préparer et utiliser la potion immédiatement ; mon avancement est crucial.", weight: [1, 1, 1, 3] },
            { text: "Étudier davantage la potion pour comprendre les risques avant de décider.", weight: [1, 3, 1, 2] },
            { text: "Décider de ne pas la préparer ; je ne prendrai pas le risque du bien-être des autres pour mon bénéfice.", weight: [1, 1, 3, 1] },
            { text: "Utiliser la potion uniquement si c'est absolument nécessaire pour quelque chose de significatif.", weight: [3, 1, 1, 1] },
            { text: "Chercher des conseils auprès d'un professeur de confiance concernant la potion.", weight: [1, 2, 2, 1] },
            { text: "Modifier la potion pour éliminer le risque avant de l'utiliser.", weight: [1, 3, 1, 2] },
            { text: "Partager la recette de la potion avec d'autres pour que tout le monde en bénéficie équitablement.", weight: [2, 1, 3, 1] },
            { text: "Garder la potion secrète mais choisir de ne pas l'utiliser.", weight: [1, 1, 2, 2] },
            { text: "Utiliser discrètement la potion, en m'assurant que personne ne la découvre.", weight: [1, 1, 1, 3] },
            { text: "Me débarrasser de la recette de la potion pour éviter tout dommage potentiel.", weight: [2, 1, 3, 1] }
        ]
    },
    {
        question: "En raison d'une interdiction soudaine par le Ministère de la Magie, votre friandise magique préférée, les Chocolats Chocogrenouilles, n'est plus autorisée dans le Poudlard Express. Vous les avez appréciés chaque année, et il n'y a pas de raison claire pour cette interdiction. Comment gérez-vous cette situation ?",
        options: [
            { text: "Faire entrer secrètement des Chocolats Chocogrenouilles dans le train malgré l'interdiction.", weight: [2, 2, 1, 3] },
            { text: "Approcher le personnel du train pour demander poliment la raison de l'interdiction.", weight: [1, 2, 3, 1] },
            { text: "Accepter l'interdiction et renoncer à ma friandise préférée.", weight: [1, 1, 3, 1] },
            { text: "Trouver une friandise alternative qui est autorisée dans le train.", weight: [1, 3, 2, 1] },
            { text: "Me plaindre bruyamment au personnel et exiger une explication.", weight: [3, 1, 1, 1] },
            { text: "Organiser une pétition parmi les élèves pour annuler l'interdiction.", weight: [3, 2, 2, 1] },
            { text: "Utiliser la magie pour déguiser les Chocolats Chocogrenouilles en une autre friandise autorisée.", weight: [2, 3, 1, 3] },
            { text: "Enquêter sur la raison de l'interdiction en recherchant les décrets du Ministère.", weight: [1, 3, 1, 2] },
            { text: "Partager vos derniers Chocolats Chocogrenouilles avec des amis avant de monter à bord.", weight: [3, 1, 3, 1] },
            { text: "Accepter l'interdiction mais prévoir d'écrire un argument logique au Ministère pour expliquer pourquoi elle devrait être levée.", weight: [2, 3, 1, 1] }
        ]
    }
];
```
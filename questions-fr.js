var questions = [
    {
        question: "Quand tu fais face à un défi, quelle est ta première réaction ?",
        options: [
            { text: "Le confronter directement !", house: "Gryffondor", weight: 3 },
            { text: "Planifier une approche stratégique.", house: "Serdaigle", weight: 3 },
            { text: "Travailler dur jusqu'à le surmonter.", house: "Poufsouffle", weight: 3 },
            { text: "Chercher un moyen de transformer le défi en avantage.", house: "Serpentard", weight: 3 },
            { text: "L'éviter et espérer qu'il se résolve tout seul.", house: "Poufsouffle", weight: 3 },
            { text: "Suivre la direction de quelqu'un d'autre pour l'affronter.", house: "Serpentard", weight: 3 },
        ]
    },
    {
        question: "Qu'est-ce que tu apprécies le plus chez tes amis ?",
        options: [
            { text: "Loyauté", house: "Poufsouffle", weight: 3 },
            { text: "Courage", house: "Gryffondor", weight: 3 },
            { text: "Intelligence", house: "Serdaigle", weight: 3 },
            { text: "Ambition", house: "Serpentard", weight: 3 },
            { text: "Fiabilité", house: "Poufsouffle", weight: 3 },
            { text: "Crédulité", house: "Serpentard", weight: 3 },
            { text: "Un bon sens de l'humour", house: "Serdaigle", weight: 3 },
        ]
    },
    {
        question: "Quelle phrase décrit le mieux ton approche de l'apprentissage ?",
        options: [
            { text: "La connaissance, c'est le pouvoir.", house: "Serdaigle", weight: 3 },
            { text: "Apprendre en faisant.", house: "Gryffondor", weight: 3 },
            { text: "La pratique rend parfait.", house: "Poufsouffle", weight: 3 },
            { text: "Apprendre ce qui te fera avancer.", house: "Serpentard", weight: 3 },
            { text: "J'apprends seulement ce qui est nécessaire pour m'en sortir.", house: "Poufsouffle", weight: 3 },
            { text: "Je préfère apprendre des erreurs des autres.", house: "Serpentard", weight: 3 }
        ]
    },
    {
        question: "Si quelqu'un te fait du mal, quelle est ta réaction ?",
        options: [
            { text: "Pardonner et aller de l'avant.", house: "Poufsouffle", weight: 3 },
            { text: "Trouver un moyen de m'assurer qu'il ne recommencera pas.", house: "Serpentard", weight: 3 },
            { text: "Le défier directement.", house: "Gryffondor", weight: 3 },
            { text: "En faire une expérience d'apprentissage.", house: "Serdaigle", weight: 3 },
            { text: "Les éviter et continuer ma vie.", house: "Poufsouffle", weight: 3 },
            { text: "Faire semblant que cela ne m'a pas dérangé mais être passif-agressif à ce sujet.", house: "Serpentard", weight: 3 }
        ]
    },
    {
        question: "Comment gères-tu le stress ?",
        options: [
            { text: "Je prends un moment pour me calmer.", house: "Poufsouffle", weight: 3 },
            { text: "Je fais face au problème immédiatement.", house: "Gryffondor", weight: 3 },
            { text: "Je réfléchis de manière logique pour le résoudre.", house: "Serdaigle", weight: 3 },
            { text: "Je le transforme en motivation pour réussir.", house: "Serpentard", weight: 3 },
            { text: "Je procrastine et j'espère que ça disparaîtra.", house: "Poufsouffle", weight: 3 },
            { text: "Je cherche quelqu'un qui puisse le résoudre à ma place.", house: "Poufsouffle", weight: 3 }
        ]
    },
    {
        question: "Que ferais-tu si tu trouves un portefeuille par terre ?",
        options: [
            { text: "Le remettre immédiatement aux autorités.", house: "Poufsouffle", weight: 3 },
            { text: "Le vérifier pour essayer de retrouver le propriétaire par moi-même.", house: "Gryffondor", weight: 3 },
            { text: "Prendre l'argent et laisser le reste.", house: "Serpentard", weight: 3 },
            { text: "Le laisser où il est, peut-être que le propriétaire reviendra.", house: "Poufsouffle", weight: 3 },
            { text: "Analyser la situation pour déterminer la meilleure option.", house: "Serdaigle", weight: 3 },
            { text: "Le garder jusqu'à ce que quelqu'un en parle.", house: "Serpentard", weight: 3 }
        ]
    },
    {
        question: "Comment préfères-tu passer ton temps libre ?",
        options: [
            { text: "Lire un livre.", house: "Serdaigle", weight: 3 },
            { text: "Apprendre quelque chose de nouveau.", house: "Serdaigle", weight: 3 },
            { text: "Jouer à un jeu.", house: "Gryffondor", weight: 3 },
            { text: "Passer du temps avec des amis.", house: "Poufsouffle", weight: 3 },
            { text: "Essayer une nouvelle activité excitante.", house: "Gryffondor", weight: 3 },
            { text: "Travailler sur un projet personnel.", house: "Serpentard", weight: 3 },
            { text: "Ne rien faire du tout et me détendre.", house: "Poufsouffle", weight: 3 },
            { text: "Utiliser mon temps pour quelque chose de bénéfique.", house: "Serpentard", weight: 3 }
        ]
    },
    {
        question: "Quel est ton plus grand défaut ?",
        options: [
            { text: "Je peux être trop confiant envers les autres.", house: "Poufsouffle", weight: 3 },
            { text: "Je peux être impulsif et agir sans réfléchir.", house: "Gryffondor", weight: 3 },
            { text: "Je peux être excessivement analytique et indécis.", house: "Serdaigle", weight: 3 },
            { text: "Je peux être manipulateur pour obtenir ce que je veux.", house: "Serpentard", weight: 3 },
            { text: "J'ai tendance à éviter la confrontation.", house: "Poufsouffle", weight: 3 },
            { text: "Je peux être trop concentré sur mes propres objectifs.", house: "Serpentard", weight: 3 },
            { text: "J'aime ridiculiser les autres.", house: "Serpentard", weight: 3 },
            { text: "Je n'ai vraiment aucun défaut auquel je puisse penser.", house: "Serpentard", weight: 3 },
        ]
    },
    {
        question: "Comment abordes-tu le travail en groupe ?",
        options: [
            { text: "Prendre le contrôle et diriger le groupe.", house: "Gryffondor", weight: 3 },
            { text: "Prendre le contrôle et déléguer la plupart des tâches à quelqu'un d'autre.", house: "Serpentard", weight: 3 },
            { text: "M'assurer que tout le monde se sente inclus et valorisé.", house: "Poufsouffle", weight: 3 },
            { text: "Me concentrer sur faire ma part du travail du mieux possible.", house: "Serdaigle", weight: 3 },
            { text: "M'assurer que le groupe suit le plan le plus efficace.", house: "Serpentard", weight: 3 },
            { text: "Rester en retrait et faire ce qu'on me dit.", house: "Poufsouffle", weight: 3 },
            { text: "Saisir l'occasion pour montrer mes compétences.", house: "Serpentard", weight: 3 },
            { text: "Espérer que mon manque d'effort ne soit pas remarqué.", house: "Poufsouffle", weight: 3 },
        ]
    },
    {
        question: "Comment réagis-tu lorsque les choses ne se passent pas comme tu le souhaites ?",
        options: [
            { text: "Rester calme et essayer de trouver une solution.", house: "Serdaigle", weight: 3 },
            { text: "Être frustré mais essayer à nouveau.", house: "Gryffondor", weight: 3 },
            { text: "L'accepter et aller de l'avant.", house: "Poufsouffle", weight: 3 },
            { text: "Chercher quelqu'un à blâmer.", house: "Serpentard", weight: 3 },
            { text: "Chercher une autre voie vers le succès.", house: "Serpentard", weight: 3 },
            { text: "Faire semblant que cela ne m'embête pas.", house: "Poufsouffle", weight: 3 },
            { text: "Si les choses ne se passent pas comme je veux, c'est parce que je n'ai pas assez essayé.", house: "Serpentard", weight: 3 },
        ]
    },
    {
        question: "Ton ami a triché à un examen à l'école. Quelle est ta réaction ?",
        options: [
            { text: "Le dire immédiatement au professeur.", house: "Gryffondor", weight: 3 },
            { text: "Encourager ton ami à se confesser.", house: "Poufsouffle", weight: 3 },
            { text: "Aider ton ami à éviter de se faire attraper.", house: "Serpentard", weight: 3 },
            { text: "Rester en dehors de ça, ce n'est pas mon affaire.", house: "Serdaigle", weight: 3 }
        ]
    },
    {
        question: "Quelle est ton opinion sur l'utilisation du sort impardonnable Doloris sur des animaux en classe pour apprendre ?",
        options: [
            { text: "Absolument inacceptable sous n'importe quelle circonstance.", house: "Poufsouffle", weight: 3 },
            { text: "Seulement s'il n'y a pas d'autre moyen de l'apprendre.", house: "Serdaigle", weight: 3 },
            { text: "Si cela sert un objectif supérieur, c'est acceptable.", house: "Serpentard", weight: 3 },
            { text: "Je défierais le professeur et refuserais de le faire.", house: "Gryffondor", weight: 3 }
        ]
    },
    {
        question: "Tu dois aller aux toilettes pendant la classe, comment t'excuses-tu ?",
        options: [
            { text: "Je lève la main et je demande poliment la permission.", house: "Poufsouffle", weight: 3 },
            { text: "Je me lève simplement et j'y vais sans demander la permission.", house: "Gryffondor", weight: 3 },
            { text: "J'attends que le professeur soit distrait et je m'éclipse discrètement.", house: "Serpentard", weight: 3 },
            { text: "Je demande la permission à un moment logique du cours.", house: "Serdaigle", weight: 3 }
        ]
    },
    {
        question: "Une situation s'est présentée où tu peux avancer, mais en le faisant, certaines personnes pourraient être blessées. Que fais-tu ?",
        options: [
            { text: "Je saisis l'opportunité sans y penser à deux fois.", house: "Serpentard", weight: 3 },
            { text: "Je pèse les bénéfices par rapport aux conséquences.", house: "Serdaigle", weight: 3 },
            { text: "Je refuse de le faire si cela signifie blesser les autres.", house: "Poufsouffle", weight: 3 },
            { text: "Je ne procède que si cela signifie quelque chose d'important pour moi.", house: "Gryffondor", weight: 3 }
        ]
    },
    {
        question: "Il y a une interdiction sur ta nourriture préférée dans le Poudlard Express, tu as mangé cette nourriture chaque année jusqu'à maintenant. Comment gères-tu cela ?",
        options: [
            { text: "La faire passer malgré l'interdiction.", house: "Serpentard", weight: 3 },
            { text: "Me plaindre au personnel et exiger une explication.", house: "Gryffondor", weight: 3 },
            { text: "Trouver un aliment alternatif qui soit permis.", house: "Serdaigle", weight: 3 },
            { text: "Accepter et me passer de ma nourriture préférée.", house: "Poufsouffle", weight: 3 }
        ]
    }
];
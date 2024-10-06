var questions = [
    {
        question: "Wie reagierst du, wenn du vor einer Herausforderung stehst?",
        options: [
            { text: "Stelle dich ihr direkt!", house: "Gryffindor", weight: 3 },
            { text: "Einen strategischen Plan erstellen.", house: "Ravenclaw", weight: 3 },
            { text: "Hart arbeiten, bis ich es überwinde.", house: "Hufflepuff", weight: 3 },
            { text: "Einen Weg finden, die Herausforderung zu meinem Vorteil zu machen.", house: "Slytherin", weight: 3 },
            { text: "Vermeide sie und hoffe, dass sie sich von selbst löst.", house: "Hufflepuff", weight: 3 },
            { text: "Folge jemandem, der den Weg vorgibt.", house: "Slytherin", weight: 3 },
        ]
    },
    {
        question: "Was schätzt du am meisten an deinen Freunden?",
        options: [
            { text: "Loyalität", house: "Hufflepuff", weight: 3 },
            { text: "Mut", house: "Gryffindor", weight: 3 },
            { text: "Intelligenz", house: "Ravenclaw", weight: 3 },
            { text: "Ehrgeiz", house: "Slytherin", weight: 3 },
            { text: "Verlässlichkeit", house: "Hufflepuff", weight: 3 },
            { text: "Leichtgläubigkeit", house: "Slytherin", weight: 3 },
            { text: "Guter Sinn für Humor", house: "Ravenclaw", weight: 3 },
        ]
    },
    {
        question: "Wie ist deine Einstellung zum Lernen?",
        options: [
            { text: "Wissen ist Macht.", house: "Ravenclaw", weight: 3 },
            { text: "Lernen durch Handeln.", house: "Gryffindor", weight: 3 },
            { text: "Übung macht den Meister.", house: "Hufflepuff", weight: 3 },
            { text: "Lerne das, was dich weiterbringt.", house: "Slytherin", weight: 3 },
            { text: "Ich lerne nur, was ich brauche, um durchzukommen.", house: "Hufflepuff", weight: 3 },
            { text: "Ich lerne gerne aus den Fehlern anderer.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "Wie reagierst du, wenn dich jemand verletzt?",
        options: [
            { text: "Verzeihen und weitermachen.", house: "Hufflepuff", weight: 3 },
            { text: "Einen Weg finden, sicherzustellen, dass es nicht wieder passiert.", house: "Slytherin", weight: 3 },
            { text: "Direkt konfrontieren.", house: "Gryffindor", weight: 3 },
            { text: "Es als Lernerfahrung nutzen.", house: "Ravenclaw", weight: 3 },
            { text: "Sie vermeiden und mit meinem Leben weitermachen.", house: "Hufflepuff", weight: 3 },
            { text: "So tun, als würde es mich nicht stören, aber passiv-aggressiv sein.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "Wie gehst du mit Stress um?",
        options: [
            { text: "Ich nehme mir einen Moment, um mich zu sammeln.", house: "Hufflepuff", weight: 3 },
            { text: "Ich gehe das Problem sofort an.", house: "Gryffindor", weight: 3 },
            { text: "Ich denke mich logisch durch das Problem.", house: "Ravenclaw", weight: 3 },
            { text: "Ich verwandle den Stress in Motivation zum Erfolg.", house: "Slytherin", weight: 3 },
            { text: "Ich prokrastiniere und hoffe, dass es verschwindet.", house: "Hufflepuff", weight: 3 },
            { text: "Ich suche jemanden, der es für mich lösen kann.", house: "Hufflepuff", weight: 3 }
        ]
    },
    {
        question: "Was würdest du tun, wenn du eine Geldbörse auf dem Boden findest?",
        options: [
            { text: "Sofort den Behörden übergeben.", house: "Hufflepuff", weight: 3 },
            { text: "Durchsehen, um den Besitzer selbst zu finden.", house: "Gryffindor", weight: 3 },
            { text: "Das Geld nehmen und den Rest liegen lassen.", house: "Slytherin", weight: 3 },
            { text: "Es dort lassen, vielleicht kommt der Besitzer zurück.", house: "Hufflepuff", weight: 3 },
            { text: "Die Situation analysieren, um die beste Vorgehensweise zu bestimmen.", house: "Ravenclaw", weight: 3 },
            { text: "Behalten, bis sich jemand danach erkundigt.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "Wie verbringst du am liebsten deine Freizeit?",
        options: [
            { text: "Ein Buch lesen.", house: "Ravenclaw", weight: 3 },
            { text: "Etwas Neues lernen.", house: "Ravenclaw", weight: 3 },
            { text: "Ein Spiel spielen.", house: "Gryffindor", weight: 3 },
            { text: "Mit Freunden abhängen.", house: "Hufflepuff", weight: 3 },
            { text: "Eine neue, aufregende Aktivität ausprobieren.", house: "Gryffindor", weight: 3 },
            { text: "An einem persönlichen Projekt arbeiten.", house: "Slytherin", weight: 3 },
            { text: "Gar nichts tun und entspannen.", house: "Hufflepuff", weight: 3 },
            { text: "Meine Zeit für etwas Nützliches nutzen.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "Was ist deine größte Schwäche?",
        options: [
            { text: "Ich vertraue anderen manchmal zu sehr.", house: "Hufflepuff", weight: 3 },
            { text: "Ich handle manchmal impulsiv, ohne nachzudenken.", house: "Gryffindor", weight: 3 },
            { text: "Ich bin manchmal überanalytisch und unentschlossen.", house: "Ravenclaw", weight: 3 },
            { text: "Ich manipuliere manchmal andere, um das zu bekommen, was ich will.", house: "Slytherin", weight: 3 },
            { text: "Ich neige dazu, Konfrontationen zu vermeiden.", house: "Hufflepuff", weight: 3 },
            { text: "Ich bin manchmal zu sehr auf meine eigenen Ziele fixiert.", house: "Slytherin", weight: 3 },
            { text: "Ich freue mich manchmal über die Verspottung anderer.", house: "Slytherin", weight: 3 },
            { text: "Ich glaube, ich habe keine Schwächen.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "Wie gehst du mit Gruppenarbeit um?",
        options: [
            { text: "Die Führung übernehmen und die Gruppe leiten.", house: "Gryffindor", weight: 3 },
            { text: "Die Führung übernehmen und die meiste Arbeit an andere delegieren.", house: "Slytherin", weight: 3 },
            { text: "Sicherstellen, dass sich jeder eingeschlossen und wertgeschätzt fühlt.", house: "Hufflepuff", weight: 3 },
            { text: "Mich darauf konzentrieren, meinen Teil so gut wie möglich zu erledigen.", house: "Ravenclaw", weight: 3 },
            { text: "Sicherstellen, dass die Gruppe dem effizientesten Plan folgt.", house: "Slytherin", weight: 3 },
            { text: "Im Hintergrund bleiben und Anweisungen befolgen.", house: "Hufflepuff", weight: 3 },
            { text: "Die Gelegenheit nutzen, um meine Fähigkeiten zu zeigen.", house: "Slytherin", weight: 3 },
            { text: "Hoffen, dass mein Mangel an Anstrengung nicht auffällt.", house: "Hufflepuff", weight: 3 }
        ]
    },
    {
        question: "Wie reagierst du, wenn Dinge nicht nach deinem Willen laufen?",
        options: [
            { text: "Ruhig bleiben und versuchen, eine Lösung zu finden.", house: "Ravenclaw", weight: 3 },
            { text: "Frustriert werden, aber es noch einmal versuchen.", house: "Gryffindor", weight: 3 },
            { text: "Es akzeptieren und weitermachen.", house: "Hufflepuff", weight: 3 },
            { text: "Jemanden finden, den ich beschuldigen kann.", house: "Slytherin", weight: 3 },
            { text: "Einen alternativen Weg zum Erfolg suchen.", house: "Slytherin", weight: 3 },
            { text: "So tun, als würde es mich nicht stören.", house: "Hufflepuff", weight: 3 },
            { text: "Wenn Dinge nicht nach meinem Willen laufen, habe ich es noch nicht versucht.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "Dein Freund hat in der Schule bei einem Test geschummelt. Was ist deine Haltung dazu?",
        options: [
            { text: "Sofort den Lehrer informieren.", house: "Gryffindor", weight: 3 },
            { text: "Deinen Freund ermutigen, zu gestehen.", house: "Hufflepuff", weight: 3 },
            { text: "Deinem Freund helfen, nicht erwischt zu werden.", house: "Slytherin", weight: 3 },
            { text: "Sich heraushalten, es geht mich nichts an.", house: "Ravenclaw", weight: 3 }
        ]
    },
    {
        question: "Was hältst du davon, im Unterricht den unverzeihlichen Fluch Cruciatus an Tieren zu verwenden, um zu lernen?",
        options: [
            { text: "Absolut inakzeptabel unter allen Umständen.", house: "Hufflepuff", weight: 3 },
            { text: "Nur wenn es keinen anderen Weg gibt, es zu lernen.", house: "Ravenclaw", weight: 3 },
            { text: "Wenn es einem höheren Zweck dient, ist es in Ordnung.", house: "Slytherin", weight: 3 },
            { text: "Ich würde den Professor herausfordern und mich weigern, es zu tun.", house: "Gryffindor", weight: 3 }
        ]
    },
    {
        question: "Du musst während des Unterrichts zur Toilette. Wie entschuldigst du dich?",
        options: [
            { text: "Hand heben und höflich fragen.", house: "Hufflepuff", weight: 3 },
            { text: "Einfach aufstehen und gehen, ohne zu fragen.", house: "Gryffindor", weight: 3 },
            { text: "Warten, bis der Lehrer abgelenkt ist, und leise hinausschleichen.", house: "Slytherin", weight: 3 },
            { text: "Bei einer logischen Pause im Vortrag fragen.", house: "Ravenclaw", weight: 3 }
        ]
    },
    {
        question: "Eine Situation ergibt sich, in der du vorankommen kannst, aber dabei könnten einige Leute verletzt werden. Was tust du?",
        options: [
            { text: "Die Gelegenheit ohne zu zögern ergreifen.", house: "Slytherin", weight: 3 },
            { text: "Die Vorteile gegen die Konsequenzen abwägen.", house: "Ravenclaw", weight: 3 },
            { text: "Ablehnen, wenn es bedeutet, andere zu verletzen.", house: "Hufflepuff", weight: 3 },
            { text: "Nur weitermachen, wenn es für mich eine bedeutende Rolle spielt.", house: "Gryffindor", weight: 3 }
        ]
    },
    {
        question: "Es gibt ein Verbot für dein Lieblingsessen im Hogwarts-Express, und du hast dieses Essen bisher jedes Jahr gegessen. Wie gehst du damit um?",
        options: [
            { text: "Es trotz des Verbots heimlich mitnehmen.", house: "Slytherin", weight: 3 },
            { text: "Das Personal beschweren und eine Erklärung verlangen.", house: "Gryffindor", weight: 3 },
            { text: "Eine alternative erlaubte Speise finden.", house: "Ravenclaw", weight: 3 },
            { text: "Es akzeptieren und auf mein Lieblingsessen verzichten.", house: "Hufflepuff", weight: 3 }
        ]
    }
];
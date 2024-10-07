var questions = [
    {    
		question: "Was ist dein erster Instinkt, wenn du vor einer Herausforderung stehst?",
		options: [
			{ text: "Stelle dich ihr direkt, ungeachtet der Konsequenzen.", weight: [3, 1, 1, 1] },
			{ text: "Plane sorgfältig eine Strategie, bevor du irgendwelche Schritte unternimmst.", weight: [1, 3, 1, 2] },
			{ text: "Arbeite unermüdlich, bis die Herausforderung überwunden ist, auch wenn es mich erschöpft.", weight: [2, 1, 3, 1] },
			{ text: "Suche nach Möglichkeiten, die Herausforderung in eine Chance für persönlichen Gewinn zu verwandeln.", weight: [1, 1, 1, 3] },
			{ text: "Prokrastiniere und hoffe, dass sich das Problem mit der Zeit von selbst löst.", weight: [0, 1, 2, 0] },
			{ text: "Folge dem Beispiel anderer und vertraue darauf, dass sie den besten Handlungskurs kennen.", weight: [1, 2, 3, 1] },
			{ text: "Fühle mich überwältigt und vermeide es, mich der Herausforderung überhaupt zu stellen.", weight: [0, 0, 2, 0] },
			{ text: "Versuche, eine kreative oder unkonventionelle Lösung für das Problem zu finden.", weight: [1, 3, 1, 2] },
			{ text: "Übertrage das Problem auf jemand anderen, der es vielleicht besser handhaben kann.", weight: [0, 1, 1, 3] },
			{ text: "Nutze Humor oder Ablenkung, um die Ernsthaftigkeit der Herausforderung abzulenken.", weight: [2, 1, 2, 1] }
		]
	},
    {
		question: "Was ist dir bei deinen Freunden wichtig?",
		options: [
			{ text: "Sie sollten leicht zu führen sein.", weight: [1, 1, 1, 3] },
			{ text: "Sie fordern mich intellektuell heraus.", weight: [1, 3, 1, 2] },
			{ text: "Sie bringen mich dazu, mich selbst anzuspornen, um an der Spitze zu bleiben.", weight: [1, 2, 1, 3] },
			{ text: "Sie akzeptieren mich so, wie ich bin.", weight: [1, 1, 3, 1] },
			{ text: "Sie teilen meinen Sinn für Abenteuer.", weight: [3, 1, 1, 1] },
			{ text: "Sie haben Verbindungen, die mir zum Erfolg verhelfen können.", weight: [1, 1, 1, 3] },
			{ text: "Sie sind loyal und unterstützend.", weight: [2, 1, 3, 1] },
			{ text: "Sie helfen mir, mich wichtig und wertgeschätzt zu fühlen.", weight: [1, 1, 2, 2] },
			{ text: "Sie bringen neue Ideen und Perspektiven ein.", weight: [1, 3, 1, 2] },
			{ text: "Sie sind lustig und spontan.", weight: [3, 1, 2, 1] }
		]
	},
    {
		question: "Welche Aussage beschreibt am besten deinen Lernansatz?",
		options: [
			{ text: "Ich suche Wissen um seiner selbst willen; die Welt zu verstehen ist mein Ziel.", weight: [1, 3, 1, 1] },
			{ text: "Ich lerne am besten, indem ich direkt einsteige und Dinge aus erster Hand erlebe.", weight: [3, 1, 1, 1] },
			{ text: "Konsequentes Üben ist der Schlüssel; ich arbeite fleißig daran, neue Fähigkeiten zu meistern.", weight: [1, 1, 3, 1] },
			{ text: "Ich konzentriere mich darauf, Dinge zu lernen, die mir helfen, meine Ambitionen zu erreichen.", weight: [1, 1, 1, 3] },
			{ text: "Ich lerne gerade genug, um zurechtzukommen; es ist nicht nötig, übermäßig zu lernen.", weight: [0, 1, 2, 1] },
			{ text: "Ich lerne lieber aus den Erfahrungen anderer, um eigene Fehler zu vermeiden.", weight: [1, 2, 1, 2] },
			{ text: "Ich nehme Informationen schnell auf und verlasse mich auf meinen Scharfsinn, um durchzukommen.", weight: [1, 3, 1, 2] },
			{ text: "Ich prokrastiniere oft, schaffe es aber, das Notwendige in letzter Minute zu lernen.", weight: [1, 1, 2, 1] },
			{ text: "Ich arbeite gerne mit anderen zusammen, um neue Dinge zu lernen.", weight: [2, 1, 3, 1] },
			{ text: "Ich suche Herausforderungen, die meine Fähigkeiten testen, und lerne daraus, sie zu überwinden.", weight: [3, 1, 1, 2] }
		]
	},
    {
		question: "Wie reagierst du, wenn dich jemand ungerecht behandelt?",
		options: [
			{ text: "Vergib und mache weiter, um den Frieden zu bewahren.", weight: [1, 1, 3, 1] },
			{ text: "Konfrontiere die Person direkt, um das Problem zu klären.", weight: [3, 1, 1, 1] },
			{ text: "Plane eine Methode, um zu verhindern, dass sie mir erneut schadet.", weight: [1, 2, 1, 3] },
			{ text: "Reflektiere über die Erfahrung, um daraus zu lernen und zu wachsen.", weight: [1, 3, 1, 1] },
			{ text: "Meide die Person und konzentriere mich auf meinen eigenen Weg.", weight: [0, 1, 2, 1] },
			{ text: "Handle so, als würde es mich nicht stören, hege aber Groll.", weight: [0, 1, 1, 2] },
			{ text: "Hole mir Rat von anderen, wie ich mit der Situation umgehen soll.", weight: [1, 2, 2, 1] },
			{ text: "Versuche, mich auf meine eigene Weise zu rächen.", weight: [1, 1, 0, 3] },
			{ text: "Lasse es los und konzentriere mich auf positive Beziehungen.", weight: [1, 1, 3, 1] },
			{ text: "Stehe für mich selbst ein und stelle sicher, dass sie meine Grenzen verstehen.", weight: [3, 1, 1, 1] }
		]
	},
    {
		question: "Wie gehst du mit Stress um?",
		options: [
			{ text: "Ich atme tief durch und versuche, mich zu beruhigen, bevor ich fortfahre.", weight: [1, 2, 3, 1] },
			{ text: "Ich springe in Aktion und kümmere mich sofort darum.", weight: [3, 1, 1, 1] },
			{ text: "Ich analysiere die Situation, um die logischste Lösung zu finden.", weight: [1, 3, 1, 2] },
			{ text: "Ich lenke den Stress in Entschlossenheit um, um meine Ziele zu erreichen.", weight: [2, 1, 1, 3] },
			{ text: "Ich ignoriere ihn und hoffe, dass sich das Problem von selbst löst.", weight: [0, 1, 2, 0] },
			{ text: "Ich hole mir Rat von anderen, um damit umzugehen.", weight: [1, 2, 3, 1] },
			{ text: "Ich werde frustriert und handle möglicherweise impulsiv.", weight: [3, 1, 1, 1] },
			{ text: "Ich erstelle einen Plan, um solchen Stress in Zukunft zu vermeiden.", weight: [1, 2, 1, 3] },
			{ text: "Ich konzentriere mich auf andere Aufgaben, um mich abzulenken.", weight: [1, 1, 2, 1] },
			{ text: "Ich versuche, eine kreative Lösung für das Problem zu finden.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "Was würdest du tun, wenn du eine Brieftasche auf dem Boden findest?",
		options: [
			{ text: "Gebe sie sofort den Behörden.", weight: [2, 1, 3, 1] },
			{ text: "Versuche selbst, den Besitzer zu finden, um sie zurückzugeben.", weight: [3, 1, 2, 1] },
			{ text: "Nehme das Geld, aber gebe die Brieftasche anonym zurück.", weight: [0, 1, 0, 3] },
			{ text: "Lasse sie dort liegen; vielleicht kommt der Besitzer zurück.", weight: [1, 1, 2, 1] },
			{ text: "Nehme sie und betrachte es als meinen Glückstag.", weight: [0, 0, 0, 3] },
			{ text: "Analysiere den Inhalt, um zu entscheiden, was als Nächstes zu tun ist.", weight: [1, 3, 1, 2] },
			{ text: "Bewahre sie sicher auf, bis ich den Besitzer selbst finde.", weight: [2, 1, 3, 1] },
			{ text: "Frage herum, ob jemand in der Nähe eine Brieftasche verloren hat.", weight: [2, 1, 3, 1] },
			{ text: "Ignoriere sie; es ist nicht mein Problem.", weight: [0, 0, 1, 1] },
			{ text: "Nutze jegliche Identifikation darin, um den Besitzer direkt zu kontaktieren.", weight: [2, 2, 2, 1] }
		]
	},
    {
		question: "Wie verbringst du am liebsten deine Freizeit?",
		options: [
			{ text: "Ein Buch lesen, um mein Wissen zu erweitern.", weight: [1, 3, 1, 1] },
			{ text: "Sich körperlichen Aktivitäten oder Sport widmen.", weight: [3, 1, 1, 1] },
			{ text: "Qualitätszeit mit Freunden und Familie verbringen.", weight: [2, 1, 3, 1] },
			{ text: "An einem persönlichen Projekt arbeiten, um meine Ziele zu erreichen.", weight: [1, 1, 1, 3] },
			{ text: "Neue und aufregende Erfahrungen ausprobieren.", weight: [3, 1, 1, 2] },
			{ text: "Sich entspannen und Zeit zum Auftanken nehmen.", weight: [1, 1, 3, 1] },
			{ text: "Etwas Neues lernen, nur um der Freude willen.", weight: [1, 3, 1, 1] },
			{ text: "Strategisieren und planen für zukünftige Ziele.", weight: [1, 2, 1, 3] },
			{ text: "Freiwilligenarbeit leisten oder anderen in Not helfen.", weight: [2, 1, 3, 1] },
			{ text: "Sich kreativen Hobbys wie Kunst oder Musik widmen.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "Was ist dein größter Fehler?",
		options: [
			{ text: "Ich kann zu vertrauensselig sein und werde manchmal ausgenutzt.", weight: [1, 1, 3, 1] },
			{ text: "Ich handle impulsiv, ohne die Konsequenzen zu bedenken.", weight: [3, 1, 1, 1] },
			{ text: "Ich überanalysiere Dinge, was zu Unentschlossenheit führt.", weight: [1, 3, 1, 1] },
			{ text: "Ich kann manipulativ sein, um meine Ziele zu erreichen.", weight: [1, 1, 1, 3] },
			{ text: "Ich vermeide Konfrontationen, selbst wenn sie notwendig sind.", weight: [1, 1, 3, 1] },
			{ text: "Ich bin übermäßig wettbewerbsorientiert und fokussiere mich zu sehr aufs Gewinnen.", weight: [1, 1, 1, 3] },
			{ text: "Ich wirke manchmal arrogant wegen meines Wissens.", weight: [1, 3, 1, 2] },
			{ text: "Ich erkenne meine eigenen Fehler selten an und glaube meistens, dass ich Recht habe.", weight: [1, 2, 1, 2] },
			{ text: "Ich kann rücksichtslos sein und unnötige Risiken eingehen.", weight: [3, 1, 1, 1] },
			{ text: "Ich habe Schwierigkeiten, mich an meine Verpflichtungen zu halten.", weight: [1, 1, 3, 1] }
		]
	},
	{
		question: "Wie gehst du an Gruppenarbeit heran?",
		options: [
			{ text: "Übernehme die Führung und leite die Gruppe, um unsere Ziele zu erreichen.", weight: [3, 1, 1, 2] },
			{ text: "Übernehme die Führung und delegiere Aufgaben an andere, während ich selbst nur minimal beitrage.", weight: [1, 1, 0, 3] },
			{ text: "Sorge dafür, dass sich jeder in der Gruppe eingeschlossen und wertgeschätzt fühlt.", weight: [1, 1, 3, 1] },
			{ text: "Konzentriere mich darauf, meinen Teil so gut wie möglich zu leisten.", weight: [1, 3, 2, 1] },
			{ text: "Sorge dafür, dass die Gruppe den effizientesten und effektivsten Plan verfolgt.", weight: [1, 3, 1, 2] },
			{ text: "Bleibe im Hintergrund und tue, was mir gesagt wird.", weight: [1, 1, 2, 1] },
			{ text: "Nutze die Gelegenheit, meine Fähigkeiten zu zeigen und hervorzustechen.", weight: [2, 1, 1, 3] },
			{ text: "Hoffe, dass mein mangelnder Einsatz nicht auffällt und andere die Arbeit übernehmen.", weight: [0, 0, 1, 1] },
			{ text: "Arbeite eng mit den Teammitgliedern zusammen, um unsere Stärken zu kombinieren.", weight: [2, 1, 3, 1] },
			{ text: "Biete kreative Ideen und Lösungen an, um das Projekt zu leiten.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "Wie reagierst du, wenn die Dinge nicht nach deinem Plan laufen?",
		options: [
			{ text: "Bleibe ruhig und analysiere die Situation, um eine Lösung zu finden.", weight: [1, 3, 1, 1] },
			{ text: "Werde frustriert, versuche aber beharrlich weiter, bis ich Erfolg habe.", weight: [3, 1, 1, 1] },
			{ text: "Akzeptiere es gelassen und mache mit etwas anderem weiter.", weight: [1, 1, 3, 1] },
			{ text: "Suche jemanden oder etwas, dem ich den Rückschlag zuschieben kann.", weight: [0, 0, 1, 3] },
			{ text: "Entwerfe schnell einen alternativen Plan, um mein Ziel zu erreichen.", weight: [1, 2, 1, 3] },
			{ text: "Tu so, als würde es mich nicht stören, fühle mich aber innerlich unwohl.", weight: [1, 1, 2, 2] },
			{ text: "Glaube, dass wenn die Dinge nicht nach meinem Plan laufen, ich nicht genug versucht habe.", weight: [1, 1, 1, 3] },
			{ text: "Nutze Humor, um die Situation aufzulockern und die Stimmung hochzuhalten.", weight: [2, 1, 2, 1] },
			{ text: "Nehme mir etwas Zeit allein, um nachzudenken und meinen Ansatz anzupassen.", weight: [1, 3, 1, 2] },
			{ text: "Drücke meine Frustration offen aus und könnte möglicherweise ausrasten.", weight: [3, 1, 1, 1] }
		]
	},
    {
		question: "Dein Freund hat in der Schule bei einem Test betrogen. Was ist deine Haltung dazu?",
		options: [
			{ text: "Erzähle sofort dem Lehrer, da es das Richtige ist.", weight: [3, 1, 1, 1] },
			{ text: "Ermutige meinen Freund, sich zu gestehen und die Konsequenzen zu tragen.", weight: [2, 1, 3, 1] },
			{ text: "Biete meinem Freund an, beim Lernen zu helfen, damit er beim nächsten Mal nicht betrügen muss.", weight: [1, 2, 3, 1] },
			{ text: "Bewahre sein Geheimnis und helfe ihm, nicht erwischt zu werden.", weight: [1, 1, 1, 3] },
			{ text: "Beteilige mich beim nächsten Mal am Betrügen, um meine eigenen Noten zu verbessern.", weight: [0, 1, 0, 3] },
			{ text: "Kümmere mich um meine eigenen Angelegenheiten; es ist nicht mein Platz, mich einzumischen.", weight: [1, 1, 1, 2] },
			{ text: "Konfrontiere meinen Freund und drücke aus, wie es unser Vertrauen beeinflusst.", weight: [3, 1, 2, 1] },
			{ text: "Warn meinen Freund vor den Risiken, helfe ihm aber diesmal, es zu vertuschen.", weight: [1, 1, 1, 3] },
			{ text: "Betrachte, dass jeder Fehler macht, und lasse es dieses Mal durchgehen.", weight: [1, 1, 3, 1] },
			{ text: "Diskutiere mit meinem Freund, warum Betrügen nicht vorteilhaft ist, und ermutige zu besseren Entscheidungen.", weight: [1, 3, 2, 1] }
		]
	},
    {
		question: "Was ist deine Meinung zum Einsatz des unverzeihlichen Fluchs Cruciatus an Tieren im Unterricht zum Lernen?",
		options: [
			{ text: "Absolut inakzeptabel; Tieren Schmerzen zuzufügen ist falsch.", weight: [1, 1, 3, 0] },
			{ text: "Ich würde protestieren und mich weigern teilzunehmen, selbst wenn es erlaubt ist.", weight: [3, 1, 1, 1] },
			{ text: "Ich halte es für akzeptabel, wenn es für unsere Bildung notwendig ist.", weight: [1, 2, 1, 3] },
			{ text: "Ich würde mich unwohl fühlen, aber teilnehmen, um Verständnis zu gewinnen.", weight: [1, 2, 1, 2] },
			{ text: "Ich würde alternative Methoden vorschlagen, die Tieren nicht schaden.", weight: [2, 3, 2, 1] },
			{ text: "Ich würde ohne Zögern teilnehmen; das Beherrschen von Zaubern ist wichtig.", weight: [1, 2, 0, 3] },
			{ text: "Ich würde mich weigern teilzunehmen, aber die Entscheidungen anderer respektieren.", weight: [1, 2, 2, 1] },
			{ text: "Ich würde mich hin- und hergerissen fühlen, aber darauf vertrauen, dass der Professor am besten weiß.", weight: [1, 2, 1, 2] },
			{ text: "Ich würde Klassenkameraden sammeln, um gemeinsam alternative Unterrichtsmethoden zu fordern.", weight: [3, 1, 2, 1] },
			{ text: "Ich würde teilnehmen, mich aber unwohl fühlen und mich auf den Bildungswert konzentrieren.", weight: [1, 2, 1, 2] }
		]
	},
    {
		question: "Du musst während des Unterrichts die Toilette aufsuchen. Wie entschuldigst du dich?",
		options: [
			{ text: "Ich hebe die Hand und bitte höflich um Erlaubnis, den Raum verlassen zu dürfen.", weight: [1, 1, 3, 1] },
			{ text: "Ich warte auf eine natürliche Pause in der Vorlesung und bitte dann um Erlaubnis zu gehen.", weight: [1, 3, 1, 1] },
			{ text: "Ich stehe einfach auf und gehe, ohne den Unterricht zu unterbrechen.", weight: [2, 1, 1, 2] },
			{ text: "Ich warte, bis der Lehrer abgelenkt ist, und schlüpfe dann leise hinaus.", weight: [1, 1, 1, 3] },
			{ text: "Ich halte durch, bis der Unterricht endet; ich möchte keine Störung verursachen.", weight: [1, 1, 3, 1] },
			{ text: "Ich hebe die Hand und sage direkt, dass ich jetzt gehen muss.", weight: [3, 1, 1, 1] },
			{ text: "Ich denke mir eine kreative Ausrede aus, um den Klassenraum zu verlassen.", weight: [1, 3, 1, 2] },
			{ text: "Ich warte, bis die Gruppenarbeit beginnt, und gehe dann unbemerkt.", weight: [1, 1, 2, 3] },
			{ text: "Ich bitte einen Freund, eine Ablenkung zu schaffen, damit ich hinaus schleichen kann.", weight: [1, 1, 1, 3] },
			{ text: "Ich entschuldige mich für die Unterbrechung und bitte höflich um Erlaubnis zu gehen.", weight: [1, 1, 3, 1] }
		]
	},
    {
		question: "Während deines Studiums in Hogwarts findest du ein seltenes Trankrezept, das deine magischen Fähigkeiten erheblich verbessern kann und dir einen Vorteil in deinen Kursen und deiner zukünftigen Karriere verschafft. Das Brauen und Verwenden könnte jedoch unbeabsichtigt die magische Energie der nahegelegenen Schüler entziehen und sie vorübergehend schwächen. Was tust du?",
		options: [
			{ text: "Braue und benutze den Trank sofort; mein Fortschritt ist entscheidend.", weight: [1, 1, 1, 3] },
			{ text: "Untersuche den Trank weiter, um die Risiken zu verstehen, bevor ich entscheide.", weight: [1, 3, 1, 2] },
			{ text: "Entscheide mich, ihn nicht zu brauen; ich werde das Wohl anderer nicht für meinen Vorteil riskieren.", weight: [1, 1, 3, 1] },
			{ text: "Verwende den Trank nur, wenn es absolut notwendig für etwas Bedeutendes ist.", weight: [3, 1, 1, 1] },
			{ text: "Hole mir Rat von einem vertrauenswürdigen Professor bezüglich des Tranks.", weight: [1, 2, 2, 1] },
			{ text: "Modifiziere den Trank, um das Risiko vor der Verwendung zu beseitigen.", weight: [1, 3, 1, 2] },
			{ text: "Teile das Trankrezept mit anderen, damit jeder gleichermaßen profitiert.", weight: [2, 1, 3, 1] },
			{ text: "Halte das Rezept geheim, entscheide mich aber, es nicht zu benutzen.", weight: [1, 1, 2, 2] },
			{ text: "Benutze den Trank diskret und stelle sicher, dass niemand davon erfährt.", weight: [1, 1, 1, 3] },
			{ text: "Entsorge das Trankrezept, um potenzielle Schäden zu verhindern.", weight: [2, 1, 3, 1] }
		]
	},
    {
		question: "Aufgrund eines plötzlichen Verbots des Zaubereiministeriums sind deine Lieblingstränke, Schokoladenfrösche, im Hogwarts Express nicht mehr erlaubt. Du hast sie jedes Jahr genossen, und es gibt keinen klaren Grund für das Verbot. Wie gehst du mit dieser Situation um?",
		options: [
			{ text: "Schleiche einige Schokoladenfrösche trotz des Verbots in den Zug.", weight: [2, 2, 1, 3] },
			{ text: "Wende dich höflich an das Zugpersonal, um nach dem Grund für das Verbot zu fragen.", weight: [1, 2, 3, 1] },
			{ text: "Akzeptiere das Verbot und verzichte auf deine Lieblingstränke.", weight: [1, 1, 3, 1] },
			{ text: "Finde einen alternativen Snack, der im Zug erlaubt ist.", weight: [1, 3, 2, 1] },
			{ text: "Beschwere dich lautstark beim Personal und fordere eine Erklärung.", weight: [3, 1, 1, 1] },
			{ text: "Organisiere eine Petition unter den Schülern, um das Verbot aufzuheben.", weight: [3, 2, 2, 1] },
			{ text: "Verwende Magie, um die Schokoladenfrösche als einen anderen erlaubten Snack zu tarnen.", weight: [2, 3, 1, 3] },
			{ text: "Untersuche den Grund für das Verbot, indem du Ministeriumsdekrete recherchierst.", weight: [1, 3, 1, 2] },
			{ text: "Teile deine verbleibenden Schokoladenfrösche mit Freunden, bevor du einsteigst.", weight: [3, 1, 3, 1] },
			{ text: "Akzeptiere das Verbot, plane aber, dem Ministerium eine logische Argumentation vorzulegen, warum es aufgehoben werden sollte.", weight: [2, 3, 1, 1] }
		]
	}
];

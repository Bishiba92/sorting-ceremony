let score = [];
        let totalWeight = [];
        let currentPlayerAnswers = [];
        let numPlayers = 1;
        let currentQuestionIndex = 0;
        let backgroundMusic;
        let isMuted = false;
        let selectedLanguage = 'en';
        const houseColor = {
            'Gryffindor': 'red',
            'Ravenclaw': 'blue',
            'Hufflepuff': 'yellow',
            'Slytherin': 'green'
        };
        
        function loadQuestionsFile(lang) {
            const script = document.createElement('script');
            script.src = `questions-${lang}.js`;
            script.onload = () => {
				displayPlayerSelection();
                scrollToTop();
            };
            document.head.appendChild(script);
        }

        function changeLanguage(lang) {
            selectedLanguage = lang;
            loadQuestionsFile(lang);
        }

        function startQuiz(playerCount) {
            numPlayers = playerCount;
            score = Array.from({ length: numPlayers }, () => ({ Gryffindor: 0, Ravenclaw: 0, Hufflepuff: 0, Slytherin: 0 }));
            totalWeight = Array.from({ length: numPlayers }, () => 0);
            currentPlayerAnswers = Array.from({ length: numPlayers }, () => -1);
            currentQuestionIndex = 0;
            displayQuestion();
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function displayPlayerSelection() {
            const container = document.getElementById('quiz-container');
            container.innerHTML = `
                <div id="player-selection">
                    <h2>${getTranslation('Select the number of players')}:</h2>
                    <button onclick="playButtonSound(); startQuiz(1)">1 ${getTranslation('Player')}</button>
                    <button onclick="playButtonSound(); startQuiz(2)">2 ${getTranslation('Players')}</button>
                    <button onclick="playButtonSound(); startQuiz(3)">3 ${getTranslation('Players')}</button>
                    <button onclick="playButtonSound(); startQuiz(4)">4 ${getTranslation('Players')}</button>
                </div>
            `;
            scrollToTop();
        }

        function displayQuestion() {
            const container = document.getElementById('quiz-container');
            if (!questions || questions.length === 0) {
                container.innerHTML = '<h2>Loading questions...</h2>';
                return;
            }

            const isFinalQuestion = currentQuestionIndex >= questions.length - 1;
			const isFirstQuestion = currentQuestionIndex == 0;
            const nextButtonText = isFinalQuestion ? (numPlayers > 1 ? getTranslation('Show Results') : getTranslation('Show Result')) : getTranslation('Next Question');
			const previousButtonHTML = isFirstQuestion || showingResults ? "" : `<button id="previous-question" onclick="playButtonSound(); previousQuestion()">${getTranslation("Previous Question")}</button>`;
			
            container.innerHTML = `
                <div id="question-header">
                    <div id="question" class="question">${questions[currentQuestionIndex].question}</div>
                </div>
                <div class="player-columns">
                    ${Array.from({ length: numPlayers }).map((_, playerIndex) => `
                        <div class="player-column" id="player-${playerIndex}">
                            <h3>${getTranslation('Player')} ${playerIndex + 1}</h3>
                            <div class="options">
                                ${questions[currentQuestionIndex].options.map((option, i) => {
                                    const isSelected = currentPlayerAnswers[playerIndex] === i;
                                    return `<button class="option ${isSelected ? 'selected' : ''}" onclick="playButtonSound(); handleOptionClick(${playerIndex}, ${i})">
                                                ${option.text}
                                                ${isSelected ? '<img src=\"https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-green-tick-checkbox-vector-illustration-isolated-on-white-background-png-image_5000203.png\" class=\"tick-icon\" />' : ''}
                                            </button>`;
                                }).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
				${previousButtonHTML}
                <button id="next-question" onclick="playButtonSound(); nextQuestion()">${nextButtonText}</button>
                <div id="chart-container">
                    <canvas id="houseChart"></canvas>
                </div>
            `;
            scrollToTop();
        }

        function handleOptionClick(playerIndex, optionIndex) {
            currentPlayerAnswers[playerIndex] = optionIndex;
            displayQuestion();
        }

        function nextQuestion() {
            if (currentPlayerAnswers.includes(-1)) {
                alert(getTranslation("All players must select an answer before proceeding."));
                return;
            }

            if (currentQuestionIndex >= questions.length - 1) {
                playResultSoundAndDisplay();
                return;
            }

            currentPlayerAnswers.forEach((selectedOptionIndex, playerIndex) => {
                const selectedOption = questions[currentQuestionIndex].options[selectedOptionIndex];
                score[playerIndex][selectedOption.house] += selectedOption.weight;
                totalWeight[playerIndex] += selectedOption.weight;
            });

            currentPlayerAnswers = Array.from({ length: numPlayers }, () => -1);
            currentQuestionIndex++;
            displayQuestion();
        }
		
		function previousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                currentPlayerAnswers = Array.from({ length: numPlayers }, (_, playerIndex) => {
                    return questions[currentQuestionIndex].options.findIndex(option => {
                        return score[playerIndex][option.house] >= option.weight;
                    });
                });
                displayQuestion();
            }
        }
      
		var showingResults = false;
        function playResultSoundAndDisplay() {
			showingResults = true;
			document.getElementById("previous-question").remove();
            const resultSound = new Audio('Reveal.ogg');
            resultSound.play();
			const question = document.getElementById('question');
            const container = document.getElementById('quiz-container');
            question.innerHTML = `<h2 class="final-result-header">${getTranslation('The hat has decided where you belong')}</h2>`;
            
            Array.from({ length: numPlayers }).forEach((_, playerIndex) => {
				const playerContainer = document.getElementById('player-'+playerIndex);
                const house = Object.keys(score[playerIndex]).reduce((a, b) => score[playerIndex][a] > score[playerIndex][b] ? a : b);
                const houseLogo = house + '.png';
                const playerResultHTML = `
                    <div class="player-result" id="player-result-${playerIndex}">
                        <h2>${getTranslation('You are placed in')} <span style="color: ${houseColor[house]};">${house}!</span></h2>
                        <img src="${houseLogo}" alt="${house} logo" class="house-logo">
                    </div>
                `;
                playerContainer.innerHTML = playerResultHTML;
                displayScoreBars(playerIndex);
            });
			
			const nextQuestionButton = document.getElementById('next-question');
			nextQuestionButton.onclick = () => location.reload();
			nextQuestionButton.textContent = "Ask for another chance";
        }

        function displayScoreBars(playerIndex) {
            const playerColumn = document.getElementById(`player-result-${playerIndex}`);
            const scoreData = score[playerIndex];
            const houses = Object.keys(scoreData).sort((a, b) => scoreData[b] - scoreData[a]);
            playerColumn.innerHTML += `
                <div class="bar-container">
                    ${houses.map(house => {
                        const percentage = totalWeight[playerIndex] > 0 ? (scoreData[house] / totalWeight[playerIndex] * 100).toFixed(0) : 0;
                        return `
                            <div class="bar ${house.toLowerCase()}-bar">
                                <div class="bar-inner" style="width: ${percentage}%"></div>
                                <div class="bar-text">${percentage}%</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
        }

        function playButtonSound() {
            const buttonSound = new Audio('Click.ogg');
            buttonSound.play();
        }

		// Function to play random background music
		function playRandomBackgroundMusic() {
			const tracks = ['BGM0.ogg', 'BGM1.ogg', 'BGM2.ogg'];
			const trackNames = ['Ways of the Wizard', 'The Magic Tree', 'Spirits of the Moor'];
			const trackLinks = [
				'https://pixabay.com/music/fantasy-dreamy-childrens-ways-of-the-wizard-197105/',
				'https://pixabay.com/music/fantasy-dreamy-childrens-the-magic-tree-150606/',
				'https://pixabay.com/music/scary-childrens-tunes-spirits-of-the-moor-180852/'
			];

			const trackIndex = Math.floor(Math.random() * tracks.length);
			const randomTrack = tracks[trackIndex];
			const trackName = trackNames[trackIndex];
			const trackLink = trackLinks[trackIndex];

			// Update the music name in the DOM with a clickable link
			const musicNameElement = document.getElementById("music-name");
			musicNameElement.innerHTML = `<a href="${trackLink}" target="_blank" style="text-decoration: none; color: inherit;">${trackName}</a>`;

			// Create an audio object and play the music
			backgroundMusic = new Audio(randomTrack);
			backgroundMusic.loop = true;
			backgroundMusic.volume = 0.3;
			backgroundMusic.play().then(() => {
				console.log('Music is playing');
			}).catch((error) => {
				console.error('Error playing music:', error);
			});
		}


        function toggleMute() {
            if (isMuted) {
                backgroundMusic.muted = false;
                document.getElementById('audio-toggle').src = 'AudioV.png';
            } else {
                backgroundMusic.muted = true;
                document.getElementById('audio-toggle').src = 'AudioX.png';
            }
            isMuted = !isMuted;
        }

        function getTranslation(text) {
			const translations = {
				en: {
					'Select the number of players': 'Select the number of players',
					'Player': 'Player',
					'Players': 'Players',
					'Show Results': 'Show Results',
					'Show Result': 'Show Result',
					'Next Question': 'Next Question',
					'Previous Question': 'Previous Question',
					'Redo': 'Redo',
					'The hat has decided where you belong': 'The hat has decided where you belong',
					'You are placed in': 'You are placed in',
					'All players must select an answer before proceeding.': 'All players must select an answer before proceeding.'
				},
				es: {
					'Select the number of players': 'Seleccione el número de jugadores',
					'Player': 'Jugador',
					'Players': 'Jugadores',
					'Show Results': 'Mostrar resultados',
					'Show Result': 'Mostrar resultado',
					'Next Question': 'Próxima pregunta',
					'Previous Question': 'Pregunta anterior',
					'Redo': 'Rehacer',
					'The hat has decided where you belong': 'El sombrero ha decidido dónde perteneces',
					'You are placed in': 'Has sido asignado a',
					'All players must select an answer before proceeding.': 'Todos los jugadores deben seleccionar una respuesta antes de continuar.'
				},
				zh: {
					'Select the number of players': '选择玩家数量',
					'Player': '玩家',
					'Players': '玩家',
					'Show Results': '显示结果',
					'Show Result': '显示结果',
					'Next Question': '下一题',
					'Previous Question': '上一题',
					'Redo': '重做',
					'The hat has decided where you belong': '帽子已经决定了你属于哪里',
					'You are placed in': '你被分配到',
					'All players must select an answer before proceeding.': '所有玩家必须选择一个答案才能继续。'
				},
				jp: {
					'Select the number of players': 'プレイヤー数を選択',
					'Player': 'プレイヤー',
					'Players': 'プレイヤー',
					'Show Results': '結果を表示',
					'Show Result': '結果を表示',
					'Next Question': '次の質問',
					'Previous Question': '前の質問',
					'Redo': '再試行',
					'The hat has decided where you belong': '帽子があなたの所属を決定しました',
					'You are placed in': 'あなたは配置されました',
					'All players must select an answer before proceeding.': 'すべてのプレイヤーは答えを選択する必要があります。'
				},
				fr: {
					'Select the number of players': 'Sélectionnez le nombre de joueurs',
					'Player': 'Joueur',
					'Players': 'Joueurs',
					'Show Results': 'Afficher les résultats',
					'Show Result': 'Afficher le résultat',
					'Next Question': 'Question suivante',
					'Previous Question': 'Question précédente',
					'Redo': 'Recommencer',
					'The hat has decided where you belong': 'Le chapeau a décidé où vous appartenez',
					'You are placed in': 'Vous êtes placé dans',
					'All players must select an answer before proceeding.': 'Tous les joueurs doivent sélectionner une réponse avant de continuer.'
				},
				de: {
					'Select the number of players': 'Wählen Sie die Anzahl der Spieler',
					'Player': 'Spieler',
					'Players': 'Spieler',
					'Show Results': 'Ergebnisse anzeigen',
					'Show Result': 'Ergebnis anzeigen',
					'Next Question': 'Nächste Frage',
					'Previous Question': 'Vorherige Frage',
					'Redo': 'Wiederholen',
					'The hat has decided where you belong': 'Der Hut hat entschieden, wo du hingehörst',
					'You are placed in': 'Du bist platziert in',
					'All players must select an answer before proceeding.': 'Alle Spieler müssen eine Antwort auswählen, bevor sie fortfahren.'
				},
				po: {
					'Select the number of players': 'Selecione o número de jogadores',
					'Player': 'Jogador',
					'Players': 'Jogadores',
					'Show Results': 'Mostrar resultados',
					'Show Result': 'Mostrar resultado',
					'Next Question': 'Próxima pergunta',
					'Previous Question': 'Pergunta anterior',
					'Redo': 'Refazer',
					'The hat has decided where you belong': 'O chapéu decidiu onde você pertence',
					'You are placed in': 'Você foi colocado em',
					'All players must select an answer before proceeding.': 'Todos os jogadores devem selecionar uma resposta antes de continuar.'
				}
			};
			return translations[selectedLanguage][text] || text;
		}

        window.onload = () => {
			displayPlayerSelection();

			// Language selector change event
			const languageSelector = document.getElementById('language-selector');
			const currentLanguage = languageSelector.selectedOptions[0].value;
			if (currentLanguage != selectedLanguage) {
				changeLanguage(currentLanguage);
			}
		};
		
		document.addEventListener('DOMContentLoaded', () => {
			// Add event listener to play music on first user interaction (click or key press)
			const handleUserInteraction = () => {
				playRandomBackgroundMusic();

				// Remove event listeners after first interaction
				document.removeEventListener('click', handleUserInteraction);
				document.removeEventListener('keydown', handleUserInteraction);
			};

			// Add event listeners for click and keydown events
			document.addEventListener('click', handleUserInteraction);
			document.addEventListener('keydown', handleUserInteraction);
		});
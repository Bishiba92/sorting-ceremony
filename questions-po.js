var questions = [
    {
        question: "Como você reage quando enfrenta um desafio?",
        options: [
            { text: "Enfrentá-lo de frente!", house: "Grifinória", weight: 3 },
            { text: "Planejar uma abordagem estratégica.", house: "Corvinal", weight: 3 },
            { text: "Trabalhar duro até superá-lo.", house: "Lufa-Lufa", weight: 3 },
            { text: "Encontrar uma maneira de transformar o desafio em uma vantagem.", house: "Sonserina", weight: 3 },
            { text: "Evitá-lo e torcer para que ele se resolva sozinho.", house: "Lufa-Lufa", weight: 3 },
            { text: "Seguir a liderança de outra pessoa para lidar com isso.", house: "Sonserina", weight: 3 },
        ]
    },
    {
        question: "O que você mais valoriza em seus amigos?",
        options: [
            { text: "Lealdade", house: "Lufa-Lufa", weight: 3 },
            { text: "Coragem", house: "Grifinória", weight: 3 },
            { text: "Inteligência", house: "Corvinal", weight: 3 },
            { text: "Ambição", house: "Sonserina", weight: 3 },
            { text: "Confiabilidade", house: "Lufa-Lufa", weight: 3 },
            { text: "Credulidade", house: "Sonserina", weight: 3 },
            { text: "Bom senso de humor", house: "Corvinal", weight: 3 },
        ]
    },
    {
        question: "Qual é a sua abordagem para aprender?",
        options: [
            { text: "Conhecimento é poder.", house: "Corvinal", weight: 3 },
            { text: "Aprender fazendo.", house: "Grifinória", weight: 3 },
            { text: "A prática leva à perfeição.", house: "Lufa-Lufa", weight: 3 },
            { text: "Aprender o que me levará adiante.", house: "Sonserina", weight: 3 },
            { text: "Eu aprendo apenas o que preciso para me virar.", house: "Lufa-Lufa", weight: 3 },
            { text: "Prefiro aprender com os erros dos outros.", house: "Sonserina", weight: 3 }
        ]
    },
    {
        question: "Se alguém te machuca, qual é a sua resposta?",
        options: [
            { text: "Perdoar e seguir em frente.", house: "Lufa-Lufa", weight: 3 },
            { text: "Encontrar uma maneira de garantir que isso não aconteça novamente.", house: "Sonserina", weight: 3 },
            { text: "Confrontá-los diretamente.", house: "Grifinória", weight: 3 },
            { text: "Usar isso como uma experiência de aprendizado.", house: "Corvinal", weight: 3 },
            { text: "Evitar essa pessoa e seguir com minha vida.", house: "Lufa-Lufa", weight: 3 },
            { text: "Fingir que não me incomodou, mas ser passivo-agressivo sobre isso.", house: "Sonserina", weight: 3 }
        ]
    },
    {
        question: "Como você lida com o estresse?",
        options: [
            { text: "Tiro um momento para me recompor.", house: "Lufa-Lufa", weight: 3 },
            { text: "Enfrento o problema imediatamente.", house: "Grifinória", weight: 3 },
            { text: "Penso logicamente para resolvê-lo.", house: "Corvinal", weight: 3 },
            { text: "Transformo isso em motivação para ter sucesso.", house: "Sonserina", weight: 3 },
            { text: "Procrastino e espero que desapareça.", house: "Lufa-Lufa", weight: 3 },
            { text: "Procuro alguém que possa resolver para mim.", house: "Lufa-Lufa", weight: 3 }
        ]
    },
    {
        question: "O que você faria se encontrasse uma carteira no chão?",
        options: [
            { text: "Entregá-la às autoridades imediatamente.", house: "Lufa-Lufa", weight: 3 },
            { text: "Verificá-la para tentar encontrar o dono por conta própria.", house: "Grifinória", weight: 3 },
            { text: "Pegar o dinheiro e deixar o resto.", house: "Sonserina", weight: 3 },
            { text: "Deixá-la onde está, talvez o dono volte.", house: "Lufa-Lufa", weight: 3 },
            { text: "Analisar a situação para determinar o melhor curso de ação.", house: "Corvinal", weight: 3 },
            { text: "Guardá-la até que alguém pergunte por ela.", house: "Sonserina", weight: 3 }
        ]
    },
    {
        question: "Como você prefere passar seu tempo livre?",
        options: [
            { text: "Lendo um livro.", house: "Corvinal", weight: 3 },
            { text: "Aprendendo algo novo.", house: "Corvinal", weight: 3 },
            { text: "Jogando um jogo.", house: "Grifinória", weight: 3 },
            { text: "Saindo com amigos.", house: "Lufa-Lufa", weight: 3 },
            { text: "Experimentando uma nova atividade emocionante.", house: "Grifinória", weight: 3 },
            { text: "Trabalhando em um projeto pessoal.", house: "Sonserina", weight: 3 },
            { text: "Fazendo absolutamente nada e relaxando.", house: "Lufa-Lufa", weight: 3 },
            { text: "Usando meu tempo para algo benéfico.", house: "Sonserina", weight: 3 }
        ]
    },
    {
        question: "Qual é o seu maior defeito?",
        options: [
            { text: "Às vezes, sou muito confiante com os outros.", house: "Lufa-Lufa", weight: 3 },
            { text: "Posso ser impulsivo e agir sem pensar.", house: "Grifinória", weight: 3 },
            { text: "Às vezes, sou muito analítico e indeciso.", house: "Corvinal", weight: 3 },
            { text: "Posso ser manipulador para conseguir o que quero.", house: "Sonserina", weight: 3 },
            { text: "Tendo a evitar confrontos.", house: "Lufa-Lufa", weight: 3 },
            { text: "Posso ser muito focado em meus próprios objetivos.", house: "Sonserina", weight: 3 },
            { text: "Gosto de ridicularizar os outros.", house: "Sonserina", weight: 3 },
            { text: "Não consigo pensar em nenhum defeito meu.", house: "Sonserina", weight: 3 }
        ]
    },
    {
        question: "Como você aborda o trabalho em grupo?",
        options: [
            { text: "Assumir o comando e liderar o grupo.", house: "Grifinória", weight: 3 },
            { text: "Assumir o comando e delegar a maior parte do trabalho a outra pessoa.", house: "Sonserina", weight: 3 },
            { text: "Certificar-me de que todos se sintam incluídos e valorizados.", house: "Lufa-Lufa", weight: 3 },
            { text: "Focar em fazer minha parte da melhor maneira possível.", house: "Corvinal", weight: 3 },
            { text: "Certificar-me de que o grupo siga o plano mais eficiente.", house: "Sonserina", weight: 3 },
            { text: "Ficar em segundo plano e seguir as instruções.", house: "Lufa-Lufa", weight: 3 },
            { text: "Aproveitar a oportunidade para mostrar minhas capacidades.", house: "Sonserina", weight: 3 },
            { text: "Esperar que minha falta de esforço não seja notada.", house: "Lufa-Lufa", weight: 3 }
        ]
    },
    {
        question: "Como você reage quando as coisas não saem do seu jeito?",
        options: [
            { text: "Manter a calma e tentar encontrar uma solução.", house: "Corvinal", weight: 3 },
            { text: "Ficar frustrado, mas tentar novamente.", house: "Grifinória", weight: 3 },
            { text: "Aceitar e seguir em frente.", house: "Lufa-Lufa", weight: 3 },
            { text: "Encontrar alguém para culpar.", house: "Sonserina", weight: 3 },
            { text: "Procurar um caminho alternativo para o sucesso.", house: "Sonserina", weight: 3 },
            { text: "Fingir que não me incomoda.", house: "Lufa-Lufa", weight: 3 },
            { text: "Se as coisas não saem do meu jeito, é porque eu não tentei o suficiente.", house: "Sonserina", weight: 3 }
        ]
    },
    {
        question: "Seu amigo trapaceou em uma prova na escola. Qual é sua postura em relação a isso?",
        options: [
            { text: "Contar ao professor imediatamente.", house: "Grifinória", weight: 3 },
            { text: "Incentivar seu amigo a confessar.", house: "Lufa-Lufa", weight: 3 },
            { text: "Ajudar seu amigo a não ser pego.", house: "Sonserina", weight: 3 },
            { text: "Ficar de fora, não é da minha conta.", house: "Corvinal", weight: 3 }
        ]
    },
    {
        question: "Qual é a sua opinião sobre usar a Maldição Cruciatus em animais na sala de aula para aprendizado?",
        options: [
            { text: "Absolutamente inaceitável em qualquer circunstância.", house: "Lufa-Lufa", weight: 3 },
            { text: "Somente se não houver outra maneira de aprender.", house: "Corvinal", weight: 3 },
            { text: "Se servir a um propósito maior, tudo bem.", house: "Sonserina", weight: 3 },
            { text: "Eu desafiaria o professor e me recusaria a fazer isso.", house: "Grifinória", weight: 3 }
        ]
    },
    {
        question: "Você precisa ir ao banheiro durante a aula, como você se desculpa?",
        options: [
            { text: "Levantar a mão e pedir educadamente.", house: "Lufa-Lufa", weight: 3 },
            { text: "Apenas levantar e sair sem pedir.", house: "Grifinória", weight: 3 },
            { text: "Esperar até que o professor esteja distraído e sair discretamente.", house: "Sonserina", weight: 3 },
            { text: "Pedir durante uma pausa lógica na aula.", house: "Corvinal", weight: 3 }
        ]
    },
    {
        question: "Surge uma situação em que você pode avançar, mas, ao fazer isso, algumas pessoas podem se machucar. O que você faz?",
        options: [
            { text: "Aproveitar a oportunidade sem pensar duas vezes.", house: "Sonserina", weight: 3 },
            { text: "Pesar os benefícios contra as consequências.", house: "Corvinal", weight: 3 },
            { text: "Recusar se isso significa machucar os outros.", house: "Lufa-Lufa", weight: 3 },
            { text: "Só seguir em frente se significar algo importante para mim.", house: "Grifinória", weight: 3 }
        ]
    },
    {
        question: "Há uma proibição do seu alimento favorito no Expresso de Hogwarts, e você come esse alimento todos os anos até agora. Como você lida com isso?",
        options: [
            { text: "Contrabandeá-lo, apesar da proibição.", house: "Sonserina", weight: 3 },
            { text: "Reclamar com a equipe e exigir uma explicação.", house: "Grifinória", weight: 3 },
            { text: "Encontrar um alimento alternativo que seja permitido.", house: "Corvinal", weight: 3 },
            { text: "Aceitar e ficar sem meu alimento favorito.", house: "Lufa-Lufa", weight: 3 }
        ]
    }
];
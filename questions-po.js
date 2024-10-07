```javascript
var questions = [
    {    
        question: "Diante de um desafio, qual é o seu primeiro instinto?",
        options: [
            { text: "Enfrentá-lo de frente, independentemente das consequências.", weight: [3, 1, 1, 1] },
            { text: "Planejar cuidadosamente uma estratégia antes de agir.", weight: [1, 3, 1, 2] },
            { text: "Trabalhar incansavelmente até superar o desafio, mesmo que isso me exaure.", weight: [2, 1, 3, 1] },
            { text: "Procurar maneiras de transformar o desafio em uma oportunidade de ganho pessoal.", weight: [1, 1, 1, 3] },
            { text: "Procrastinar e esperar que o problema se resolva sozinho com o tempo.", weight: [0, 1, 2, 0] },
            { text: "Seguir a liderança de outra pessoa, confiando que ela sabe o melhor a fazer.", weight: [1, 2, 3, 1] },
            { text: "Sentir-me sobrecarregado e evitar lidar com o desafio completamente.", weight: [0, 0, 2, 0] },
            { text: "Tentar encontrar uma solução criativa ou não convencional para o problema.", weight: [1, 3, 1, 2] },
            { text: "Delegar o problema a outra pessoa que possa lidar melhor com ele.", weight: [0, 1, 1, 3] },
            { text: "Usar humor ou distração para desviar a seriedade do desafio.", weight: [2, 1, 2, 1] }
        ]
    },
    {
        question: "O que é importante para você em seus amigos?",
        options: [
            { text: "Eles devem ser fáceis de liderar.", weight: [1, 1, 1, 3] },
            { text: "Eles me desafiam intelectualmente.", weight: [1, 3, 1, 2] },
            { text: "Eles me fazem me esforçar para continuar no topo.", weight: [1, 2, 1, 3] },
            { text: "Eles me aceitam como eu sou.", weight: [1, 1, 3, 1] },
            { text: "Eles compartilham meu senso de aventura.", weight: [3, 1, 1, 1] },
            { text: "Eles têm conexões que podem me ajudar a ter sucesso.", weight: [1, 1, 1, 3] },
            { text: "Eles são leais e solidários.", weight: [2, 1, 3, 1] },
            { text: "Eles me ajudam a me sentir importante e valorizado.", weight: [1, 1, 2, 2] },
            { text: "Eles trazem novas ideias e perspectivas.", weight: [1, 3, 1, 2] },
            { text: "Eles são divertidos e espontâneos.", weight: [3, 1, 2, 1] }
        ]
    },
    {
        question: "Qual dessas descreve sua abordagem para o aprendizado?",
        options: [
            { text: "Busco conhecimento por si só; entender o mundo é meu objetivo.", weight: [1, 3, 1, 1] },
            { text: "Aprendo melhor mergulhando e experimentando as coisas em primeira mão.", weight: [3, 1, 1, 1] },
            { text: "A prática consistente é fundamental; trabalho diligentemente para dominar novas habilidades.", weight: [1, 1, 3, 1] },
            { text: "Foco em aprender coisas que me ajudarão a alcançar minhas ambições.", weight: [1, 1, 1, 3] },
            { text: "Aprendo apenas o suficiente para me virar; não preciso exagerar.", weight: [0, 1, 2, 1] },
            { text: "Prefiro aprender com as experiências dos outros para evitar cometer erros por mim mesmo.", weight: [1, 2, 1, 2] },
            { text: "Absorvo informações rapidamente e conto com minha inteligência para lidar com as situações.", weight: [1, 3, 1, 2] },
            { text: "Procrastino frequentemente, mas consigo aprender o que preciso na última hora.", weight: [1, 1, 2, 1] },
            { text: "Gosto de colaborar com outras pessoas para aprender coisas novas.", weight: [2, 1, 3, 1] },
            { text: "Busco desafios que testem minhas habilidades e aprendo superando-os.", weight: [3, 1, 1, 2] }
        ]
    },
    {
        question: "Se alguém te prejudica, qual é a sua resposta?",
        options: [
            { text: "Perdoar e seguir em frente, focando em manter a paz.", weight: [1, 1, 3, 1] },
            { text: "Confrontá-los diretamente para resolver a questão.", weight: [3, 1, 1, 1] },
            { text: "Planejar uma maneira de impedi-los de me prejudicar novamente.", weight: [1, 2, 1, 3] },
            { text: "Refletir sobre a experiência para aprender e crescer com ela.", weight: [1, 3, 1, 1] },
            { text: "Evitar a pessoa e focar no meu próprio caminho.", weight: [0, 1, 2, 1] },
            { text: "Agir como se isso não me incomodasse, mas guardar ressentimento.", weight: [0, 1, 1, 2] },
            { text: "Buscar conselhos de outras pessoas sobre como lidar com a situação.", weight: [1, 2, 2, 1] },
            { text: "Tentar me vingar à minha maneira.", weight: [1, 1, 0, 3] },
            { text: "Deixar pra lá e focar em relacionamentos positivos.", weight: [1, 1, 3, 1] },
            { text: "Defender a mim mesmo e garantir que eles entendam meus limites.", weight: [3, 1, 1, 1] }
        ]
    },
    {
        question: "Como você lida com o estresse?",
        options: [
            { text: "Dou uma respiração profunda e tento me acalmar antes de prosseguir.", weight: [1, 2, 3, 1] },
            { text: "Entro em ação e lido com ele imediatamente.", weight: [3, 1, 1, 1] },
            { text: "Analiso a situação para encontrar a solução mais lógica.", weight: [1, 3, 1, 2] },
            { text: "Canalizo o estresse em determinação para alcançar meus objetivos.", weight: [2, 1, 1, 3] },
            { text: "Ignoro e espero que o problema se resolva sozinho.", weight: [0, 1, 2, 0] },
            { text: "Busco conselhos de outras pessoas para me ajudar a lidar com ele.", weight: [1, 2, 3, 1] },
            { text: "Fico frustrado e posso agir impulsivamente.", weight: [3, 1, 1, 1] },
            { text: "Faço um plano para prevenir esse tipo de estresse no futuro.", weight: [1, 2, 1, 3] },
            { text: "Me concentro em outras tarefas para me distrair.", weight: [1, 1, 2, 1] },
            { text: "Tento encontrar uma solução criativa para o problema.", weight: [1, 3, 1, 2] }
        ]
    },
    {
        question: "O que você faria se encontrasse uma carteira no chão?",
        options: [
            { text: "Entregá-la imediatamente às autoridades.", weight: [2, 1, 3, 1] },
            { text: "Tentar encontrar o dono eu mesmo para devolvê-la.", weight: [3, 1, 2, 1] },
            { text: "Pegar o dinheiro, mas devolver a carteira anonimamente.", weight: [0, 1, 0, 3] },
            { text: "Deixá-la onde está; talvez o dono volte para buscá-la.", weight: [1, 1, 2, 1] },
            { text: "Pegar e considerar que foi meu dia de sorte.", weight: [0, 0, 0, 3] },
            { text: "Analisar o conteúdo para decidir o que fazer a seguir.", weight: [1, 3, 1, 2] },
            { text: "Guardá-la em segurança até que eu possa encontrar o dono eu mesmo.", weight: [2, 1, 3, 1] },
            { text: "Perguntar ao redor se alguém próximo perdeu uma carteira.", weight: [2, 1, 3, 1] },
            { text: "Ignorá-la; não é problema meu.", weight: [0, 0, 1, 1] },
            { text: "Usar qualquer identificação dentro para contactar diretamente o dono.", weight: [2, 2, 2, 1] }
        ]
    },
    {
        question: "Como você prefere passar seu tempo livre?",
        options: [
            { text: "Ler um livro para expandir meu conhecimento.", weight: [1, 3, 1, 1] },
            { text: "Engajar em atividades físicas ou esportes.", weight: [3, 1, 1, 1] },
            { text: "Passar tempo de qualidade com amigos e família.", weight: [2, 1, 3, 1] },
            { text: "Trabalhar em um projeto pessoal para alcançar meus objetivos.", weight: [1, 1, 1, 3] },
            { text: "Experimentar novas e emocionantes experiências.", weight: [3, 1, 1, 2] },
            { text: "Relaxar e tirar um tempo para recarregar.", weight: [1, 1, 3, 1] },
            { text: "Aprender algo novo apenas pelo prazer de aprender.", weight: [1, 3, 1, 1] },
            { text: "Estratégizar e planejar para objetivos futuros.", weight: [1, 2, 1, 3] },
            { text: "Voluntariar-se ou ajudar outros em necessidade.", weight: [2, 1, 3, 1] },
            { text: "Engajar-se em hobbies criativos como arte ou música.", weight: [1, 3, 1, 2] }
        ]
    },
    {
        question: "Qual é a sua maior falha?",
        options: [
            { text: "Posso ser muito confiável e às vezes ser aproveitado.", weight: [1, 1, 3, 1] },
            { text: "Age impulsivamente sem considerar as consequências.", weight: [3, 1, 1, 1] },
            { text: "Analiso demais as coisas, levando à indecisão.", weight: [1, 3, 1, 1] },
            { text: "Posso ser manipulador para alcançar meus objetivos.", weight: [1, 1, 1, 3] },
            { text: "Tendo a evitar confrontos mesmo quando é necessário.", weight: [1, 1, 3, 1] },
            { text: "Sou excessivamente competitivo e foco demais em vencer.", weight: [1, 1, 1, 3] },
            { text: "Às vezes pareço arrogante por causa do meu conhecimento.", weight: [1, 3, 1, 2] },
            { text: "Raramente reconheço minhas próprias falhas e acredito que geralmente estou certo.", weight: [1, 2, 1, 2] },
            { text: "Posso ser imprudente, assumindo riscos desnecessários.", weight: [3, 1, 1, 1] },
            { text: "Tenho dificuldade em cumprir meus compromissos.", weight: [1, 1, 3, 1] }
        ]
    },
    {
        question: "Como você aborda o trabalho em grupo?",
        options: [
            { text: "Assumir o comando e liderar o grupo para alcançar nossos objetivos.", weight: [3, 1, 1, 2] },
            { text: "Assumir o comando e delegar tarefas para os outros enquanto contribuo minimamente.", weight: [1, 1, 0, 3] },
            { text: "Garantir que todos se sintam incluídos e valorizados no grupo.", weight: [1, 1, 3, 1] },
            { text: "Focar em fazer minha parte da melhor maneira possível.", weight: [1, 3, 2, 1] },
            { text: "Garantir que o grupo siga o plano mais eficiente e eficaz.", weight: [1, 3, 1, 2] },
            { text: "Ficar nos bastidores e fazer o que me dizem.", weight: [1, 1, 2, 1] },
            { text: "Usar a oportunidade para mostrar minhas habilidades e me destacar.", weight: [2, 1, 1, 3] },
            { text: "Esperar que meu desinteresse não seja notado e que outros compensem.", weight: [0, 0, 1, 1] },
            { text: "Colaborar de perto com os membros da equipe para combinar nossas forças.", weight: [2, 1, 3, 1] },
            { text: "Oferecer ideias e soluções criativas para guiar o projeto.", weight: [1, 3, 1, 2] }
        ]
    },
    {
        question: "Como você reage quando as coisas não saem do seu jeito?",
        options: [
            { text: "Ficar calmo e analisar a situação para encontrar uma solução.", weight: [1, 3, 1, 1] },
            { text: "Ficar frustrado, mas persistir até ter sucesso.", weight: [3, 1, 1, 1] },
            { text: "Aceitar com graça e seguir em frente.", weight: [1, 1, 3, 1] },
            { text: "Procurar alguém ou algo para culpar pelo revés.", weight: [0, 0, 1, 3] },
            { text: "Elaborar rapidamente um plano alternativo para alcançar meu objetivo.", weight: [1, 2, 1, 3] },
            { text: "Fingir que não me incomoda, mas sentir-me chateado internamente.", weight: [1, 1, 2, 2] },
            { text: "Acreditar que se as coisas não saem do meu jeito, eu não tentei o suficiente.", weight: [1, 1, 1, 3] },
            { text: "Usar humor para aliviar a situação e manter o ânimo.", weight: [2, 1, 2, 1] },
            { text: "Tirar um tempo sozinho para refletir e ajustar minha abordagem.", weight: [1, 3, 1, 2] },
            { text: "Expressar abertamente minha frustração e possivelmente me irritar.", weight: [3, 1, 1, 1] }
        ]
    },
    {
        question: "Seu amigo colou em uma prova na escola. Qual é a sua posição sobre isso?",
        options: [
            { text: "Contar imediatamente ao professor, pois é a coisa certa a fazer.", weight: [3, 1, 1, 1] },
            { text: "Incentivar meu amigo a confessar e enfrentar as consequências.", weight: [2, 1, 3, 1] },
            { text: "Oferecer ajuda para meu amigo estudar para que ele não precise colar na próxima vez.", weight: [1, 2, 3, 1] },
            { text: "Manter o segredo dele e ajudá-lo a evitar ser pego.", weight: [1, 1, 1, 3] },
            { text: "Participar da cola na próxima vez para melhorar minhas próprias notas.", weight: [0, 1, 0, 3] },
            { text: "Cuidar dos meus assuntos; não é meu lugar interferir.", weight: [1, 1, 1, 2] },
            { text: "Confrontar meu amigo e expressar como isso afeta nossa confiança.", weight: [3, 1, 2, 1] },
            { text: "Avisar meu amigo sobre os riscos, mas ajudá-lo a encobrir desta vez.", weight: [1, 1, 1, 3] },
            { text: "Considerar que todos cometem erros e deixar passar desta vez.", weight: [1, 1, 3, 1] },
            { text: "Discutir com meu amigo por que colar não é benéfico e encorajar escolhas melhores.", weight: [1, 3, 2, 1] }
        ]
    },
    {
        question: "Qual é a sua opinião sobre o uso da Maldição Imperdoável Crucio em animais na sala de aula para aprendizado?",
        options: [
            { text: "Absolutamente inaceitável; causar dor aos animais é errado.", weight: [1, 1, 3, 0] },
            { text: "Eu protestaria e me recusaria a participar, mesmo que seja permitido.", weight: [3, 1, 1, 1] },
            { text: "Acredito que é aceitável se for necessário para nossa educação.", weight: [1, 2, 1, 3] },
            { text: "Me sentiria desconfortável, mas participaria para entender melhor.", weight: [1, 2, 1, 2] },
            { text: "Sugeriria o uso de métodos alternativos que não prejudiquem os animais.", weight: [2, 3, 2, 1] },
            { text: "Participaria sem hesitação; dominar feitiços é importante.", weight: [1, 2, 0, 3] },
            { text: "Recusaria a participar, mas respeitaria as escolhas dos outros.", weight: [1, 2, 2, 1] },
            { text: "Me sentiria dividido, mas confiaria que o professor sabe o que é melhor.", weight: [1, 2, 1, 2] },
            { text: "Reuniria os colegas para solicitar coletivamente aulas alternativas.", weight: [3, 1, 2, 1] },
            { text: "Participaria, mas me sentiria desconfortável, focando no valor educacional.", weight: [1, 2, 1, 2] }
        ]
    },
    {
        question: "Você precisa ir ao banheiro durante a aula, como você se desculpa?",
        options: [
            { text: "Levantar a mão e pedir educadamente para ser dispensado.", weight: [1, 1, 3, 1] },
            { text: "Esperar por uma pausa natural na aula e então pedir para sair.", weight: [1, 3, 1, 1] },
            { text: "Simplesmente levantar e sair sem interromper a classe.", weight: [2, 1, 1, 2] },
            { text: "Esperar até que o professor esteja distraído e sair discretamente.", weight: [1, 1, 1, 3] },
            { text: "Suportar até o final da aula; não quero causar uma perturbação.", weight: [1, 1, 3, 1] },
            { text: "Levantar a mão e dizer diretamente que preciso sair agora.", weight: [3, 1, 1, 1] },
            { text: "Inventar uma desculpa criativa para sair da sala de aula.", weight: [1, 3, 1, 2] },
            { text: "Esperar até o trabalho em grupo começar e então sair sem ser notado.", weight: [1, 1, 2, 3] },
            { text: "Pedir a um amigo para criar uma distração para que eu possa sair discretamente.", weight: [1, 1, 1, 3] },
            { text: "Desculpar-se pela interrupção e pedir educadamente para ser dispensado.", weight: [1, 1, 3, 1] }
        ]
    },
    {
        question: "Durante seus estudos em Hogwarts, você encontra uma receita rara de poção que pode melhorar significativamente suas habilidades mágicas, dando-lhe uma vantagem em suas aulas e futura carreira. No entanto, preparar e usar essa poção pode drenar inadvertidamente a energia mágica dos estudantes próximos, enfraquecendo-os temporariamente. O que você faz?",
        options: [
            { text: "Preparar e usar a poção imediatamente; meu avanço é crucial.", weight: [1, 1, 1, 3] },
            { text: "Estudar mais a poção para entender os riscos antes de decidir.", weight: [1, 3, 1, 2] },
            { text: "Decidir não prepará-la; não arriscarei o bem-estar dos outros para meu benefício.", weight: [1, 1, 3, 1] },
            { text: "Usar a poção apenas se for absolutamente necessário para algo significativo.", weight: [3, 1, 1, 1] },
            { text: "Buscar orientação de um professor de confiança sobre a poção.", weight: [1, 2, 2, 1] },
            { text: "Modificar a poção para eliminar o risco antes de usá-la.", weight: [1, 3, 1, 2] },
            { text: "Compartilhar a receita da poção com outros para que todos se beneficiem igualmente.", weight: [2, 1, 3, 1] },
            { text: "Manter a poção em segredo, mas escolher não usá-la.", weight: [1, 1, 2, 2] },
            { text: "Usar a poção discretamente, garantindo que ninguém a descubra.", weight: [1, 1, 1, 3] },
            { text: "Desfazer-se da receita da poção para evitar qualquer dano potencial.", weight: [2, 1, 3, 1] }
        ]
    },
    {
        question: "Devido a uma proibição repentina pelo Ministério da Magia, seu doce mágico favorito, Sapos de Chocolate, não é mais permitido no Expresso de Hogwarts. Você os apreciava todos os anos e não há uma razão clara para a proibição. Como você lida com essa situação?",
        options: [
            { text: "Levar alguns Sapos de Chocolate no trem, apesar da proibição.", weight: [2, 2, 1, 3] },
            { text: "Abordar o pessoal do trem para perguntar educadamente sobre o motivo da proibição.", weight: [1, 2, 3, 1] },
            { text: "Aceitar a proibição e ficar sem meu doce favorito.", weight: [1, 1, 3, 1] },
            { text: "Encontrar um doce alternativo que seja permitido no trem.", weight: [1, 3, 2, 1] },
            { text: "Reclamar alto com o pessoal e exigir uma explicação.", weight: [3, 1, 1, 1] },
            { text: "Organizar uma petição entre os alunos para revogar a proibição.", weight: [3, 2, 2, 1] },
            { text: "Usar magia para disfarçar os Sapos de Chocolate como outro doce permitido.", weight: [2, 3, 1, 3] },
            { text: "Investigar o motivo da proibição pesquisando decretos do Ministério.", weight: [1, 3, 1, 2] },
            { text: "Compartilhar seus últimos Sapos de Chocolate com amigos antes de embarcar.", weight: [3, 1, 3, 1] },
            { text: "Aceitar a proibição, mas planejar escrever um argumento lógico para o Ministério explicando por que ela deveria ser levantada.", weight: [2, 3, 1, 1] }
        ]
    }
];
```
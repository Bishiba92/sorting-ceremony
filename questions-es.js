var questions = [
    {
        question: "Cuando enfrentas un desafío, ¿cuál es tu primer instinto?",
        options: [
            { text: "¡Confrontarlo de frente!", house: "Gryffindor", weight: 3 },
            { text: "Planear un enfoque estratégico.", house: "Ravenclaw", weight: 3 },
            { text: "Trabajar duro hasta superarlo.", house: "Hufflepuff", weight: 3 },
            { text: "Buscar una forma de convertir el desafío en una ventaja.", house: "Slytherin", weight: 3 },
            { text: "Evitarlo y esperar que se resuelva solo.", house: "Hufflepuff", weight: 3 },
            { text: "Seguir la guía de alguien más sobre cómo enfrentarlo.", house: "Slytherin", weight: 3 },
        ]
    },
    {
        question: "¿Qué valoras más en tus amigos?",
        options: [
            { text: "Lealtad", house: "Hufflepuff", weight: 3 },
            { text: "Valentía", house: "Gryffindor", weight: 3 },
            { text: "Inteligencia", house: "Ravenclaw", weight: 3 },
            { text: "Ambición", house: "Slytherin", weight: 3 },
            { text: "Confiabilidad", house: "Hufflepuff", weight: 3 },
            { text: "Credulidad", house: "Slytherin", weight: 3 },
            { text: "Un buen sentido del humor", house: "Ravenclaw", weight: 3 },
        ]
    },
    {
        question: "¿Cuál de estas describe tu enfoque hacia el aprendizaje?",
        options: [
            { text: "El conocimiento es poder.", house: "Ravenclaw", weight: 3 },
            { text: "Aprender haciendo.", house: "Gryffindor", weight: 3 },
            { text: "La práctica hace al maestro.", house: "Hufflepuff", weight: 3 },
            { text: "Aprender lo que te hará avanzar.", house: "Slytherin", weight: 3 },
            { text: "Aprendo solo lo necesario para salir adelante.", house: "Hufflepuff", weight: 3 },
            { text: "Prefiero aprender de los errores de los demás.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "Si alguien te hace daño, ¿cuál es tu respuesta?",
        options: [
            { text: "Perdonar y seguir adelante.", house: "Hufflepuff", weight: 3 },
            { text: "Encontrar la manera de asegurarme de que no lo vuelvan a hacer.", house: "Slytherin", weight: 3 },
            { text: "Desafiarlos directamente.", house: "Gryffindor", weight: 3 },
            { text: "Usarlo como una experiencia de aprendizaje.", house: "Ravenclaw", weight: 3 },
            { text: "Evitarlos y seguir con mi vida.", house: "Hufflepuff", weight: 3 },
            { text: "Fingir que no me molestó pero ser pasivo-agresivo al respecto.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "¿Cómo manejas el estrés?",
        options: [
            { text: "Me tomo un momento para calmarme.", house: "Hufflepuff", weight: 3 },
            { text: "Enfrento el problema de inmediato.", house: "Gryffindor", weight: 3 },
            { text: "Pienso de manera lógica para solucionarlo.", house: "Ravenclaw", weight: 3 },
            { text: "Lo convierto en motivación para tener éxito.", house: "Slytherin", weight: 3 },
            { text: "Procrastino y espero que desaparezca.", house: "Hufflepuff", weight: 3 },
            { text: "Busco a alguien que pueda solucionarlo por mí.", house: "Hufflepuff", weight: 3 }
        ]
    },
    {
        question: "¿Qué harías si encuentras una billetera en el suelo?",
        options: [
            { text: "Entregarla a las autoridades de inmediato.", house: "Hufflepuff", weight: 3 },
            { text: "Revisarla para intentar encontrar al dueño por mi cuenta.", house: "Gryffindor", weight: 3 },
            { text: "Tomar el dinero y dejar el resto.", house: "Slytherin", weight: 3 },
            { text: "Dejarla donde está, tal vez el dueño vuelva.", house: "Hufflepuff", weight: 3 },
            { text: "Analizar la situación para determinar la mejor opción.", house: "Ravenclaw", weight: 3 },
            { text: "Guardarla hasta que alguien pregunte por ella.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "¿Cómo prefieres pasar tu tiempo libre?",
        options: [
            { text: "Leyendo un libro.", house: "Ravenclaw", weight: 3 },
            { text: "Aprendiendo algo nuevo.", house: "Ravenclaw", weight: 3 },
            { text: "Jugando un juego.", house: "Gryffindor", weight: 3 },
            { text: "Pasando el rato con amigos.", house: "Hufflepuff", weight: 3 },
            { text: "Probando una nueva actividad emocionante.", house: "Gryffindor", weight: 3 },
            { text: "Trabajando en un proyecto personal.", house: "Slytherin", weight: 3 },
            { text: "Haciendo absolutamente nada y relajándome.", house: "Hufflepuff", weight: 3 },
            { text: "Usando mi tiempo en algo beneficioso.", house: "Slytherin", weight: 3 }
        ]
    },
    {
        question: "¿Cuál es tu mayor defecto?",
        options: [
            { text: "Puedo ser demasiado confiado con los demás.", house: "Hufflepuff", weight: 3 },
            { text: "Puedo ser impulsivo y actuar sin pensar.", house: "Gryffindor", weight: 3 },
            { text: "Puedo ser excesivamente analítico e indeciso.", house: "Ravenclaw", weight: 3 },
            { text: "Puedo ser manipulador para conseguir lo que quiero.", house: "Slytherin", weight: 3 },
            { text: "Tiendo a evitar la confrontación.", house: "Hufflepuff", weight: 3 },
            { text: "Puedo estar demasiado enfocado en mis propios objetivos.", house: "Slytherin", weight: 3 },
            { text: "Disfruto ridiculizar a los demás.", house: "Slytherin", weight: 3 },
            { text: "No tengo realmente ningún defecto del que pueda pensar.", house: "Slytherin", weight: 3 },
        ]
    },
    {
        question: "¿Cómo abordas el trabajo en grupo?",
        options: [
            { text: "Tomar el control y liderar al grupo.", house: "Gryffindor", weight: 3 },
            { text: "Tomar el control y delegar la mayoría del trabajo a otra persona.", house: "Slytherin", weight: 3 },
            { text: "Asegurarme de que todos se sientan incluidos y valorados.", house: "Hufflepuff", weight: 3 },
            { text: "Enfocarme en hacer mi parte lo mejor posible.", house: "Ravenclaw", weight: 3 },
            { text: "Asegurarme de que el grupo siga el plan más eficiente.", house: "Slytherin", weight: 3 },
            { text: "Permanecer en el fondo y hacer lo que me digan.", house: "Hufflepuff", weight: 3 },
            { text: "Aprovechar la oportunidad para demostrar mis habilidades.", house: "Slytherin", weight: 3 },
            { text: "Esperar que mi falta de esfuerzo no se note.", house: "Hufflepuff", weight: 3 },
        ]
    },
    {
        question: "¿Cómo reaccionas cuando las cosas no salen como quieres?",
        options: [
            { text: "Mantener la calma e intentar encontrar una solución.", house: "Ravenclaw", weight: 3 },
            { text: "Frustrarme pero intentarlo de nuevo.", house: "Gryffindor", weight: 3 },
            { text: "Aceptarlo y seguir adelante.", house: "Hufflepuff", weight: 3 },
            { text: "Buscar a alguien a quien culpar.", house: "Slytherin", weight: 3 },
            { text: "Buscar una ruta alternativa hacia el éxito.", house: "Slytherin", weight: 3 },
            { text: "Fingir que no me molesta.", house: "Hufflepuff", weight: 3 },
            { text: "Si las cosas no salen como quiero, es porque no lo intenté.", house: "Slytherin", weight: 3 },
        ]
    },
    {
        question: "Tu amigo ha hecho trampa en un examen en la escuela. ¿Cuál es tu postura al respecto?",
        options: [
            { text: "Decírselo al profesor inmediatamente.", house: "Gryffindor", weight: 3 },
            { text: "Animar a tu amigo a confesar.", house: "Hufflepuff", weight: 3 },
            { text: "Ayudar a tu amigo a evitar ser atrapado.", house: "Slytherin", weight: 3 },
            { text: "Mantenerme al margen, no es asunto mío.", house: "Ravenclaw", weight: 3 }
        ]
    },
    {
        question: "¿Cuál es tu opinión sobre usar el hechizo imperdonable Cruciatus en animales en la clase para aprender?",
        options: [
            { text: "Absolutamente inaceptable bajo cualquier circunstancia.", house: "Hufflepuff", weight: 3 },
            { text: "Solo si no hay otra manera de aprenderlo.", house: "Ravenclaw", weight: 3 },
            { text: "Si sirve a un propósito mayor, está bien.", house: "Slytherin", weight: 3 },
            { text: "Desafiaría al profesor y me negaría a hacerlo.", house: "Gryffindor", weight: 3 }
        ]
    },
    {
        question: "Tienes que ir al baño durante la clase, ¿cómo te excusas?",
        options: [
            { text: "Levanto la mano y pido permiso educadamente.", house: "Hufflepuff", weight: 3 },
            { text: "Simplemente me levanto y voy sin pedir permiso.", house: "Gryffindor", weight: 3 },
            { text: "Espero hasta que el profesor esté distraído y me escapo silenciosamente.", house: "Slytherin", weight: 3 },
            { text: "Pido permiso en un momento lógico de la clase.", house: "Ravenclaw", weight: 3 }
        ]
    },
    {
        question: "Ha surgido una situación en la que puedes avanzar, pero al hacerlo, algunas personas podrían resultar heridas. ¿Qué haces?",
        options: [
            { text: "Aprovecho la oportunidad sin pensarlo dos veces.", house: "Slytherin", weight: 3 },
            { text: "Peso los beneficios frente a las consecuencias.", house: "Ravenclaw", weight: 3 },
            { text: "Me niego a hacerlo si significa lastimar a otros.", house: "Hufflepuff", weight: 3 },
            { text: "Solo procedo si significa algo significativo para mí.", house: "Gryffindor", weight: 3 }
        ]
    },
    {
        question: "Hay una prohibición de tu comida favorita en el Expreso de Hogwarts, has comido esta comida cada año hasta ahora. ¿Cómo lidias con esto?",
        options: [
            { text: "Colarla a pesar de la prohibición.", house: "Slytherin", weight: 3 },
            { text: "Quejarme al personal y exigir una explicación.", house: "Gryffindor", weight: 3 },
            { text: "Encontrar una comida alternativa que esté permitida.", house: "Ravenclaw", weight: 3 },
            { text: "Aceptarlo e ir sin mi comida favorita.", house: "Hufflepuff", weight: 3 }
        ]
    }
];
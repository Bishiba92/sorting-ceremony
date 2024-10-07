var questions = [
    {    
		question: "Cuando te enfrentas a un reto, ¿cuál es tu primer instinto?",
		options: [
			{ text: "Enfrentarlo de frente, sin importar las consecuencias.", weight: [3, 1, 1, 1] },
			{ text: "Planificar una estrategia cuidadosamente antes de actuar.", weight: [1, 3, 1, 2] },
			{ text: "Trabajar sin descanso hasta superar el reto, aunque me agote.", weight: [2, 1, 3, 1] },
			{ text: "Buscar formas de convertir el reto en una oportunidad para obtener un beneficio personal.", weight: [1, 1, 1, 3] },
			{ text: "Procrastinar y esperar que el problema se resuelva solo con el tiempo.", weight: [0, 1, 2, 0] },
			{ text: "Seguir el liderazgo de otra persona, confiando en que sabe la mejor forma de actuar.", weight: [1, 2, 3, 1] },
			{ text: "Sentirme abrumado y evitar lidiar con el reto por completo.", weight: [0, 0, 2, 0] },
			{ text: "Intentar encontrar una solución creativa o poco convencional al problema.", weight: [1, 3, 1, 2] },
			{ text: "Delegar el problema a otra persona que pueda manejarlo mejor.", weight: [0, 1, 1, 3] },
			{ text: "Usar el humor o la distracción para restar importancia a la seriedad del reto.", weight: [2, 1, 2, 1] }
		]
	},
    {
		question: "¿Qué es importante para ti en tus amigos?",
		options: [
			{ text: "Deben ser fáciles de guiar.", weight: [1, 1, 1, 3] },
			{ text: "Que me desafíen intelectualmente.", weight: [1, 3, 1, 2] },
			{ text: "Que me hagan esforzarme por mantenerme en la cima.", weight: [1, 2, 1, 3] },
			{ text: "Que me acepten tal como soy.", weight: [1, 1, 3, 1] },
			{ text: "Que compartan mi sentido de la aventura.", weight: [3, 1, 1, 1] },
			{ text: "Que tengan conexiones que puedan ayudarme a tener éxito.", weight: [1, 1, 1, 3] },
			{ text: "Que sean leales y me apoyen.", weight: [2, 1, 3, 1] },
			{ text: "Que me ayuden a sentirme importante y valorado.", weight: [1, 1, 2, 2] },
			{ text: "Que aporten nuevas ideas y perspectivas.", weight: [1, 3, 1, 2] },
			{ text: "Que sean divertidos y espontáneos.", weight: [3, 1, 2, 1] }
		]
	},
    {
		question: "¿Cuál de estas describe tu enfoque hacia el aprendizaje?",
		options: [
			{ text: "Busco conocimiento por sí mismo; entender el mundo es mi objetivo.", weight: [1, 3, 1, 1] },
			{ text: "Aprendo mejor lanzándome y experimentando las cosas de primera mano.", weight: [3, 1, 1, 1] },
			{ text: "La práctica constante es clave; trabajo diligentemente para dominar nuevas habilidades.", weight: [1, 1, 3, 1] },
			{ text: "Me enfoco en aprender cosas que me ayuden a alcanzar mis ambiciones.", weight: [1, 1, 1, 3] },
			{ text: "Aprendo lo justo para salir adelante; no necesito excederme.", weight: [0, 1, 2, 1] },
			{ text: "Prefiero aprender de las experiencias de otros para evitar cometer errores yo mismo.", weight: [1, 2, 1, 2] },
			{ text: "Absorbo información rápidamente y confío en mi ingenio para salir adelante.", weight: [1, 3, 1, 2] },
			{ text: "Sueldo procrastinar, pero logro aprender lo necesario a último momento.", weight: [1, 1, 2, 1] },
			{ text: "Disfruto colaborar con otros para aprender cosas nuevas.", weight: [2, 1, 3, 1] },
			{ text: "Busco desafíos que pongan a prueba mis habilidades y aprender superándolos.", weight: [3, 1, 1, 2] }
		]
	},
    {
		question: "Si alguien te hace algo malo, ¿cuál es tu respuesta?",
		options: [
			{ text: "Perdonar y seguir adelante, enfocándome en mantener la paz.", weight: [1, 1, 3, 1] },
			{ text: "Confrontarlos directamente para resolver el problema.", weight: [3, 1, 1, 1] },
			{ text: "Planear una forma de evitar que me hagan daño de nuevo.", weight: [1, 2, 1, 3] },
			{ text: "Reflexionar sobre la experiencia para aprender y crecer a partir de ella.", weight: [1, 3, 1, 1] },
			{ text: "Evitar a la persona y enfocarme en mi propio camino.", weight: [0, 1, 2, 1] },
			{ text: "Actuar como si no me hubiera molestado, pero guardar rencor.", weight: [0, 1, 1, 2] },
			{ text: "Buscar consejo de otros sobre cómo manejar la situación.", weight: [1, 2, 2, 1] },
			{ text: "Intentar vengarme de alguna manera.", weight: [1, 1, 0, 3] },
			{ text: "Dejarlo ir y enfocarme en las relaciones positivas.", weight: [1, 1, 3, 1] },
			{ text: "Defenderme y asegurarme de que entiendan mis límites.", weight: [3, 1, 1, 1] }
		]
	},
    {
		question: "¿Cómo manejas el estrés?",
		options: [
			{ text: "Respiro profundo e intento calmarme antes de seguir adelante.", weight: [1, 2, 3, 1] },
			{ text: "Actúo de inmediato y enfrento el problema.", weight: [3, 1, 1, 1] },
			{ text: "Analizo la situación para encontrar la solución más lógica.", weight: [1, 3, 1, 2] },
			{ text: "Canalizo el estrés hacia la determinación para lograr mis objetivos.", weight: [2, 1, 1, 3] },
			{ text: "Lo ignoro y espero que el problema se resuelva solo.", weight: [0, 1, 2, 0] },
			{ text: "Busco consejo de otros para ayudarme a manejarlo.", weight: [1, 2, 3, 1] },
			{ text: "Me frustro y puedo actuar impulsivamente.", weight: [3, 1, 1, 1] },
			{ text: "Hago un plan para prevenir ese tipo de estrés en el futuro.", weight: [1, 2, 1, 3] },
			{ text: "Me enfoco en otras tareas para distraerme.", weight: [1, 1, 2, 1] },
			{ text: "Trato de encontrar una solución creativa al problema.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "¿Qué harías si encontraras una cartera en el suelo?",
		options: [
			{ text: "Entregarla a las autoridades de inmediato.", weight: [2, 1, 3, 1] },
			{ text: "Intentar encontrar al dueño por mi cuenta para devolvérsela.", weight: [3, 1, 2, 1] },
			{ text: "Tomar el dinero pero devolver la cartera de forma anónima.", weight: [0, 1, 0, 3] },
			{ text: "Dejarla donde está; tal vez el dueño vuelva por ella.", weight: [1, 1, 2, 1] },
			{ text: "Tomarla y considerarla mi día de suerte.", weight: [0, 0, 0, 3] },
			{ text: "Analizar el contenido para decidir qué hacer después.", weight: [1, 3, 1, 2] },
			{ text: "Mantenerla segura hasta poder encontrar al dueño.", weight: [2, 1, 3, 1] },
			{ text: "Preguntar alrededor si alguien cercano ha perdido una cartera.", weight: [2, 1, 3, 1] },
			{ text: "Ignorarla; no es mi problema.", weight: [0, 0, 1, 1] },
			{ text: "Usar cualquier identificación dentro para contactar directamente al dueño.", weight: [2, 2, 2, 1] }
		]
	},
    {
		question: "¿Cómo prefieres pasar tu tiempo libre?",
		options: [
			{ text: "Leer un libro para ampliar mi conocimiento.", weight: [1, 3, 1, 1] },
			{ text: "Realizando actividades físicas o deportes.", weight: [3, 1, 1, 1] },
			{ text: "Pasando tiempo de calidad con amigos y familiares.", weight: [2, 1, 3, 1] },
			{ text: "Trabajando en un proyecto personal para alcanzar mis metas.", weight: [1, 1, 1, 3] },
			{ text: "Probando nuevas y emocionantes experiencias.", weight: [3, 1, 1, 2] },
			{ text: "Descansando y tomando tiempo para recargar energías.", weight: [1, 1, 3, 1] },
			{ text: "Aprendiendo algo nuevo solo por el gusto de hacerlo.", weight: [1, 3, 1, 1] },
			{ text: "Planificando y estrategizando para metas futuras.", weight: [1, 2, 1, 3] },
			{ text: "Voluntariando o ayudando a otros en necesidad.", weight: [2, 1, 3, 1] },
			{ text: "Realizando pasatiempos creativos como arte o música.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "¿Cuál es tu mayor defecto?",
		options: [
			{ text: "Soy demasiado confiado y a veces se aprovechan de mí.", weight: [1, 1, 3, 1] },
			{ text: "Actúo impulsivamente sin considerar las consecuencias.", weight: [3, 1, 1, 1] },
			{ text: "Analizo demasiado las cosas, lo que me lleva a la indecisión.", weight: [1, 3, 1, 1] },
			{ text: "Puedo ser manipulador para alcanzar mis objetivos.", weight: [1, 1, 1, 3] },
			{ text: "Tiendo a evitar la confrontación incluso cuando es necesaria.", weight: [1, 1, 3, 1] },
			{ text: "Soy demasiado competitivo y me enfoco demasiado en ganar.", weight: [1, 1, 1, 3] },
			{ text: "A veces puedo parecer arrogante debido a mi conocimiento.", weight: [1, 3, 1, 2] },
			{ text: "Rara vez reconozco mis propios defectos y creo que suelo tener la razón.", weight: [1, 2, 1, 2] },
			{ text: "Puedo ser imprudente y tomar riesgos innecesarios.", weight: [3, 1, 1, 1] },
			{ text: "Me cuesta cumplir con mis compromisos.", weight: [1, 1, 3, 1] }
		]
	},
	{
		question: "¿Cómo abordas el trabajo en grupo?",
		options: [
			{ text: "Tomar el control y liderar al grupo para lograr nuestros objetivos.", weight: [3, 1, 1, 2] },
			{ text: "Tomar el control y delegar tareas a los demás mientras contribuyo mínimamente.", weight: [1, 1, 0, 3] },
			{ text: "Asegurarme de que todos se sientan incluidos y valorados en el grupo.", weight: [1, 1, 3, 1] },
			{ text: "Enfocarme en hacer mi parte lo mejor que pueda.", weight: [1, 3, 2, 1] },
			{ text: "Asegurarme de que el grupo siga el plan más eficiente y efectivo.", weight: [1, 3, 1, 2] },
			{ text: "Permanecer en el fondo y hacer lo que me digan.", weight: [1, 1, 2, 1] },
			{ text: "Aprovechar la oportunidad para demostrar mis habilidades y destacar.", weight: [2, 1, 1, 3] },
			{ text: "Esperar que mi falta de esfuerzo no se note y que otros hagan el trabajo.", weight: [0, 0, 1, 1] },
			{ text: "Colaborar estrechamente con los miembros del equipo para combinar nuestras fortalezas.", weight: [2, 1, 3, 1] },
			{ text: "Ofrecer ideas y soluciones creativas para guiar el proyecto.", weight: [1, 3, 1, 2] }
		]
	},
    {
		question: "¿Cómo reaccionas cuando las cosas no salen como quieres?",
		options: [
			{ text: "Mantener la calma y analizar la situación para encontrar una solución.", weight: [1, 3, 1, 1] },
			{ text: "Me frustro, pero sigo intentando hasta que lo logro.", weight: [3, 1, 1, 1] },
			{ text: "Aceptarlo con gracia y pasar a otra cosa.", weight: [1, 1, 3, 1] },
			{ text: "Buscar a alguien o algo a quien culpar por el contratiempo.", weight: [0, 0, 1, 3] },
			{ text: "Idear un plan alternativo rápidamente para lograr mi objetivo.", weight: [1, 2, 1, 3] },
			{ text: "Fingir que no me molesta, pero sentirme mal internamente.", weight: [1, 1, 2, 2] },
			{ text: "Creer que si las cosas no salieron como quería, es porque no lo intenté lo suficiente.", weight: [1, 1, 1, 3] },
			{ text: "Usar el humor para suavizar la situación y mantener el ánimo alto.", weight: [2, 1, 2, 1] },
			{ text: "Tomar un tiempo solo para reflexionar y ajustar mi enfoque.", weight: [1, 3, 1, 2] },
			{ text: "Expresar mi frustración abiertamente y posiblemente desquitarme.", weight: [3, 1, 1, 1] }
		]
	},
    {
		question: "Tu amigo ha hecho trampa en un examen en la escuela. ¿Cuál es tu postura al respecto?",
		options: [
			{ text: "Decírselo al maestro inmediatamente, ya que es lo correcto.", weight: [3, 1, 1, 1] },
			{ text: "Animar a mi amigo a confesar y enfrentar las consecuencias.", weight: [2, 1, 3, 1] },
			{ text: "Ofrecer ayudar a mi amigo a estudiar para que no necesite hacer trampa la próxima vez.", weight: [1, 2, 3, 1] },
			{ text: "Guardar su secreto y ayudarlo a no ser atrapado.", weight: [1, 1, 1, 3] },
			{ text: "Unirme a él en hacer trampa la próxima vez para mejorar mis propias calificaciones.", weight: [0, 1, 0, 3] },
			{ text: "No meterme en sus asuntos; no es mi lugar interferir.", weight: [1, 1, 1, 2] },
			{ text: "Confrontar a mi amigo y expresar cómo afecta nuestra confianza.", weight: [3, 1, 2, 1] },
			{ text: "Advertir a mi amigo sobre los riesgos pero ayudarlo a encubrirlo esta vez.", weight: [1, 1, 1, 3] },
			{ text: "Considerar que todos cometemos errores y dejarlo pasar esta vez.", weight: [1, 1, 3, 1] },
			{ text: "Discutir con mi amigo por qué hacer trampa no es beneficioso y alentarlo a hacer mejores elecciones.", weight: [1, 3, 2, 1] }
		]
	},
    {
		question: "¿Cuál es tu opinión sobre usar la Maldición Cruciatus sobre animales en el aula para aprender?",
		options: [
			{ text: "Absolutamente inaceptable; causar dolor a los animales está mal.", weight: [1, 1, 3, 0] },
			{ text: "Protestaría y me negaría a participar, incluso si está permitido.", weight: [3, 1, 1, 1] },
			{ text: "Creo que es aceptable si es necesario para nuestra educación.", weight: [1, 2, 1, 3] },
			{ text: "Me sentiría incómodo, pero participaría para ganar entendimiento.", weight: [1, 2, 1, 2] },
			{ text: "Sugeriría usar métodos alternativos que no dañen a los animales.", weight: [2, 3, 2, 1] },
			{ text: "Participaría sin dudarlo; dominar los hechizos es importante.", weight: [1, 2, 0, 3] },
			{ text: "Negarme a participar, pero respetar las elecciones de los demás.", weight: [1, 2, 2, 1] },
			{ text: "Me sentiría conflictuado, pero confiaría en que el profesor sabe mejor.", weight: [1, 2, 1, 2] },
			{ text: "Reunir a los compañeros para solicitar colectivamente lecciones alternativas.", weight: [3, 1, 2, 1] },
			{ text: "Participaría, pero me sentiría incómodo, enfocándome en el valor educativo.", weight: [1, 2, 1, 2] }
		]
	},
    {
		question: "Tienes que ir al baño durante la clase, ¿cómo te disculpas?",
		options: [
			{ text: "Levantar la mano y pedir educadamente ser excusado.", weight: [1, 1, 3, 1] },
			{ text: "Esperar una pausa natural en la lección y luego pedir permiso para irme.", weight: [1, 3, 1, 1] },
			{ text: "Simplemente levantarme e irme sin interrumpir la clase.", weight: [2, 1, 1, 2] },
			{ text: "Esperar hasta que el profesor esté distraído y escabullirme en silencio.", weight: [1, 1, 1, 3] },
			{ text: "Aguantar hasta que termine la clase; no quiero causar una interrupción.", weight: [1, 1, 3, 1] },
			{ text: "Levantar la mano y decir directamente que necesito irme ahora.", weight: [3, 1, 1, 1] },
			{ text: "Inventar una excusa creativa para salir del aula.", weight: [1, 3, 1, 2] },
			{ text: "Esperar hasta que empiece el trabajo en grupo, luego salir sin que me noten.", weight: [1, 1, 2, 3] },
			{ text: "Pedirle a un amigo que cree una distracción para que pueda escabullirme.", weight: [1, 1, 1, 3] },
			{ text: "Disculparme por la interrupción y pedir educadamente permiso para salir.", weight: [1, 1, 3, 1] }
		]
	},
    {
		question: "Durante tus estudios en Hogwarts, encuentras una receta rara de pociones que puede mejorar enormemente tus habilidades mágicas, dándote una ventaja en tus clases y futura carrera. Sin embargo, elaborar y usarla puede drenar inadvertidamente la energía mágica de otros estudiantes cercanos, debilitándolos temporalmente. ¿Qué haces?",
		options: [
			{ text: "Preparar y usar la pocion de inmediato; mi avance es crucial.", weight: [1, 1, 1, 3] },
			{ text: "Estudiar más la pocion para entender los riesgos antes de decidir.", weight: [1, 3, 1, 2] },
			{ text: "Decidir no prepararla; no voy a arriesgar el bienestar de los demás por mi beneficio.", weight: [1, 1, 3, 1] },
			{ text: "Usar la pocion solo si es absolutamente necesario para algo significativo.", weight: [3, 1, 1, 1] },
			{ text: "Buscar orientación de un profesor de confianza sobre la pocion.", weight: [1, 2, 2, 1] },
			{ text: "Modificar la pocion para eliminar el riesgo antes de usarla.", weight: [1, 3, 1, 2] },
			{ text: "Compartir la receta de la pocion con los demás para que todos se beneficien por igual.", weight: [2, 1, 3, 1] },
			{ text: "Mantener la pocion en secreto, pero decidir no usarla.", weight: [1, 1, 2, 2] },
			{ text: "Usar la pocion discretamente, asegurándome de que nadie la descubra.", weight: [1, 1, 1, 3] },
			{ text: "Deshacerme de la receta de la pocion para evitar cualquier daño potencial.", weight: [2, 1, 3, 1] }
		]
	},
    {
		question: "Debido a una prohibición repentina del Ministerio de Magia, tu golosina mágica favorita, las Ranas de Chocolate, ya no están permitidas en el Expreso de Hogwarts. Las has disfrutado cada año y no hay una razón clara para la prohibición. ¿Cómo manejas esta situación?",
		options: [
			{ text: "Colar algunas Ranas de Chocolate en el tren a pesar de la prohibición.", weight: [2, 2, 1, 3] },
			{ text: "Acercarme al personal del tren para preguntar amablemente la razón de la prohibición.", weight: [1, 2, 3, 1] },
			{ text: "Aceptar la prohibición y no comer mi golosina favorita.", weight: [1, 1, 3, 1] },
			{ text: "Buscar una golosina alternativa que esté permitida en el tren.", weight: [1, 3, 2, 1] },
			{ text: "Quejarme en voz alta al personal y exigir una explicación.", weight: [3, 1, 1, 1] },
			{ text: "Organizar una petición entre los estudiantes para levantar la prohibición.", weight: [3, 2, 2, 1] },
			{ text: "Usar magia para disfrazar las Ranas de Chocolate como otra golosina permitida.", weight: [2, 3, 1, 3] },
			{ text: "Investigar la razón detrás de la prohibición investigando decretos del Ministerio.", weight: [1, 3, 1, 2] },
			{ text: "Compartir las Ranas de Chocolate restantes con mis amigos antes de subir al tren.", weight: [3, 1, 3, 1] },
			{ text: "Aceptar la prohibición, pero planear escribir un argumento lógico al Ministerio explicando por qué debería levantarse.", weight: [2, 3, 1, 1] }
		]
	}
];
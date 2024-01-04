const quotes = [
  {
    author: "Albert Einstein",
    quote: "La imaginación es más importante que el conocimiento.",
  },
  {
    author: "Steve Jobs",
    quote:
      "Tu tiempo es limitado, así que no lo pierdas viviendo la vida de alguien más.",
  },
  {
    author: "Sócrates",
    quote: "Solo sé que no sé nada.",
  },
  {
    author: "Maya Angelou",
    quote: "No es lo que te ocurre, sino cómo reaccionas lo que importa.",
  },
  {
    author: "Confucio",
    quote:
      "Elige un trabajo que ames, y nunca tendrás que trabajar un día en tu vida.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
  },
  {
    author: "Mark Twain",
    quote: "El secreto de salir adelante es comenzar.",
  },
  {
    author: "Coco Chanel",
    quote: "La moda pasa, el estilo permanece.",
  },
  {
    author: "Walt Disney",
    quote: "La forma de empezar es dejar de hablar y comenzar a hacer.",
  },
  {
    author: "Oscar Wilde",
    quote: "Se tú mismo; todos los demás ya están tomados.",
  },
  {
    author: "Aristóteles",
    quote: "La educación es el mejor provisionamiento para la vejez.",
  },
  {
    author: "Jane Austen",
    quote: "No hay disfrute como el de hacer un buen acto en secreto.",
  },
  {
    author: "Martin Luther King Jr.",
    quote:
      "La oscuridad no puede expulsar a la oscuridad; solo la luz puede hacerlo.",
  },
  {
    author: "Eleanor Roosevelt",
    quote: "Hoy es el mañana del que te preocupabas ayer.",
  },
  {
    author: "Vincent Van Gogh",
    quote: "Lo que se hace por amor está más allá del bien y del mal.",
  },
  {
    author: "Pablo Picasso",
    quote: "La inspiración existe, pero tiene que encontrarte trabajando.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Sé el cambio que quieres ver en el mundo.",
  },
  {
    author: "Helen Keller",
    quote: "La vida es una aventura atrevida o no es nada en absoluto.",
  },
  {
    author: "John Lennon",
    quote:
      "La vida es lo que te sucede mientras estás ocupado haciendo otros planes.",
  },
  {
    author: "Friedrich Nietzsche",
    quote:
      "Aquel que lucha con monstruos debe tener cuidado de no convertirse en uno.",
  },
  {
    author: "Marie Curie",
    quote: "Nada en la vida debe ser temido, solo comprendido.",
  },
  {
    author: "C.S. Lewis",
    quote:
      "No puedes volver atrás y cambiar el principio, pero puedes comenzar donde estás y cambiar el final.",
  },
  {
    author: "Harriet Tubman",
    quote:
      "Cada gran sueño comienza con un soñador. Recuerda siempre, tienes dentro de ti la fuerza, la paciencia y la pasión para llegar a las estrellas para cambiar el mundo.",
  },
  {
    author: "Vincent Lombardi",
    quote:
      "El único lugar donde el éxito viene antes del trabajo es en el diccionario.",
  },
  {
    author: "Leo Tolstoy",
    quote:
      "Todos piensan en cambiar el mundo, pero nadie piensa en cambiarse a sí mismo.",
  },
  {
    author: "J.K. Rowling",
    quote:
      "No son nuestras habilidades lo que muestran lo que realmente somos, son nuestras elecciones.",
  },
  {
    author: "Mae West",
    quote: "Demasiado de algo bueno puede ser maravilloso.",
  },
  {
    author: "Rosa Parks",
    quote:
      "La única fatiga aceptable es la fatiga de los músculos que te lleva a la victoria.",
  },
  {
    author: "Charles Dickens",
    quote:
      "Nunca dejes que un problema para ser resuelto se convierta en más importante que una persona a ser amada.",
  },
  {
    author: "Thomas Edison",
    quote:
      "No he fallado. Solo he encontrado 10,000 maneras que no funcionarán.",
  },
  {
    author: "George Washington",
    quote:
      "La libertad, cuando empiezas a tomarle gusto, es una planta que crece rápido.",
  },
  {
    author: "Audrey Hepburn",
    quote: "Nada es imposible, la palabra misma dice 'soy posible'.",
  },
  {
    author: "Abraham Lincoln",
    quote:
      "Lo mejor que puedes hacer por los demás no es solo compartir tus riquezas, sino revelarles las suyas.",
  },
  {
    author: "Dalai Lama",
    quote:
      "La paz no se logra a través de la violencia, sino a través de la comprensión.",
  },
  {
    author: "Oprah Winfrey",
    quote:
      "Haz lo que tengas que hacer hasta que puedas hacer lo que quieras hacer.",
  },
  {
    author: "Frida Kahlo",
    quote: "Pies, ¿para qué los quiero si tengo alas para volar?",
  },
  {
    author: "Anne Frank",
    quote:
      "A pesar de todo, todavía creo que la gente es realmente buena en el fondo.",
  },
  {
    author: "Bill Gates",
    quote: "Si naciste pobre no es tu error, pero si mueres pobre es tu error.",
  },
  {
    author: "Elvis Presley",
    quote: "Las cosas que más importan en la vida no son cosas.",
  },
  {
    author: "William Shakespeare",
    quote: "Ser o no ser, esa es la cuestión.",
  },
  {
    author: "Malala Yousafzai",
    quote:
      "Un niño, un profesor, un libro y una pluma pueden cambiar el mundo.",
  },
  {
    author: "Winston Churchill",
    quote: "El éxito es ir de fracaso en fracaso sin perder entusiasmo.",
  },
  {
    author: "Eleanor Roosevelt",
    quote: "Hoy es el mañana del que te preocupabas ayer.",
  },
  {
    author: "Kurt Vonnegut",
    quote:
      "Estamos aquí en la Tierra para ayudar a otros; ¿qué sentido tiene el resto?",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "No es el tamaño de la mente lo que importa, sino el tamaño de los sueños.",
  },
  {
    author: "J.R.R. Tolkien",
    quote: "No todos los que vagan están perdidos.",
  },
  {
    author: "Homer Simpson",
    quote: "Intentar es el primer paso hacia el fracaso.",
  },
  {
    author: "Isaac Newton",
    quote: "Lo que sabemos es una gota, lo que ignoramos es un océano.",
  },
  {
    author: "Platón",
    quote: "La medida del hombre es lo que hace con el poder.",
  },
  {
    author: "Alan Turing",
    quote:
      "A veces es la gente que nadie imagina nada de la que hace cosas que nadie puede imaginar.",
  },
  {
    author: "Coco Chanel",
    quote: "La moda pasa, el estilo permanece.",
  },
  {
    author: "Frank Sinatra",
    quote: "La mejor venganza es el éxito masivo.",
  },
  {
    author: "Jimi Hendrix",
    quote:
      "Cuando el poder del amor supere el amor al poder, el mundo conocerá la paz.",
  },
];
export default quotes;

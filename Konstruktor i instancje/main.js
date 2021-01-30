//KONSTRUKTOR CAR - Wyrażenie funkcyjne
//Konstruktory piszemy z wielkiej litery.

// const Car = function() { };
// const maluch = new Car();

//Konstruktor car - funkcja

function Car(name) {
    // console.log(this)
    this.name = name
};
const maluch = new Car('maluch');
const polonez = new Car('polonez')

//1. Nowy pusty obiekt.
//2. Następuje wiązanie THIS z utworzonym obiektem
//3. Powstaje łączność _proto_ (prototype)
//4. Wywołanie funkcji Car na nowym obiekcie i przypisanie do ///   zmiennej (maluch)


maluch.name = 'zabytek'
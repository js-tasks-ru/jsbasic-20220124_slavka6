let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
    return this.a, this.b;
  },
  sum() {
    return this.a + this.b;
},
  mul() {
    return this.a * this.b;
  }
  
};

calculator.read(3, 5);
calculator.sum(); // 8
calculator.mul(); // 15
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

> `생성자 함수(constructor)` : `new 연산자` 와 함께 호출하여 객체(인스턴스)를 생성하는 함수
- `인스턴스(instance)` : 생성자 함수에 의해 생성된 객체
- 자바스크립트에서는 `Object` 생성자 함수 이외에도 `String, Number, Boolean, Function, Array, Date, RegExp, Promise` 등의 `빌드인(built-in)` 생성자 함수를 제공

<br />
<br />

# 객체 리터럴({ })에 의한 객체 생성 방식의 문제점

- 자바스크립트에서 객체를 생성하는 방법 중, `객체 리터럴({ ... })` 에 의한 객체 생성 방식은 직관적이고 간편하다.
- 단, 객체 리터럴에 의한 객체 생성 방식은 `단 하나의 객체만 생성`

```jsx
const person1 = {
  name: "Cha",
  getPersonName() {
    return `Hi, My Name is ${this.name}`;
  },
};
console.log(person1.getPersonName()); // Hi, My Name is Cha
const person2 = {
  name: "Minjae",
  getPersonName() {
    return `Hi, My Name is ${this.name}`;
  },
};
console.log(person2.getPersonName()); // Hi, My Name is Minjae
```

- 객체는 다음 2가지로 표현할 수 있다.
  - 프로퍼티를 통해 => 객체 고유의 `상태(state)`
  - 메서드를 통해 프로퍼티를 참조하고 조작하는 => 객체의 `동작(behavior)`
- 상태(state)의 경우는 객체마다 각기 다른 값을 가질 수 있으나
- 메서드(behavior)의 경우는 내용이 동일한 경우가 일반적이다. => `메서드는 재활용성이 필요함`
- 하지만, 객체 리터럴로 객체를 표현하는 경우, 프로퍼티의 구조가 동일함에도 불구하고, 매번 같은 프로퍼티와 메서드를 기술해야한다.

<br />

# 생성자 함수에 의한 객체 생성 방식의 장점

- 객체(인스턴스)를 생성하기 위한 `템플릿(클래스)` 처럼 생성자 함수를 사용해서 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

```jsx
// 생성자 함수 Person 선언
function Person(name) {
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };
}
// new 연산자와 함께 Person 객체(인스턴스) 생성
const person1 = new Person("Cha");
const person2 = new Person("Minjae");
// 각 Person 객체의 메서드 호출
console.log(person1.getPersonName()); // Hi, My Name is Cha
console.log(person2.getPersonName()); // Hi, My Name is Minjae
```

<br />

### 자바스크립트에서 생성자 함수

- 일반적인 클래스 기반 객체지향언어에서 생성자와는 다르게, 자바스크립트에서 생성자는 형식이 정해져 있지 않다.
  - `일반 함수와 동일한 방법으로 생성자 함수를 정의하고`
  - `new 연산자와 함께 호출하면`
  - 해당 함수는 생성자 함수로 동작하는 것
- 만약, `new 연산자` 와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라, `일반 함수로 동작`한다.

```jsx
// 생성자 함수 Person 선언
function Person(name) {
  this.name = name;
  this.getPersonName = function () {
    return `Hi, My Name is ${this.name}`;
  };
}
// 생성자 함수 Person 이지만, `new 연산자와 함께 호출되지 않았으므로`, Person 생성자함수는 일반함수로 호출된다.
// 일반 함수 관점에서 봤을 때, 함수 몸체 내부에서 반환하는 값은 없으므로, 암묵적으로 undefined 를 반환
const person1 = Person("Cha");
console.log(person1); // undefined
console.log(name); // Cha << 🔍
```

- 위에 예제에서 `name` 프로퍼티는, `전역 객체의 프로퍼티로 등록`된다.

<br />
<br />
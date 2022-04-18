# 객체란?

> 자바스크립트는 객체 기반의 프로그래밍언어

- 원시 값은 변경 불가능한 값이지만, 객체 타입의 값, 객체는 변경 가능한 값이다.
- 객체는 0개 이상의 `프로퍼티`로 구성된 집합, `프로퍼티` = 키 + 값 으로 구성

```jsx
var person = {
    name: 'Lee',
    age: 20
    // name과 age는 key, 'Lee'와 20은 값(value), 프로퍼티는 총 2개이다.
}
```

- 메서드 : 프로퍼티를 참조하고 조작할 수 있는 동작(behavior), 프로퍼티 값이 함수일 경우 메서드라고 한다.

```jsx
var counter = {
    num: 0,
    increase : function () {
        this.num++;
    }
};
```

<br>
<br>

# 객체 리터럴에 의한 객체 생성

> 자바스크립트는 프로토타입 기반 객체지향의 언어 => 클래스 기반 언어와 달리 다양한 객체 생성 방법을 지원.

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스 (ES6)

이러한 객체 생성 방법 중에서 가장 일반적이고 간단한 방법 => 객체 리터럴을 사용하는 방법
<br>
> 리터럴 : 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용하여 값을 표기하는 표기법

```jsx
var person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello My name is ${this.name}`);
  },
};
console.log(typeof person); // object
console.log(person); // { name: 'Lee', sayHello: [Function: sayHello] }
```

<br>
<br>

# 프로퍼티

- `프로퍼티 키(key)` : 빈 문자열( `''` ) 을 포함하는 모든 `문자열(string)` 또는 `심벌(symbol) 값`
- `프로퍼티 값(value)` : 자바스크립트에서 사용할 수 있는 모든 값

```jsx
var person = {
  name: "Lee", // 프로퍼티 키는 name, 프로퍼티 값은 "Lee"
  age: 100, // 프로퍼티 키는 age, 프로퍼티 값은 100
};
```

- 프로퍼티에 문자열이나 심벌 값 외의 값을 사용하면 `암묵적 타입 변환` 을 통해 문자열이 된다.

```jsx
var foo = {
  0: 1,
  1: 2,
  2: 3,
};
console.log(foo); // { '0': 1, '1': 2, '2': 3 } => 키값이 문자열 형태로 암묵적 타입 변환됨
```

- 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓰게 된다.

```jsx
var foo = {
  name: "Leeeee",
  name: "Lee",
};
console.log(foo); // { name: 'Lee' }
```

<br>
<br>

# 프로퍼티 접근 방법

- `마침표(.)` 프로퍼티 접근 연산자를 사용하는 방법 => `마침표 표기법`
- `대괄호([...])` 프로퍼티 접근 연산자를 사용하는 방법 => `대괄호 표기법`

```jsx
var person = {
  name: "Lee",
};
console.log(person.name); // "Lee" ( 마침표 표기법 )
console.log(person["name"]); // "Lee" ( 대괄호 표기법 )

// 대괄호 프로퍼티 접근 연산자 내에 `문자열 형태가 아닌!` 프로퍼티 키로 사용하면 자바스크립트 엔진은 "식별자"로 해석한다
console.log(person[name]); // ReferenceError: name is not defined
// 객체에 존재하지 않는 프로퍼티에 접근시 -> undefined
console.log(person.age); // undefined
```

<br>
<br>

# 프로퍼티 동적 생성 & 삭제

```jsx
var person = {
  name: "Lee",
};
person.age = 100; // { age: 100 } 프로퍼티 동적 생성
console.log(person); // { name: 'Lee', age: 100 }

delete person.age; // age 라는 프로퍼티 키가 있고 => 해당 프로퍼티가 삭제됨
delete person.job; // job 이라는 프로퍼티 키는 없음 => 그래도 delete 연산시 에러 발생 X

console.log(person); // { name: 'Lee' }
```

<br>
<br>

# ES6에서 추가된 객체 리터럴 확장 기능

### 객체 리터럴 내부에서 계산된 프로퍼티 이름

- `ES5 문법`

```jsx
var prefix = "prop";
var i = 0;
var obj = {};
// "계산된 프로퍼티 이름"으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }
```

- `ES6 문법`

```jsx
const prefix = "prop";
let i = 0;
// "객체 리터럴 내부"에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};
console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }
```

<br>

### 메서드 축약 표현

- `ES5 문법`

```jsx
var obj = {
  name: "Lee",
  // 프로퍼티 값으로 "함수를 할당"
  sayHi: function () {
    console.log(`Hi! ${this.name}`);
  },
};
obj.sayHi(); // Hi! Lee
```

- `ES6 문법`
  - 단, `메서드 축약 표현` 으로 정의한 메서드는 `프로퍼티에 할당한 함수(ES5)` 와 다르게 동작한다.

```jsx
const obj = {
  name: "Lee",
  // 메서드 축약 표현 ( 함수 선언식 필요 X )
  sayHi() { // 키 없이 바로 function으로 축약 가능해졌다.
    console.log(`Hi! ${this.name}`);
  },
};
obj.sayHi(); // Hi! Lee
```

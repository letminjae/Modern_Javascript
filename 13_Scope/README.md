# 스코프 란?
> 스코프(Scope) =  유효범위 = `식별자가 유효한 범위` = 자바스크립트 엔진이 `식별자를 검색할 때 사용하는 규칙`

- `모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)`는 자신이 `선언된 위치`에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효범위가 결정된다.

```jsx
var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수

if (true) {
  var var2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}
function foo() {
  var var4 = 4; // 함수 내에서 선언한 변수
  function bar() {
    var var5 = 5; // 중첩된 함수 내에서 선언한 변수
  }
}
console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // ReferenceError: var4 is not defined
console.log(var5); // ReferenceError: var5 is not defined
```

<br />

## 식별자 결정

> 자바스크립트 엔진이 같은 이름의 두 식별자 중 `어떤 식별자를 참조해야 할 것인지?` 결정하는 것

- 자바스크립트 엔진은 코드를 실행할 때 `코드의 문맥을 고려한다.`
    - 코드가 어디서 실행되는지?
    - 주변에 어떤 코드가 있는지? 
<br />
<b> 동일한 코드도 다른 결과를 만든다! </b>

```jsx
var x = "global";

function foo() {
  var x = "local";
  console.log(x); // local
}

foo();

console.log(x); // global
```

![전역 스코프 지역 스코프](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcn0zjT%2FbtqZoydJdrc%2FvHquKk6Vb0mf4PaExIsZX1%2Fimg.png)

- `스코프` 라는 개념이 없다면, 위에 코드 상황에서는 `x` 라는 변수가 `전역` , `foo` 함수 모두 존재하기 때문에 `충돌` 할 것이다.
- 식별자는 어떤 값을 구별할 수 있어야 하므로 `유일`해야 한다.
- 따라서 식별자인 변수 이름은 `중복될 수 없다.` => 하나의 값은 유일한 식별자에 연결되어야 한다.

```jsx
컴퓨터에서 "동일한 파일 이름" 이 스코프를 통한 식별자 결정 가능의 예시 중 하나이다.
= "다른 폴더" 간에 "동일한 파일 이름"은 다른 파일로 식별하고 생성이 가능하다.
```

<br />
<br />
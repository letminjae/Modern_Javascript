# 타입변환

> 명시적 타입변환과 암묵적 타입변환

- `명시적 타입변환 (Type casting)` : 개발자가 의도적으로 값의 타입을 변환시키는 것
- `암묵적 타입변환 (Type coercion)` : 개발자의 의도와는 상관없이 표현식을 평가할 때 자바스크립트 엔진이 암묵적으로 타입을 바꾸는 것

<br>

# 명시적 타입변환 (Type casting)

- 표준 빌트인(built-in) 생성자 함수 → String(), Number(), Boolean() 을 `new 키워드 없이` 호출하는 방법
- 빌트인(built-in) 메서드를 사용하는 방법
- 암묵적 타입변환

## 문자열 타입으로 변환할 때
```jsx
// 1. String 생성자 함수를  new 키워드 없이 호출하는 방법
String(1);              // "1"
String(NaN);            // "NaN"
String(Infinity);       // "Infinity"
String(true);           // "true"
String(false);          // "false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
(1).toString();         // "1"
(NaN).toString();       // "NaN";
(Infinity).toString();  // "Infinity"
(true).toString();      // "true"
(false).toString();     // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
1 + '';                 // "1"
...
```


## 숫자 타입으로 변환할 때
```jsx
// 1. Number 생성자 함수를 new 키워드 없이 호출하는 방법
Number("0"); // 0
Number("-1"); // -1
Number("10.53"); // 10.53
Number(true); // 1
Number(false); // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
parseInt("0"); // 0
parseInt("-1"); // -1
parseInt("10.53"); // 10
parseFloat("10.53"); // 10.53

// 산술 연산자를 사용하는 방법
+"0"; // 0
```


## 불리언 타입으로 변환할 때
```jsx
// 1. Boolean 생성자 함수를 new 키워드 없이 호출하는 방법
Boolean('x');       // true
Boolean('');        // false
Boolean('false');   // true
Boolean(0);         // false
Boolean(1);         // true
Boolean(NaN);       // false
Boolean(Infinity);  // true
Boolean(null);      // false
Boolean(undefined); // false
Boolean({});        // true
Boolean([]);        // true

// 2. !(부정 논리 연산자를 두 번 사용하는 방법
!!'x';  // true ( !(!'x') === !(false) -> true )
...
```

<br>

# 암묵적 타입변환 (Type coercion)

- 암묵적 타입변환이 발생하면 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동변환 시킨다.

### 문자열 타입으로 변환

```jsx
// 숫자 타입
NaN + '';             // "NaN"
Infinity + ''         // "Infinity"

// null 타입
null + '';            // "null"

// undefined 타입
undefined + '';       // "undefined"

// 심벌 타입
(Symbol()) + '';      // TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + '';            // "[object Object]"
Math + '';            // "[object Math]"
[] + '';              // ""
[10, 20] + '';        // "10,20"
(function(){}_ + '';  // "function(){}"
Array + '';           // "function Array() { [native code] }"
```

<br>

### 숫자 타입으로 변환

```jsx
// 문자열 타입
+""; // 0
+"0"; // 0
+"1"; // 1
+"string" + // NaN

// 불리언 타입
true; // 1
+false; // 0

// null 타입
+null; // 0

// undefined 타입
+undefined; // NaN

// 심벌 타입
+Symbol(); // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{}; // NaN
+[]; // 0
+[10, 20]; // NaN
+function () {}; // NaN
```

- `빈 문자열(''), 빈 배열([]), null, false` → `0`
- `true` → `1`
- `객체, 빈 배열이 아닌 배열(= 값이 있는 배열), undefined` → `NaN` ( 주의 ! )

<br>

### 불리언 타입으로 변환

> 자바스크립트 엔진은 불리언 타입이 아닌 값을 `Truthy 값(참으로 평가되는 값)` or `Falsy 값(거짓으로 평가되는 값)` 으로 구분한다.

```jsx
// 💡 자바스크립트 엔진이 Falsy 값으로 판단하는 값
+ false
+ undefined
+ null
+ 0, -0
+ NaN
+ ''(빈 문자열)
```

- `Falsy 값` 을 제외한 모든 값은 `Truthy 값`이다.

<br>
<br>

# 단축 평가

> 논리 연산의 결과를 결정하는 피연산자를 `타입 변환하지 않고 그대로 반환` 하는 것

| 단축 평가 표현식  | 평가 결과 |
| ----------------- | --------- |
| true ll anything  | true      |
| false ll anything | anything  |
| true && anything  | anything  |
| false && anything | false     |

단축평가는 표현식을 평가하는 도중에 평가결과가 확정되면 `나머지 평가 과정을 생략`

<br>

# 옵셔널 체이닝

> `?.` => 좌항의 피연산자가 `null 또는 undefined` 이면 `undefined` 반환

- 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 안전하게 참조할 때 사용된다.
- 옵셔널 체이닝 도입 이전에는 `논리곱(&&)을 사용한 단축 평가`를 통해 → 변수가 null 또는 undefined 인지 확인했다.


<br>


# null 병합

> ?? => 좌항의 피연산자가 `null 또는 undefined` 이면 `우항의 피연산자를 반환` 한다.

```jsx
var foo = null ?? "default string"; // "default string"
```

- 변수에 기본값을 설정할 때 유용하다.
- null 병합 연산자 도입 이전에는 `논리합(||)을 사용한 단축 평가` 를 통해 → 변수에 기본값을 설정했다.
# 자바스크립트에서 배열이란

> 자바스크립트에서 배열은 `객체 타입(object)`

- 자바스크립트에 `배열` 이라는 타입은 존재하지 않는다.
- 자바스크립트의 배열은 `객체` 지만 일반 객체와는 구별된 특징을 가진다.
  | 구분 | 객체 | 배열 |
  | --------------- | ------------------------- | ------------- |
  | 구조 | 프로퍼티 키와 프로퍼티 값 | 인덱스와 요소 |
  | 값의 참조 | 프로퍼티 키 | 인덱스 |
  | 값의 순서 | X | O |
  | length 프로퍼티 | X | O |
  - 표에서 알 수 있듯이 `값의 순서` 와 `length 프로퍼티` 를 갖는다는 점이 가장 큰 차이점
  - 이는 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조임을 나타낸다.

<br />
<br />

# 자바스크립트 배열은 배열이 아니다 ?

> 배열은 2가지로 구분할 수 있다.

- `밀집 배열(dense array)`
- `희소 배열(sparse array)`

<br />

### 밀집 배열

- 자료구조에서 일반적으로 언급하는 `동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조`
- 배열의 요소들은 `하나의 데이터 타입으로 통일`, `서로 연속적으로 인접해 있는 형태를 의미`
  - 연속적인 구조이기 때문에, `인덱스(index)` 를 통해 `단 한 번의 연산으로 요소에 접근(random access, O(1)) 가능`
  - 하지만, `정렬되지 않은 배열이면서 특정 요소를 검색하는 경우` , 배열의 모든 요소를 처음부터 원하는 요소를 발견할 때까지 순회해야하므로 O(n) 시간복잡도를 가질 수 있다.
  - 또한, 배열에 요소를 `삽입, 삭제` 하는 경우도 연속적인 구조를 유지시키기 위해 요소를 작업시마다 이동시켜야 하는 단점도 존재

<br />

### 희소 배열

- 배열의 요소들의 `각각의 메모리 공간이 동일한 크기를 갖지 않아도 되며`, `연속적으로 이어져 있지 않아도 된다.`
- 이를 희소 배열(sparse array)이라 하며, `자바스크립트 배열은 희소 배열이다.`

> 자바스크립트 배열은 일반적인 배열의 동작을 흉내 낸 특수한 `객체`다.

- 자바스크립트 배열은 `인덱스를 나타내는 문자열` 을 프로퍼티 키로 가지며, `length 프로퍼티` 를 갖는 특수한 객체
- 배열의 요소는 사실 `프로퍼티 값`
  - 자바스크립트에서 사용할 수 있는 모든 값은 `객체의 프로퍼티 값이 될 수 있으므로` 어떤 타입의 값도 배열의 요소가 될 수 있다.

<br />
<br />

# length 프로퍼티와 희소 배열

> `length 프로퍼티` 는 `배열의 요소의 개수` 를 나타낸다.

- length 프로퍼티 값은 `0 ~ 2^32 - 1 미만의 양의 정수` 를 가진다.
- 즉, `최대 2^32 - 1 개의 요소` 를 가질 수 있다.
- 기본적으로는 배열의 길이를 바탕으로 결정되지만 `임의의 숫자 값을 명시적으로 할당도 가능`
  - 이 경우, 현재 프로퍼티의 length 프로퍼티 값보다 작은 숫자 값을 할당할 경우 `배열의 길이가 줄어든다.`
  - 현재 프로퍼티의 length 프로퍼티 값보다 큰 숫자 값을 할당할 경우는 `length 프로퍼티 값은 변경되지만, 실제 배열의 길이는 변함없다.`
  - 이것은 length 프로퍼티가 `값 없이 비어 있는 요소를 위해 메모리 공간을 확보하지 않으며 빈 요소를 생성하지 않음을 의미`
- 이처럼 배열의 요소가 `연속적으로 위치하지 않고 일부가 비어 있는 배열` == `희소 배열(sparse array)`
  - 자바스크립트 엔진은 희소 배열을 문법적으로 허용한다.
  - 하지만, 희소 배열은 의도적으로 생성하는 일은 많지 않기 때문에 가능한 사용하지 않는 것이 좋다.
  - 가능한, `배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선`

<br />
<br />

# 배열 생성

> 자바스크립트에서 배열을 생성하는 방식도 여러 가지가 존재한다.

1. `배열 리터럴`

   - 배열을 생성하는 가장 간단한 방식
   - 배열 리터럴에 요소를 생략하면 `희소 배열이 생성`

   ```jsx
   // 배열의 요소를 생략하면 "희소 배열"생성
   const arr = [1, , 3];

   console.log(arr.length); // 3
   console.log(arr); // [ 1, <1 empty item>, 3 ]
   console.log(arr[1]); // undefined
   ```

2. `Array 생성자 함수`

   - 인수의 개수에 따라 다르게 동작한다.

     - 전달된 인수가 1개 이며 숫자일 경우 → `length 프로퍼티 값이 인수인 배열을 생성`
     - 전달된 인수가 없는 경우 → `빈 배열 생성`
     - 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 → `인수를 요소로 갖는 배열을 생성`

       ```jsx
       // 인수가 1개이며 정수인 경우 -> 희소 배열 생성
       const arr = new Array(10);

       console.log(arr); // [ <10 empty items> ]
       console.log(arr.length); // 10
       console.log(Object.getOwnPropertyDescriptors(arr)); // { length: { value: 10, writable: true, enumerable: false, configurable: false } }

       new Array(4294967295);
       new Array(4294967296); // RangeError: Invalid array length
       new Array(-1); // RangeError: Invalid array length

       // 인수가 없는 경우 -> 빈 배열 생성
       new Array(); // []

       // 인수가 2개 이상이거나 숫자가 아닌 경우 -> 인수를 요소로 갖는 배열을 생성
       new Array(1, 2, 3); // [1,2,3]
       new Array({}); // [{}]
       ```

3. `Array.of 메서드`

   - `ES6에 도입`
   - 전달된 인수를 갖는 배열을 생성
   - 인수가 1개이고 숫자여도 `인수를 요소로 갖는 배열을 생성`

   ```jsx
   const arr1 = Array.of(1);
   const arr2 = Array.of(1, 2, 3);
   const arr3 = Array.of("string");

   console.log(arr1); // [ 1 ]
   console.log(arr2); // [ 1, 2, 3 ]
   console.log(arr3); // [ 'string' ]
   ```

4. `Array.from 메서드`

   - `ES6에 도입`
   - `유사 배열 객체(array-like object)` or `이터러블 객체(iterable object)` 를 인수로 전달받아 배열로 변환 후 반환
     - 두 번째 인수로 함께 전달할 `콜백 함수를 통해 값을 만들면서 요소를 채울 수도 있다.`

   ```jsx
   // 유사 배열 객체를 배열로 변환
   const arr1 = Array.from({ length: 2, 0: "a", 1: "b" });

   // 이터러블 객체를 배열로 변환
   // 문자열은 "이터러블 객체"이기도 하다.
   const arr2 = Array.from("Hi");

   console.log(arr1); // [ 'a', 'b' ]
   console.log(arr2); // [ 'H', 'i' ]
   ```

<br />
<br />

# 배열 참조

- 배열을 참조할 때는 `대괄호([])` 를 사용하며, 대괄호 안에는 `인덱스` 가 와야 한다.
- `정수로 평가되는 표현식` 이라면 인덱스로 사용 가능하다.
- 존재하지 않는 요소에 접근하면 `undefined가 반환`
  - 배열은 `객체` 이기 때문에 객체에서 존재하지 않는 프로퍼티에 접근하면 `undefined` 를 반환하는 것과 같다.

```jsx
// 희소 배열
const arr = [1, , 3];

// arr 배열의 1번째 인덱스에는 요소가 존재하지 않는다.
// 하지만, length 프로퍼티는 empty 요소도 포함해서 길이를 측정한다.
// 단, 실질적인 배열 프로퍼티의 메모리 공간에는 빈 요소의 영역은 할당되지 않는다.
console.log(Object.getOwnPropertyDescriptors(arr));
// {
//   '0': { value: 1, writable: true, enumerable: true, configurable: true },
//   '2': { value: 3, writable: true, enumerable: true, configurable: true },
//   length: { value: 3, writable: true, enumerable: false, configurable: false }
// }

// 존재하지 않는 요소를 참조하면 undefined
console.log(arr[1]); // undefined
console.log(arr[3]); // undefined
```

<br />
<br />

# 배열 요소의 추가,갱신,삭제

### 추가 & 갱신

- 배열도 `객체` 이므로, 객체의 `프로퍼티를 동적` 으로 추가할 수 있는 것처럼 배열에도 `요소를 동적으로 추가할 수 있다.`
- 만약, 현재 배열의 length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 `희소 배열이 된다.`
  - 명시적으로, 값이 할당되지 않은 희소 배열의 요소들은 `생성되지 않는다.` ( 즉, length 프로퍼티 값은 변하나 실질적인 배열안에 요소의 개수는 변함없다. )
- `0이상 정수(또는 문자열 형태 숫자)` 로 인덱싱에 사용해야 한다.
  - 만약, 정수 이외의 값을 인덱싱에 사용하면 `요소가 생성되는 것이 아니라, 프로퍼티가 생성된다.`
  - 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는다.

<br />

### 삭제

- 배열도 객체이므로 배열의 특정 요소를 삭제하기 위해 `delete 연산자` 를 사용할 수 있다.
- delete 연산자를 통해 배열의 요소를 삭제하는 것은 `객체의 프로퍼티를 삭제하는 개념과 같다.`
  - 요소의 값이 삭제되면 `희소 배열이 된다.`
  - 이 때, length 프로퍼티에는 영향을 주지 않는다.
- 따라서, 희소 배열을 만들지 않으면서 배열을 삭제하고 싶을 경우 `Array.prototype.splice 메서드를 사용할 것`

<br />
<br />

# 배열 메서드

> 자바스크립트 배열은 다양한 `빌트인 메서드를 제공`

- 배열 생성자 함수는 다양한 `배열 정적 메서드를 제공`
- 배열 객체의 Array.prototype 은 `프로토타입 메서드를 제공`

> 결과물을 반환하는 패턴은 두 가지다.

- 원본 배열을 직접 변경하는 메서드 ( `mutator method` )
  - 원본 배열을 직접 변경하는 메서드는 `외부 상태를 직접 변경하는 부수 효과(side effect)`가 있으므로 주의할 것
- 원본 배열을 직접 변경하지 않고, 새로운 배열을 생성하여 반환하는 메서드 ( `accessor method` )
  - 가급적 원본 배열을 직접 변경하지 않는 메서드를 사용하는 편이 좋다.

<br />

### Array.isArray 메서드

> Array 생성자 함수의 정적 메서드

- 전달된 인수가 배열이면 `true` , 배열이 아니면 `false` 를 반환

  ```jsx
  console.log(Array.isArray([])); // true
  console.log(Array.isArray([1, 2])); // true
  console.log(Array.isArray(new Array())); // true

  console.log(Array.isArray(null)); // false
  console.log(Array.isArray(1)); // false
  console.log(Array.isArray("string")); // false
  console.log(Array.isArray(undefined)); // false
  console.log(Array.isArray(true)); // false
  console.log(Array.isArray({})); // false
  ```

<br />

### Array.prototype.indexOf 메서드

- 원본 배열에서 인수로 전달한 `요소를 검색하여 인덱스를 반환`

  - 검색되는 요소가 중복되어 여러 개일 경우 `첫 번째 검색된 요소의 인덱스를 반환`
  - 원본 배열에 검색할 요소가 존재하지 않으면 `-1 반환`
  - `배열에 특정 요소가 존재하는지 확인할 때 유용`

  ```jsx
  const arr = [1, 2, 2, 3];

  console.log(arr.indexOf(2)); // 1  ( 2를 검색 )
  console.log(arr.indexOf(2, 2)); // 2  ( 2번 째 인덱스 2를 검색)
  console.log(arr.indexOf(-1)); // -1 ( 존재하지 않는 요소 검색 )
  ```

<br />

### Array.prototype.push 메서드

- 인수로 전달받은 `모든 값을 원본 배열 마지막 요소로 추가` , `변경된 length 프로퍼티 값을 반환`
- `mutator method`
  - 부수 효과가 있으므로, `ES6의 스프레드 문법을 사용하는 편이 좋다.`
- 성능 측면에서 배열에 추가할 요소가 하나라면 마지막 배열 요소를 직접 추가하는 방법이 더 빠르다.

  ```jsx
  const arr = [1, 2];

  arr.push([3, 4]);
  console.log(arr); // [ 1, 2, [ 3, 4 ] ]

  arr.push("a", "b");
  console.log(arr); // [ 1, 2, [ 3, 4 ], 'a', 'b' ]

  const arr2 = [...arr, true];
  console.log(arr2); // [ 1, 2, [ 3, 4 ], 'a', 'b', true ]
  ```

<br />

### Array.prototype.pop 메서드

- 원본 배열에서 `마지막 요소를 제거하고 제거한 요소를 반환`
  - 원본 배열이 `빈 배열이면 undefined 반환`
- `mutator method`

  ```jsx
  const arr = [1, 2];

  let pop = arr.pop();
  console.log(arr); // [ 1 ]
  console.log(pop); // 2
  ```

- push 메서드와 혼합해서 `스택(stack) 자료구조` 를 구현할 수 있다.

  ```jsx
  // 클래스로 구현한 push와 pop 메서드를 활용한 "스택 자료구조"
  class Stack {
    #array;

    constructor(array = []) {
      if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array !`);
      }
      this.#array = array;
    }

    push(value) {
      return this.#array.push(value);
    }

    pop() {
      return this.#array.pop();
    }

    entries() {
      return [...this.#array];
    }
  }

  const stack = new Stack([1, 2]);
  console.log(stack.entries()); // [ 1, 2 ]

  stack.push(3);
  console.log(stack.entries()); // [ 1, 2, 3 ]

  let pop = stack.pop();
  console.log(stack.entries(), pop); // [ 1, 2 ] 3
  ```

<br />

### Array.prototype.unshift 메서드

- 인수로 전달 받은 `모든 값을 원본 배열의 선두에 추가`하고 `변경된 length 프로퍼티 값을 반환`
- `mutator mehtod`

  - 부수 효과가 있으므로, `ES6의 스프레드 문법을 사용하는 편이 좋다.`

  ```jsx
  const arr = [1, 2];

  let result = arr.unshift(3, 4);
  console.log(result); // 4
  console.log(arr); // [ 3, 4, 1, 2 ]

  const newArr = [100, ...arr];
  console.log(newArr); // [ 100, 3, 4, 1, 2 ]
  ```

<br />

### Array.prototype.shift 메서드

- 원본 배열에서 `첫 번째 요소를 제거하고 제거한 요소를 반환`
  - 원본 배열이 빈 배열이면 `undefined 반환`
- `mutator method`

  ```jsx
  const arr = [1, 2];

  let shift = arr.shift();
  console.log(shift); // 1
  console.log(arr); // [ 2 ]
  ```

- unshift 메서드와 혼합해서 `큐(queue) 자료구조` 를 구현할 수 있다.

  ```jsx
  class Queue {
    #array;

    constructor(array = []) {
      if (!Array.isArray(array)) {
        throw new TypeError(`${array} is not an array !`);
      }
      this.#array = array;
    }

    enqueue(value) {
      return this.#array.push(value);
    }

    dequeue() {
      return this.#array.shift();
    }

    entries() {
      return [...this.#array];
    }
  }

  const queue = new Queue([1, 2]);
  console.log(queue.entries()); // [ 1, 2 ]

  queue.enqueue(3);
  console.log(queue.entries()); // [ 1, 2, 3 ]

  let dequeue = queue.dequeue();
  console.log(queue.entries(), dequeue); // [ 2, 3 ] 1
  ```

<br />

### Array.prototype.concat 메서드

- 인수로 전달된 값들(배열 or 원시값)을 `원본 배열의 마지막 요소로 추가한 새로운 배열을 반환`
  - 인수로 전달한 값이 배열인 경우, 배열을 해체하여 새로운 배열의 요소로 추가
- push 메서드와 unshift 메서드는 concat 메서드로 대체 가능
  - 다만, 차이점은 concat 메서드는 원본 배열을 직접 변경하지 않고, 새로운 배열을 반환하는 것
  - 따라서, push 와 unshift 메서드의 경우 원본 배열은 다른 변수에 복사해놓고 사용해야 안전
- `ES6의 스프레드 문법으로 대체 가능하다.`

  ```jsx
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  const arr3 = arr1.concat(arr2);
  console.log(arr3); // [ 1, 2, 3, 4 ]
  console.log(arr1, arr2); // [ 1, 2 ] [ 3, 4 ]

  const arr4 = arr3.concat("a", true);
  console.log(arr4); // [ 1, 2, 3, 4, 'a', true ]
  ```

<br />

### Array.prototype.splice 메서드

- 원본 배열의 `중간에 요소를 추가`하거나 `중간에 있는 요소를 제거`하는 경우 사용
- 3개의 매개변수를 가진다.

  - `start` : 삭제 시작 인덱스
  - `deleteCount` : 시작 인덱스로부터 삭제할 요소의 개수
  - `items` : 요소를 삭제 후, 삭제한 인덱스로부터 추가할 데이터

  ```jsx
  const arr = [1, 2, 3, 4];

  const result = arr.splice(2, 1, 300);

  console.log(result); // [ 3 ]
  console.log(arr); // [ 1, 2, 300, 4 ]
  ```

- 배열에서 특정 요소를 제거하려면 Array.prototype.indexOf 와 혼합해서 구현할 수 있다.

  ```jsx
  const arr = [1, 2, 3, 1, 2];

  function remove(array, item) {
    const index = array.indexOf(item);

    if (index !== -1) array.splice(index, 1);

    return array;
  }

  console.log(remove(arr, 2)); // [ 1, 3, 1, 2 ] << 1번째 인덱스에 요소 2가 삭제된 후의 배열을 반환
  console.log(remove(arr, 100)); // [ 1, 3, 1, 2 ] << 100은 존재하지 않으므로 삭제된 요소는 없음
  ```

<br />

### Array.prototype.slice 메서드

- 인수로 전달된 `범위의 요소들을 복사하여 배열로 반환`
- `accessor method`
- 2개의 매개변수를 가진다.

  - `start` : 복사 시작할 인덱스
  - `end` : 복사 끝 인덱스

  ```jsx
  const arr = [1, 2, 3];

  console.log(arr.slice(1, 3)); // [ 2, 3 ]
  console.log(arr); // [ 1, 2, 3 ]
  ```

- `얕은 복사(shallow copy)를 통해 새로운 배열을 생성`

  ```jsx
  const arr = [1, 2, 3];
  const shallowCopy = arr.slice();

  shallowCopy.splice(0, 1); // 복사본 배열 첫 번째 요소 삭제
  console.log(shallowCopy); // [ 2, 3 ]
  console.log(arr); // [ 1, 2, 3 ]
  ```

<br />

### Array.prototype.join 메서드

- 원본 배열의 `모든 요소를 문자열로 변환한 후`, 인수로 전달받은 문자열, 즉 `구분자(separator)로 연결한 문자열을 반환`

  - 구분자는 `생략 가능`하며 `default separator 는 콤마(,)다.`

  ```jsx
  const arr = [1, 2, 3, 4];

  console.log(arr.join()); // 1,2,3,4
  console.log(arr.join(":")); // 1:2:3:4
  console.log(arr.join("")); // 1234
  ```

<br />

### Array.prototype.reverse 메서드

- `원본 배열의 순서를 반대로 뒤집는다.`
- `mutator method`
- 반환 값은 변경된 배열

  ```jsx
  const arr = [1, 2, 3];
  const reversed = arr.reverse();

  console.log(arr); // [ 3, 2, 1 ] << 원본 데이터 파괴 (mutator method)
  console.log(reversed); // [ 3, 2, 1 ]
  ```

<br />

### Array.prototype.fill 메서드

- `ES6에 도입`
- 인수로 전달받은 값을 `배열의 처음부터 끝까지 요소로 채운다.`
- `mutator method`
- 3개의 파라미터를 가진다.

  - `initialValue` : 초기화 시킬 값
  - `start` : 시작 인덱스 값
  - `end` : 끝 인덱스 값

  ```jsx
  const arr = new Array(3);
  console.log(arr); // [ <3 empty items> ]

  arr.fill(1);
  console.log(arr); // [ 1, 1, 1 ]

  arr.fill(100, 1, 2);
  console.log(arr); // [ 1, 100, 1 ] << 원본 데이터 파괴 (mutator method)
  ```

<br />

### Array.prototype.includes 메서드

- `ES7에 도입`
- 배열 내에 `특정 요소가 포함되어 있는지 확인하여 true OR false 를 반환`
- 2개의 매개변수를 가진다.

  - `serachValue` : 검색할 값
  - `start` : 시작 인덱스

  ```jsx
  const arr = [1, 2, 3];

  console.log(arr.includes(3)); // true
  console.log(arr.includes(100)); // false
  ```

- Array.prototype.indexOf 메서드와 차이점은 `indexOf 메서드는 없으면 -1 임을 확인해야하며, 배열에 NaN 이 있다면 판별할 수 없다.`
  ```jsx
  console.log([NaN].indexOf(NaN)); // -1 🔍
  console.log([NaN].includes(NaN)); // true
  ```

<br />

### Array.prototype.flat 메서드

- `ES10에 도입`
- 인수로 전달한 `깊이만큼 재귀적으로 배열을 평탄화(flat)한다.`
- defaultValue 는 1이다.

  - 인수를 `Infinity` 로 넘기면, `아무리 깊은 중첩 배열도 모두 평탄화한다.`

  ```jsx
  const dupArr = [1, [2, 3, 4, 5]];
  console.log(dupArr.flat()); // [ 1, 2, 3, 4, 5 ]

  const dupArr2 = [1, [2, [3, 4, 5]]];
  console.log(dupArr2.flat()); // [ 1, 2, [ 3, 4, 5 ] ] 🔍
  console.log(dupArr2.flat(Infinity)); // [1, 2, 3, 4, 5];
  ```

<br />
<br />

# 배열 고차 함수

> `고차 함수(Higher-Order Function, HOF)` : 함수를 인수로 전달받거나 함수를 반환하는 함수를 의미

- 자바스크립트에서 함수는 `객체`다.
  - 정확히는 `일급 객체`다.
  - 따라서, 함수를 값처럼 인수로 전달할 수 있으며 반환할 수도 있는 것이다.
- 고차 함수는 외부 상태의 변경이나 `가변 데이터(mutable data)를 피하고 불변성(immutability)을 지향하는 함수형 프로그래밍에 기반을 둔다.`
  - 함수형 프로그래밍은 `순수 함수(pure function)`와 `보조 함수의 조합`을 통해 로직 내에 존재하는 `조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제`하여 상태 변경을 피하려는 `프로그래밍 패러타임을 의미`
- 자바스크립트 배열은 매우 유용한 고차 함수를 제공

<br />

### Array.prototype.sort 메서드

- `배열의 요소를 정렬, 정렬된 배열을 반환`

  - default 로는 오름차순 정렬이다.

  ```jsx
  const fruits = ["Banana", "Orange", "Apple"];

  fruits.sort();
  console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
  ```

- `mutator method`
- 기본적인 정렬 순서는 `유니코드 코드 포인트의 순서를 따른다.`

  - 배열의 요소들을 정렬 시, `숫자 타입이어도 암묵적으로 문자열 타입으로 변환 후 유니코드 코드 포인트 순서에 따라 정렬`
  - 따라서, 숫자 요소를 정렬 시에는 정렬 순서를 정의하고 `비교 함수(compare function)를 인수로 전달해야 한다.`
  - 비교 함수는 `양수 or 음수 or 0을 반환해야 한다.`
    - `양수` : 비교 함수의 두 번째 인수를 우선 정렬
    - `음수` : 비교 함수의 첫 번째 인수를 우선 정렬
    - `0` : 정렬하지 않음

  ```jsx
  const numbers = [40, 100, 1, 5, 2, 25, 10];

  numbers.sort();
  console.log(numbers); // [1, 10, 100, 2, 25, 40, 5] << 제대로 된 오름차순 정렬이 아님

  numbers.sort((a, b) => a - b);
  console.log(numbers); // [1, 2, 5, 10, 25, 40, 100]
  ```

- 초기에 sort 메서드는 quicksort 알고리즘을 기반으로 구현되었지만, ES10 이후부터는 `timsort 알고리즘 기반으로 변경`되었다고 한다.

<br />

### Array.prototype.forEach 메서드

- `for문을 대체할 수 있는 고차 함수`
  ```jsx
  [1, 2, 3].forEach((item, idx, arr) => {
    console.log(`요소 값 : ${item}, 인덱스 : ${idx}, this : ${arr}`);
  });
  // 요소 값 : 1, 인덱스 : 0, this : 1,2,3
  // 요소 값 : 2, 인덱스 : 1, this : 1,2,3
  // 요소 값 : 3, 인덱스 : 2, this : 1,2,3
  ```
- 자신의 내부에서 반복문을 실행

  - 즉, 반복문을 추상화한 고차 함수로서 내부에서 반복문을 통해 `자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출한다.`
  - `각 배열의 요소에 대해 한 번씩 콜백 함수가 호출된다.`
  - `콜백 함수는 일반 함수로 적용`되기 때문에, `this의 참조는 undefined가 바인딩된다.` ( 고차함수에서는 strict mode 가 반영되기 때문, 아닐 경우 전역 객체를 가리킨다. )

  ```jsx
  class Numbers {
    numberArray = [];

    mul(arr) {
      arr.forEach(function (item) {
        // forEach 의 인수로 전달하는 콜백함수가 "일반함수"인 경우, this 참조는 undefined 를 바인딩
        // TypeError: Cannot read property 'numberArray' of undefined
        this.numberArray.push(item * item);
      });
    }
  }

  const numbers = new Numbers();
  numbers.mul([1, 2, 3]);
  ```

  - 콜백 함수 내부의 this와 호출한 메서드 내부의 this를 일치시키려면 `화살표 함수나, this로 사용할 객체를 바인딩해야 한다.`

  ```jsx
  class Numbers {
    numberArray = [];

    mul(arr) {
      arr.forEach((item) => {
        // forEach 의 인수로 전달하는 콜백함수가 "화살표 함수"인 경우, this 참조는 Lexical this 참조를 따른다. 즉 this 호출의 상위 스코프를 참조한다.
        this.numberArray.push(item * item);
      });
    }
  }

  const numbers = new Numbers();
  numbers.mul([1, 2, 3]);
  console.log(numbers.numberArray); // [ 1, 4, 9 ]
  ```

- `accessor method`
- 반환값은 undefined 다.
- `forEach 문 내부에서는 break, continue 문을 사용할 수 없다.` 즉, 중간에 순회를 중단할 수 없다.

  ```jsx
  [1,2,3].forEach((item, idx) => {
    console.log(item);
    if(idx > 0) break;
    // SyntaxError: Illegal break statement
  })

  [1,2,3].forEach((item, idx) => {
    console.log(item);
    if(idx > 0) continue;
    // SyntaxError: Illegal continue statement: no surrounding iteration statement
  })
  ```

- for 문에 비해 기본적인 성능은 좋지 않지만 `가독성은 좋다.`
  - 따라서, 대용량 데이터를 순회하거나 시간이 많이 걸리는 작업이 아니라면 for문 보단 forEach문을 사용하는 것을 권장

<br />

### [Array.prototype.map](http://Array.prototype.map) 메서드

- `콜백 함수의 반환값들로 구성된 새로운 배열을 반환`
- `accessor method`
- 원본 배열의 요소값을 다른 값으로 `매핑(mapping)`한 `새로운 배열을 생성하기 위한 고차 함수`

  ```jsx
  const arr = [1, 2, 3];
  const mappingArr = arr.map((item) => Math.pow(item, 2));

  console.log(arr); // [ 1, 2, 3 ]
  console.log(mappingArr); // [ 1, 4, 9 ]
  ```

<br />

### Array.prototype.filter 메서드

- `콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환`
- `accessor mehtod`
- `특정 조건에 맞는 배열의 요소들을 추출할 때 유용하게 사용된다.`

  ```jsx
  const arr = [1, 2, 3, 4, 5];
  const filteredArr = arr.filter((item) => item < 4);

  console.log(arr); // [ 1, 2, 3, 4, 5 ]
  console.log(filteredArr); // [ 1, 2, 3 ]
  ```

<br />

### Array.prototype.reduce 메서드

- 콜백 함수를 호출하여 `하나의 결과값을 만들어 반환`
  - 매 차례마다, 콜백 함수의 반환값과 두 번째 요소값을 콜백 함수의 인수로 전달하면서 호출한다.
- `accessor method`
- 4개의 매개변수를 가진다.

  - `accumulator` : 누적될 값
  - `currentValue` : 현재 조회하는 값
  - `index` : 현재 조회하는 값의 인덱스
  - `array` : 원본 배열 참조(this)

  ```jsx
  const arr = [1, 2, 3, 4, 5];

  arr.reduce((acc, cur, idx, arr) => {
    console.log(acc, cur, idx, arr);
    return acc + cur;
  }, 0);
  // 0 1 0 [ 1, 2, 3, 4, 5 ]
  // 1 2 1 [ 1, 2, 3, 4, 5 ]
  // 3 3 2 [ 1, 2, 3, 4, 5 ]
  // 6 4 3 [ 1, 2, 3, 4, 5 ]
  // 10 5 4 [ 1, 2, 3, 4, 5 ]
  ```

- 여러 용도로 사용한다.

  - `평균 구하기`

  ```jsx
  const arr = [1, 2, 3, 4, 5];

  const average = arr.reduce((acc, cur, idx, { length }) => {
    // 마지막 index 원소라면 마지막 원소까지 누적한 수의 arr 길이만큼 나눠서 평균을 반환, 그게 아니라면 누적한 수에 현재 요소를 더한 값을 다음 콜백함수의 사용할 반환값으로 반환
    return idx === length - 1 ? (acc + cur) / length : acc + cur;
  }, 0);

  console.log(average); // 3  = (1+2+3+4+5) / 5
  ```

  - `최대값 구하기`

  ```jsx
  const arr = [1, 2, 3, 4, 5];

  const max = arr.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
  console.log(max); // 5

  // const max = Math.max(...arr);  // Math.max 를 사용하는 것이 사실 훨씬 더 직관적
  // console.log(max);              // 5
  ```

  - `요소의 중복 횟수 구하기`

  ```jsx
  const arr = ["banana", "apple", "apple", "orange", "apple"];

  const dupArr = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  console.log(dupArr); // { banana: 1, apple: 3, orange: 1 }
  ```

  - `중복 요소 제거`

  ```jsx
  const arr = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

  const removeDupArr = arr.reduce((acc, cur, idx, arr) => {
    if (arr.indexOf(cur) === idx) acc.push(cur);
    return acc;
  }, []);

  console.log(removeDupArr); // [ 1, 2, 3, 5, 4 ]

  // 사실, 배열 내 중복된 요소를 제거한 배열을 추출하는 것은 Array.prototype.from 메서드와 Set 자료형을 활용하면 쉽게 구할 수 있다.
  // const removeDupArr = Array.from(new Set(arr));
  // console.log(removeDupArr1);   // [ 1, 2, 3, 5, 4 ]
  ```

<br />

### Array.prototype.some 메서드

- 콜백 함수의 반환값이 `단 한 번이라도 참이면 true, 모두 거짓이면 false를 반환`
- 즉, `배열의 요소 중에 콜백 함수를 통해 정의한 조건을 만족하는 요소가 1개 이상 존재하는지 확인`하여 그 결과를 boolean 타입으로 반환

  - 단, `빈 배열인 경우 언제나 false를 반환`

  ```jsx
  const odds = [1, 3, 5, 7];

  // odds 배열 내에는 조건인 짝수가 하나도 없으므로, false 반환
  console.log(
    odds.some((item) => {
      console.log(item);
      return item % 2 === 0;
    })
  );
  // 1
  // 3
  // 5
  // 7
  // false

  // odds 배열 내에는 첫 요소 1부터 홀수 이므로, 하나라도 조건에 만족하는 요소가 있으니 true 반환
  console.log(
    odds.some((item) => {
      console.log(item);
      return item % 2 !== 0;
    })
  );
  // 1
  // true
  ```

<br />

### Array.prototype.every 메서드

- 콜백 함수의 반환값이 `모두 참이면 true, 단 한 번이라도 거짓이면 false를 반환`
- 즉, `배열의 모든 요소가 콜백 함수를 통해 정의한 조건을 모두 만족하는지 확인`하여 그 결과를 boolean 타입으로 반환

  - 단, `빈 배열인 경우 언제나 true를 반환`

  ```jsx
  const odds = [1, 3, 5, 7];

  // odds 배열 내에는 조건인 짝수가 하나도 없으므로, false 반환
  console.log(
    odds.every((item) => {
      console.log(item);
      return item % 2 === 0;
    })
  );
  // 1
  // false

  // odds 배열 내에는 첫 요소 1부터 홀수 이므로, 하나라도 조건에 만족하는 요소가 있으니 true 반환
  console.log(
    odds.every((item) => {
      console.log(item);
      return item % 2 !== 0;
    })
  );
  // 1
  // 3
  // 5
  // 7
  // true
  ```

<br />

### Array.prototype.find 메서드

- `ES6에 도입`
- 자신을 호출한 `배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 true를 반환하는 첫 번째 요소를 반환`

  - true를 반환하는 요소가 존재하지 않는 경우 `undefined 를 반환`

  ```jsx
  const users = [
    {
      id: 1,
      name: "Cha",
    },
    {
      id: 2,
      name: "Kim",
    },
    {
      id: 3,
      name: "Lee",
    },
    {
      id: 4,
      name: "Shin",
    },
  ];

  console.log(users.find((item) => item.id === 3)); // { id: 3, name: 'Lee' }
  console.log(users.find((item) => item.name === "Ha")); // undefined
  ```

<br />

### Array.prototype.findIndex 메서드

- `ES6에 도입`
- findIndex 메서드는 `콜백 함수에 정의한 조건에 대해 true를 반환하는 요소의 인덱스를 반환`

  - true를 반환하는 요소가 존재하지 않는 경우 `-1을 반환`

  ```jsx
  const users = [
    {
      id: 1,
      name: "Cha",
    },
    {
      id: 2,
      name: "Kim",
    },
    {
      id: 3,
      name: "Lee",
    },
    {
      id: 4,
      name: "Shin",
    },
  ];

  console.log(users.findIndex((item) => item.id === 3)); // 2;
  console.log(users.findIndex((item) => item.name === "Ha")); // -1
  ```

<br />

### Array.prototype.flatMap 메서드

- `ES10에 도입`
- [`Array.prototype.map](http://Array.prototype.map) 메서드를 통해 생성된 배열을 평탄화한다.`

  - 즉, map 함수 호출한 결과 → flat 메서드 호출한 결과와 같다.
  - 단, `flat 과정의 깊이를 1로만 적용할 수 있다.`

  ```jsx
  const arr = ["hello", "world"];

  console.log(arr.map((item) => item.split("")).flat()); // ["h", "e", "l", "l", "o", "w", "o", "r"]
  console.log(arr.flatMap((item) => item.split(""))); // ["h", "e", "l", "l", "o", "w", "o", "r"]
  ```

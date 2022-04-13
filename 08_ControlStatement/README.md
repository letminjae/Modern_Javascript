# 제어문

> `제어문(control flow statement` 은 조건에 따라 `코드 블록` 을 실행(조건문) 하거나 반복 실행(반복문) 할 때 사용한다.
- 제어문은 코드의 실행 흐름을 인위적으로 제어할 수 있다. → 순자적으로 진행하는 직관적인 코드의 흐름을 혼란스럽게 만든다.
- 즉, 제어문은 코드의 흐름을 이해하기 어렵게 만들어 `가독성을 해치는 단점` 이 있다. → 가독성이 좋지 않은 코드는 오류를 발생시키는 원인이다

```jsx
뒤에 살펴볼
+ forEach()
+ map()
+ filter()
+ reduce()
같은 "고차 함수"를 사용한 "함수형 프로그래밍 기법"에서는 제어문의 사용을 억제하여 복잡성을 해결하려고 노력한다.
```

<br>
<br>

# switch문

> `swtich 문` 은 주어진 표현식을 평가하여 그 `값과 일치하는 표현식`을 갖는 `case 문` 으로 실행 흐름을 옮긴다.
```jsx
swtich (표현식) {
	case 표현식1:
		실행문1;
		break;
	case 표현식2:
		실행문2;
		break;
	...
	default:
		default시 실행문;
}
```

```jsx
 // 윤년(leaf year) 판별시 switch 문
var year = 2000;  // 2000년은 윤년 -> 2월은 29일까지
var month = 2;
var days = 0;
swtich (month) {
	case 1: case 3: case 5: case 7: case 8: case 10: case 12:
		days = 31;
		break;
	case 4: case 6: case 9: case 11:
		days = 30;
		break;
	case 2:
		days = ((year % 4 === 0 || year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
		break;
	default:
		console.log("Invaild month");
}
```

- 만약 `if - else` 문으로 해결할 수 있다면 → `switch` 문보다 `if - else` 문을 사용하는 편이 좋다.
- 조건식이 너무 많아서 `if - else` 문보다 `switch` 문을 사용했을 때 `가독성이 더 좋다면` → `switch` 문을 사용하는 편이 좋다.

<br>
<br>
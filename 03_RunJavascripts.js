<>

    <h1>자바스크립트 실행 환경</h1>
    <p>자바스크립트 엔진을 내장하고 있는 환경에서는 자바스크립트를 사용할 수 있다.</p>
    <p>node도 가능, 브라우저도 가능, 하지만 용도가 다르다.
        브라우저는 HTML, CSS, JS를 실행해 웹페이지를 브라우저 화면에 렌더링하는 것이 주목적이지만, 
        nodejs는 브라우저 외부에서 자바스크립트 실행환경을 제공하는것이 주 목적이다.
    </p>
    const arr = [1, 2, 3];
    arr.forEach(alert); // "ReferenceError: alert is not defined"
    <p>node에서 이 구문을 실행한다면 error가 뜸, alert 함수는 브라우저 환경에서만 유효하다.</p>

</>
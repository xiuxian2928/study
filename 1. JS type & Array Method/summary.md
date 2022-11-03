### 1. Javascript 의 데이터 타입
자바스크립트에는 8가지 데이터 타입이 있습니다.
1. 원시 값
  1. number
  2. string
  3. boolean
    - Boolean 타입은 논리 요소를 나타내며 ``` true ``` 와 ``` false ``` 두 가지의 값을 가질 수 있습니다.
  4. undefined
    - 값을 할당하지 않은 변수는  ``` undefined ``` 값을 가집니다.
  5. null
    - Null 타입은 ``` null ``` 하나의 값만 가질 수 있습니다.
  7. symbol
  8. bigint
2. 객체 object


### 자바스크립트의 유연한 데이터 타입
자바스크립트는 데이터 타입이 유연한 프로그래밍 언어입니다. 맥락에 유연하게 변하는 데이터 타입의 특징은 처음엔 생소하고 혼란스러울 수 있지만, 잘 이해하고 활용한다면 좀 더 간결한 코드를 작성하고 빠르게 개발할 수 있는 장점이 될 수 있습니다.

### Truthy 값과 Falsy 값
if, for, while 등 불린 타입의 값이 요구되는 맥락에서는 조건식이나 불린 타입의 값 뿐만 아니라 다른 타입의 값도 불린 값처럼 평가될 수 있는데요. 이 때, false 처럼 평가되는 값을 falsy 값, true 처럼 평가되는 값을 truthy 값이라고 부릅니다. falsy값에는 false, null, undefined, 0, NaN, ''(빈 문자열)이 있고, falsy값을 제외한 값들은 모두 truthy값이 됩니다.

만약 falsy와 truthy값을 명확하게 확인하고 싶다면 ``` Boolean ``` 함수를 사용해서 직접 boolean 타입으로 형 변화 해볼 수도 있습니다.

```javascript
// falsy
Boolean(false);
Boolean(null);
Boolean(undefined);
Boolean(0);
Boolean(NaN);
Boolean('');

// truthy
Boolean(true);
Boolean('codeit');
Boolean(123);
Boolean(-123);
Boolean({});
Boolean([]);
```
truthy와 falsy의 개념은 자바스크립트에서 불린 타입으로의 형 변환을 이해할 때 핵심이 되는 개념이니 잘 기억해 주세요.

### 독특한 방식으로 동작하는 논리 연산자
자바스크립트에서 AND와 OR연산자는 무조건 불린 값을 리턴하는게 아니라, 왼쪽 피연산자 값의 유형에 따라서 두 피연산자 중 하나를 리턴하는 방식으로 동작합니다.
AND 연산자는 왼쪽 피연산자가 falsy값일 때 왼쪽 피연산자를, 왼쪽 피연산자가 truthy값일 때 오른쪽 피연산자를 리턴하고 반대로, OR 연산자는 왼쪽 피연산자가 falsy 일 때 오른쪽 피연산자를, 왼쪽 피연산자가 truthy일 때 왼쪽 피연산자를 리턴합니다.

```javascript
console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}
```
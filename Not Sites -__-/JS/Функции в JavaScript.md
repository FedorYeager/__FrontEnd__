# Функции в JavaScript

<iframe width="560" height="315" src="https://www.youtube.com/embed/rJK0eMkI3BE?si=Gi_dapkfks8cVc8H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/IcgdjdeOziA?si=PtZWCx202CnjFHrS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Область видимости

Если объявить переменную до начала объявления функции, то всё работает

```javascript
const message = 'Привет'
function logMessage() {
  console.log(message)
}
logMessage()
console.log(`${message}, Друг`) // Привет, Друг
```

Но если переменную объявить внутри функции, то она не будет видна за пределами данной сущности

```javascript
function logMessage() {
const message = 'Привет'
  console.log(message)
}
logMessage()
console.log(`${message}, Друг`) // Ошибка
```

Еще один пример с **областью видимости**

```javascript
const message = 'Глобальный мэсэдж'

function logMessage() {

  const message = 'Локальный мэсэдж'
  console.log(message)

for (let i = 0; i < 4; i++) {
    const message = `Итерация цикла №${i}`
    console.log(message)
    
  }
}

logMessage()
console.log(message)

/* 
В консоли будет:
Локальный мэсэдж
Итерация цикла №0
Итерация цикла №1
Итерация цикла №2
Итерация цикла №3
Глобальный мэсэдж
*/
```

Однако **область видимости** работает не только в циклах

```javascript
{
  const number = 1
  console.log(number)
  {
    const number = 2
    console.log(number)
    {
      const number = 3
      console.log(number)
    }
  }
}

console.log(number)

/*
В консоли будет:
1
2
3
number is not defined (не объявлена глобальная переменная number)
*/
```

Если мы оставим одну переменную `number`, то код останется рабочим. 

>[!info]
>Это значит, что из вне фигурных скобок обратиться к внутренним сущностям нельзя, НО локальная область видимости видит переменные, которые находятся снаружи 

```javascript
{
  const number = 1
  console.log(number)
  {
    console.log(number)
    {
      console.log(number)
    }
  }
}

console.log(number)

/*
В консоли будет:
1
1
1
number is not defined (не объявлена глобальная переменная number)
*/
```

## Параметры функции и аргументы

При объявлении функции в круглых функциях пишутся **параметры**, то есть локальные переменные, объявленные через ключевое слово let. А при вызове функции в круглые скобки записываются **аргументы**

```javascript
function logMessage(message, count) { // это параметры
  for (let i = 0; i < count; i++) {
    console.log(message)
  }
}

logMessage('Приветик!', 7) // это аргумент
```

Пример по сложнее

```javascript
// Создаем глобальную переменную
const globalMessage = 'Мяу'
// Объявляем функцию, которая берёт два параметра
function logMessage(message, count) {
// Создаем локальную пеерменную со значением одного из парметров
  const messageFormatted = `(((${message})))`
// Цикл выводит в консоль новую переменную столько раз, сколько указано во втором параметре
  for (let i = 0; i < count; i++) {
    console.log(messageFormatted)
  }
}
// Вызываем функцию
logMessage('Мяу', 4)
// Выводим в консоль глобальную перемнную, которая так и не была нигде не задействована
console.log(globalMessage)

/* 
В консоли будет:
// (((Мяу))) (((Мяу))) (((Мяу))) (((Мяу)))
// Мяу
*/
```

На этом же примере можно показать, что можно не передавать параметры в функцию во время вызова, а сразу записать их при объявлении, при этом еще изменить их значения, если нужно

```javascript
// Сразу присваиваем параметры 
function logMessage(message = 'Мяу', count = 4) {
  const messageFormatted = `(((${message})))`
  for (let i = 0; i < count; i++) {
    console.log(messageFormatted)
  }
}
// 1. При этом во время вызова функции можно перезаписать значения параметров 
// 2. Чтобы обратиться к не первому параметру, не меняяя предыдущий, надо прописать undefined
logMessage(undefined, 2)

/* 
В консоли будет:
// (((Мяу))) (((Мяу)))
*/
```

## Возврат значения из функции, return

> [!info]
> Важнейшая задача функции - возвращать какое-либо значение, явно или неявно. Для явной передачи потребуется ключевое слово `return`. Если убрать `return`, то значение функции будет - `undefined`, потому что его возврат будет произведен неявно.

```javascript
function sum(a, b) {
  return a + b // получаем сумму двух параметров в return
}
console.log(sum(2, 3)) // передаем параметры и получаем в консоли 5
```

После того, как значение попало в `return`, функция перестает работать. Эта механика хорошо походит для проверок. Например:

```javascript
function getAgeType (age) {
  if (typeof age !== 'number') {
    return 'Возраст указан не коректно!'
  }
  if (age < 0 || age > 125) {
    return 'Такого возраста нет!'
  }
  if (age < 18) {
    return 'Несовершеннолетний'
  }
  // после всех проверок остается значение от 18 до 124, возвращаем 'Взрослый'
  return 'Взрослый'
}
console.log(getAgeType(99))
```

## Способы объявления функции 

### Function Declaration

**Характеристики:**
1. Можно вызвать функцию до ее объявления, так называемое *поднятие* или *хостинг*. Происходит это из-за того, что Java Script "поднимает" все функции в начало файла, поэтому мы можем ее использовать до объявления в коде
2. Можно перезаписать функцию
3. Есть доступ к переменной `arguments`, в которой будут в формате массива будут перечислены все значения аргументов

```javascript
function logHello() { // Объявили фунцию
  console.log('Hello!') // Тело функции
}
logHello() // Выполняем фунцию
```

### Function Expression

**Характеристики:**
1. Нельзя использовать до объявления в коде
2. Такую функцию нельзя перезаписать, если не указать `let` вместо `const`
3. Есть доступ к переменной `arguments`

```javascript
const logHello = function() { // Объявили фунцию
  console.log('Hello!') // Тело функции
}
logHello() // Выполняем фунцию
```

### Function Arrow

**Характеристики:**
1. Нельзя использовать до объявления в коде
2. Такую функцию нельзя перезаписать, если не указать `let` вместо `const`
3. Нет доступ к переменной `arguments`

```javascript
const logHello = () => { // Объявили фунцию
  console.log('Hello!') // Тело функции
}
logHello() // Выполняем фунцию
```

**Особенности:**
1. Современная запись функций на данный момент
2. Не явный возврат значения функции с ключевым словом `return`
3. Можно записать в одну строку вез скобок

```javascript
const sum = (a, b) => a + b
console.log(a, b) // 5, не undefined
```

## Функции-колбэки

**Функции-колбэки** - функции, которые вызывают внутри себя другие функции.

```javascript
// Объявляем функцию с двумя параметрами (функциями)
const logMessage = (actionBefore, actionAfter) => {
// Вызываем первую функцию из одного параметра
  actionBefore()
  console.log('Привет!')
// Вызываем вторую функцию из другого параметра
  actionAfter()
}
// Объявляем две функции
const fn1 = () => console.log('before')
const fn2 = () => console.log('after')
// И передаем их как аргументы в нашу функцию
logMessage(fn1, fn2)

// Или более короткий способ

const logMessage = (actionBefore, actionAfter) => {
  actionBefore()
  console.log('Привет!')
  actionAfter()
}
logMessage(
  () => console.log('before'),
  () => console.log('after')
)
```

>[!error]
>Во втором способе важно записать во время вызова `logMessage`, функции, а не просто `console.log('before')` и `console.log('after')`! Потому что вызов функции вернет в параметрах значение `undefined`, которое нельзя использовать как функции

```javascript
// Проверка
if (console.log('text') === undefined) {
  alert(true) // +
}

const logMessage = (actionBefore, actionAfter) => {
  actionBefore()
  console.log('Привет!')
  actionAfter()
}
logMessage(
  console.log('before'), // ОШИБКА
  console.log('after') // ОШИБКА
)
```

Также внутри функции можно возвращать значение другой функции

```javascript
const validate = (hasAccess) => {
  if (hasAccess) {
    return () => console.log('Доступ разрешен')
  }
  return () => console.log('Доступ запрещен')
}

// Важно передать значение hasAccess в переменную,
// так как если просто вызвать validate(true), то
// функция выполнится, но в консоли неичего не будет,
// потомучто validate возвращает значение другой функции,
// но не выполняет ее
const logMessage = validate(true)
logMessage()
```
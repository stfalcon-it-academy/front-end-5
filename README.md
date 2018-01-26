# Введення в CSS 
### Способи додавання CSS на сторінку
1. `<link rel="stylesheet" href="#">`
1. `<style></style>`
1. Атрибут `style`

### Синтаксис
1. Селектор і правила.
1. Групування селекторів.

### Селектори
1. Селектори тегів.
1. Селектори класів.
1. Селектори `id`
1. Універсальний селектор.
1. Селектори вкладених елементів:
  - елементи нащадки.
  - дочірні елементи.
1. Селектори сусідніх елементів.
1. Селектори атрибутів.
  - `[attr]`
  - групування `[attr][attr]`
  - `[attr=val]`
  - `[attr~=val]`
  - `[attr|=val]`
  - `[attr^=val]`
  - `[attr$=val]`
  - `[attr*=val]`

### Вага селекторів
1. `0.0.0.0` `*`
1. `0.0.0.1` селектори елементів і псевдоелементів
1. `0.0.1.0` селектори класів, атрибутів і псевдокласів
1. `0.1.0.0` `#`
1. `1.0.0.0` атрибут `style`
1. Порядок оголошення в документі.
1. `!important`

### Naming conventions
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml)
- [Способы организации CSS-кода](https://habrahabr.ru/post/256109/)
- [Начинаем писать CSS](http://frontender.info/starting-css/)
- [BEM и SMACSS — выбираем CSS методологию](https://uwebdesign.ru/bem-smacss/)

---
# Домашнє завдання
1. В контент кожного елемента з файлу `homework/index.html` додати список селекторів, якими можна вибрати цей елемент.
1. Не потрібно вказувати селектор `*`.
1. Не потрібно опрацьовувати тег `head` і його вміст.

---
# Лінки
- [Самоучитель CSS](http://htmlbook.ru/samcss)
- [Самоучитель CSS](http://htmlbook.ru/css)
- [Рецепты CSS](http://htmlbook.ru/faq)
- [Дэвид Макфарланд. Новая большая книга CSS](https://www.dropbox.com/s/xgrfscrs63dzd2m/%D0%94%D0%B5%D0%B2%D0%B8%D0%B4%20%D0%9C%D0%B0%D0%BA%D1%84%D0%B0%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%20-%20%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0%20CSS%28%D0%91%D0%B5%D1%81%D1%82%D1%81%D0%B5%D0%BB%D0%BB%D0%B5%D1%80%D1%8B%20O%27Reilly%29%20-%202016.pdf?dl=0) 
- [Леа Веру. Секреты CSS. Идеальные решения ежедневных задач. 2016](https://www.dropbox.com/s/9tsblinq6dcskrz/%D0%A1%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D1%8B_CSS__%D0%98%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD.pdf?dl=0)
- [Мейер Э.А. CSS - каскадные таблицы стилей. Подробное руководство(3-е издание). 2008](https://www.dropbox.com/s/p6ijefomlwhi8ql/CSS%20-%20%D0%9A%D0%B0%D1%81%D0%BA%D0%B0%D0%B4%D0%BD%D1%8B%D0%B5%20%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B%20%D1%81%D1%82%D0%B8%D0%BB%D0%B5%D0%B9.%20%D0%9F%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D0%B5%20%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE.%203-%D0%B5%20%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.pdf?dl=0)
- [Семантичный CSS с умными селекторами](http://frontender.info/semantic-css-with-intelligent-selectors/)
- [Аксиоматический CSS и лоботомированные совы](http://frontender.info/axiomatic-css-and-lobotomized-owls/)
- [Директивы CSS](http://frontender.info/the-at-rules-of-css/)

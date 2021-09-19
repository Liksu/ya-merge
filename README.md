# ya-merge
Yet another deep merge function

### Install

```
npm install --save ya-merge
```

Or

```html
<script src="https://liksu.github.io/ya-merge/index.js"></script>
```

### Example

```javascript
import merge from "ya-merge";

const a = {foo: 1}
const b = {bar: 2}
const c = {baz: 3}

console.log(merge(a, b, c)) // { foo: 1, bar: 2, baz: 3 }
```

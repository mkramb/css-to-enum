# css-to-enum

```
npm install css-to-enum -g
```

### Usage

```
css-to-enum -i stylesheet.css -o types.d.ts
css-to-enum -i stylesheet.css -o types.d.ts -e Styles
```

### Input

```
.red {
  color: red;
}
.blue-background {
  background: blue;
}
```

### Output

```
export enum Styles {
	'red' = 'red',
	'blueBackground' = 'blue-background'
}
```

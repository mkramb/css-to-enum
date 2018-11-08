# css-to-typings

```
npm install css-to-typings -g
```

### Usage

```
css-to-typings -i stylesheet.css -o types.d.ts
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

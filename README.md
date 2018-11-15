# css-to-enum

```
npm install css-to-enum -g
```

### Usage

```
css-to-enum -i stylesheet.css -o enum.ts
css-to-enum -i stylesheet.css -o enum.ts -e Styles
css-to-enum --help
```

### Input

```
.red {
  color: red;
}
.blue-background {
  background: blue;
}
.super---background {
  background: blue;
}
```

### Output

```
// autogenerated with css-to-enum
export enum Styles {
  'red' = 'red',
  'blue_background' = 'blue-background',
  'super___background' = 'super---background'
}

```

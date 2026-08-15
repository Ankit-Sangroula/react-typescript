# React + TypeScript

A hands-on project focused on converting an existing **React + JavaScript application to React + TypeScript**.

The project started with pre-written React/JavaScript code. I copied the provided JavaScript code into a React + TypeScript project and progressively converted it to TypeScript by adding the required types and making the existing React code type-safe.

This project focuses on the practical process of **converting JavaScript React code to TypeScript**, rather than building the original application from scratch.

## TypeScript Concepts Covered

### Basic & Custom Types

**Definition:** TypeScript types describe what kind of value a variable, parameter, or object can contain.

**Syntax:**

```ts
let name: string = "Ankit";
let age: number = 21;
let isActive: boolean = true;

type User = {
  name: string;
  age: number;
};
```

### Functions

**Definition:** Function parameters and return values can be explicitly typed to ensure the function receives and returns the expected values.

**Syntax:**

```ts
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => {
  return `Hello ${name}`;
};
```

### useState

**Definition:** `useState` can be given a type to define what kind of value the state can store.

**Syntax:**

```tsx
const [count, setCount] = useState<number>(0);

const [name, setName] = useState<string>("");
```

### Derived Values & Arrow Functions

**Definition:** Values calculated from existing data can be inferred or explicitly typed, while arrow functions can have typed parameters and return values.

**Syntax:**

```ts
const doubled: number = count * 2;

const getName = (user: User): string => {
  return user.name;
};
```

### Component Props

**Definition:** Props can be typed to define exactly what data a React component expects to receive.

**Syntax:**

```tsx
type Props = {
  name: string;
  age: number;
};

function User({ name, age }: Props) {
  return <h1>{name} - {age}</h1>;
}
```

### Custom Component Prop Types

**Definition:** A custom `type` or `interface` can describe the complete structure of a component's props.

**Syntax:**

```tsx
type ButtonProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

function Button({ text, disabled, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
```

### JSX Elements

**Definition:** TypeScript can represent values returned by React components as JSX elements.

**Syntax:**

```tsx
import type { JSX } from "react";

function Header(): JSX.Element {
  return <h1>Hello</h1>;
}
```

A component can also return `null`:

```tsx
function Message(): JSX.Element | null {
  if (!showMessage) {
    return null;
  }

  return <p>Hello</p>;
}
```

### Element Within an Element

**Definition:** React components can receive JSX elements as props, allowing one component to render content provided by another component.

**Syntax:**

```tsx
type Props = {
  children: JSX.Element;
};

function Card({ children }: Props) {
  return <div>{children}</div>;
}
```

### Function Props

**Definition:** Functions passed from a parent component to a child component can be typed by defining their parameters and return type.

**Syntax:**

```tsx
type Props = {
  onSelect: (value: string) => void;
};

function Button({ onSelect }: Props) {
  return (
    <button onClick={() => onSelect("React")}>
      Select
    </button>
  );
}
```

### Imported Types

**Definition:** Types can be defined in one file and imported into another so they can be reused across components.

**Syntax:**

```ts
// types.ts
export type User = {
  name: string;
  age: number;
};
```

```tsx
// User.tsx
import type { User } from "./types";

type Props = {
  user: User;
};
```

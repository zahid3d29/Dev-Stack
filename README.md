
# DevStack

DevStack is a simple and responsive web application for exploring different development technologies and building your own development stack. Users can browse technologies, view their details, and add technologies to their personal stack.

## Live Website

https://devtechzahid.netlify.app/

## Technologies Used

* React
* JavaScript
* Tailwind CSS
* React Icons
* JSON
* Vite
* Netlify

## Features

### 1. Explore Technologies

Users can browse different technologies such as React, Vue.js, Svelte, Next.js, Node.js, JavaScript, TypeScript, PostgreSQL, Redis, Tailwind CSS, Docker, and Java.

### 2. Build Your Own Stack

Users can add technologies to their development stack and see the selected technologies together in one place.

### 3. Responsive Design

The website is fully responsive and works on desktop, tablet, and mobile devices. It also includes a mobile navigation menu for smaller screens.





## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes UI code easier to read and write.




## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component. State can change when the user interacts with the application.



## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us store and update data inside a React component.

In this project, I used `useState` to manage the selected technologies in the user's stack and also to control the mobile navigation menu.




---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run code when a component renders or when some data changes.

I used `useEffect` to load the technology data from the JSON file when the application starts. This keeps the data loading separate from the UI rendering.

Example:

```jsx
useEffect(() => {
  fetch("/tech.json")
    .then((res) => res.json())
    .then((data) => setTechnologies(data));
}, []);
```

The empty dependency array means the effect runs when the component loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which items have changed, been added, or been removed.




## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the selected stack is empty, we can show an empty-stack message:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty. Add some technologies.</p>
) : (
  <StackList stack={stack} />
)}
```

If there are no technologies in the stack, the empty message is displayed. Otherwise, the selected technologies are displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

For example:

```jsx
<TechCard tech={tech} />
```

Here, the `tech` data is passed from the parent to `TechCard`.

To send something back to the parent, the parent can pass a function as a prop:

```jsx
<TechCard
  tech={tech}
  onAdd={handleAdd}
/>




This allows React components to share data and actions in a controlled way.

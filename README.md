# 🇵🇱 Meet.js Components
---
**Framework-native Design Systems. Community-powered Web Components.**

An open-source initiative by the Polish Meet.js community to explore
how **framework-specific design systems** can serve as the foundation for **reusable Web Components**.

---

## Vision

In every modern frontend framework, the way we style, structure, and compose components varies.
Meet.js Components embraces this diversity by building:

- 🧩 A **dedicated design system per framework** (Angular, React, Vue, Svelte, Qwik, Solid, Vanilla)
- ⚙️ A **shared foundation of accessibility and interaction logic**
- 🔄 A **path toward compiling these systems into native Web Components**

This project celebrates the flexibility of modern tools while converging toward **framework-agnostic UI**.

---

## Goals

- 💡 Encourage framework-specific **design system thinking**
- 🎨 Use each system’s idioms (e.g., Signals in Angular, React Hooks, Vue Composition API)
- 📦 Build storybook-driven libraries per framework
- 🔧 Create **Web Components** from shared tokens, logic, and component blueprints
- 🤝 Enable cross-team collaboration on real-world, accessible components

---

## Monorepo Structure (Nx)

```bash
apps/
  angular-storybook/
  react-storybook/
  vue-storybook/
  vanilla-app/
  ...

libs/
  angular/design-system/
  react/design-system/
  vue/design-system/
...
```
---
## Contributors

Thanks to everyone who has contributed!

<div>

  <a href="https://github.com/AdrianRomanski" style="text-decoration: none; margin: 0 15px;">
    <img src="https://avatars.githubusercontent.com/u/44946000?v=4" width="80" style="border-radius: 50%;" alt="Adrian Romanski" /><br />
    <sub><b>Adrian Romanski</b></sub>
  </a>

  <!-- Add more contributors here -->

</div>
---
## Angular 

To start Storybook for the Angular app, use one of the following commands:

```bash
# Using Yarn
yarn run angular-storybook

# Using npm
npm run angular-storybook
``` 
---
This will launch Storybook in development mode and open it in your default browser.
---

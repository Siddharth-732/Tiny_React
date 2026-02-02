# Tiny_React
This repository documents the journey of learning React by building multiple small projects using React and Tailwind CSS. Each project foc- uses on strengthening core concepts like components, props, state management, and basic hooks, while also improving my UI skills with Tailwind. Instead of following only tutorials, I’m learning by building and experimenting, gradually increasing complexity as my understanding grows.

## BG_Changer
A simple React application that lets users change the background color of the screen using interactive buttons. The project is built to understand core React concepts like state management along with Tailwind CSS utility classes for layout, positioning, and hover effects.
![bg_changer](/project_pic/bg_changer.png)


## Password generator
A simple and interactive Password Generator built using React Hooks.
This project helped me understand how React handles state, effects, and re-renders in a real-world scenario.

Concepts Learned
- useState – managing password length, options, and generated password
- useCallback – preventing unnecessary function recreation and infinite loops
- useEffect – regenerating password automatically when settings change
- useRef – copying password directly from the input field
- React re-render cycle & Strict Mode behavior.
![Password Generator Preview](/project_pic/psword_gen.png)


## Currency_Changer
A sleek, responsive currency converter application built with React, Tailwind CSS, and the Currency API. This project demonstrates the use of custom hooks, state management, and component reusability.

- Real-time Rates: Fetches live currency data using a custom useCurrencyInfo hook.
- Reusable Components: Centralized InputBox component for "From" and "To" fields.
- Swap Functionality: Quickly switch between origin and destination currencies.
![Currency_Changer](/project_pic/currency.png)


## Router_React
A modern, highly designed multi-page website built with React and React Router DOM. This project demonstrates the implementation of a clean UI with persistent layouts, dynamic routing, and active state navigation.

- Persistent Layout: A fixed Header and Footer using the <Outlet /> pattern.
- Active Navigation: Navigation links that highlight based on the current URL using NavLink.
- Dynamic Routing: Implemented User/:userid paths to handle variable data in the URL.
![Router](/project_pic/router.png)

## React Theme Toggler
A responsive Theme Switcher application built with React and Vite. This project demonstrates how to manage global state using the Context API to toggle between light and dark modes seamlessly across the entire application.

- Dynamic Theming: Switch between Light and Dark modes with a single toggle.
- Global State: Uses React Context to avoid "Prop Drilling."
- Utility-First Styling: Built using Tailwind CSS for rapid and responsive UI development.

### 📸 Interface Gallery

<p align="center">
  <img src="/project_pic/theme_white.png" width="45%" />
  <img src="/project_pic/theme_black.png" width="45%" />
</p>
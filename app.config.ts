import * as TailwindScrollBar from 'tailwind-scrollbar';
export default defineAppConfig({
  
    ui: {
        primary: 'blue',
        primaryColor: 'blue'
    },
    plugins: [
        // ...
        TailwindScrollBar.default,
    ],
})

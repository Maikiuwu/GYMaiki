    /** @type {import('tailwindcss').Config} */
    export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {
          colors: {
            mybackground: 'var(--background)',
            myprimary: 'var(--primary)',
            mycard: 'var(--card)',
            myelevated: 'var(--elevated)',
            myinput: 'var(--input)',
            myforeground: 'var(--foreground)',
            'muted-foreground': 'var(--muted-foreground)',
            mydestructive: 'var(--destructive)',
            myai: 'var(--ai)',
            myborder: 'var(--border)',
          },
          fontFamily: {
            sans: ['var(--font-sans)'],
          },
        },
      },
    }

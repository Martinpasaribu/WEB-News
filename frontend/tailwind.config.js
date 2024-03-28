/** @type {import('tailwindcss').Config} */

module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'hp1': '350px',
      'dm': '550px',
      'hp2' : '430px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        scrolling: 'scrolling 20s linear infinite', /* Menggunakan animasi dengan durasi 10 detik */
        geser: 'geser 1.5s ease-in-out ', /* Menggunakan animasi dengan durasi 10 detik */
        atas: 'atas 2s ease-in ',
        navbar: 'navbar 0.5s ease ',
        navbar2: 'navbar2 0.5s ease ',
        fadeIn: 'fadeIn 2s ease-in-out',
        lompat: 'lompat 2s ease-out ', 
        lompat2: 'lompat 2.5s ease-out ', 
        swing: 'swing 2s ease-out',
        geser1: 'geser 1s ease-in-out ',
        geser2: 'geser 1.5s ease-in-out ',
        geser3: 'geser 2s ease-in-out ',
        geser4: 'geser 2.5s ease-in-out ',
        geser5: 'geser 3s ease-in-out ',
        geser6: 'geser 3.5s ease-in-out ',
        geser7: 'geser 4s ease-in-out ',
      },
      fontFamily:{
        "nanum-myeongjo-bold": ["Nanum Myeongjo", "serif"],
        "Calistoga": ["Calistoga", "serif"],
        "Montserrat": ["Montserrat", "serif"],
        "KodeMono": ["Kode Mono", "monospace"],
        "test": ["", ""],
        "ConcertOne": ["Concert One", "serif"],
      },

      fontWeight: {
        'nanum-myeongjo-bold': '400',
        'Calistoga': '800',
        'KodeMono': '500',
        'Montserrat': '500',
        'ConcertOne': '400',
        '': '',
        '': '',
      },
      fontStyle: {
        'Calistoga': 'Normal',
        'KodeMono': 'Normal',
        '': '',
      },
      backgroundImage:{
        'cats':      'url(/src/assets/bg-kerja.jpg)',
        
      },
      colors: {
        white: '#ffffffff',
        hitam:'#0f172a',
        hitam2:'#999999',
        item:'#D3DAE5',
        footer:'#1e293b',
        footer2:'#0f172a',
        ungu:'#9261F2',
        biru:'#4386F3',
        pink:'#D946EF',
        hijau:'#3fbb50',
        abu2:'#3F3E3EA4',
        abu:'#949594BA',
        abu3:'#E6E5E562',
        birulaut: "#CBE9FE", // Atau kode warna biru yang Anda inginkan
        ijo:  '#527853',
        cokelat: '#5c5a5a',
        kuning:"#F4E0B9",
        red:"#C92D22",
        react:"#61DBFB"
 
        
      },
      boxShadow: {
        'all': '0px -1px 5px 4px rgba(0, 0, 0, 0.3)',
        'allin': '0px -1px 8px 2px rgba(0, 0, 0, 0.3)',
        '3xl': '0px 10px 8px 2px rgba(0, 0, 0, 0.3)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '26': '1rem', // Untuk menyesuaikan ukuran sesuai kebutuhan
      },
      transitionDuration: {
        '3000': '3000ms',
        '6000': '10000ms', // Atur durasi transisi menjadi 3000ms (3 detik)
      },
      fontSize: {
        kecil:'0.5rem',
        sedang:'0.6rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      spacing: {
        '120px': '120px',
        '90': '120px',
        '80': '105px',
        '70': '80px',
        '60': '70px',
        '50': '63px',
        '40': '50px',
        '30': '40px',
        '15': '30px',
      },
      backgroundImage:{
        // 'bg-login': 'url(/src/assets/bg-login.jpg)',
        // 'bgprofile': 'url(/src/assets/bg-profile2.jpg)', 
        // 'coba': 'url(/src/assets/bg/bg1.png)',
      },
      keyframes: {
        scrolling: {
          '0%': { transform: 'translateX(100%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateX(-100%)' }, /* Akhir di luar layar sebelah kiri */
        },
          geser: {
          '0%': { transform: 'translateX(-40%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        atas: {
          '0%': { transform: 'translateY(-60%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateY(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        navbar: {
          '0%': { transform: 'translateY(5%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateY(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        navbar2: {
          '0%': { transform: 'translateX(-5%)' }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { transform: 'translateX(0%)' }, /* Akhir di luar layar sebelah kiri */
        },
        fadeIn : {
          '0%': { opacity : 0 }, /* Mulai dari di luar layar sebelah kanan */
          '100%': { opacity : 1}, /* Akhir di luar layar sebelah kiri */
        },
        lompat: {
          '100%, 80%, 50%, 20%, 0%': {
            transform: 'translateY(0) scaleY(1)', // Posisi awal dan akhir, dan posisi tengah
          },
          '30%': {
            transform: 'translateY(-30px) scaleY(0.95)', // Posisi puncak lompatan, mengurangi tinggi elemen
          },
          '70%': {
            transform: 'translateY(-15px) scaleY(1.05)', // Kembali ke posisi normal sambil menambah tinggi elemen
          },
        },
        swing: {
          '20%': {
            transform: 'rotate3d(0, 0, 1, 15deg)',
          },

          '40%': {
            transform: 'rotate3d(0, 0, 1, -10deg)',
          },

          '60%': {
            transform: 'rotate3d(0, 0, 1, 5deg)',
          },

          '80%': {
            transform: 'rotate3d(0, 0, 1, -5deg)',
          },
          to: {
            transform: 'rotate3d(0, 0, 1, 0deg)',
          },
        },

      },
    }
  },
  plugins: [],
}


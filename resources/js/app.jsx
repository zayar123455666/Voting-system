import './bootstrap';
import '../css/app.css'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  title:title=>title? `${title}-Laravel Inertia React` : "Laravel Inertia React",
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`];
     
 
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },

  progress:{
     color:'#fff',
      showSpinner: true,

  }
})
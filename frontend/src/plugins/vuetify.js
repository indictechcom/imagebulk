// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

const imagebulkTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#1976D2',
    'primary-darken-1': '#3366B4',
    secondary: '#1986F3',
    'secondary-darken-1': '#4471F5',
    error: '#B00020',
    info: '#2196F3',
    success: '#00C851',
    warning: '#FB8C00',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'imagebulkTheme',
    themes: {
      imagebulkTheme,
    }
  }
}
)
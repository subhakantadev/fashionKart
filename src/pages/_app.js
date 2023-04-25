import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import store from './redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {


  return <div>
    <Provider store={store}>

      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </Provider>
  </div>
}

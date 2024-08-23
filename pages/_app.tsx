import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Modal from '@/components/layout/Modal'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal actionLable={"Submit"} isOpen={true} title="Test Modal"/> */}
      <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

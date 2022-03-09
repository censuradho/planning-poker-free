import { styled } from '@/stitches.config'
import LogoSvg from "@/src/assets/logo.svg?component";

export const Logo = styled(LogoSvg, {
  fill: '$text',
  width: '10rem',
  height: '10rem',
  margin: '0 auto'
})

export const Main = styled('main', {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem'
})

export const Title = styled('h1', {
  fontSize: '$lg',
  marginTop: '2rem'
})

export const Content = styled('div', {
  width: '100%',
  maxWidth: '32rem',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '3rem'
})

export const Form = styled('div', {
  width: '100%',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '$md',
})

export const SignInWithContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const SignInWithLabel = styled('span', {
  fontSize: '$xs',
  color: '$text',
})

export const Copyright = styled('span', {
  fontSize: '$xs',
  color: '$text',
  textAlign: 'center',
})
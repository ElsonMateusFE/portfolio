import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
  tipo?: 'principal' | 'secundaria'
}

//const Paragrafo = (props: Props) => <P>{props.children}</P>
const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)

export default Paragrafo

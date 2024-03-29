import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  border: none;
  padding: 10px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  width: 100%;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

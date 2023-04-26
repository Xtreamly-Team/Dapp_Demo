import styled, { useTheme } from "styled-components";
import { ReactComponent as MetaMaskFox } from "../assets/metamask_fox.svg";
import XtreamlyLogo from "../assets/Xtreamly.jpg";
import DfinityLogo from "../assets/dfinitiy.png";
import { MetaMask } from "./MetaMask";
import { PoweredBy } from "./PoweredBy";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border-top: 1px solid ${(props) => props.theme.colors.border.default};
`;

const PoweredByButton = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: ${({ theme }) => theme.radii.button};
  box-shadow: ${({ theme }) => theme.shadows.button};
  background-color: ${({ theme }) => theme.colors.background.alternative};
`;

const PoweredByContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const Footer = () => {
  const theme = useTheme();

  return (
    <FooterWrapper>
      <PoweredByButton href="https://docs.metamask.io/" target="_blank">
        <PoweredByContainer>
          <PoweredBy color={theme.colors.text.muted} />
        </PoweredByContainer>
          <MetaMaskFox />
      </PoweredByButton>
      <PoweredByButton href="https://docs.metamask.io/" target="_blank">
        <PoweredByContainer>
          <PoweredBy color={theme.colors.text.muted} />
        </PoweredByContainer>
        <img src={DfinityLogo} width={36} height={36} />
      </PoweredByButton>
      <PoweredByButton href="https://docs.metamask.io/" target="_blank">
        <PoweredByContainer>
          <PoweredBy color={theme.colors.text.muted} />
        </PoweredByContainer>
        <img src={XtreamlyLogo} width={36} height={36} />
      </PoweredByButton>
    </FooterWrapper>
  );
};

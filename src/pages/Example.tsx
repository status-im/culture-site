import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Page, PageContent } from '../components'
import { Colors } from '../constants'
import arrowRight from '../assets/arrow-right.svg'

export function Example() {
  return (
    <Page>
      <HeadingWrapper>
        <Heading>People’s Culture Party</Heading>
      </HeadingWrapper>
      <PageContent>
        <Navigation>
          <HomeLink to="/">Home</HomeLink>
          <StyledPageLink to="/">About</StyledPageLink>
        </Navigation>
        <main>
          <article>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur orci erat, eget viverra justo
              egestas id. Vestibulum semper odio vitae dictum aliquam. Maecenas eget purus at ipsum viverra molestie.
              Sed egestas leo in massa volutpat maximus at vel nulla. Sed vehicula accumsan mattis. Pellentesque
              hendrerit consectetur arcu a condimentum. Integer tortor mauris, laoreet ut ipsum id, scelerisque
              dignissim nisl. Etiam nec metus sit amet dolor vestibulum sollicitudin. Curabitur a varius mauris, quis
              vestibulum dolor. Etiam vulputate nulla in velit convallis, at tincidunt lacus tincidunt. Cras sit amet
              libero egestas, porttitor lacus nec, vulputate lorem. Suspendisse semper tellus sit amet cursus fermentum.
              Duis sed risus in sapien fermentum feugiat. Donec nec sodales lorem.{' '}
            </Text>

            <Text>
              Curabitur laoreet et lorem non ultricies. Vivamus cursus neque nulla, et dignissim eros hendrerit et.
              Nulla facilisi. Sed in nisi id lectus porttitor gravida. Sed lectus ante, vulputate ut odio sed, blandit
              pharetra lectus. Sed porta, mauris vitae aliquet accumsan, quam metus scelerisque purus, quis vestibulum
              diam ex a tortor. Mauris eu felis eu turpis placerat dapibus. Donec mauris nunc, laoreet eget est quis,
              tincidunt iaculis quam. Vivamus pulvinar viverra lacus, ac pellentesque mi dictum vel. Praesent sit amet
              vulputate magna. Integer semper neque lectus, eget volutpat odio auctor sit amet. Maecenas id neque
              dignissim, cursus quam et, iaculis orci. Integer congue euismod velit at elementum.{' '}
            </Text>

            <Text>
              Aliquam sollicitudin, augue non gravida interdum, nibh eros dignissim lacus, vel vulputate dolor metus vel
              dolor. Nunc id suscipit est. Proin id ligula fringilla, fringilla lectus at, scelerisque odio. Morbi
              aliquam finibus nunc vehicula viverra. Nullam nec ipsum ipsum. Cras at ullamcorper arcu, in ultrices nisi.
              Integer cursus tincidunt urna, eu lobortis augue volutpat ac. Phasellus posuere sollicitudin est, sit amet
              accumsan ex sagittis eu. Quisque ut lectus at tellus efficitur semper a sit amet ante. Pellentesque ornare
              libero ex, quis mollis dui sodales vel. Curabitur pretium quam eget odio dignissim, et sagittis tellus
              tincidunt. Maecenas dictum venenatis tellus vel malesuada. Sed non varius urna. Phasellus molestie dui
              lacus, eu sagittis metus pulvinar id. Sed facilisis urna lacus, ut rutrum nisl blandit id. Integer id nisl
              porta, accumsan velit quis, tempus urna. Phasellus non egestas tellus. Quisque viverra, tellus quis luctus
              tempus, lacus massa varius est, a luctus ante quam vitae elit. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>

            <Text>
              {' '}
              In fermentum est eget laoreet accumsan. Duis nec enim maximus, varius est quis, tincidunt ligula. Fusce
              non accumsan quam, sit amet pulvinar urna. Nunc efficitur, arcu vitae molestie placerat, turpis arcu
              interdum turpis, eget condimentum sem turpis vel libero. Phasellus auctor turpis leo, quis gravida diam
              pharetra et. Maecenas tempus, mi et pharetra pharetra, eros neque ullamcorper nunc, vitae volutpat massa
              mi sit amet ipsum. Donec vitae posuere purus. Praesent porta malesuada odio. Nunc fringilla vel purus at
              auctor. Ut mollis porttitor tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Aenean id luctus felis. Mauris porttitor pharetra tortor, vitae fringilla augue
              imperdiet et. In a libero facilisis, dignissim velit vitae, sagittis eros. Mauris in tristique nibh.{' '}
            </Text>
          </article>
        </main>
      </PageContent>
    </Page>
  )
}

const HeadingWrapper = styled.div`
  border-top: 5px solid ${Colors.Black};
  border-bottom: 5px solid ${Colors.Black};
  padding: 24px;

  @media (max-width: 1024px) {
    padding: 2vw;
  }

  @media (max-width: 769px) {
    border-top: 3px solid ${Colors.Black};
    border-bottom: 3px solid ${Colors.Black};
  }
`

const Heading = styled.h1`
  color: ${Colors.Black};
  font-size: calc(24px + (72 - 24) * ((100vw - 320px) / (1440 - 320)));
  font-weight: normal;
  text-transform: uppercase;
  max-width: 1072px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    font-size: 72px;
  }
`

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  margin-bottom: 48px;

  @media (max-width: 769px) {
    margin-bottom: 24px;
  }
`

const HomeLink = styled(Link)`
  color: ${Colors.Black};
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }

  @media (min-width: 1440px) {
    font-size: 36px;
  }
`

const StyledPageLink = styled(Link)`
  color: ${Colors.Black};
  font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
  text-transform: uppercase;
  position: relative;
  padding-left: 32px;

  @media (max-width: 769px) {
    padding-left: 24px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: url(${arrowRight});
    background-position: contain;

    @media (max-width: 769px) {
      width: 24px;
      height: 24px;
    }
  }

  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }

  @media (min-width: 1440px) {
    font-size: 36px;
  }
`

const Text = styled.p`
  font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1440 - 320)));
  margin-bottom: 32px;

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`

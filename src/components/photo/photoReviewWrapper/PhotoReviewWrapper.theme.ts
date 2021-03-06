import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

const PhotoReviewWrapperStyles = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: column;
  margin: 6rem 0 5rem 0;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  border-radius: 1rem;
  padding: 2rem;

  .main-text {
    svg {
      color: ${appTheme.colors.TYPOGRAPHY_DEFAULT_ICON}
    }
  }
}
`

export default PhotoReviewWrapperStyles

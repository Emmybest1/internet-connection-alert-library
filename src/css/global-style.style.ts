import {createGlobalStyle} from 'styled-components';
import {normalize} from 'polished';

export const GlobalStyle = createGlobalStyle`
${normalize()}
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

img {
  display: block;
  object-fit: cover;
}

button,
[type='button'],
[type='submit'],
[type='reset'] {
  cursor: pointer;
}

.container {
  padding: 10px 20px;
}

.modal-top {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
}

.modal-top-right {
  position: fixed;
  top: 0;
  right: 20px;
}

.modal-top-left {
  position: fixed;
  top: 0;
  left: 20px;
}

.modal-bottom {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
}

.modal-bottom-right {
  position: fixed;
  bottom: 0;
  right: 20px;
}

.modal-bottom-left {
  position: fixed;
  bottom: 0;
  left: 20px;
}

@mixin d-flex($fDirection, $jContent, $jItems, $fWrap) {
  display: flex;
  flex-direction: $fDirection;
  justify-content: $jContent;
  justify-items: $jItems;
  flex-wrap: $fWrap;
}

/**************************
 *@loader lib styling
 **************************/
.loader-container {
  margin: 0 auto;
  position: fixed;
  width: 100%;
  & * {
    margin: 0 auto;
  }

  & img {
    width: 50px;
    max-width: 50px;
  }
}

.loader-centered {
  top: 50%;
  left: 0;
  right: 0;
  z-index: 10000;
}

.loader-top {
  top: 20px;
  left: 0;
  right: 0;
  z-index: 10000;
}

.finish-p {
  color: #333;
  font-size: 0.8em;
  font-weight: 900;
  text-align: center;
}
`;

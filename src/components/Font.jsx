import * as React from "react";
import { Global } from "@emotion/react";

import NoirProBoldWoff from "../fonts/NoirPro-Bold.woff";
import NoirProBoldTTf from "../fonts/NoirPro-Bold.ttf";
import NoirProMediumWoff from "../fonts/NoirPro-Medium.woff";
import NoirProMediumTTf from "../fonts/NoirPro-Medium.ttf";
import NoirProRegularWoff from "../fonts/NoirPro-Regular.woff";
import NoirProRegularTTf from "../fonts/NoirPro-Regular.ttf";
import NoirProLightWoff from "../fonts/NoirPro-Light.woff";
import NoirProLightTTf from "../fonts/NoirPro-Light.ttf";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: 'NoirPro';
        src: local('☞Noir Pro Bold'), local('NoirPro-Bold'),
            url(${NoirProBoldWoff}) format('woff'),
            url(${NoirProBoldTTf}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
      font-family: 'NoirPro';
      src: local('☞Noir Pro Medium'), local('NoirPro-Medium'),
          url(${NoirProMediumWoff}) format('woff'),
          url(${NoirProMediumTTf}) format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
    font-family: 'NoirPro';
    src: local('☞Noir Pro'), local('NoirPro-Regular'),
        url(${NoirProRegularWoff}) format('woff'),
        url(${NoirProRegularTTf}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
  font-family: 'NoirPro';
  src: local('☞Noir Pro Light'), local('NoirPro-Light'),
      url(${NoirProLightWoff}) format('woff'),
      url(${NoirProLightTTf}) format('truetype');
  font-weight: 300;
  font-style: normal;
}

      `}
  />
);

export default Fonts;

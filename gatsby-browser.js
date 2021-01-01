import React from 'react';

import "./src/style/index.scss"
import "typeface-open-sans"
import PageWrapper from "./src/layouts/PageWrapper"


export const wrapPageElement = ({ element, props }) => (
  <PageWrapper {...props}>{element}</PageWrapper>
);
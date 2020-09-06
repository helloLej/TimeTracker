import css from '@emotion/css'

export const COLOR_BG = '#EBECF0';
export const COLOR_SHADOW = '#BABECC';
// 오목
export const concave = css`
  background: transparent;
  box-shadow: inset 2px 2px 5px ${COLOR_SHADOW}, inset -5px -5px 10px #FFF;
`
// 볼록
export const convex = css`
  background: transparent;
  box-shadow: -2px -2px 5px white, 3px 3px 5px rgba(0, 0, 0, 0.1);
`

export const convexActive = css`
 box-shadow: inset 1px 1px 2px ${COLOR_SHADOW}, inset -1px -1px 2px #FFF;
`

export const convexBtn = css`
  ${convex}
  border: 0;
  border-radius: 5px;
  outline: 0;
  &:active {
    ${convexActive};
  }
  &:focus {
    /* outline: rgba(0,0,0, 0.2) 1px solid; */
  }
`

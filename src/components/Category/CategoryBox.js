import React from 'react'
import css from '@emotion/css'
import { colorList, categoryList } from './data'

const CategoryBox = () => {
  return (
    <>
      {categoryList.map((o) => (
        <>
          <div
            css={css`
              display: inline-block;
              width: 30px;
              height: 30px;
              background: ${colorList[o.color]};
              border-radius: 50%;
            `}
          />
          <input
            css={css`
              display: inline-block;
              margin: 0 10px;
              width: 100px;
              line-height: 30px;
              vertical-align: top;
            `}
            defaultValue={o.label}
          />
        </>
      ))}
    </>
  )
}

export default CategoryBox

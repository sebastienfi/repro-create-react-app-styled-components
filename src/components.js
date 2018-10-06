import React from 'react'
import styled from 'styled-components';
import ImageWithPromise from 'react-image-promise/dist'

export const MyComponentAsFunction = ({children, ...rest}) => <div {...rest}>This should be red.</div>

export const MyStyledComponent = styled(MyComponentAsFunction)`
    background-color:red;
    height: 200px;
    width:200px;
`

export const MyStyledDiv = styled.div`
    background-color:blue;
    height: 200px;
    width:200px;
`

export const MyImageAsync = ({src, ...rest}) => {
    
    /*
    // To simulate a longer loading delay:
      new Promise(resolve => {
        setTimeout(() => resolve(src), 1500);
      })
    */
  
    return (
      <ImageWithPromise       
        src={new Promise(resolve => {setTimeout(() => resolve(src), 3000);})}
        loadingPlaceholder={<div>loading...</div>}
        onError={console.log}
        {...rest}
      />
    )
  }
  

  export const MyStyledImage = styled(MyImageAsync)`
    border:2px yellow solid;
`

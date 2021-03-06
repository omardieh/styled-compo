import React from 'react'
import {Button} from '../ButtonElements'

import {
        InfoContainer,
        InfoWrapper,
        InfoRow,
        Column1,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,
        Column2,
        ImgWrap,
        Img
        } from './InfoElements'

const InfoSection = ({
        lightBg,
        id,
        imgStart,
        topLine,
        lightText,
        headline,
        darkText,
        description,
        buttonLabel,
        image,
        alt,
        primary,
        dark,
        dark2}) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper imgStart={imgStart}>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                            <Button
                                to='home'
                                primary='true'
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >{buttonLabel}</Button>
                            </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={image} alt={alt} />
                        </ImgWrap>
                  </Column2>
              </InfoRow>
          </InfoWrapper>
         </InfoContainer> 
        </>
    )
}

export default InfoSection

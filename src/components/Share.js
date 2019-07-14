import React from 'react'
import { ShareButtonsContainer, SocialMediaBtn } from './Share.style'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share'

export default ({ url, shareText = '' }) => {
  return (
    <ShareButtonsContainer>
      <SocialMediaBtn>
        <FacebookShareButton
          url={url}
          quote={shareText}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </SocialMediaBtn>
      <SocialMediaBtn>
        <TwitterShareButton
          url={url}
          title={shareText}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </SocialMediaBtn>
      <SocialMediaBtn>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </SocialMediaBtn>
    </ShareButtonsContainer>
  )
}

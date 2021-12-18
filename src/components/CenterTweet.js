import React, { userState, userRef } from "react";
import styled from "styled-components";
import { Input, Button, Image, Grid } from "../elements";

import testpic from "../img/test_pic.png";

// icons
import emoji from "../icons/emoji.svg";
import gif from "../icons/gif.svg";
import media from "../icons/media.svg";
import poll from "../icons/poll.svg";
import schedule from "../icons/schedule.svg";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";
import { actionCreators as imageActions } from "../redux/modules/image";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CenterTweet = (props) => {
  const dispatch = useDispatch();
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const [comment, setComment] = React.useState("");
  const fileInput = React.useRef();

  const preview = useSelector((state) => state.image.preview_url);

  React.useEffect(() => {});

  const selectFile = () => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      if (file) {
        dispatch(imageActions.setPreview(reader.result));
        setImage(file);
      }
    };
  };

  const { is_mainTweet, is_commentTweet, article_id} = props;

  const onTweet = (e) => {
    setContent(e.target.value);
  };

  const onComment = (e) => {
    setComment(e.target.value);
  };

  const addArticle = (e) => {
    dispatch(articleActions.addArticleDB(content, image));
    setContent("");
    
    // console.log(content, image) //등록 후 초기화 시키기
  };

  const addComment = () => {
    dispatch(commentActions.addCommentDB(article_id, comment));
    setComment("");
  };

  if (is_mainTweet) {
    return (
      <React.Fragment>
        <TweetBox>
          <ImgBox>
            <HoverBox>
              <TopTweet />
            </HoverBox>
          </ImgBox>
          <CommentBox>
            <CommentField>
              <Input
                label=""
                size="20px"
                type="text"
                padding="25px 0 0 0"
                placeholder="What's happening?"
                height="100%"
                _onChange={onTweet}
                value={content}
              />
              {preview ? (
                <Image position="absolute" size="60" src={preview} />
              ) : null}
            </CommentField>
            <CommentMore>
              <MoreIcons>
                <label htmlFor="input-file">
                  <Icons1 />
                </label>
                <input
                  type="file"
                  id="input-file"
                  onChange={selectFile}
                  ref={fileInput}
                  style={{ display: "none" }}
                />
                <Icons2 />
                <Icons3 />
                <Icons4 />
                <Icons5 />
              </MoreIcons>
              <MoreButton>
                <Button
                  is_tweeterHover
                  width="77px"
                  height="35px"
                  font_size="15px"
                  font_color="#fff"
                  bold="900"
                  _onClick={addArticle}
                >
                  Tweet
                </Button>
              </MoreButton>
            </CommentMore>
          </CommentBox>
        </TweetBox>
      </React.Fragment>
    );
  }
  if (is_commentTweet) {
    return (
      <React.Fragment>
        <Grid is_flex width="100%" height="auto" padding="12px 0">
          <Grid
            width="13%"
            height="60px;"
            is_flex
            justify="center"
            align="center"
          >
            <UserImg />
          </Grid>
          <Grid
            width="68%"
            height="60px"
            is_flex
            justify="flex-start"
            align="center"
          >
            <Input
              label=""
              type="text"
              placeholder="Tweet your reply"
              height="100%"
              _onChange={onComment}
              value={comment}
            />
          </Grid>
          <Grid
            width="19%"
            height="60px;"
            is_flex
            justify="center"
            align="center"
          >
            <Button
              is_tweeterHover
              width="77px"
              height="35px"
              font_size="15px"
              font_color="#fff"
              bold="900"
              _onClick={addComment}
            >
              Reply
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
};

CenterTweet.defaultProps = {
  is_mainTweet: false,
  is_commentTweet: false,
  article_id: "",
};

const TweetBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const ImgBox = styled.div`
  width: 12%;
  height: 100%;
  position: relative;
  top: 8px;
`;

const HoverBox = styled.div`
  width: 48px;
  height: 48px;
  background: #000;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const TopTweet = styled.div`
  width: 48.5px;
  height: 48.5px;
  position: absolute;
  top: -0.5px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
  background-color: transparent;
  background-image: url(${testpic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    color: #000;
    opacity: 0.9;
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

const CommentBox = styled.div`
  width: 88%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const CommentField = styled.div`
  width: 100%;
  min-height: 63px;
  height: auto;
`;

const CommentMore = styled.div`
  width: 100%;
  min-height: 62px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const MoreIcons = styled.div`
  width: 77%;
  height: 62px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 9;
`;

const Icons1 = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${media});
  background-size: 57.5%;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 25px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: #e4f2fb;
    transition: 0.2s;
  }

  &:not(hover) {
    transition: 0.2s;
  }
`;

const Icons2 = styled(Icons1)`
  background-image: url(${gif});
`;

const Icons3 = styled(Icons1)`
  background-image: url(${poll});
`;

const Icons4 = styled(Icons1)`
  background-image: url(${emoji});
`;

const Icons5 = styled(Icons1)`
  background-image: url(${schedule});
`;

const MoreButton = styled.div`
  width: 23%;
  height: 62px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImg = styled.div`
  width: 48.5px;
  height: 48.5px;
  border-radius: 100%;
  background-image: url(${testpic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export default CenterTweet;

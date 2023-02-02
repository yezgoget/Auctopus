import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";
import ImageIcon from "@mui/icons-material/Image";
import AddIcon from "@mui/icons-material/Add";
import { styled as mstyled } from "@mui/material/styles";
import ImageUploading, { ImageListType } from "react-images-uploading";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Button } from "@mui/material";
import { flexbox } from "@mui/system";
export default function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 10;

  const onChange = (
    imageList: ImageListType
    // addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
  };
  return (
    <Container>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          // onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          // isDragging,
          dragProps,
        }) => (
          <>
            <UploadBox onClick={onImageUpload} {...dragProps}>
              {/* <CustomImageIcon /> */}
              <CloudUploadOutlinedIcon onClick={onImageUpload} {...dragProps} />
              upload
            </UploadBox>
            <ImageContainer>
              <div className="upload__image-wrapper">
                <ListBox>
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="image-item"
                      style={{
                        marginLeft: "1.5rem",
                        backgroundColor: "white",
                        border: "solid 1px lightgreen",
                        borderRadius: 10,
                        padding: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src={image.dataURL}
                        style={{
                          margin: "auto auto",
                        }}
                        alt=""
                        width="90"
                        height="80"
                      />
                      <div
                        className="image-item__btn-wrapper"
                        style={{
                          marginTop: "0.5rem",
                        }}
                      >
                        <CustomButton
                          size="small"
                          onClick={() => onImageUpdate(index)}
                        >
                          수정
                        </CustomButton>
                        <CustomButton
                          size="small"
                          onClick={() => onImageRemove(index)}
                        >
                          삭제
                        </CustomButton>
                      </div>
                    </div>
                  ))}
                </ListBox>
              </div>
            </ImageContainer>
          </>
        )}
      </ImageUploading>
    </Container>
  );
}

const CustomButton = mstyled(Button)`
font-weight: bold;
font-family: Pretendard;
`;
const Container = styled.div`
  padding-left: 0.5rem;
  background-color: #98fb98;
  display: flex;
  align-items: center;
  height: 19%;
`;

const ListBox = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #112031;
  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;
  border-bottom: 3px solid gray;
  margin: 1.5rem 1rem;
  white-space: nowrap;
  &::-webkit-scrollbar {
    width: 0.3rem;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgrey;
    border-radius: 1.6em;
  }
`;

const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 10rem;
  font-size: 1.5rem;
  color: ${theme.colors.turtleStandard};
  border-radius: 20;
  overflow: hidden;
  box-shadow: 5rem green;
`;

const CustomImageIcon = mstyled(ImageIcon)`
  width: 5.5rem;
  height: 5.5rem;
  color: ${theme.colors.turtleDark};
`;
const CustomAddIcon = mstyled(AddIcon)`
  width: 4rem;
  height: 4rem;
  color: ${theme.colors.turtleDark};
`;

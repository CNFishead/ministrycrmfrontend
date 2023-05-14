import { useEffect, useState } from "react";
import { Avatar, Form, Upload, message, Typography, Spin, Modal } from "antd";
import type { RcFile, UploadProps, UploadChangeParam, UploadFile } from "antd/es/upload";
import Cropper from "cropperjs";
// import 'cropperjs/dist/cropper.min.css';
import "../../../node_modules/cropperjs/dist/cropper.min.css";
import { LoadingOutlined } from "@ant-design/icons";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { set } from "nprogress";
import { resolve } from "path";
import CropperComponent from "../cropperComponent/CropperComponent.component";
import axios from "@/utils/axios";

type Props = {
  default?: string;
  label?: string;
  name?: string;
  listType?: "picture-card" | "text" | "picture-circle";
  action?: string;
  placeholder?: string;
  tooltip?: string;
  isAvatar?: boolean;
  imgStyle?: React.CSSProperties;
  description?: string;
  isLoading?: boolean;
  formData?: any;
};

const PhotoUpload = (props: Props) => {
  const [loading, setLoading] = useState(props.isLoading || false);
  const [imageUrl, setImageUrl] = useState(props.default);
  const [token, setToken] = useState("");
  const [cropper, setCropper] = useState<Cropper>();
  const [croppedImage, setCroppedImage] = useState<string | undefined>();

  const handleCrop = async (blob: any, originalFileName: string) => {
    try {
      console.log("Blob:", blob);
      if (!blob) {
        throw new Error("Blob is null or undefined");
      }
      if (blob.size === 0) {
        throw new Error("Blob has zero size");
      }

      const formData = new FormData();
      await formData.append("file", blob, originalFileName);
      // set the headers to multipart/form-data
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(`${process.env.API_URL}/upload`, formData, config);
      console.log(data);
      message.success(`${data.filename} uploaded successfully`);
      // close the modal, and return the data
      Modal.destroyAll();
    } catch (error) {
      message.error("Upload failed");
      return Promise.reject(error);
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file");
      return false;
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error("Images must smaller than 10MB");
      return false;
    }

    return new Promise<Blob>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.crossOrigin = "anonymous"; // add this line
        image.src = reader.result as string;
        image.onload = () => {
          // resolve the onload function by returning a modal with the content of the cropper
          const cropper = (
            <CropperComponent
              imageSrc={image.src}
              onCrop={(blob: any) => {
                handleCrop(blob, file.name).then(() => {
                  resolve(blob);
                });
              }}
            />
          );
          Modal.info({
            content: cropper,
            width: 800,
            icon: null,
            okButtonProps: { style: { display: "none" } },
            cancelButtonProps: { style: { display: "none" } },
            onOk: () => {
              reject();
              Modal.destroyAll();
            },
            onCancel: () => {
              reject();
              Modal.destroyAll();
            },
          });
        };
      };
      return reader.readAsDataURL(file);
    });
  };

  const { user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (props.default) {
      setImageUrl(props.default);
    }
  }, [props.default]);

  useEffect(() => {
    if (!user) return;
    setToken(user.token);
  }, [user]);
  const handleChange: UploadProps["onChange"] = async (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      setImageUrl(undefined);
    }
    if (info.file.status === "done") {
      setLoading(false);

      // Get this url from response to display image preview
      console.log(`info.file.response: ${JSON.stringify(info.file.response)}`);
      setImageUrl(info.file.response.imageUrl);
      message.success("Image Uploaded");
    }
    if (info.file.status === "error") {
      setLoading(false);
      message.error("Image Upload Failed");
    }
  };

  return (
    <>
      <Form.Item label={props?.label} name={props?.name} tooltip={props.tooltip ? props.tooltip : undefined}>
        <Upload
          listType={props.listType ? props.listType : "picture-card"}
          showUploadList={false}
          type={"drag"}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          action={props.action}
          headers={{
            Authorization: `Bearer ${token}`,
          }}
        >
          {loading ? (
            <Spin style={{ width: "100%", margin: "20px 0", textAlign: "center" }} indicator={<LoadingOutlined spin />} />
          ) : imageUrl ? (
            props.isAvatar ? (
              <div
                style={{
                  ...props.imgStyle,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar size={200} src={imageUrl} />
              </div>
            ) : (
              <img src={imageUrl} style={props.imgStyle || { width: "100%" }} />
            )
          ) : (
            <div style={props.imgStyle}>{props.placeholder ? props.placeholder : "Upload an Image"}</div>
          )}
          <Typography.Text style={{ textAlign: "center" }} type="secondary">
            {props.description}
          </Typography.Text>
        </Upload>
      </Form.Item>
    </>
  );
};

export default PhotoUpload;

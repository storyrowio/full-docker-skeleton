import {Box, styled} from "@mui/material";
import Image from "next/image";
import {ImageAdd02Icon} from "hugeicons-react";
import {useTheme} from "@mui/material/styles";

const ImagePickerBox = styled(Box)(({theme, width, height}) => ({
    width: width ?? 100,
    height: height ?? 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    border: `${theme.palette.mode === 'light' ?
        theme.palette.grey[300] : theme.palette.text.secondary} 1px solid`,
    borderStyle: 'dashed'
}));

const ImagePicker = (props) => {
    const theme = useTheme();
    const { preview, onChange, width, height, objectFit = 'contain' } = props;

    return (
        <Box>
            <label>
                {preview ? (
                    <Image
                        src={preview}
                        alt="product"
                        htmlFor="picker"
                        width={width} height={height}
                        style={{objectFit: objectFit, borderRadius: 10}}/>
                ) : (
                    <ImagePickerBox htmlFor="picker" width={width} height={height}>
                        <ImageAdd02Icon style={{color: theme.palette.grey['400']}}/>
                    </ImagePickerBox>
                )}
                <input id="picker" hidden type="file" onChange={onChange}/>
            </label>
        </Box>
    )
};

export default ImagePicker;
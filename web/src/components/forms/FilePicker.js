import {FileAddIcon, FileAttachmentIcon} from "hugeicons-react";
import {useTheme} from "@mui/material/styles";
import {Box, Stack, styled} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import Typography from "@mui/material/Typography";
import {HexToRGBA} from "utils/theme";

const FilePickerWrapper = styled(Box)(() => ({
    '& input': {
        display: 'hidden !important',
    }
}));

const FilePickerBox = styled(Box,
    { shouldForwardProp: (prop) => prop !== 'dragActive' && prop !== 'active' })
    (({theme, dragActive = false, active = false}) => ({
    height: 65,
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: 10,
    borderStyle: active ? 'solid' : 'dashed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& .MuiTypography-root': {
        color: theme.palette.grey[400]
    },
        ...(dragActive && {
            background: HexToRGBA(theme.palette.primary.main, 0.15)
        })
}));

export default function FilePicker(props) {
    const theme = useTheme();
    const { preview, onChange, width, height, objectFit = 'contain' } = props;

    return (
        <FilePickerWrapper>
            <FileUploader
                multiple={true}
                handleChange={(e) => onChange(e)}
                name="file"
                // types={fileTypes}
                dropMessageStyle={{
                    width: '100%',
                    maxHeight: 65,
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    bottom: 0,
                    borderRadius: 10,
                    background: HexToRGBA(theme.palette.primary.main, 0.3),
                    border: 'none',
                }}
                style={{
                    width: '100%',
                    minWidth: '100%',
                    display: 'hidden',
                }}
            >
                <FilePickerBox active={preview?.name}>
                    {preview?.name ? (
                        <>
                            <FileAttachmentIcon
                                size={20}
                                color={theme.palette.grey[800]}/>
                            <Typography variant="subtitle2" marginTop={1} color={theme.palette.grey[800]}>{preview?.name}</Typography>
                        </>
                    ) : (
                        <>
                            <FileAddIcon
                                size={20}
                                color={theme.palette.grey[200]}/>
                            <Typography variant="caption" marginTop={1}>Upload or drag and drop the files here</Typography>
                        </>
                    )}
                </FilePickerBox>
            </FileUploader>
        </FilePickerWrapper>
    )
}
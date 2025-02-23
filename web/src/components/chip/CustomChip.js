import MuiChip from '@mui/material/Chip';
import {styled} from "@mui/material/styles";
import {HexToRGBA} from "utils/theme";

const Chip = styled(MuiChip, {shouldForwardProp(propName) { return propName
    }})
(({theme, color}) => ({
    height: 20,
    background: HexToRGBA(theme.palette[color].main, 0.15),
    color: color ? theme.palette[color].dark : 'inherit',

    '& svg': {
        width: 12,
        height: 12,
        color: color ? theme.palette[color].dark : 'inherit',
    },

    '& .MuiChip-label': {
        fontSize: 10,
        paddingLeft: 6,
    }
}));

export default function CustomChip(props) {
    return (
        <Chip {...props}/>
    )
}

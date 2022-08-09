import { makeStyles } from '@mui/styles' ;

export const useStyles = makeStyles((theme) => ({
    root : {
        
    },
    paper : {
        overflow : 'hidden !important',
        backgroundColor : theme.palette.blue.main + ' !important',
        borderRadius : '20px !important', border : '1px solid ' + theme.palette.blue.B100 + " !important",
        
        "& .MuiDialogTitle-root" : {
            color : theme.palette.green.G200,
            display : 'flex', justifyContent : 'space-between', alignItems : 'center',
            fontSize : '25px !important',
        },

        "& .MuiDialogContent-root" : {
            color : theme.palette.green.G200, fontSize : 20,
        },
        "& .MuiDialogActions-root" : {
            paddingBottom : 10, paddingRight : 20
        },

        "& .MuiButtonBase-root" : {
            textTransform : 'capitalize !important',
            color : theme.palette.green.G200, fontSize : 20,
            minWidth : '150px !important',
            borderRadius : 25,
            backgroundColor : theme.palette.blue.B300 + ' !important'
        },

        "& .MuiInputAdornment-root" : {
            "& p" :{
                color : '#43D9AD !important'
            } ,
            "& svg" : {
                color : '#43D9AD !important',
                "&:hover" : {
                    color : 'white !important'
                }
            }
        },
        "& .MuiInputLabel-root" : {
            color : "#43D9AD !important",
        },

        "& .MuiFormControl-root" : {
            borderRadius : 5,
            padding : '0px !important',
            color : '#43D9AD',
        },

        '& .MuiOutlinedInput-root': {
            fontSize : '20px !important',
            '& fieldset': {
                borderColor: theme.palette.green.G400 + ' !important',
            },
            '&:hover fieldset': {
                borderColor: theme.palette.green.G400 + ' !important',
            },
            '&.Mui-focused fieldset': {
                border : '1px solid ' + theme.palette.green.G400 + ' !important'
            },
        },

        "& .MuiInputBase-input" :{
            padding : '10px !important',
            display : 'flex !important', alignItems : 'center !important',
            paddingLeft : '10px !important',
            color : '#43D9AD !important',
        },
        "& .MuiButtonBase-root.Mui-disabled": {
            WebkitTextFillColor: 'gray',
        },
        "& .MuiFormHelperText-root" : {
            marginTop : '10px !important',
            color : '#ff2f00',
            fontSize : '18px !important'
        },
        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
        {
            display: 'none',
        },
    },
    dividerDiv : {
        borderBottom : '1px solid #1d393c',
    },
    selectDiv : {
        "& .MuiList-root" : {
            backgroundColor : theme.palette.blue.main + ' !important',
            padding : '0px !important',
        },
        "& .MuiMenuItem-root" : {
            borderBottom : '1px solid '+theme.palette.green.G400+' !important',
            "&:last-child" : {
                borderBottom : 'none !important',
            },
            background : theme.palette.blue.B300 + " !important",
            color : theme.palette.green.G200 + " !important",
            fontSize : 25,
        },
       "& .MuiBackdrop-root" : {
           background : 'transparent !important'
       }
    },
    closeButtonCss : {
        border  :'2px solid #1d393c', borderRadius : '50%',
        padding : 2,
        "&:hover" : {
            color : theme.palette.green.G100
        }
    },
    greenBlur : {
        background: theme.palette.green.G200,
        position : 'absolute', left: 45, bottom : 50,
        width: 180, height: 100,
        opacity: '0.2',
        filter: 'blur(55px)',
        transform: 'rotate(-140.38deg)'
    },
    blueBlur : {
        background: theme.palette.blue.B100,
        width: 150, height: 150,
        position : 'absolute', right: 45, top: 20,
        opacity: '0.35',
        filter: 'blur(55px)',
        transform: 'rotate(-140.38deg)'
    },
    labelDiv : {
        fontSize : 20
    },
    copyDiv : {
        borderLeft : '1px solid ' + theme.palette.green.G200,
        paddingLeft : 10,
        cursor : 'copy',
        display : 'flex', alignItems : 'center'
    },
    listDiv : {
        border  : '1px solid ' + theme.palette.green.G400,
        borderRadius : 5,
        padding  : 15,
        marginTop : 10,
        height : 300,
        overflowY :'auto'
    },
    listItemDiv :{
        borderBottom : '1px solid ' + theme.palette.green.G400,
        paddingBottom : 5,
        paddingTop : 5,
        paddingLeft :10,
        paddingRight : 10,
        fontSize : 18,
        cursor : 'pointer',
        display : 'flex', justifyContent : 'space-between', alignItems: 'center',

        "&:hover" : {
            background : theme.palette.green.G400
        }
    },
    emptyDiv : {
        height : 250,
        width : '100%',
        color : theme.palette.green.G200, 
        display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'
    }
})) ;
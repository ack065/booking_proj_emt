import {Card, CardContent, Typography} from "@mui/material";

const HostsCard = ({host}) => {

    return(
        <>
            <Card sx={{boxShadow:3, borderRadius:2, p:1}}>
                <CardContent>
                    <Typography variant="h5">{host.name}</Typography>
                </CardContent>
            </Card>


        </>

    )
}

export default HostsCard;
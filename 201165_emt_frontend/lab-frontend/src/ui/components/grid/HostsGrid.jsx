import {Grid} from "@mui/material";
import HostsCard from "../cards/HostsCard.jsx";

const HostsGrid = ({hosts}) => {
    return(
        <Grid container spacing={{xs:2, md: 3}}>
            {hosts.map((host) => (
                <Grid key={host.id} size={{xs:12, sm:6, md:4, lg:3}}>
                    <HostsCard host={host}/>
                </Grid>
                ))}
        </Grid>
    )
}


export default HostsGrid;
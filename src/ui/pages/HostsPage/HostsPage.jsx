import useHosts from "../../../hooks/useHosts.jsx";
import HostsGrid from "../../components/grid/HostsGrid.jsx";
import React, {useState} from 'react';
import AddHostDialog from "../../components/dialogues/forHost/AddHostDialog.jsx";
import EditHostDialog from "../../components/dialogues/forHost/EditHostDialog.jsx";
import DeleteHostDialog from "../../components/dialogues/forHost/DeleteHostDialog.jsx";
import {Box, Button, CircularProgress} from "@mui/material";


const HostsPage =()=>{
    const {hosts, loading, onAdd, onEdit, onDelete} = useHosts();
    const [addHostDialogOpen, setAddHostDialogOpen ] = useState(false);

    return(
        <>
            <Box className="products-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddHostDialogOpen(true)}>
                                Add Host
                            </Button>
                        </Box>
                        <HostsGrid hosts={hosts}/>
                    </>}
            </Box>
            <AddHostDialog
                open={addHostDialogOpen}
                onClose={() => setAddHostDialogOpen(false)}
                onAdd={onAdd}
            />

        </>
    )
}
export default HostsPage;
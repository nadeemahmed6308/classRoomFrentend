import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material'
import { getAllClasses } from '../../../redux/classRelated/classHandle';
import { useNavigate } from 'react-router-dom';
import { PurpleButton } from '../../../components/buttonStyles';
import TableTemplate from '../../../components/TableTemplate';

const ChooseClass = ({ situation }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { classesList, loading, error, getresponse } = useSelector((state) => state.class);
    const { currentUser } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getAllClasses(currentUser._id, "Class"));
    }, [currentUser._id, dispatch]);

    if (error) {
        console.log(error)
    }

    const navigateHandler = (classID) => {
        if (situation === "Teacher") {
            navigate("/Admin/teachers/choosesubject/" + classID)
        }
        else if (situation === "Subject") {
            navigate("/Admin/addsubject/" + classID)
        }
    }

    const classColumns = [
        { id: 'name', label: 'Class Name', minWidth: 170 },
    ]

    const classRows = classesList && classesList.length > 0 && classesList.map((sclass) => {
        return {
            name: sclass.className,
            id: sclass._id,
        };
    })

    const ClassButtonHaver = ({ row }) => {
        return (
            <>
                <PurpleButton variant="contained"
                    onClick={() => navigateHandler(row.id)}>
                    Choose
                </PurpleButton>
            </>
        );
    };

    return (
        <>
            {loading ?
                <div>Loading...</div>
                :
                <>
                    {getresponse ?
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                            <Button variant="contained" onClick={() => navigate("/Admin/addclass")}>
                                Add Class
                            </Button>
                        </Box>
                        :
                        <>
                            <Typography variant="h6" gutterBottom component="div">
                                Choose a class
                            </Typography>
                            {Array.isArray(classesList) && classesList.length > 0 &&
                                <TableTemplate buttonHaver={ClassButtonHaver} columns={classColumns} rows={classRows} />
                            }
                        </>}
                </>
            }
        </>
    )
}

export default ChooseClass
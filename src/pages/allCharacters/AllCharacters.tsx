import React, { useCallback, useEffect, useState } from 'react';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Layout from '../../components/layout/Layout';
import style from './AllCharacters.module.scss'
import Modal from '../../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box/Box';
import { getCharacters, getAll933Characters, ApiStatusPendingEnum} from '../../store/inputReducer';
import EmptyState from '../../components/emptyState/EmptyState';


const AllCharacters:React.FC = () => {
    const {isModalVisible, allCharacters, all933Char, loadingStateAllChar} = useAppSelector(state => state.inputReducer);
    const dispatch = useAppDispatch();

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo(0, 0);
    };

    const handleChangeLimit = (event: SelectChangeEvent) => {
        setLimit(Number(event.target.value));
        setPage(1);
      };

    let races:string[] = [];
    for(let i = 0; i < all933Char.length; i++) {
        if(all933Char[i].race && all933Char[i].race != 'NaN' && !races.includes(all933Char[i].race)) {
            races.push(all933Char[i].race);
        };
    };

    let genders:string[] = [];
    for(let i = 0; i < all933Char.length; i++) {
        if(all933Char[i].gender && all933Char[i].gender != 'NaN' && !genders.includes(all933Char[i].gender)) {
            genders.push(all933Char[i].gender);
        };
    };

    let realms:string[] = [];
    for(let i = 0; i < all933Char.length; i++) {
        if(all933Char[i].realm && all933Char[i].realm != 'NaN' && !realms.includes(all933Char[i].realm)) {
            realms.push(all933Char[i].realm);
        };
    };

    const [race, setRace] = React.useState<string>('');
    const [gender, setGender] = React.useState<string>('');
    const [realm, setRealm] = React.useState<string>('');
      
    const handleChangeRace = (event: SelectChangeEvent) => {
        setRace(event.target.value as string);
        setPage(1);
        };

    const handleChangeGender = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
        setPage(1);
        };
        
    const handleChangeRealm = (event: SelectChangeEvent) => {
        setRealm(event.target.value as string);
        setPage(1);
        };

    const fetchCharacters = useCallback(() => {
        if(all933Char.length < 933) {
          dispatch( getAll933Characters());
        };
      }
      ,[all933Char.length]
    );

    useEffect(() => {
        dispatch(getCharacters({page: String(page), limit: String(limit), race: race, gender: gender, realm: realm}));
    }, [limit, page, race, gender, realm]);

    if(loadingStateAllChar === ApiStatusPendingEnum.ERROR) {
        throw Error('too many request, pls try it later');
    };

    return (
        <>
        <Layout/>
        {isModalVisible && <Modal/>} 
        <div className={style.all_charachters_page_outer_wrapper}>

        <div className={style.filters_wrapper}>
                        <div className={style.filters}>
                            <div className={style.filter_image}/>
                            <Box>
                                <FormControl className={style.formControl}>
                                    <InputLabel className={style.input_label}>Race</InputLabel>
                                    <Select
                                    value={race}
                                    label="Age"
                                    onMouseEnter={fetchCharacters}
                                    onChange={handleChangeRace}
                                    >
                                        <MenuItem value={''}>all races</MenuItem>
                                        {races.map(race => 
                                            <MenuItem value={race}>{race}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box className={style.box}>
                                <FormControl className={style.formControl}>
                                    <InputLabel className={style.input_label}>Gender</InputLabel>
                                    <Select
                                        value={gender}
                                        label="Gender"
                                        onMouseEnter={fetchCharacters}
                                        onChange={handleChangeGender}
                                    >
                                        <MenuItem value={''}>all genders</MenuItem>
                                        {genders.map(gender => 
                                            <MenuItem value={gender}>{gender}</MenuItem>
                                            )}
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box>
                                <FormControl className={style.formControl}>
                                    <InputLabel className={style.input_label}>Realm</InputLabel>
                                    <Select
                                        value={realm}
                                        label="Realm"
                                        onMouseEnter={fetchCharacters}
                                        onChange={handleChangeRealm}
                                    >
                                        <MenuItem value={''}>all realms</MenuItem>
                                        {realms.map(realm => 
                                        <MenuItem value={realm}>{realm}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
            <Stack>
                {allCharacters.docs.length ? 
                    <>
                        <Typography className={style.typography}>Page: {page}</Typography> 
                        <div className={style.character_container}>
                            {allCharacters.docs.map(character => 
                                <CharacterCard 
                                    character={character} 
                                    key={character._id}
                                />
                            )}
                        </div>

                        <div className={style.pagination_selectChar}>
                            <FormControl sx={{m: 2, minWidth: 192}} className={style.selectChar} variant="standard">
                                <InputLabel id="demo-simple-select-autowidth-label">characters per page</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={String(limit)}
                                    label="characters per page"
                                    onChange={handleChangeLimit}
                                    autoWidth
                                >
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={25}>25</MenuItem>
                                    <MenuItem value={allCharacters.total}>show all</MenuItem>
                                </Select>
                            </FormControl>
                            <Pagination 
                                count={Number(allCharacters.pages)} shape="rounded" 
                                page={page} 
                                onChange={handleChangePage} 
                                className={style.pagination}
                            />
                        </div>
                    </>
                    : 
                    <EmptyState 
                        race={race} 
                        gender={gender} 
                        realm={realm}
                    />        
                }
            </Stack>
        </div>
        </>
    );
};

export default AllCharacters;

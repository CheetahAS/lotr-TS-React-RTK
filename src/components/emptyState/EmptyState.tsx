import React from 'react';
import style from "./EmptyState.module.scss";

interface EmptyStatePropsI {
    race?: string
    gender?: string
    realm?: string
};

const EmptyState:React.FC<EmptyStatePropsI> = ({race, gender, realm}) => {
    return (
        <div className={style.empty_state__wrapper}>
            <h1>There are no characters satisfying the filter:</h1>
            <div className={style.params_wrapper}>
                {race? <span>{`race: ${race}`}</span> : ''}
                {gender? <span>{`gender: ${gender}`}</span>: ''}
                {realm? <span>{`realm: ${realm}`}</span>: ''}
            </div>
            <div className={style.empty_state_image}></div>
            <span>please assign another filter parameters</span>
        </div>
    );
};

export default EmptyState;
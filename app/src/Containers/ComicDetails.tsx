import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../State/rootReducer';
import { Dispatch } from 'redux';
import { fetchComicDetails } from '../State/Comic/actions';
import {
    useParams
} from "react-router-dom";
import Comic from '../Components/Comic';
import LoadingSpinner from '../Components/LoadingSpinner';


const mapStateToProps = (state: RootState) => {
    return {
        comicDetails: state.comicState.comicDetails,
        loading: state.comicState.loading
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchComicDetails: (num: number) => dispatch(fetchComicDetails(num)),
    }
}


type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const UnconnectedComicDetails: React.FC<Props> = (props) => {
    let isLoading = true;
    const { comicDetails, loading } = props;
    const { comicNumber } = useParams();
    const { fetchComicDetails } = props;
    if(!loading && comicDetails.num && Number(comicDetails.num) !== Number(comicNumber)){
        isLoading = true;
    }else{
        isLoading = false;
    }

    useEffect(() => {
        fetchComicDetails(Number(comicNumber))
    }, [fetchComicDetails]);


    return (
        <React.Fragment>
            {
                loading || isLoading ? <LoadingSpinner /> : <Comic {...comicDetails} />
            }

        </React.Fragment>
    );
}



export const ComicDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedComicDetails);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../State/rootReducer';
import { Dispatch } from 'redux';
import { fetchComics } from '../State/Comics/actions';
import LazyComic from '../Components/LazyComic';
import { Grid, Button } from '../styles';
import LoadingSpinner from '../Components/LoadingSpinner';


const mapStateToProps = (state: RootState) => {
    return {
        comics: state.comicsState.comics,
        loading: state.comicsState.loading
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchComics: () => dispatch(fetchComics()),
    }
}

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const UnconnectedComicsGrid: React.FC<Props> = (props) => {
    const { fetchComics, comics, loading } = props;

    useEffect(() => {
        fetchComics()
    }, [fetchComics]);

    const renderComics = comics.map(comic => <LazyComic key={comic.num} {...comic} />)
    const comicGrid = (
        <div>
            <Grid>
                {renderComics}
            </Grid>
            <Button onClick={fetchComics}>
                Reload
            </Button>
        </div>
    );

    return (
        <React.Fragment>
            {
                loading ? <LoadingSpinner /> : comics.length ? comicGrid : <h3>No Results Found</h3>
            }

        </React.Fragment>
    );
}



export const ComicsGrid = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedComicsGrid);
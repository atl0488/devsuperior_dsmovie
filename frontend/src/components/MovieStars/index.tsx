
import {ReactComponent as StarFull} from 'assets/img/start_full.svg';
import {ReactComponent as StarHalf} from 'assets/img/start_half.svg';
import {ReactComponent as StarEmpty} from 'assets/img/start_empty.svg';
import './styles.css';

function MovieStars (){
    return (
        <div className="dsmovie-stars-container">
        <StarFull />
        <StarFull />
        <StarFull />
        <StarHalf />
        <StarEmpty />
      </div>
    );
}

export default MovieStars;
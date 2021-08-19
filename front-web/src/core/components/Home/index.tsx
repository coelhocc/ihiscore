import Header from '../Header';
import Score from '../Score';
import './styles.scss';

const Home = () => (
  <div className="home">
    <Header />
    <Score typeScore="T1W"/>
    <Score typeScore="T2W"/>
  </div>
)

export default Home;
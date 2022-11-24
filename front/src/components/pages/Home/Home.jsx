import Button from "../../ui/Button/Button";
import Counters from "../../ui/Counters/Counters";
import Layout from "../../common/Layout/Layout";
import bgImage from "../../../images/home-bg.jpg";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Layout height="100%" bgImage={bgImage}>
            <Button
                text="New"
                type="main"
                callback={() => navigate("/new-workout")}
            />
            <h1 className={styles.heading}>УПРАЖНЕНИЕ НА ПЛЕЧИ</h1>
            <Counters />
        </Layout>
    );
};

export default Home;

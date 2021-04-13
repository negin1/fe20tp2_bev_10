import { StyledPageIntro } from '../Styles/StyledPageIntro';
import BottomNav from '../BottomNav';


const Dashboard = () => {
    return (
        <StyledPageIntro>
            <h2>My dashboard</h2>
            <p>You haven't made any selections yet. Click on "Discover" to explore data and select graphs.</p>
            <BottomNav />
        </StyledPageIntro>
    )
}

export default Dashboard
import React, { useContext } from 'react';
import Button from '../../shared/UIcomponents/Buttons/Button';
import { ReactComponent as HeroImg } from '../../images/hero image/HeroImg.svg';
import { ReactComponent as Work } from '../../images/hero image/Work.svg';
import { ReactComponent as Security } from '../../images/hero image/Security.svg';
import { ReactComponent as OnePalce } from '../../images/hero image/OnePlace.svg';
import { ReactComponent as Generate} from '../../images/hero image/generate.svg';
import { ReactComponent as Easy } from '../../images/hero image/easetouse.svg' 
import './home.css';
import { AuthContext } from '../../shared/context/auth-context';


function Home() {
    const {isLoggedIn} = useContext(AuthContext);
    return (
        <React.Fragment>
            <section className="section_Hero">
                <div className="Hero_title">
                    <div className="Hero_left">
                        <h1>You Were Not<br />Born to <br />Remember Passwords.</h1>
                        <p>That's why we help you manage your passwords.</p>
                        <div className="hero_buttons">
                            <Button to={isLoggedIn? "/locker/accounts":"/auth/signup"} half>SignUp</Button>
                            <Button to="/locker/accounts" half border>Try now</Button>
                        </div>
                    </div>
                </div>
                <div className="Hero_Image">
                    <HeroImg />
                </div>
            </section>
            <section className="section_Work">
                <h1>WHAT WE DO</h1>
                <div className="section_work_content">
                    <div className="work_image">
                        <Work />
                    </div>
                    <div className="work_detail">
                        <h2 className="work_detail_title">We Store and manage your passwords</h2>
                        <p className="work_detail_text">with our easy to use password manager you can store your account's data like email's and password's. you can also generate strong passwords with our password generator.</p>
                    </div>
                </div>
            </section>
            <section className="section_Features">
                <h1>Features</h1>
                <div className="Features_content">
                    <div className="Feature_card">
                        <div className="card_image">
                            <Generate />
                        </div>
                        <div className="card_detail">
                            <h2>Password Generator</h2>
                            <p>Generate ramdom and strong passwords with our password generator. which generate 15 character password.</p>
                        </div>
                    </div>
                    <div className="Feature_card">
                        <div className="card_image">
                            <Security />
                        </div>
                        <div className="card_detail">
                            <h2>Security</h2>
                            <p>Your data is Secure with our data encryption. we don't store your data directly in database. it gets encrypt on the go.</p>
                        </div>
                    </div>
                    <div className="Feature_card">
                        <div className="card_image">
                                <Easy />
                        </div>
                        <div className="card_detail">
                            <h2>Easy to Use</h2>
                            <p>Our app is easy to use and setup. you just need to signed up to get started with our nice and neet user friendly UI.</p>
                        </div>
                    </div>
                    <div className="Feature_card">
                        <div className="card_image">
                            <OnePalce />
                        </div>
                        <div className="card_detail">
                            <h2>All At Ones</h2>
                            <p>You can store as many accounts as you want. and every thing will be at one place. create passwords at the same time.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer"></section>
        </React.Fragment>
    )
}

export default Home;

// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Andrew Lucero" />

            <div className='header__content'>
                <h1>Hi, I'm Andrew Lucero</h1>
                <p>Blockchain Developer & Graphic Designer</p>
                <a href= "mailto:andrewlucero411@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
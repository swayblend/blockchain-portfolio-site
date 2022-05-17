// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import cryptoshugskullz from '../assets/cryptoshugskullz.png';
import openseaskullz from '../assets/openseaskullz.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Full Stack Web3 Project</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>NFT Minting Site</h3>
                    <img src={cryptoshugskullz} alt="cryptoshugskullz Page" />
                    <p>An NFT minting site that allows users to mint free NFT collectibles and connects them to OpenSea after minting.
                    </p>

                    <a href="https://cryptoshugskullz.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/swayblend/Crypto-Shug-Skullz" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Mints On OpenSea</h3>
                    <img src={openseaskullz} alt="opensea shug skullz" />
                    <p>The mints are listed on the OpenSea marketplace. The smart contract to the project interacts with OpenSea.
                    </p>

                    <a href="https://testnets.opensea.io/collection/crypto-shug-skullz" target="_blank" className="button">Site</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
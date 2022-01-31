import React from 'react';
import styled from 'styled-components';

//images
import Decoration from '../../assets/decoration.svg';
import Struggle1 from '../../assets/struggle1.svg';
import Struggle2 from '../../assets/struggle2.svg';
import Struggle3 from '../../assets/struggle3.svg';
import Struggle4 from '../../assets/struggle 4.svg';
import Struggle5 from '../../assets/struggle 5.svg';

function Struggles() {
	return (
		<Wrapper>
			<h2>
				<div className="title"> Anna &amp; Vin's Struggles</div>
			</h2>

			<div className="struggles_container">
				<div className="struggle">
					<img src={Struggle1} alt="struggle 1" className="struggle_img" />
					<p className="struggle_info">
						A typo Queen, <span className="highlighted_struggle">who cannot</span> get people's name and details saved
						easily
					</p>
				</div>

				<div className="struggle">
					<img src={Struggle2} alt="struggle 2" className="struggle_img" />
					<p className="struggle_info">
						Gets awkward to <span className="highlighted_struggle">ask for number or multiple</span> social media
						profiles of someone he just met
					</p>
				</div>
				<div className="struggle">
					<img src={Struggle3} alt="struggle 2" className="struggle_img" />
					<p className="struggle_info">
						<span className="highlighted_struggle">Fears of not connecting</span> with more people in a social setting
					</p>
				</div>
				<div className="struggle">
					<img src={Struggle4} alt="struggle 4" className="struggle_img" />
					<p className="struggle_info">
						A lightweight who is unable to share her <span className="highlighted_struggle">home drop location</span>
					</p>
				</div>
				<div className="struggle">
					<img src={Struggle5} alt="struggle 5" className="struggle_img" />
					<p className="struggle_info">
						A creative professional who also runs a local business and is{' '}
						<span className="highlighted_struggle">facing challenges</span> to engage with her customers
					</p>
				</div>
			</div>
		</Wrapper>
	);
}

export default Struggles;

const Wrapper = styled.div`
  padding: 4rem 0 0;

  .title {
    color: ${(props) => props.theme.primary};
    text-align: center;
    margin: 0 auto 2rem;
    height: 4rem;
    text-align: center;
    font-weight: 600;
    height: 92px;
    text-align: center;
    background-image: url("${Decoration}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25rem;
  }

  .struggles_container {
    padding: 0 2rem;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 4rem;
      margin: 4rem 0;

      .struggle {
        width: 25%;
        font-style: italic;
        margin: 0;
      }

      .struggle_img,
      .struggle_info {
        height: 8rem;
      }
    }
  }

  .struggle {
    margin: 4rem 0;
    text-align: center;
    font-style: italic;
  }
  .struggle_img {
    padding: 0 2rem;
    margin: 1rem 0;
  }

  .highlighted_struggle {
    color: #c40a0a;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: underline;
    text-decoration-thickness: 4;
    text-decoration-color: #c40a0a;
  }
`;

const Struggle = styled.div``;

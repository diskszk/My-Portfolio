import AccountBoxIcon from '@material-ui/icons/AccountBox';

import ContentsCard from "./ContentsCard";
import {pages} from '../layout';

const Contents = () => {

  const icons = "/images/icons",
        profileIcon = `${icons}/f_f_object_149_s512_f_object_149_0bg.png`,
        worksIcon = `${icons}/f_f_business_55_s512_f_business_55_1bg.png`,
        studiesIcon = `${icons}/f_f_object_173_s512_f_object_173_1bg.png`,
        contactIcon = `${icons}/f_f_business_12_s512_f_business_12_2bg.png`;

  return (
    <div className="home-contents">
      <ul className="home-contents-cards">
        <ContentsCard
          className="profile-card"
          icon={profileIcon}
          page={pages.profile}
          text="自己紹介"
        />
        <ContentsCard
          className="works-card"
          icon={worksIcon}
          page={pages.works}
          text="作品紹介"
        />
        <ContentsCard
          className="studies-card"
          icon={studiesIcon}
          page={pages.studies}
          text="学習の記録"
        />
        <ContentsCard
          className="contact-card"
          icon={contactIcon}
          page={pages.contact}
          text="連絡先"
        />
      </ul>
    </div>
  );
}

export default Contents;
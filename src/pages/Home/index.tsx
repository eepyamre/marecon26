import { Button, Note, Page, Photo } from '@/components';

import comfy2 from '@/assets/comfy2.png';
import goodJob from '@/assets/goodjob.png';
import hug from '@/assets/hug.png';
import logo0 from '@/assets/logo/0.webp';

import css from './styles.module.scss';

export const Home = () => {
  return (
    <Page className={css.page}>
      <img src={logo0} alt="Logo" class={css.logo} />

      <div className={css.content}>
        <div class={css.announcements}>
          <h3 class={css.noteTitle}>Current Happenings:</h3>
          <div class={css.list}>
            <Note className={css.announcementNote}>The con is no more.</Note>
          </div>
        </div>

        <div class={css.archive}>
          <h3 class={css.noteTitle}>Recordings links:</h3>

          <div class={css.buttons}>
            <Button
              target="_blank"
              href="https://pony.tube/w/p/ex9byh4ekfKARH35JATCDW"
            >
              CyTube 1
            </Button>
            <Button
              target="_blank"
              href="https://pony.tube/w/p/do6A2ScoB9ZgppTqP86rrG"
            >
              CyTube 2
            </Button>
            <Button
              target="_blank"
              href="https://pony.tube/w/p/4ymz9qeeoPoCcezuNPaXJb"
            >
              CyTube 3
            </Button>
            <Button
              target="_blank"
              href="https://pony.tube/w/p/jRBidScSCheqahmwEhnivq"
            >
              Panels
            </Button>
          </div>
        </div>

        <div class={css.photos}>
          <Photo className={css.sleepy} src={hug}>
            Look at them!
          </Photo>

          <Photo className={css.comfy2} src={comfy2}>
            Marecon-ing hard
          </Photo>
        </div>

        <Photo className={css.goodjob} src={goodJob}>
          Good Job!
        </Photo>
      </div>
    </Page>
  );
};

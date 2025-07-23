import { FC } from 'preact/compat';

import { Page } from '@/components';

import css from './styles.module.scss';

export const FAQ = () => {
  return (
    <Page>
      <h1 class={css.title}>FAQ</h1>
      <div class={css.content}>
        <h2 class={css.subTitle}>What is marecon?</h2>
        <p class={css.description}>
          Marecon is an online My Little Pony convention run by and for anons of
          /mlp/. It consists of livestreams and videos hosted in cytube channels
          with a focus on My Little Pony and its community.
        </p>
        <h2 class={css.subTitle}>How is marecon organized?</h2>
        <p class={css.description}>
          Anyone can contribute to marecon! Marecon relies on the contributions
          of several anonymous helpers that help create art assets, cytube
          scripts, websites, help moderate, etc etc etc. Their efforts are
          coordinated by the head organizer and the anons at{' '}
          <a href="/hq">marecon HQ</a>
        </p>
        <h2 class={css.subTitle}>How can I help?</h2>
        <p class={css.description}>
          We're always on the lookout for people that can help with art,
          moderation, panels, vending, cytube programming, and just about
          anything else you can think about contributing! If you're interested
          in helping, please post in the marecon thread or send an email to{' '}
          <a target={'_blank'} href="mailto:volunteer@marecon.live">
            volunteer@marecon.live
          </a>
          !
        </p>
      </div>
    </Page>
  );
};

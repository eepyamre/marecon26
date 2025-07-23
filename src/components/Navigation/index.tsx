import css from './styles.module.scss';

export const Navigation = () => {
  return (
    <nav class={css.bookmarks}>
      <a href="/">Welcome</a>
      <a href="/mascots">Mascots</a>
      <a href="/hq">HQ</a>
      {/* <div>Schedule</div> */}
      {/* <div>Vendors & Merch</div> */}
      <a href="/faq">FAQ</a>
      <a href="/archive">Archive</a>
    </nav>
  );
};

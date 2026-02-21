import { VENDORS_FORM_LINK } from '@/constants';

import { Button, Page, VendorCard } from '@/components';

import css from './styles.module.scss';

type Vendor = {
  name: string;
  description: string;
  images: string[];
  url?: string;
};

const vendors: Vendor[] = [
  {
    name: 'ButtercupSaiyan',
    description:
      'Stickers, keychains, mousepads, kayou mlp card packs, and available for commissions for paintings',
    images: [
      '/vendors/buttercupSaiyan/1.jpg',
      '/vendors/buttercupSaiyan/2.jpg',
      '/vendors/buttercupSaiyan/3.jpg',
      '/vendors/buttercupSaiyan/4.jpg',
      '/vendors/buttercupSaiyan/5.jpg',
      '/vendors/buttercupSaiyan/6.jpg',
    ],
    url: 'https://www.redbubble.com/people/buttercupsaiyan/shop?artistUserName=buttercupsaiyan&asc=u&iaCode=all-departments&sortOrder=recent',
  },
  {
    name: "Rocket's Equine Outpost",
    description:
      'Pins, charms, wallscrolls, and attire for the discerning pony enthusiast',
    images: [
      '/vendors/rocket/1.jpg',
      '/vendors/rocket/2.jpg',
      '/vendors/rocket/3.jpg',
      '/vendors/rocket/4.jpg',
      '/vendors/rocket/5.webp',
      '/vendors/rocket/6.webp',
      '/vendors/rocket/7.jpg',
      '/vendors/rocket/8.jpg',
      '/vendors/rocket/9.jpg',
      '/vendors/rocket/10.jpg',
    ],
    url: 'https://ko-fi.com/rocketlawnchair/shop',
  },
  {
    name: 'Mare Fair 2026',
    description:
      'Mare Fair is a pony convention dedicated to celebrating our love of ponies and all the incredible people who make the ride so special — that means (You)!',
    images: ['/vendors/marefair/1.webp'],
    url: 'https://marefair.org',
  },
  {
    name: 'Jakusi',
    description: 'Some traditional cute mare drawings turned into merch!',
    images: [
      '/vendors/jakusi/1.jpg',
      '/vendors/jakusi/2.jpg',
      '/vendors/jakusi/3.jpg',
      '/vendors/jakusi/4.jpg',
      '/vendors/jakusi/5.jpg',
    ],
    url: 'https://Jakusi.redbubble.com',
  },
  {
    name: 'Keep Snowpity',
    description: 'Selling Snowpity in sticker form.',
    images: [
      '/vendors/keep_snowpity/1.webp',
      '/vendors/keep_snowpity/2.webp',
      '/vendors/keep_snowpity/3.webp',
      '/vendors/keep_snowpity/4.webp',
      '/vendors/keep_snowpity/5.webp',
      '/vendors/keep_snowpity/6.webp',
    ],
    url: 'https://ko-fi.com/keepsnowpity',
  },
  {
    name: "Floral's Garden",
    description:
      "Do you like mares? Wares of mares? Then you came to the right place. At Floral's Garden, all of your dreams are in season and ready to be harvested. We have a variety of waifu materials to be purchased, from prints, stickers, dakis, you name it. If you want it, we got it. Do you have an idea for a drawing you're dying to see come to life? Ask the artist for a commission! Come stop by Floral's Garden of Mares, we promise we won't disappoint.",
    images: [
      '/vendors/floral/1.webp',
      '/vendors/floral/2.webp',
      '/vendors/floral/3.webp',
      '/vendors/floral/4.webp',
      '/vendors/floral/5.webp',
    ],
    url: 'https://ko-fi.com/floralsh_tpost/shop',
  },
];

export const Vendors = () => {
  return (
    <Page className={css.page}>
      <h1 class={css.title}>Vendors</h1>
      <div class={css.grid}>
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.name}
            name={vendor.name}
            description={vendor.description}
            images={vendor.images}
            website={vendor.url}
          />
        ))}
      </div>
      <Button className={css.apply} target={'_blank'} href={VENDORS_FORM_LINK}>
        Apply to be a vendor!
      </Button>
    </Page>
  );
};

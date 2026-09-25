// Lodges and camps transcribed from Accommodation.docx (client-supplied).
//
// The document files every property under a region and one of three comfort
// levels, which is also how a quotation is built: the traveller picks a level,
// and the whole trip is costed at it. So the itinerary pages read the same way
// — pick a level, see every night of your trip at that level.
//
// Photography is supplied per property as a gallery. Ten properties have none
// yet; their cards fall back to a placeholder, so the grid never breaks.

export type TierId = "comfort" | "premium" | "luxury";

export interface Lodge {
  name: string;
  /**
   * Gallery for the property. `images[0]` is the card's hero; the rest open in
   * the lightbox. Empty where we hold no photography — the card then renders a
   * placeholder rather than a broken frame.
   */
  images: string[];
}

export interface Tier {
  id: TierId;
  name: string;
  /** One line on what the level means, shown under the tab. */
  blurb: string;
}

export interface RegionStay {
  /** Where the document qualifies a level, e.g. the northern migration camps. */
  note?: string;
  lodges: Lodge[];
}

export interface Region {
  id: string;
  name: string;
  tiers: Record<TierId, RegionStay>;
}

export const tiers: Tier[] = [
  {
    id: "comfort",
    name: "Comfort",
    blurb: "Well-run lodges and tented camps with everything you need, in the right places.",
  },
  {
    id: "premium",
    name: "Premium",
    blurb: "More space, better views and a higher level of service throughout.",
  },
  {
    id: "luxury",
    name: "Luxury",
    blurb: "The most characterful properties in the country, and the quietest corners of the parks.",
  },
];

const lodge = (name: string, images: string[] = []): Lodge => ({ name, images });

export const regions: Region[] = [
  {
    id: "arusha",
    name: "Arusha",
    tiers: {
      comfort: {
        lodges: [lodge("Planet Lodge", [
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867150086-lpo-r0zebv6rnb5t5b6i0r3v1xm81mi3yiqbltz147w0ww.webp",
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867145058-parking-2-r0zedrszi7rqouetw2rmlyaver3wkfaq79lh5f2aao.webp",
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867156616-Arusha-gallery_0000s_0001_Swimming-Pool-4V8A2166-r0zdtydheyn3wt74m0dsjgc0jasba5mgh6fxweg3hc.webp",
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867146722-Arusha-gallery_0000s_0001_Swimming-Pool-4V8A2166-r0zdtydheyn3wt74m0dsjgc0jasba5mgh6fxweg3hc%20%281%29.webp",
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867154698-pool-02-r0zdw69rjvohbnz2ngx2xe6711uigffn45w7ox5msg.webp",
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867151639-Untitled-100-r0zeb6qypm8crg5zzgjk93s8llukee1auh0en0w9eo.webp",
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867141846-Gardens-night-Arusha-PL-r2cxbokc7rfxjaso9afbfd16fkxenxwta0w5rrz3j4.webp",
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867148260-ArushaPlanetLodgeSlider-1-r0zdrqh7a1lqhyf6kjui5ihu1jq43vt9u6zo3vqk68.webp",
        "https://assets.makisala.com/accommodations/fdbcea0b-a8f2-43a4-873d-8ac526bc369b/1767867153124-gym-1-1-r0zecs34aieufnuponbsz7bcu3zyfxcxect0wwj8v4.webp",
      ]), lodge("Mtoni River Lodge", [
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-0-aerial-lodge-mTQfAtI9.jpg",
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-1-hero-cottage-exterior-CnnFXqkW.jpg",
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-2-live-cooking-BTbc-CHr.jpg",
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-3-lodge-hero-aerial-BgEG7ghi.jpg",
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-4-mtoni-entrance-hero-BOhM6SEv.webp",
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-5-nduruma-banana-grove-Pkq9Br9H.jpg",
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-6-pool-aerial-slow-living.jpg",
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-7-standard-river-garden-BuaSgqCU.jpg",
        "https://assets.makisala.com/accommodations/76f34713-84b3-46ad-b149-eada0fda51ff/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786154346240-8-standard-river-interior-BIvLxQdC.jpg",
      ]), lodge("Rivertrees Country Inn")],
      },
      premium: {
        lodges: [lodge("Gran Melia Arusha", [
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861068730-104oGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861027695-104cGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20twin.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861071017-104pGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861053257-002iGranMeliaArusha-General%20Facade.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861058581-002oGranMeliaArusha-Facade%20Entrance.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861063434-007aGranMeliaArusha-Lobby.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861048494-005cGranMeliaArusha-Reception.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861038407-002sGranMeliaArusha-General%20Facade.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861065822-104vGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20balcony.webp",
        "https://assets.makisala.com/accommodations/aa75a5c7-3e97-4c31-80a2-75406fb6e4a8/1767861031990-104tGranMeliaArusha-Deluxe%20Room%20Mountain%20Meru%20View%20balcony.webp",
      ]), lodge("Serena Hotel", [
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/22.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/6.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/23.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/13.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/1.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/20.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/9.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/17.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/8.jpg",
        "https://assets.makisala.com/accommodations/ce56dd0d-76eb-4284-9c3a-a5bd7515abd7/21.jpg",
      ]), lodge("Four Points by Sheraton", [
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/room-1.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/room-2.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/jrofp-exterior-3399.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/jrofp-pool-9748.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/jrofp-lobby-3401.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/jrofp-reception-3400.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/jrofp-lounge-area-5678.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/jrofp-hatari-bar-3397.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/jrofp-parachichi-5679.jpg",
        "https://assets.makisala.com/accommodations/65c999b6-c86d-4745-ad3d-7eaca277ca38/jrofp-parachichi-9747.jpg",
      ])],
      },
      luxury: {
        lodges: [
          lodge("Giraffe Manor Tanzania", [
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/babieca-room-terrace.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/babieca-room-bathroom.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/buchephalos-bathroom.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/buchephalos-room-view.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/marengo-room.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/secretariat-bedroom.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/sergeant-reckless-room.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/sergeant-reckless-bedroom.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/sergeant-reckless-bathroom.jpg",
        "https://assets.makisala.com/accommodations/707c65b7-8465-47e8-be32-b0785b461af1/tzar-bedroom.jpg",
      ]),
          lodge("Legendary Lodge", [
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/5.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/4.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/12.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/23.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/10.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/2.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/14.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/8.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/6.jpg",
        "https://assets.makisala.com/accommodations/17e45995-80f1-4998-aa73-b005efa5b7b6/11.jpg",
      ]),
          lodge("Arusha Coffee Lodge by Elewana", [
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/7.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/14.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/17.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/9.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/2.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/13.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/19.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/10.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/25.jpg",
        "https://assets.makisala.com/accommodations/1e0518a5-5644-4186-88ad-e3418befdc9a/22.jpg",
      ]),
        ],
      },
    },
  },
  {
    id: "karatu",
    name: "Karatu",
    tiers: {
      comfort: {
        lodges: [
          lodge("Marera Valley Lodge", [
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879128991-Marera-4128-1030x686.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879118076-4V8A3579-1030x686.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879125217-Marera-5656-1030x686.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879134571-Marera-4132-1030x686.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879136549-Marera-5240-1030x686.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879138491-Marera-4158-1030x686.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879126916-Marera-4177-1030x686.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879121056-4V8A4344-1030x687.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879123355-Marera-4170-1030x686.webp",
        "https://assets.makisala.com/accommodations/06ac8d86-d1d7-45ad-9b71-aa802260d016/1767879132914-Marera-4139-1030x686.webp",
      ]),
          lodge("Mvuli Ngorongoro Mountain Lodge", [
        "https://assets.makisala.com/accommodations/be11d7ed-fbea-4714-9527-a8d5578976a3/1783359792578-PXL_20240714_102644950-EFFECTS-1.jpg",
        "https://assets.makisala.com/accommodations/be11d7ed-fbea-4714-9527-a8d5578976a3/1783359792200-PXL_20240711_1023416724-1.jpg",
        "https://assets.makisala.com/accommodations/be11d7ed-fbea-4714-9527-a8d5578976a3/1783359793306-PXL_20240723_0358178732-EFFECTS-1.jpg",
        "https://assets.makisala.com/accommodations/be11d7ed-fbea-4714-9527-a8d5578976a3/1783359791606-PXL_20250108_0639401662-1.jpg",
        "https://assets.makisala.com/accommodations/be11d7ed-fbea-4714-9527-a8d5578976a3/1783359792965-PXL_20240714_1555176192-1.jpg",
        "https://assets.makisala.com/accommodations/40fa42c4-a013-423e-a447-03359d9f29c7/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978683216-0-original_9d2ce799-7cb8-4381-b924-c3f8f6f75544_PXL_20240714_102947548-2.webp",
        "https://assets.makisala.com/accommodations/40fa42c4-a013-423e-a447-03359d9f29c7/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978683217-1-PXL_20240509_115142142-2.webp",
        "https://assets.makisala.com/accommodations/40fa42c4-a013-423e-a447-03359d9f29c7/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978683217-2-PXL_20240709_155935500-2.webp",
        "https://assets.makisala.com/accommodations/40fa42c4-a013-423e-a447-03359d9f29c7/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978683217-3-PXL_20240714_155517619-2.webp",
        "https://assets.makisala.com/accommodations/40fa42c4-a013-423e-a447-03359d9f29c7/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978683217-4-PXL_20240723_035817873-2-EFFECTS.webp",
      ]),
          lodge("Farm of Dreams Lodge", [
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864616350-Farm-of-Dream-Lodge-gar2-1.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864614911-Farm-of-Dream-Lodge-Rest7.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864611301-Farm-of-Dream-Lodge-Karatu5-1280x1000.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864609344-Farm-of-Dream-Lodge-Swimming-Pool1-1280x1000.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864619654-Farm-of-Dream-Lodge-Swimming-Pool5.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864621290-Farm-of-Dream-Lodge-Rest5.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864606200-Farm-of-Dream-Lodge-Karatu1-1280x1000.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864613192-Farm-of-Dream-Lodge-Karatu6-1280x1000.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864622819-Farm-of-Dream-Lodge-Rest1.webp",
        "https://assets.makisala.com/accommodations/2090551c-a6fb-4acc-88e6-322eeb038378/1767864617940-Farm-of-Dream-Lodge-gar15-1.webp",
      ]),
        ],
      },
      premium: {
        lodges: [
          lodge("Acacia Farm Lodge", [
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/8ff025c319393d73.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/3f322ea99ef33573.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/c3c98463ad263f57.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/e67b215b2f8c6ad5.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/5ba645fddde3863b.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/17ae723d81c26916.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/680c67f6ad1a58e2.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/3edb4bc1d305ec58.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/5c35941df76d0572.jpg",
        "https://assets.makisala.com/accommodations/9ae4d969-8d30-4071-b59f-35aedcd01aaa/82519c186ff5ceca.jpg",
      ]),
          lodge("The Retreat at Ngorongoro", [
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/20.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/15.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/5.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/8.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/7.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/1.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/11.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/17.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/4.jpg",
        "https://assets.makisala.com/accommodations/e8732f26-158f-460e-8b4b-b0fa11440ff4/3.jpg",
      ]),
          lodge("Ngorongoro Coffee Lodge", [
        "https://assets.makisala.com/accommodations/95f77079-0fc1-49d3-9001-c8a5d14ac2cb/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786178535304-0-GGM03479-705x470.jpg",
        "https://assets.makisala.com/accommodations/95f77079-0fc1-49d3-9001-c8a5d14ac2cb/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786178535305-1-images-1-.jpg",
        "https://assets.makisala.com/accommodations/95f77079-0fc1-49d3-9001-c8a5d14ac2cb/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786178535305-2-images-2-.jpg",
        "https://assets.makisala.com/accommodations/95f77079-0fc1-49d3-9001-c8a5d14ac2cb/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786178535305-3-images-3-.jpg",
        "https://assets.makisala.com/accommodations/95f77079-0fc1-49d3-9001-c8a5d14ac2cb/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786178535305-4-images-4-.jpg",
        "https://assets.makisala.com/accommodations/95f77079-0fc1-49d3-9001-c8a5d14ac2cb/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786178535305-5-images-5-.jpg",
        "https://assets.makisala.com/accommodations/95f77079-0fc1-49d3-9001-c8a5d14ac2cb/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786178535305-6-images-6-.jpg",
        "https://assets.makisala.com/accommodations/95f77079-0fc1-49d3-9001-c8a5d14ac2cb/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786178535305-7-images.jpg",
        "https://assets.makisala.com/accommodations/7440e089-e566-4305-976c-6f3dd581e6fe/DJI_0103-1030x686-3c37789f.jpg",
        "https://assets.makisala.com/accommodations/7440e089-e566-4305-976c-6f3dd581e6fe/GGM02962-1-1030x687-d06d08d1.jpg",
      ]),
        ],
      },
      luxury: {
        lodges: [
          lodge("The Manor at Ngorongoro", [
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/23.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/12.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/11.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/8.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/1.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/10.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/13.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/18.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/9.jpg",
        "https://assets.makisala.com/accommodations/a24247f0-176e-4766-8ced-fedd30e39124/5.jpg",
      ]),
          lodge("Gibb’s Farm", [
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/f61910586d7db2bd.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/db116ab018d81788.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/0632f141dbe469ea.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/8d86492a8c734b78.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/448c8bd361ccb180.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/cb740c7468787145.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/852f37e06ca5f1e9.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/819dc8be6b433a06.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/3ab47dc1b2f9e4de.jpg",
        "https://assets.makisala.com/accommodations/c6eb0983-c6dc-4f24-ab77-1f1b2c9f4196/5f5dc572b7eb93fd.jpg",
      ]),
          lodge("Neptune Ngorongoro", [
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-1.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-2.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-7.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-8.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-10.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-11.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-12.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-14.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-15.jpg",
        "https://assets.makisala.com/accommodations/1b8f7255-b8e2-4d63-92d1-ff8c32e0c046/nnl-16.jpg",
      ]),
        ],
      },
    },
  },
  {
    id: "tarangire",
    name: "Tarangire",
    tiers: {
      comfort: {
        lodges: [
          lodge("Sangaiwe Tented Lodge", [
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-0547-e5209be3.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-1398-20a3741b.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-1515-9b55d41d.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-2326-1cba3d9f.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-2481-78eeb3e8.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-2337-db5e0bb1.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-0526-e19ab055.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-2300-1-479f5a31.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/tarangire_sangaiwe-2298-ef9253ee.jpg",
        "https://assets.makisala.com/accommodations/fbee5aaa-4475-439c-9e5d-fd11a6af357f/sangaiwe-mbuyu-261-scaled-59b33cdd.jpg",
      ]),
          lodge("Lake Burunge Tented Lodge", [
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/10.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/3.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/6.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/2.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/12.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/9.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/21.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/20.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/17.jpg",
        "https://assets.makisala.com/accommodations/39da9549-8c25-43c8-b926-d96c52b73d95/11.jpg",
      ]),
          lodge("Zuri – Kilima Siri Tented Camp"),
        ],
      },
      premium: {
        lodges: [
          lodge("Elephant Lair Tarangire", [
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869370258-aerial-view-main-tent-and-pool-9fdb1ded.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869372537-standalone-tent-exterior-plunge-pool-a42a515c.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869374647-reception-lounge-2ec604b1.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869376766-main-lounge-area-f5e54d1b.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869378045-indoor-dining-room-8cf1601b.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869379494-open-air-restaurant-688123ce.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869380945-pool-deck-sun-loungers-e11ab45a.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869383153-infinity-pool-at-dusk-8cf0a2a7.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869385054-deluxe-tent-living-area-dabb306b.jpg",
        "https://assets.makisala.com/accommodations/3efa5def-61db-498c-887c-4d2d107f4b87/1788869387201-deluxe-tent-interior-bush-view-771f5152.jpg",
      ]),
          lodge("Elephant Springs Tarangire", [
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/17.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/8.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/12.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/5.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/10.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/23.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/15.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/13.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/6.jpg",
        "https://assets.makisala.com/accommodations/a5bfcc28-84c7-496b-8253-c246dadd113c/1.jpg",
      ]),
          lodge("Mwamba Lodge", [
        "https://assets.makisala.com/accommodations/04ba3f4c-9eed-4930-bbd8-2b15eaf70051/1774614587761-810075421.jpg",
        "https://assets.makisala.com/accommodations/04ba3f4c-9eed-4930-bbd8-2b15eaf70051/1774614588572-532250252.jpg",
        "https://assets.makisala.com/accommodations/04ba3f4c-9eed-4930-bbd8-2b15eaf70051/1774614590666-532247754.jpg",
        "https://assets.makisala.com/accommodations/04ba3f4c-9eed-4930-bbd8-2b15eaf70051/1774614588181-532247774.jpg",
        "https://assets.makisala.com/accommodations/04ba3f4c-9eed-4930-bbd8-2b15eaf70051/cottage-exterior-dusk-veranda.webp",
        "https://assets.makisala.com/accommodations/04ba3f4c-9eed-4930-bbd8-2b15eaf70051/thatched-cottage-dusk-garden.webp",
      ]),
        ],
      },
      luxury: {
        lodges: [
          lodge("Mpingo Ridge Lodge", [
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/1.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/18.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/10.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/25.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/21.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/14.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/8.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/20.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/16.jpg",
        "https://assets.makisala.com/accommodations/64410932-f625-4cfa-92b6-6f22add58d9f/11.jpg",
      ]),
          lodge("Sanctuary Swala", [
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-gallery-1.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-gallery-2.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-gallery-3.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-luxury-guest-tent-1.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-luxury-guest-tent-2.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-luxury-guest-tent-3.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-luxury-guest-tent-4.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-swimming-pool.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-dining-deck-waterhole.webp",
        "https://assets.makisala.com/accommodations/dab0e48b-3f2d-4cbe-af36-f1d6e75ca24d/swala-boma-deck-evening.webp",
      ]),
          lodge("Tarangire Treetops by Elewana", [
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/11.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/7.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/1.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/19.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/10.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/4.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/5.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/2.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/9.jpg",
        "https://assets.makisala.com/accommodations/05e3a1d6-0d7c-4cd1-82d4-6ddf21b79d41/6.jpg",
      ]),
        ],
      },
    },
  },
  {
    id: "ngorongoro",
    name: "Ngorongoro",
    tiers: {
      comfort: {
        lodges: [
          lodge("Ngorongoro Serena Safari Lodge", [
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/18.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/11.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/5.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/22.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/16.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/12.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/3.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/1.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/24.jpg",
        "https://assets.makisala.com/accommodations/2138a428-ab46-4caf-8e92-6ee1fed16b64/20.jpg",
      ]),
          lodge("Angata Tented Camps", [
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822666814-untitled-32.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822685742-untitled-15.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822660535-untitled-28.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822678973-untitled-30.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822689318-DSC09766.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822663935-untitled.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822683624-DSC09463.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822692570-untitled-17.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822673676-untitled-5.webp",
        "https://assets.makisala.com/accommodations/26c648c7-46cb-47c5-91bf-40299d4e106e/1767822681444-untitled%281%29.webp",
      ]),
          lodge("Pakulala Safari Camp", [
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/9.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/10.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/8.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/6.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/5.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/0.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/1.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/08-pakulala-luxury-safari-camp.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/09-pakulala-luxury-safari-camp.jpg",
        "https://assets.makisala.com/accommodations/f045f059-77a6-431c-9ad9-e6fdb6a7f217/10-pakulala-luxury-safari-camp.jpg",
      ]),
        ],
      },
      premium: {
        lodges: [lodge("Lion’s Paw", [
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-aerial-crater-forest-37144c341e9d.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-aerial-crater-sunrise-129ada0e1ee4.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-bar-lounge-17266aeffd53.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-bathroom-08eda320260a.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-camp-exterior-dusk-8bc0e6ac05cb.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-exterior-aerial-dusk-f7992f3bc4a3.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-lounge-deck-exterior-abf88cab5d47.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-lounge-fireplace-affbaca59fef.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-restaurant-dining-5abea1dbc0e6.jpg",
        "https://assets.makisala.com/accommodations/f291e019-2b9a-4e04-952b-251294936056/lp-tent-exterior-trees-18bf444c86e9.jpg",
      ]), lodge("Melia Ngorongoro Lodge", [
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861255095-113aNgorongoroLodge_MeliaCollection-Enkaji%20Junior%20Suite%20with%20wall.webp",
        "https://assets.makisala.com/accommodations/b429f8fb-bbf1-4cc9-b9cc-6f8b459b1002/1771279200441-0g5a1902.webp",
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861228032-105bNgorongoroLodge_MeliaCollection-Family%20Room.webp",
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861239074-110tNgorongoroLodge_MeliaCollection-Enkaji%20Junior%20Suite%20Bathroom.webp",
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861250917-102NgorongoroLodge_MeliaCollection-The%20Rim%20Room%20King%20Bed.webp",
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861267993-101cNgorongoroLodge_MeliaCollection-The%20Rim%20Room%20bathroom.webp",
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861232003-016cNgorongoroLodge_MeliaCollection-Crater%20View.webp",
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861247761-014NgorongoroLodge_MeliaCollection-Terrace.webp",
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861270737-015NgorongoroLodge_MeliaCollection-Terrace.webp",
        "https://assets.makisala.com/accommodations/bab3726b-34a0-4710-8e4f-cffef0305ace/1767861234863-110aNgorongoroLodge_MeliaCollection-Enkaji%20Junior%20Suite%20with%20out%20wall.webp",
      ])],
      },
      luxury: {
        lodges: [
          lodge("andBeyond Ngorongoro Crater Lodge", [
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/8.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/2.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/21.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/7.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/4.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/13.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/12.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/10.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/11.jpg",
        "https://assets.makisala.com/accommodations/5b282640-2eb5-4623-ab3b-0fe99ea7a1bb/20.jpg",
      ]),
          lodge("Entamanu Ngorongoro", [
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/11.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/7.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/1.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/9.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/8.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/13.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/10.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/4.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/12.jpg",
        "https://assets.makisala.com/accommodations/9267323f-6652-4de8-b099-182de969b884/3.jpg",
      ]),
          lodge("Lemala Osonjoi Lodge", [
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/17.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/5.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/15.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/1.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/7.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/22.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/6.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/14.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/8.jpg",
        "https://assets.makisala.com/accommodations/e273eca0-79ad-4bb3-910f-e7074693d1ab/10.jpg",
      ]),
        ],
      },
    },
  },
  {
    id: "serengeti-central",
    name: "Central Serengeti",
    tiers: {
      comfort: {
        lodges: [
          lodge("Zuri Serengeti Camp"),
          lodge("Mbuni Tented Camp", [
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267429-0-0-16-2048x1364.webp",
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267430-1-4e.webp",
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267430-2-c-46-2048x1152.webp",
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267430-3-c-53-768x432.webp",
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267430-4-DJI_20250930181936_0819_D-Enhanced-NR-1-scaled-rcla6frod86x0bg79aztt6fhyueksjxe2q1a68dnsk.webp",
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267430-5-DJI_20250930183407_0849_D-Enhanced-NR-768x432.webp",
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267430-6-DJI_20250930184218_0884_D-Enhanced-NR-768x432.webp",
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267430-7-DJI_20250930184240_0887_D-Enhanced-NR-768x432.webp",
        "https://assets.makisala.com/accommodations/89bfc73a-f36c-4837-a0a0-a10f54e34b67/org/aa23f591-407a-4f4e-81fb-eb95f5e3b3ee/1786978267430-8-DJI_20250930190253_0900_D-Enhanced-NR-768x432.webp",
      ]),
          lodge("Bushland Tented Camp"),
        ],
      },
      premium: {
        lodges: [
          lodge("Kubu Kubu Tented Lodge", [
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/20.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/18.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/9.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/13.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/5.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/12.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/16.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/10.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/24.jpg",
        "https://assets.makisala.com/accommodations/a53c734d-50ca-4221-b4db-c4fa27eeaa52/15.jpg",
      ]),
          lodge("Lake Mgadi Serengeti Lodge"),
          lodge("Serena Serengeti Lodge", [
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/17.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/18.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/10.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/1.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/13.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/15.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/22.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/20.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/5.jpg",
        "https://assets.makisala.com/accommodations/270f0f8f-523c-47fe-b76e-899b9fee8632/11.jpg",
      ]),
        ],
      },
      luxury: {
        lodges: [lodge("Namiri Plains", [
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/15.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/18.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/25.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/8.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/19.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/21.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/11.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/2.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/23.jpg",
        "https://assets.makisala.com/accommodations/534e1adf-7eb7-4952-a3db-22917bee3ef8/4.jpg",
      ]), lodge("Four Seasons Safari Lodge", [
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864443699-SBT_130_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864417735-SBT_057_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864437441-SBT_069_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864440604-SBT_136_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864408483-SBT_172_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864413140-SBT_192_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864421534-SBT_150_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864449809-SBT_349_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864452266-SBT_407_original.webp",
        "https://assets.makisala.com/accommodations/20198326-a339-4d33-9c75-fd3787c636b6/1767864425731-SBT_928_original.webp",
      ])],
      },
    },
  },
  {
    id: "serengeti-north",
    name: "North Serengeti",
    tiers: {
      comfort: {
        note: "Migration camps (standard)",
        lodges: [
          lodge("Untamed Serengeti"),
          lodge("Mbuni Migration Camp"),
          lodge("Moyo Migration Camp", [
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/01-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/02-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/03-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/04-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/05-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/06-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/07-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/08-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/09-moyo-migration-camp-mara.webp",
        "https://assets.makisala.com/accommodations/41cd0b9c-9552-4994-9d34-081f35577574/10-moyo-migration-camp-mara.webp",
      ]),
        ],
      },
      premium: {
        lodges: [
          lodge("Mara Mara Tented Lodge", [
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/2.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/9.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/16.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/8.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/21.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/4.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/7.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/23.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/20.jpg",
        "https://assets.makisala.com/accommodations/3f71b05e-e8e6-4a03-8ff4-d25619747cf3/5.jpg",
      ]),
          lodge("Lemala Kuria Hills Lodge", [
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/5.jpg",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/4.jpg",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/8.jpg",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/1.jpg",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/17.jpg",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/13.jpg",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/10.JPG",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/14.jpg",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/3.jpg",
        "https://assets.makisala.com/accommodations/81a02fba-41ed-40f2-bcea-f1e2613ea6f5/21.jpg",
      ]),
          lodge("Ubuntu Migration Camp", [
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/5.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/17.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/10.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/7.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/2.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/11.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/13.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/19.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/25.jpg",
        "https://assets.makisala.com/accommodations/ce95f4e6-232e-4965-8214-1ef7d30ecc59/20.jpg",
      ]),
        ],
      },
      luxury: {
        lodges: [
          lodge("Singita Mara River Tented Camp", [
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/20.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/19.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/1.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/15.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/5.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/12.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/23.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/4.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/7.jpg",
        "https://assets.makisala.com/accommodations/65fa4224-8b95-402c-8746-a28b08204bc0/9.jpg",
      ]),
          lodge("Lamai Serengeti", [
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/14.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/10.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/2.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/12.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/19.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/9.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/8.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/15.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/1.jpg",
        "https://assets.makisala.com/accommodations/0ffa52d3-b910-4b5d-9c92-9f0fa7da0722/6.jpg",
      ]),
          lodge("Serengeti Bushtops", [
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/4.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/19.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/9.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/25.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/17.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/18.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/15.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/7.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/13.jpg",
        "https://assets.makisala.com/accommodations/2959e459-73cb-4093-9dea-f10276e98e77/16.jpg",
      ]),
        ],
      },
    },
  },
  {
    id: "ndutu",
    name: "Ndutu",
    tiers: {
      comfort: {
        lodges: [
          lodge("Mbuni Migration Camp"),
          lodge("Untamed Migration Camp"),
          lodge("Olmorijo Migration Camp"),
        ],
      },
      premium: {
        lodges: [lodge("Lake Masek Tented Lodge", [
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/19.jpg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/11.jpg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/9.jpg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/4.jpg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/15.jpg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/21.jpeg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/18.jpg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/8.jpg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/20.jpg",
        "https://assets.makisala.com/accommodations/c5d26edc-1a22-4c88-bd1d-33dabfcc4a5e/25.jpg",
      ]), lodge("Lake Ndutu Luxury Tented Lodge", [
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/01-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/02-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/03-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/04-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/05-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/06-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/07-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/08-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/09-lake-ndutu-luxury-tented-lodge.jpg",
        "https://assets.makisala.com/accommodations/6f23f7a1-fd06-46aa-9238-d3cc0b9eb429/10-lake-ndutu-luxury-tented-lodge.jpg",
      ])],
      },
      luxury: {
        lodges: [lodge("Mwiba Lodge", [
        "https://assets.makisala.com/accommodations/d182972c-ad67-468a-b070-30dd549c2c6a/1767799336265-Mwiba%20Lodge%20-%20Accommodation%20-%20balcony%20and%20loungers.webp",
        "https://assets.makisala.com/accommodations/d182972c-ad67-468a-b070-30dd549c2c6a/1767799339857-Mwiba%20Lodge%20-%20Experiences%20-%20sundowner%20rock.webp",
        "https://assets.makisala.com/accommodations/d182972c-ad67-468a-b070-30dd549c2c6a/1767799319867-Mwiba%20Lodge%20-%20Main%20Area%20-%20pool%20area%20and%20loungers.webp",
        "https://assets.makisala.com/accommodations/d182972c-ad67-468a-b070-30dd549c2c6a/1767799332557-Mwiba%20Lodge%20-%20Main%20area%20-%20reading%20lounge.webp",
        "https://assets.makisala.com/accommodations/d182972c-ad67-468a-b070-30dd549c2c6a/1767799325865-Mwiba%20Lodge%20-%20Main%20area%20-%20firepit%20at%20sunset.webp",
        "https://assets.makisala.com/accommodations/98799277-3bee-444c-b287-2ee12bdb7418/13.jpg",
        "https://assets.makisala.com/accommodations/98799277-3bee-444c-b287-2ee12bdb7418/14.jpg",
        "https://assets.makisala.com/accommodations/98799277-3bee-444c-b287-2ee12bdb7418/8.jpg",
        "https://assets.makisala.com/accommodations/98799277-3bee-444c-b287-2ee12bdb7418/11.jpg",
        "https://assets.makisala.com/accommodations/d182972c-ad67-468a-b070-30dd549c2c6a/1767799353035-Mwiba%20Lodge%20-%20Main%20area%20-%20pool%20area%20at%20sunset.webp",
      ]), lodge("Sanctuary Kusini", [
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/01-kopjes-and-plains-hero.webp",
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/03-mess-tent-beneath-the-kopje.webp",
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/04-rock-top-bar-deck.webp",
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/05-guest-tent-under-whistling-thorn.webp",
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/06-guest-tent-in-woodland-at-dawn.webp",
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/07-guest-tent-interior-bed.webp",
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/08-guest-tent-bathroom.webp",
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/09-sundowners-on-the-kopje.webp",
        "https://assets.makisala.com/accommodations/81288d2e-e7bc-475b-890c-a4cafa063540/10-kopje-viewpoint-over-plains.webp",
      ])],
      },
    },
  },
];

const byId = new Map(regions.map((region) => [region.id, region]));

export interface StayOption {
  tier: Tier;
  lodge: Lodge;
}

/** The two levels quoted against a night, in the order they are shown. */
const SHOWN: TierId[] = ["comfort", "premium"];

/**
 * The two properties shown against a night, so a traveller sees the range a
 * region offers without leaving the day.
 *
 * Prefers a lodge we hold photography for, since these cards lead with a
 * picture; falls back to the region's first listing when none has any.
 */
export function stayOptions(region: Region): StayOption[] {
  return tiers
    .filter((tier) => SHOWN.includes(tier.id))
    .flatMap((tier) => {
      const { lodges } = region.tiers[tier.id];
      const lodge = lodges.find((entry) => entry.images.length > 0) ?? lodges[0];
      return lodge ? [{ tier, lodge }] : [];
    });
}

/** Longest pattern wins, so "North Serengeti" never matches as plain Serengeti. */
const MATCHERS: { pattern: RegExp; region: string }[] = [
  { pattern: /\bndutu\b/i, region: "ndutu" },
  { pattern: /\b(north(ern)?\s+serengeti|kogatende|lamai|mara\s+river)\b/i, region: "serengeti-north" },
  { pattern: /\bserengeti\b/i, region: "serengeti-central" },
  { pattern: /\bngorongoro\b/i, region: "ngorongoro" },
  { pattern: /\bkaratu\b/i, region: "karatu" },
  { pattern: /\btarangire\b/i, region: "tarangire" },
  { pattern: /\b(arusha|lake\s+duluti)\b/i, region: "arusha" },
];

/** The region a night in `place` belongs to, or null where we hold no list. */
export function regionFor(place: string): Region | null {
  for (const { pattern, region } of MATCHERS) {
    if (pattern.test(place)) return byId.get(region) ?? null;
  }
  return null;
}

/**
 * The regions an itinerary actually sleeps in, in the order it reaches them.
 *
 * Driven by each day's own "Overnight" line rather than a hand-kept list, so
 * the lodges shown can never drift from the itinerary printed above them.
 * Places the document has no lodges for — Zanzibar, West Kilimanjaro, the
 * mountain huts — simply drop out.
 */
export function stayRegions(overnights: (string | undefined)[]): Region[] {
  const seen = new Set<string>();
  const result: Region[] = [];
  for (const place of overnights) {
    if (!place) continue;
    const region = regionFor(place);
    if (!region || seen.has(region.id)) continue;
    seen.add(region.id);
    result.push(region);
  }
  return result;
}

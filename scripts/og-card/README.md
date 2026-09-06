# Social cards

Generates the share image for a writing post in the house format: brand bar,
headline with a lede beside it, three numbered columns, and a footer bar. Output
is 1500x1253 at roughly 140KB, matching the other cards in `public/`.

## Use

```sh
npm i -D playwright            # only this script needs it
node scripts/og-card/generate.mjs scripts/og-card/cards/making-sound-judgement.json
```

Then point the post at the file:

```ts
ogImage: "/making-sound-judgement.png",
```

## Writing a card

Copy an existing file in `cards/`. Every card needs `output`, `title`, `lede`
and exactly three `columns`, each with `title`, `subtitle`, `body` and `quote`.

Columns are drawn rather than photographed, so no image assets are needed.
Pick a `figure`:

| figure    | shows                                                    |
| --------- | -------------------------------------------------------- |
| `bars`    | bars against a target line, one picked out                 |
| `cycles`  | two matching cycles, the second echoing the first          |
| `cascade` | a signal falling through layers until it lands             |

`cycles` takes `figureOptions` with `left` and `right` labels. For anything
else, pass `svg` with raw SVG drawn in a 300x158 viewBox.

Keep bodies to about three lines each so the rules and quote boxes align
across the three columns.

## Notes

Fonts (Playfair Display, Inter) are fetched from Google Fonts at render time,
so the script needs network access. Colours are sampled from the original
Three Ingredients graphic and live in `PALETTE` at the top of `generate.mjs`.

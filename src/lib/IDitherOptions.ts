
export default interface DitherOptions
{
    greyscale_method: string;
    dither_method: string,
    threshold: number,
    chk_replace_colours: boolean,
    rep_black: number[],
    rep_white: number[],
    keep_image: boolean
  }
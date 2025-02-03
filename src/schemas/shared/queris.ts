export const headerQuery = `*[_type == 'header'][0] {
  logo,
  "links": links[]->{
    _id,
    text,
    link
  }
}`;

export const topMenuQuery = `*[_type == 'topMenu'][0] {
  "links": links[]->{
    _id,
    text,
    "dropdownLinks": dropdownLinks[]->{
      _id,
      text,
      link
    }
  }
}`;

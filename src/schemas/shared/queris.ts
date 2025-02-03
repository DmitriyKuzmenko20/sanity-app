export const headerQuery = `*[_type == 'header'][0] {
  logo,
  "links": links[]->{
    _id,
    text,
    link
  }
}`;

export default function getIllustrationPath(name: string, extension = 'png') {
  return `/illustrations/${name}.${extension}`;
}

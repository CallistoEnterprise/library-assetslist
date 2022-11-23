import { REMOTE_DOMAIN_URL, LOCAL_DOMAIN_PATH } from '../src/constants';
import { jsonCollections, sourceImages } from './testData';

describe('Source Images Suite', () => {
  const jsonImagePaths: string[] = [];
  for (const collection of jsonCollections) {
    for (const item of collection.assets) {
      if (item.image.trim() !== '') {
        jsonImagePaths.push(item.image);
      }
    }
  }

  const localizedJsonImagePaths = jsonImagePaths.map(path =>
    path.replace(REMOTE_DOMAIN_URL, LOCAL_DOMAIN_PATH)
  );
  //console.log('Localized jsons:', localizedJsonImagePaths);
  //console.log('SourceImages:', sourceImages);

  it('each has matching JSON entry', () => {
    for (let image of sourceImages) {
      const includes = localizedJsonImagePaths.includes(image);
      expect(includes && image).toBe(image);
    }
  });
});

import seeLikes from './addlike.js';

describe('likes count', () => {
  test('0', async () => {
    expect(1);
    try {
      await seeLikes(
        {
          id: '7289708e-b17a-477c-8a77-9ab575c4b4d8',
          item_id: 'Paris',
          addEventListener: () => false,
        },
        'This is a Text',
        { id: 'a85a8e6b-348b-4011-a1ec-1e78e9620782', item_id: 'Tokyo' },
      );
    } catch (e) {
      expect(e.message).toBe('this is not a function');
    }
  });

  test('1', async () => {
    expect(1);
    try {
      await seeLikes(
        {
          id: '7289708e-b17a-477c-8a77-9ab575c4b4d8',
          item_id: 'Paris',
          addEventListener: () => false,
        },
        'Foo bar',
        { id: 'a85a8e6b-348b-4011-a1ec-1e78e9620782', item_id: 'Tokyo' },
      );
    } catch (e) {
      expect(e.message).toBe('this is not a function');
    }
  });

  test('2', async () => {
    expect(1);
    try {
      await seeLikes(
        {
          id: 'a85a8e6b-348b-4011-a1ec-1e78e9620782',
          item_id: 'Skhirat',
          addEventListener: () => false,
        },
        'foo bar',
        { id: '03ea49f8-1d96-4cd0-b279-0684e3eec3a9', item_id: 'Roma' },
      );
    } catch (e) {
      expect(e.message).toBe('this is not a function');
    }
  });

  test('3', async () => {
    expect(1);
    try {
      await seeLikes(
        {
          id: '03ea49f8-1d96-4cd0-b279-0684e3eec3a9',
          item_id: 'Skhirat',
          addEventListener: () => false,
        },
        'foo bar',
        { id: 'a85a8e6b-348b-4011-a1ec-1e78e9620782', item_id: 'New York' },
      );
    } catch (e) {
      expect(e.message).toBe('this is not a function');
    }
  });

  test('4', async () => {
    expect(1);
    try {
      await seeLikes(
        {
          id: 'a85a8e6b-348b-4011-a1ec-1e78e9620782',
          item_id: 'Paris',
          addEventListener: () => true,
        },
        'This is a Text',
        { id: 'a85a8e6b-348b-4011-a1ec-1e78e9620782', item_id: 'Saint-Denis' },
      );
    } catch (e) {
      expect(e.message).toBe('this is not a function');
    }
  });
});

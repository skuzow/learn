export const propertySchema = {
  title(value) {
    if (value?.length >= 6) return true;
    return 'Title is required or too short';
  },

  price(value) {
    const onlyNumbers = /^[0-9]+$/;

    if (onlyNumbers.test(value)) return true;
    return 'Price can only be numbers';
  },

  rooms(value) {
    if (value) return true;
    return 'Select a quantity';
  },

  wc(value) {
    if (value) return true;
    return 'Select a quantity';
  },

  parking(value) {
    if (value) return true;
    return 'Select a quantity';
  },

  description(value) {
    if (value) return true;
    return 'Add a description';
  }
};

export const imageSchema = {
  image(value) {
    if (value) return true;
    return 'Image is required';
  }
};
